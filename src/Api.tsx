import { INews } from "DataTypes";

export default class Api
{
	static getNewsList(): Promise<INews[]>
	{
		return new Promise( ( resolve ) => resolve( Api.data.news ) );
	}

	protected static data = {
		news: [
			{
				isMain: true,

				imageUrl: '/images/news-images/astralis.png',
				title: 'ASTRALIS WINS ELEAGUE PREMIER 2018!',
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo et ipsum ornare lobortis at et orci. Mauris id ligula laoreet, ornare lacus tempor, mollis turpis. In et orci eget quam viverra feugiat. Sed non mi posuere, hendrerit orci nec, tempor turpis. Donec et faucibus eros, quis dictum lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dui justo, consectetur sit amet ipsum non, mollis euismod quam. Maecenas accumsan malesuada porta. Duis vitae orci auctor, pharetra lacus eu, laoreet ipsum. Phasellus eu nisl est. Suspendisse velit elit, finibus quis ex sit amet, vehicula convallis ligula. Ut ac nisl et mi scelerisque tincidunt.'
			}, {
				isMain: false,

				imageUrl: '/images/news-images/fnatic.png',
				title: 'FNatic wins League of Legends cup 2019!'
			}, {
				isMain: false,

				imageUrl: '/images/news-images/fnatic.png',
				title: 'FNatic wins League of Legends cup 2019!'
			}, {
				isMain: false,

				imageUrl: '/images/news-images/fnatic.png',
				title: 'FNatic wins League of Legends cup 2019!'
			}, {
				isMain: false,

				imageUrl: '/images/news-images/fnatic.png',
				title: 'FNatic wins League of Legends cup 2019!'
			},
		]
	};
}