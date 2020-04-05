export interface INews
{
	id: number,
	isMain: boolean,
	imageUrl: string,
	title: string,
	content?: string,
	gameId: number | null,
	game: IGame | undefined,
	createDate: string
}


export interface IGame
{
	name: string,
	nameShort: string,
	icon: string,
}

export interface ITransmission
{
	id: number,
	title: string,
	author: string,
	iconUrl: string,
	views: string,
	channelId: string
}

export interface IUpcomingGame
{
	id: string,
	title: string,
	teamAId: number,
	teamBId: number,
	teamA: ITeam,
	teamB: ITeam,
	teamAScore: number,
	teamBScore: number,
	maps: {
		mapId: number,
		winnerTeam: number,
		data: IMap
	}[],
	transmissionChannelId: string
}

export interface ITeam
{
	name: string,
	iconUrl: string,
	imageUrl: string
}

export interface IComment
{
	avatarUrl: string,
	author: string,
	createdAt: string,
	content: string,
}

export interface IMap
{
	gameId: number,
	name: string
}
