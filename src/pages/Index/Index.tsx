import React from 'react';

import 'css/pages/index.css';

export default class Index extends React.Component
{
	render()
	{
		const newsList: INews[] = [
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
		];

		return (
			<>
				<NewsList className="main-wide" data={newsList} />

				<div className="google-ad-news">
					<img src="/images/ad.png" style={{ width: '100%' }} />
				</div>

				<div className="contest">
					<img src="/images/contest.png" style={{ width: '100%' }} />
				</div>

				<NewsList className="main-side" data={newsList} />

				<div className="text-center">
					<a className="btn large">Load more</a>
				</div>
			</>
		);
	}
}


function NewsList( props: { className?: string, data: INews[] } )
{
	const className = 'news-list' + ( 'className' in props ? ' ' + props.className : '' );

	const newsList = props.data.map( ( news, i ) =>
	{
		if ( news.isMain )
			return <MainNews data={news} />;
		else
			return <DefaultNews data={news} />;
	} );

	return (
		<div className={className}>
			{newsList}
		</div>
	);
}


function MainNews( props: { data: INews } )
{
	return (
		<div className="news main">
			<div className="image">
				<img src={props.data.imageUrl} />
			</div>
			<div className="content">
				<header>{props.data.title}</header>
				<section className="text">
					{props.data.content}
				</section>
			</div>
		</div>
	);
}


function DefaultNews( props: { data: INews } )
{
	return (
		<div className="news">
			<div className="image">
				<img src={props.data.imageUrl} />
			</div>
			<div className="content">
				<header>{props.data.title}</header>
			</div>
		</div>
	);
}


interface INews
{
	isMain: boolean,
	imageUrl: string,
	title: string,
	content?: string,
}