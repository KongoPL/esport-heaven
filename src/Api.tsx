import { INews, IGame, ITransmission, IUpcomingGame } from "DataTypes";

export default class Api
{
	static getNewsList(): Promise<INews[]>
	{
		return new Promise( ( resolve ) => resolve( Api.data.news ) );
	}


	static getGames(): Promise<IGame[]>
	{
		return new Promise( ( resolve ) => resolve( Api.data.games ) );
	}


	static getTransmissions(): Promise<ITransmission[]>
	{
		return new Promise( ( resolve ) => resolve( Api.data.liveTransmissions ) );
	}


	static getUpcomingGames(): Promise<IUpcomingGame[]>
	{
		return new Promise( ( resolve ) => resolve( Api.data.upcomingGames ) );
	}
}
