import {DatabaseDataObject, ERelationType, TRelations} from "relational-api-database";
import Game from "./Game";

export default class Transmission extends DatabaseDataObject<Transmission>
{
	public id: number = 0;
	public gameId: number = 0;
	public title: string = '';
	public author: string = '';
	public channelId: string = '';
	public iconUrl: string = '';
	public previewUrl: string = '';
	public views: number = 0;

	public game: Game | null = null;

	static tableName(): string
	{
		return 'transmissions';
	}

	protected relations(): TRelations
	{
		return {
			game: {
				type: ERelationType.ONE_ONE,
				model: Game,
				relation: {gameId: 'id'},
				loading: 'lazy'
			}
		};
	}

	get viewsFormatted(): string | number
	{
		if(this.views < 1000)
			return this.views;
		else if(this.views < 1000000)
			return Math.floor(this.views / 1000) + 'k';
		else if(this.views < 1000000000)
			return Math.floor(this.views / 1000000) + 'M';
		else
			return Math.floor(this.views / 1000000000) + 'B';
	}
}
