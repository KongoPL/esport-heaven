import {DatabaseDataObject} from "relational-api-database";

export default class Transmission extends DatabaseDataObject<Transmission>
{
	public id: number = 0;
	public gameId: number = 0;
	public title: string = '';
	public author: string = '';
	public channelId: string = '';
	public iconUrl: string = '';
	public views: number = 0;

	static tableName(): string
	{
		return 'transmissions';
	}
}
