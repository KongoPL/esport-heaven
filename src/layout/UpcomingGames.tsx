import React from 'react';

import 'scss/layout/UpcomingGames.scss';

export default class UpcomingGames extends React.Component
{
	render()
	{
		const fnatic = new Team( 'Fnatic', '/images/team-icons/fnatic.png' ),
			astralis = new Team( 'Astralis', '/images/team-icons/astralis.png' )

		return (
			<div className="box upcoming-games">
				<header>Upcoming games</header>
				{Array( 6 ).fill(
					<UpcomingGame teamLeft={fnatic} teamRight={astralis} />
				)}
				<div className="margin-top-10 text-center">
					<a href="#" className="btn">Load more</a>
				</div>
			</div>
		);
	}
}


function UpcomingGame( props: {teamLeft: Team, teamRight: Team} )
{
	return (
		<div className="upcoming-game">
			<div className="team">
				<img src={props.teamLeft.iconUrl} className="icon" />
				{props.teamLeft.name}
			</div>
			<div className="center text-center">vs.</div>
			<div className="team">
				{props.teamRight.name}
				<img src={props.teamRight.iconUrl} className="icon" />
			</div>
		</div>
	);
}


class Team
{
	constructor( public name: string, public iconUrl: string ) { }
}