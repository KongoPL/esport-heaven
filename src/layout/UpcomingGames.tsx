import React from 'react';

import 'scss/layout/UpcomingGames.scss';
import { IUpcomingGame } from 'DataTypes';
import Api from 'Api';
import {Link} from "react-router-dom";

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
				{this.state.games.map( ( v, i ) => <UpcomingGame game={v} key={i} />)}
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
		<Link to={`/game/${props.game.id}`}>
			<div className="upcoming-game">
				<div className="team">
					<img src={props.game.teamA.iconUrl} className="icon" alt={props.game.teamA.name} />
					{props.game.teamA.name}
				</div>
				<div className="center text-center">vs.</div>
				<div className="team">
					{props.game.teamB.name}
					<img src={props.game.teamB.iconUrl} className="icon" alt={props.game.teamB.name} />
				</div>
			</div>
		</Link>
	);
}
