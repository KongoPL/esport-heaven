import React from 'react';

import { INews } from "DataTypes";

import 'scss/components/NewsList.scss';

export default class NewsList extends React.Component<{ className?: string, data: INews[] }>
{
	render()
	{
		const className = 'news-list' + ( 'className' in this.props ? ' ' + this.props.className : '' );

		const newsList = this.props.data.map( ( news, i ) =>
		{
			if ( news.isMain )
				return <MainNews data={news} key={i} />;
			else
				return <DefaultNews data={news} key={i} />;
		} );

		return (
			<div className={className}>
				{newsList}
			</div>
		);
	}
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