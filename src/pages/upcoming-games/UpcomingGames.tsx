import React from 'react';
import SubpageBox from 'components/SubpageBox';

import 'scss/pages/upcoming-games.scss';
import {Link} from "react-router-dom";
import TeamLogo from "../../components/TeamLogo";
import GameMatch from "../../models/GameMatch";
import MajorModel from "../../models/Major";

export default class UpcomingGames extends React.Component<any, {majors: MajorModel[]}>
{
	constructor( props: any )
	{
		super( props );

		this.state = {
			majors: []
		};
	}

	componentDidMount(): void
	{
		MajorModel.find().then((majors) =>
		{
			this.setState({ majors });
		});
	}

	render()
	{
		return <>
			<SubpageBox>
				<h2 className="no-margin">Upcoming Games</h2>
				{this.state.majors.map((major) => <Major key={major.id} major={major} />)}
			</SubpageBox>
		</>;
	}
}


function Major({major}: {major: MajorModel})
{
	return <>
		<h3>{major.name}</h3>
		<div className="matches">
			{major.matches.map((match) =>
				<Link to={`/game/${match.id}`}>
					<MajorMatch key={`${major.id}_${match.id}`} majorIconUrl={major.iconUrl} match={match} />
				</Link>
			)}
		</div>
	</>;
}


function MajorMatch(props: {majorIconUrl: string, match: GameMatch})
{
	const match = props.match;

	const mapsNames: string = match.maps.map((map) => map.data.name).join(', '),
		teamAScore = match.maps.filter((v) => v.winnerTeam === match.teamAId).length,
		teamBScore = match.maps.filter((v) => v.winnerTeam === match.teamBId).length;

	return <div className="major-match">
		<img src={match.maps[0].data.iconUrl} className="map-icon" />
		<img src={props.majorIconUrl} className="major-icon" />
		<div className="content">
			<div className="title">
				<header>{match.teamA.name} vs. {match.teamB.name}</header>
				<sub>{mapsNames}</sub>
			</div>
			<div className="team-a">
				<TeamLogo src={match.teamA.imageUrl} />
				<div className="score">{teamAScore}</div>
			</div>
			<div className="team-b">
				<TeamLogo src={match.teamB.imageUrl} />
				<div className="score">{teamBScore}</div>
			</div>
		</div>
	</div>;
}
