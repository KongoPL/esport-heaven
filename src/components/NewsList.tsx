import React from 'react';

import { INews } from "DataTypes";

import 'scss/components/NewsList.scss';
import {Link} from "react-router-dom";

export default class NewsList extends React.Component<{ displayMainNews?: boolean, mainNewsDisplayType?: string, data: INews[] }>
{
	render()
	{
		const allowMainNews = 'displayMainNews' in this.props == false || this.props.displayMainNews === true;

		const newsList = this.props.data.map( ( news, i ) => allowMainNews && i == 0 ? <MainNews data={news} key={i}/> : <DefaultNews data={news} key={i} /> );
		const className = 'news-list ' + ( allowMainNews ? `main-${this.props.mainNewsDisplayType}` : 'no-main' );

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
