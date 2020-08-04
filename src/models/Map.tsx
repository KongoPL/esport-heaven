import {DatabaseDataObject, ERelationType, TRelations} from "relational-api-database";
import Game from "./Game";

export default class Map extends DatabaseDataObject<Map>
{
	public id: number = 0;
	public gameId: number = 0;
	public name: string = '';
	public iconUrl: string = '';

	public game: Game | null = null;


	static tableName(): string
	{
		return 'maps';
	}


	protected relations(): TRelations
	{
		return {
			game: {
				type: ERelationType.ONE_ONE,
				model: Game,
				relation: {gameId: 'id'}
			}
		};
	}
}
