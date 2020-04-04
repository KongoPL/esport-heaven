export interface INews
{
	id: number,
	isMain: boolean,
	imageUrl: string,
	title: string,
	content?: string,
	gameId: number | null,
	game: IGame | undefined
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
	views: string
}

export interface IUpcomingGame
{
	id: number,
	teamA: ITeam,
	teamB: ITeam
}

export interface ITeam
{
	name: string,
	iconUrl: string
}

export interface IComment
{
	avatarUrl: string,
	author: string,
	createdAt: string,
	content: string,
}
