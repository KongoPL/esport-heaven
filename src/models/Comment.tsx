import {DatabaseDataObject} from "relational-api-database";

export default class Comment extends DatabaseDataObject<Comment>
{
	public id: number = 0;
	public newsId: number = 0;
	public author: string = '';
	public avatarUrl: string = '';
	public createdAtTimestamp: number = 0;
	public createdAt: string = '';
	public content: string = '';

	static tableName(): string
	{
		return 'comments';
	}
}
