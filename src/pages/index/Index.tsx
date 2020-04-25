import React from 'react';

import { INews } from 'DataTypes';
import 'scss/pages/index.scss';
import Api from 'Api';
import NewsList from 'components/NewsList';

export default class Index extends React.Component<{}, IIndexState>
{
	constructor( props: any )
	{
		super( props );

		this.state = {
			newsListMain: [],
			newsListOther: [],
			loadedNewsCount: 10,
			displayLoadMoreButton: true
		};

		this.loadNews();
	}

	componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<IIndexState>, snapshot?: any): void
	{
		if(prevState.loadedNewsCount != this.state.loadedNewsCount)
			this.loadNews();
	}

	private loadNews()
	{
		Api.getNewsList(0, this.state.loadedNewsCount).then( ( newsList ) =>
		{
			if(!newsList)
				return;

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
	newsListMain: INews[],
	newsListOther: INews[],
	loadedNewsCount: number,
	displayLoadMoreButton: boolean
}
