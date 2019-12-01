import React from 'react';

import 'scss/layout/LiveTransmissions.scss';
import Api from 'Api';
import { ITransmission } from 'DataTypes';

export default class UpcomingGames extends React.Component<{}, { transmissions: ITransmission[] }>
{
	constructor( props: any )
	{
		super( props );

		this.state = {
			transmissions: []
		};

		Api.getTransmissions().then( ( transmissions ) => this.setState( { transmissions } ) );
	}


	render()
	{
		const transmissions = this.state.transmissions.map( ( v ) => <LiveTransmission data={v} /> );

		return (
			<div className="box live-transmissions">
				<header>Live transmissions</header>
				{transmissions}
				<div className="text-center">
					<a href="#" className="btn">Load more</a>
				</div>
			</div>
		);
	}
}


function LiveTransmission( props: { data: ITransmission } )
{
	return (
		<div className="live-transmission">
			<div className="icon"><img src={props.data.iconUrl} /></div>
			<div className="title text-truncate"><a href="#">{props.data.title}</a></div>
			<div className="subtitle text-truncate">{props.data.author}</div>
			<div className="views">{props.data.views}</div>
		</div>
	);
}