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


	protected static data = {
		news: [
			{
				isMain: true,

				id: 1,
				imageUrl: '/images/news-images/astralis.png',
				title: 'ASTRALIS WINS ELEAGUE PREMIER 2018!',
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo et ipsum ornare lobortis at et orci. Mauris id ligula laoreet, ornare lacus tempor, mollis turpis. In et orci eget quam viverra feugiat. Sed non mi posuere, hendrerit orci nec, tempor turpis. Donec et faucibus eros, quis dictum lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dui justo, consectetur sit amet ipsum non, mollis euismod quam. Maecenas accumsan malesuada porta. Duis vitae orci auctor, pharetra lacus eu, laoreet ipsum. Phasellus eu nisl est. Suspendisse velit elit, finibus quis ex sit amet, vehicula convallis ligula. Ut ac nisl et mi scelerisque tincidunt.'
			}, {
				isMain: false,

				id: 2,
				imageUrl: '/images/news-images/fnatic.png',
				title: 'FNatic wins League of Legends cup 2019!'
			}, {
				isMain: false,

				id: 3,
				imageUrl: '/images/news-images/fnatic.png',
				title: 'FNatic wins League of Legends cup 2019!'
			}, {
				isMain: false,

				id: 4,
				imageUrl: '/images/news-images/fnatic.png',
				title: 'FNatic wins League of Legends cup 2019!'
			}, {
				isMain: false,

				id: 5,
				imageUrl: '/images/news-images/fnatic.png',
				title: 'FNatic wins League of Legends cup 2019!'
			},
		],

		games: [
			{
				name: 'CS:GO',
				nameShort: 'CS:GO',
				icon: '/images/game-icons/csgo.png'
			}, {
				name: 'League of Legends',
				nameShort: 'LoL',
				icon: '/images/game-icons/lol.png'
			}, {
				name: 'Dota 2',
				nameShort: 'Dota 2',
				icon: '/images/game-icons/dota2.png'
			}, {
				name: 'Fortnite',
				nameShort: 'Fortnite',
				icon: '/images/game-icons/fortnite.png'
			}, {
				name: 'PUBG',
				nameShort: 'PUBG',
				icon: '/images/game-icons/pubg.png'
			}
		],

		liveTransmissions: Array( 5 ).fill( {
			id: 1,
			title: 'TRIO CASH CUP, TOP 54 SOLO and some more text that I don\'t remember yet',
			author: 'ryux',
			iconUrl: '/images/transmission-icon.png',
			views: '445K'
		} ),

		upcomingGames: Array( 6 ).fill( {
			id: 1,
			teamA: {
				name: 'Fnatic',
				iconUrl: '/images/team-icons/fnatic.png'
			},
			teamB: {
				name: 'Astralis',
				iconUrl: '/images/team-icons/astralis.png'
			}
		})
	};
}
