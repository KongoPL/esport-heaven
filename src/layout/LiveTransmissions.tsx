import React from 'react';

import 'scss/layout/LiveTransmissions.scss';
import {Link} from "react-router-dom";
import Transmission from "../models/Transmission";

export default class Matchs extends React.Component<{}, { transmissions: Transmission[] }>
{
	constructor( props: any )
	{
		super( props );

		this.state = {
			transmissions: []
		};

		Transmission.find().then( ( transmissions ) => this.setState( { transmissions } ) );
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


function LiveTransmission( props: { data: Transmission } )
{
	return (
		<div className="live-transmission">
			<div className="icon"><img src={props.data.iconUrl} /></div>
			<div className="title text-truncate"><Link to={`/transmission/${props.data.id}`}>{props.data.title}</Link></div>
			<div className="subtitle text-truncate">{props.data.author}</div>
			<div className="views">{props.data.viewsFormatted}</div>
		</div>
	);
}
