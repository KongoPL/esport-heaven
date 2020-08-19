import EventEmitter from "./EventEmitter";

export default class Config
{
	private static config: TConfig = {
		gameId: null
	};

	private static events = {
		gameId: new EventEmitter<number | null>()
	};

	public static setGameId(value: number | null)
	{
		this.config.gameId = value;
		this.events.gameId.emit(value);
	}

	public static getGameId(callback: (v: number | null) => void)
	{
		callback(this.config.gameId);
		this.events.gameId.subscribe(callback);
	}
}


type TConfig = {
	gameId: number | null
};
