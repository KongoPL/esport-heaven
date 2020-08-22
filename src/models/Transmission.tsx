import {DatabaseDataObject} from "relational-api-database";

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

	static tableName(): string
	{
		return 'transmissions';
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
