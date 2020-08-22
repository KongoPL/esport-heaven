import {DatabaseDataObject, ERelationType, TRelations} from "relational-api-database";
import Comment from "./Comment";
import Game from "./Game";

export default class News extends DatabaseDataObject<News>
{
	public id: number = 0;
	public gameId: number | null = null;
	public imageUrl: string = '';
	public title: string = '';
	public content: string = '';
	public createDate: string = '';

	public game: Game | null = null;
	public comments: Comment[] = [];

	static tableName(): string
	{
		return 'news';
	}

	protected relations(): TRelations
	{
		return {
			comments: {
				type: ERelationType.ONE_MANY,
				model: Comment,
				relation: {id: 'newsId'}
			},
			game: {
				type: ERelationType.ONE_ONE,
				model: Game,
				relation: {gameId: 'id'}
			}
		};
	}
}
