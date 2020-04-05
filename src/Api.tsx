import {INews, IGame, ITransmission, IUpcomingGame, ITeam} from "DataTypes";
import firebase from "firebase";

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

	static getNewsList(): Promise<INews[]>
	{
		return Api.retrieveData('news');
	}

	static getNewsById(newsId: string | number): Promise<INews>
	{
		return Api.retrieveData(`news/${newsId}`).then(async (data) => {
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


	static getUpcomingGames(): Promise<IUpcomingGame[]>
	{
		return Api.retrieveData('matches')
			.then(async (data) =>
			{
				await this.retrieveRelationMultiple(data,['teamAId', 'teamBId'], ['teamA', 'teamB'], 'teams/$1');

				return data;
			});
	}


	static getMatchById(id: string | number): Promise<IUpcomingGame>
	{
		return Api.retrieveData(`matches/${id}`)
			.then(async (data) =>
			{
				await this.retrieveRelation(data,['teamAId', 'teamBId'], ['teamA', 'teamB'], 'teams/$1');

				for(let map of data.maps)
					await this.retrieveRelation(map, 'mapId', 'data', 'maps/$1');

				return data;
			});
	}


	private static async retrieveData(path: string): Promise<any>
	{
		return Api.db.ref(path).once('value').then((snapshot) => this.processData(snapshot));
	}

	private static processData(snapshot: firebase.database.DataSnapshot)
	{
		const value = snapshot.val();

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
