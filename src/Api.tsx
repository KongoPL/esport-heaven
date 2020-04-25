import {INews, IGame, ITransmission, IMatch, ITeam} from "DataTypes";
import firebase from "firebase";

declare var querybase: any;

export default class Api
{
	private static db: firebase.database.Database;

	static init()
	{
		firebase.initializeApp({
			apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
			authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
			databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
		});

		Api.db = firebase.database();
	}

	static getNewsList(gameId: number, limit?: [number, number] | number): Promise<INews[]>
	{
		let condition: any;

		if(typeof gameId !== "undefined")
			condition = ['gameId', gameId];

		return Api.retrieveData('news', condition, 'createDate', limit);
	}

	static getNewsById(newsId: string | number): Promise<INews>
	{
		return Api.retrieveData(`news/${newsId}`).then(async (data) =>
		{
			await this.retrieveRelation(data, 'gameId', 'game', 'games/$1');

			return data;
		});
	}


	static getGames(): Promise<IGame[]>
	{
		return Api.retrieveData('games');
	}


	static getTransmissions(): Promise<ITransmission[]>
	{
		return Api.retrieveData('transmissions');
	}


	static getTransmissionById(id: string | number): Promise<ITransmission>
	{
		return Api.retrieveData(`transmissions/${id}`);
	}


	static getMatches(): Promise<IMatch[]>
	{
		return Api.retrieveData('matches')
			.then(async (data) =>
			{
				await this.retrieveRelationMultiple(data, ['teamAId', 'teamBId'], ['teamA', 'teamB'], 'teams/$1');
				await this.retrieveRelationMultiple(data, 'majorId', 'major', 'majors/$1');

				for (let row of data)
					await this.retrieveRelationMultiple(row.maps, 'mapId', 'data', 'maps/$1');

				return data;
			});
	}


	static getMatchById(id: string | number): Promise<IMatch>
	{
		return Api.retrieveData(`matches/${id}`)
			.then(async (data) =>
			{
				await this.retrieveRelation(data, ['teamAId', 'teamBId'], ['teamA', 'teamB'], 'teams/$1');
				await this.retrieveRelation(data, 'majorId', 'major', 'majors/$1');

				for (let map of data.maps)
					await this.retrieveRelation(map, 'mapId', 'data', 'maps/$1');

				return data;
			});
	}


	private static async retrieveData(
		path: string,
		condition?: [string, number | string | boolean | null | any[], ('equalTo' | 'startAt' | 'endAt' | 'between')? ],
		orderBy?: string,
		limit?: [number, number?] | number
	): Promise<any>
	{
		const query = this.buildQuery(path, condition, orderBy, limit);

		return Api.retrieveDataByQuery(query);
	}

	/**
	 * Builds query for Firebase API
	 * @param path			Reference path
	 * @param condition		Conditions by which we filter data. Key is column name, value is filtered value.
	 * @param orderBy		Column by which we sort data. Path (column or column/subcolumn)
	 * @param limit			Records limit. Can be pair of numbers [from, to] or count of records.
	 */
	private static buildQuery(
		path: string,
		condition?: [string, any, ('equalTo' | 'startAt' | 'endAt' | 'between')? ],
		orderBy?: string,
		limit?: [number, number?] | number
	): firebase.database.Query
	{
		let query: firebase.database.Query = Api.db.ref(path);

		if(Array.isArray(condition))
		{
			const operator = 2 in condition ? condition[2] : 'equalTo';

			switch(operator)
			{
				case 'equalTo':
					// console.log(condition[1], condition[0]);

					query = querybase.ref(query, []).where({[condition[0]]: condition[1]});

					query = query.equalTo("2019-09-16 08:47:53", "0");
					query = query.equalTo(condition[1], condition[0]);
					break;

				case 'startAt':
					query = query.startAt(condition[1], condition[0]);
					break;

				case 'endAt':
					query = query.endAt(condition[1], condition[0]);
					break;

				case 'between':
					query = query.startAt(condition[1][0], condition[0]);
					query = query.endAt(condition[1][1], condition[0]);
					break;
			}
		}

		if(typeof orderBy === "string")
			query = query.orderByChild(orderBy);
		else
			query = query.orderByPriority();


		if(typeof limit === "number" || Array.isArray(limit))
		{
			if(typeof limit === "number")
				query = query.limitToFirst(limit);
			else
			{
				query = query.startAt(limit[0] + "");

				if(typeof limit[1] === "number")
					query = query.endAt(limit[1] + "");
			}
		}


		return query;
	}

	private static async retrieveDataByQuery(query: firebase.database.Query)
	{
		return query.once('value').then((snapshot) => this.processData(snapshot));
	}

	private static processData(snapshot: firebase.database.DataSnapshot)
	{
		const value = snapshot.val();

		console.log(snapshot, value);

		if(value === null)
			return null;

		if(typeof value === 'object' && !Array.isArray(value))
		{
			value.id = snapshot.key;
		}
		else if(Array.isArray(value))
		{
			for(let key in value)
			{
				if(typeof value[key] !== 'object')
					continue;

				value[key].id = key;
			}
		}

		return value;
	}


	private static retrieveRelation(data: any[] | any, dataKey: string | string[], valueKey: string | string[], retrievePath: string)
	{
		if(!Array.isArray(data))
		{
			data = [data];
		}

		return Api.retrieveRelationMultiple(data, dataKey, valueKey, retrievePath);
	}


	private static async retrieveRelationMultiple(data: any[], dataKeys: string | string[], valueKeys: string | string[], retrievePath: string)
	{
		if(typeof dataKeys == 'string')
			dataKeys = [dataKeys];

		if(typeof valueKeys == 'string')
			valueKeys = [valueKeys];

		const itemsToGet: any[] = [];

		for(let row of data)
			for(let key of dataKeys)
				if(row[key] != null && itemsToGet.indexOf(row[key]) === -1)
					itemsToGet.push(row[key]);

		if(itemsToGet.length == 0)
			return;

		const getRetrievePath = (id: string) => retrievePath.replace(/\$1/g, id);
		const itemsPromises = itemsToGet.map((id) => Api.retrieveData(getRetrievePath(id)));
		const itemsData = await Promise.all(itemsPromises),
			items: {[key:string]: any} = {};

		for(let key in itemsToGet)
			items[itemsToGet[key]] = itemsData[key];

		for(let row of data)
			for(let key in valueKeys)
				row[valueKeys[key]] = items[row[dataKeys[key]]];
	}
}
