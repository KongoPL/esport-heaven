import React from 'react';

import { INews } from 'DataTypes';
import 'css/pages/index.css';
import Api from 'Api';


export default class Index extends React.Component<{}, { newsList: INews[] }>
{
	constructor( props: any )
	{
		super( props );

		this.state = {
			newsList: []
		}

		Api.getNewsList().then( ( newsList ) => this.setState( { newsList } ) );
	}

	render()
	{
		return (
			<>
				<NewsList className="main-wide" data={this.state.newsList} />

				<div className="google-ad-news">
					<img src="/images/ad.png" style={{ width: '100%' }} />
				</div>

				<div className="contest">
					<img src="/images/contest.png" style={{ width: '100%' }} />
				</div>

				<NewsList className="main-side" data={this.state.newsList} />

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