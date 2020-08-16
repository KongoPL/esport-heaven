import {DatabaseDataObject, ERelationType, TRelations} from "relational-api-database";
import Map from "./Map";

export default class MatchMap extends DatabaseDataObject<MatchMap>
{
	public matchId: number = 0;
	public mapId: number = 0;
	public winnerTeam: number = 0;

	public data: Map = new Map();

	static tableName(): string
	{
		return 'matchesMaps';
	}

	protected relations(): TRelations
	{
		return {
			data: {
				type: ERelationType.ONE_ONE,
				model: Map,
				relation: {mapId: 'id'},
				loading: 'eager'
			}
		};
	}
}
