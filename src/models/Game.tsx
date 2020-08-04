import {DatabaseDataObject} from "relational-api-database";

export default class Game extends DatabaseDataObject<Game>
{
	public id: number = 0;
	public name: string = '';
	public nameShort: string = '';
	public icon: string = '';

	static tableName(): string
	{
		return 'games';
	}
}
