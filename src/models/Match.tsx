import {DatabaseDataObject, ERelationType, TRelations} from "relational-api-database";
import Team from "./Team";
import Major from "./Major";
import MatchMap from "./MatchMap";

export default class Match extends DatabaseDataObject<Match>
{
	public id: number = 0;
	public title: string = '';
	public teamAId: number = 0;
	public teamBId: number = 0;
	public teamAScore: number = 0;
	public teamBScore: number = 0;
	public majorId: number = 0;
	public transmissionChannelId: string = '';

	public teamA: Team | null = null;
	public teamB: Team | null = null;
	public major: Major | null = null;
	public maps: MatchMap[] = [];

	static tableName(): string
	{
		return 'matches';
	}

	protected relations(): TRelations
	{
		return {
			teamA: {
				type: ERelationType.ONE_ONE,
				model: Team,
				relation: {teamAId: 'id'}
			},
			teamB: {
				type: ERelationType.ONE_ONE,
				model: Team,
				relation: {teamBId: 'id'}
			},
			major: {
				type: ERelationType.ONE_ONE,
				model: Major,
				relation: {majorId: 'id'}
			},
			maps: {
				type: ERelationType.ONE_MANY,
				model: MatchMap,
				relation: {id: 'matchId'}
			},
		};
	}
}
