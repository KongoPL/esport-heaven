import {DatabaseDataObject, ERelationType, TRelations} from "relational-api-database";
import Comment from "./Comment";
import Match from "./Match";

export default class Major extends DatabaseDataObject<Major>
{
	public id: number = 0;
	public name: string = '';
	public iconUrl: string = '';

	public matches: Match[] = [];

	static tableName(): string
	{
		return 'majors';
	}

	protected relations(): TRelations
	{
		return {
			matches: {
				type: ERelationType.ONE_MANY,
				model: Match,
				relation: {id: 'majorId'}
			}
		};
	}
}
