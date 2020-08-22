import {DatabaseDataObject, ERelationType, TRelations} from "relational-api-database";
import GameMatch from "./GameMatch";

export default class Major extends DatabaseDataObject<Major>
{
	public id: number = 0;
	public gameId: number = 0;
	public name: string = '';
	public iconUrl: string = '';

	public matches: GameMatch[] = [];

	static tableName(): string
	{
		return 'majors';
	}

	protected relations(): TRelations
	{
		return {
			matches: {
				type: ERelationType.ONE_MANY,
				model: GameMatch,
				relation: {id: 'majorId'},
			}
		};
	}
}
