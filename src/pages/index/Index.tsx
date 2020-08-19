import React from 'react';

import 'scss/pages/index.scss';
import NewsList from 'components/NewsList';
import News from "../../models/News";
import Config from "../../Config";

export default class Index extends React.Component<{}, IIndexState>
{
	constructor( props: any )
	{
		super( props );

		this.state = {
			newsListMain: [],
			newsListOther: [],
			gameId: null,
			loadedNewsCount: 10,
			displayLoadMoreButton: true
		};

		this.loadNews();
	}

	componentDidMount(): void
	{
		Config.getGameId((gameId) => {
			this.setState({ gameId });
		});
	}

	componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<IIndexState>, snapshot?: any): void
	{
		if(prevState.loadedNewsCount != this.state.loadedNewsCount
			|| prevState.gameId != this.state.gameId)
			this.loadNews();
	}

	private loadNews()
	{
		let conditions: any = {};

		if(this.state.gameId !== null)
			conditions.gameId = this.state.gameId;

		News.findByAttributes(conditions).then( ( newsList ) =>
		{
			this.setState( {
				newsListMain: newsList.slice(0, 5),
				newsListOther: newsList.slice(5, this.state.loadedNewsCount),
				displayLoadMoreButton: (newsList.length === this.state.loadedNewsCount)
			} )
		} );
	}

	private loadMoreNews(count: number)
	{
		this.setState((state) => ({
			loadedNewsCount: state.loadedNewsCount + count
		}));
	}

	render()
	{
		return (
			<>
				<NewsList mainNewsDisplayType="wide" data={this.state.newsListMain} />

				<div className="google-ad-news">
					<img src="/images/ad.png" style={{ width: '100%' }} alt="" />
				</div>

				<div className="contest">
					<img src="/images/contest.png" style={{ width: '100%' }} alt="" />
				</div>

				<NewsList mainNewsDisplayType="side" data={this.state.newsListOther} />

				{this.state.displayLoadMoreButton && <div className="text-center">
					<a className="btn large" onClick={() => this.loadMoreNews(5)}>Load more</a>
				</div>}
			</>
		);
	}
}

interface IIndexState
{
	newsListMain: News[],
	newsListOther: News[],
	gameId: number | null,
	loadedNewsCount: number,
	displayLoadMoreButton: boolean
}
