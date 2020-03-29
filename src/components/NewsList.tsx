import React from 'react';

import { INews } from "DataTypes";

import 'scss/components/NewsList.scss';
import {Link} from "react-router-dom";

export default class NewsList extends React.Component<{ className?: string, data: INews[] }>
{
	render()
	{
		const newsList = this.props.data.map( ( news, i ) => i == 0 ? <MainNews data={news} key={i}/> : <DefaultNews data={news} key={i} /> );
		const className = 'news-list' + ( 'className' in this.props ? ' ' + this.props.className : '' );

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
			<Link to={`/news/${props.data.id}`}>
				<div className="image">
					<img src={props.data.imageUrl} alt="" />
				</div>
				<div className="content">
					<header>{props.data.title}</header>
					<section className="text">
						{props.data.content}
					</section>
				</div>
			</Link>
		</div>
	);
}


function DefaultNews( props: { data: INews } )
{
	return (
		<div className="news">
			<Link to={`/news/${props.data.id}`}>
				<div className="image">
					<img src={props.data.imageUrl} alt="" />
				</div>
				<div className="content">
					<header>{props.data.title}</header>
				</div>
			</Link>
		</div>
	);
}
