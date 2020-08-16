import React from 'react';
import NewsList from 'components/NewsList';
import SubpageBox from 'components/SubpageBox';
import Moment from 'moment';
import NewsModel from 'models/News';
import CommentModel from "models/Comment";


import 'scss/pages/news.scss';

export default class News extends React.Component<{id: string}, { newsList: NewsModel[], news: NewsModel | null }>
{
	constructor( props: any )
	{
		super( props );

		this.state = {
			newsList: [],
			news: null
		};

		NewsModel.find({
			conditions: {
				gameId: 1
			},
			limit: [1, 4]
		}).then( ( newsList ) => this.setState( { newsList } ) );

		NewsModel.findOne({
			conditions: {id: this.props.id},
			with: 'game'
		})
			.then((news: NewsModel) => this.setState({news}));
	}


	componentDidUpdate(prevProps: Readonly<{ id: string }>, prevState: Readonly<{ newsList: NewsModel[]; news: NewsModel | null }>, snapshot?: any): void
	{
		if(prevProps.id != this.props.id)
			NewsModel.findOne({
				conditions: {id: this.props.id},
				with: 'game'
			})
				.then((news: NewsModel) => this.setState({news}));
	}


	render()
	{
		return <>
			<SubpageBox>
				{this.state.news &&
					<>
						<header className="news-title">
							<h2>{this.state.news.title}</h2>
							<sub>
								Written {Moment(this.state.news.createDate).format('Do MMMM YYYY, \\at HH:mm')}
								{this.state.news.game && ` | Game: ${this.state.news.game.name}`}
							</sub>
						</header>
						<section className="news-content">
							<div className="full-width news-image">
								<img src={this.state.news.imageUrl} alt={this.state.news.imageUrl} />
							</div>
							{this.state.news.content}
						</section>
					</>
				}
			</SubpageBox>
			<h3>You may be interested in with those news:</h3>
			<NewsList displayMainNews={false} data={this.state.newsList} />
			{/*<section id="comments">*/}
			{/*	<h3>Comments (12):</h3>*/}
			{/*	<SubpageBox>*/}
			{/*		<Comment {...comment} />*/}
			{/*	</SubpageBox>*/}
			{/*</section>*/}
		</>;
	}
}



function Comment(props: CommentModel)
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
