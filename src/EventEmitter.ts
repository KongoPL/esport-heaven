export default class EventEmitter<T>
{
	private subscribers: ((v: T) => void)[] = [];

	public subscribe(callback: (v: T) => void)
	{
		this.subscribers.push(callback);
	}

	public unsubscribe(callback: (v: T) => void)
	{
		const index = this.subscribers.indexOf(callback);

		if(index > -1)
			this.subscribers.splice(index, 1);
	}

	public emit(v: T)
	{
		for(let callback of this.subscribers)
			callback(v);
	}
}
