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


	static getGames(): Promise<IGame[]>
	{
		return Api.retrieveData('games');
	}


	static getTransmissions(): Promise<ITransmission[]>
	{
		return Api.retrieveData('transmissions');
	}


	static getUpcomingGames(): Promise<IUpcomingGame[]>
	{
		return new Promise<IUpcomingGame[]>(async (resolve, reject) => {
			// @todo fetch code below as a reusable method
			const matches = await Api.retrieveData('matches');
			const teamsToGet: number[] = [];

			for(let match of matches)
			{
				if(teamsToGet.indexOf(match.teamAId) === -1)
					teamsToGet.push(match.teamAId);

				if(teamsToGet.indexOf(match.teamBId) === -1)
					teamsToGet.push(match.teamBId);
			}

			const teamPromises = teamsToGet.map((teamId) => Api.retrieveData(`teams/${teamId}`));
			const teamsData = await Promise.all(teamPromises);
			const teams: {[key:string]: ITeam} = {};

			for(let key in teamsToGet)
				teams[teamsToGet[key]] = teamsData[key];

			for(let match of matches)
			{
				match.teamA = teams[match.teamAId];
				match.teamB = teams[match.teamBId];
			}

			resolve(matches);
		});
	}


	private static async retrieveData(path: string): Promise<any>
	{
		return Api.db.ref(path).once('value').then((snapshot) => {
			const value = snapshot.val();

			console.log(value);

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
		});
	}
}
