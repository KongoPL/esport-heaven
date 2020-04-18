import React from 'react';

import 'scss/layout/LiveTransmissions.scss';
import Api from 'Api';
import { ITransmission } from 'DataTypes';
import {Link} from "react-router-dom";

export default class Matchs extends React.Component<{}, { transmissions: ITransmission[] }>
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
		const transmissions = this.state.transmissions.map( ( v, i ) => <LiveTransmission data={v} key={i} /> );

		return (
			<div className="box live-transmissions">
				<header>Live transmissions</header>
				{transmissions}
				<div className="text-center">
					<Link to="/live-transmissions" className="btn">Show more</Link>
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
			<div className="title text-truncate"><Link to={`/transmission/${props.data.id}`}>{props.data.title}</Link></div>
			<div className="subtitle text-truncate">{props.data.author}</div>
			<div className="views">{props.data.views}</div>
		</div>
	);
}
