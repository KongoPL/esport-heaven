import {DatabaseDataObject} from "relational-api-database";

export default class Team extends DatabaseDataObject<Team>
{
	public id: number = 0;
	public name: string = '';
	public iconUrl: string = '';
	public imageUrl: string = '';

	static tableName(): string
	{
		return 'teams';
	}
}
