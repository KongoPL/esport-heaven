import React from 'react';
import {IComment, INews} from 'DataTypes';
import Api from 'Api';
import NewsList from 'components/NewsList';
import SubpageBox from 'components/SubpageBox';

import 'scss/pages/news.scss';

export default class News extends React.Component<{id: string}, { newsList: INews[], news: INews }>
{
	constructor( props: any )
	{
		super( props );

		this.state = {
			newsList: [],
			news: {}
		};


		Api.getNewsList().then( ( newsList ) => this.setState( { newsList } ) );
		Api.getNewsById(this.props.id).then((news: INews) => this.setState({news}));
	}


	render()
	{
		return <>
			<SubpageBox>
				<header className="news-title">
					<h2>{this.state.news.title}</h2>
					<sub>Written 16th September 2019, at 08:47 by Jakub Poliszuk | Game: Counter-Strike: Global Offensive</sub>
				</header>
				<section className="news-content">
					<div className="full-width news-image">
						<img src={this.state.news.imageUrl} alt={this.state.news.imageUrl} />
					</div>
					{this.state.news.content}
				</section>
			</SubpageBox>
			<h3>You may be interested in with those news:</h3>
			<NewsList className="no-main" data={this.state.newsList} />
			{/*<section id="comments">*/}
			{/*	<h3>Comments (12):</h3>*/}
			{/*	<SubpageBox>*/}
			{/*		<Comment {...comment} />*/}
			{/*	</SubpageBox>*/}
			{/*</section>*/}
		</>;
	}
}



function Comment(props: IComment)
{
	return <div className="comment">
		<div className="avatar">
			<img src={props.avatarUrl} alt="avatar" />
		</div>
		<div className="author">
			<header>{props.author}</header>
			<sub>Written {props.createdAt}</sub>
		</div>
		<div className="content">
			{props.content}
		</div>
	</div>;
}
