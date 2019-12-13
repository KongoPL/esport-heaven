import React from 'react';

import { INews } from 'DataTypes';
import 'css/pages/index.css';
import Api from 'Api';
import NewsList from 'components/NewsList';


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