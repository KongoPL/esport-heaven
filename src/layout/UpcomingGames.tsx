import React from 'react';

import 'scss/layout/UpcomingGames.scss';
import { IUpcomingGame } from 'DataTypes';
import Api from 'Api';

export default class UpcomingGames extends React.Component<{}, { games: IUpcomingGame[] }>
{
	constructor( props: any )
	{
		super( props );

		this.state = {
			games: []
		};

		Api.getUpcomingGames().then( ( games ) => this.setState( { games } ) );
	}

	render()
	{
		return (
			<div className="box upcoming-games">
				<header>Upcoming games</header>
				{this.state.games.map( ( v ) => <UpcomingGame game={v} />)}
				<div className="margin-top-10 text-center">
					<a href="#" className="btn">Load more</a>
				</div>
			</div>
		);
	}
}


function UpcomingGame( props: { game: IUpcomingGame } )
{
	return (
		<div className="upcoming-game">
			<div className="team">
				<img src={props.game.teamA.iconUrl} className="icon" />
				{props.game.teamA.name}
			</div>
			<div className="center text-center">vs.</div>
			<div className="team">
				{props.game.teamB.name}
				<img src={props.game.teamB.iconUrl} className="icon" />
			</div>
		</div>
	);
}