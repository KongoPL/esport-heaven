export interface INews
{
	isMain: boolean,
	imageUrl: string,
	title: string,
	content?: string,
}


export interface IGame
{
	name: string,
	nameShort: string,
	icon: string,
}

export interface ITransmission
{
	title: string,
	author: string,
	iconUrl: string,
	views: string
}