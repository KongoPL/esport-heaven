import React from 'react';

import 'scss/layout/LiveTransmissions.scss';

export default class UpcomingGames extends React.Component
{
	render()
	{
		return (
			<div className="box live-transmissions">
				<header>Live transmissions</header>
				{Array( 5 ).fill(
					<LiveTransmission data={{
						iconUrl: '/images/transmission-icon.png',
						title: 'TRIO CASH CUP, TOP 54 SOLO and some more text that I don\'t remember yet',
						author: 'ryux',
						views: '445K'
					}} />
				)}
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


interface ITransmission
{
	iconUrl: string,
	title: string,
	author: string,
	views: string
}