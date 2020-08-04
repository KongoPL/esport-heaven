import {DatabaseDataObject} from "relational-api-database";

export default class MatchMap extends DatabaseDataObject<MatchMap>
{
	public matchId: number = 0;
	public mapId: number = 0;
	public winnerTeam: number = 0;

	static tableName(): string
	{
		return 'matchesMaps';
	}
}
