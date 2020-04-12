import React from 'react';
import SubpageBox from 'components/SubpageBox';
import Api from "../../Api";
import {IMajor, IMatch} from "../../DataTypes";

import 'scss/pages/upcoming-games.scss';
import {Link} from "react-router-dom";
import TeamLogo from "../../components/TeamLogo";

export default class UpcomingGames extends React.Component<any, {majors: IMajorInternal[]}>
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
		Api.getMatches().then((matches) =>
		{
			this.setState({
				majors: this.groupDataByMajor(matches)
			});
		});
	}

	render()
	{
		return <>
			<SubpageBox>
				<h2 className="no-margin">Upcoming Games</h2>
				{this.state.majors.map((major) => <Major key={major.id} {...major} />)}
			</SubpageBox>
		</>;
	}

	private groupDataByMajor(matches: IMatch[]): IMajorInternal[]
	{
		const majors: IMajorInternal[] = [];
		let major: IMajorInternal | null = null;

		for(let match of matches)
		{
			if(major === null || match.majorId != major.id)
			{
				if(major !== null)
					majors.push(major);

				major = {
					...match.major,

					matches: []
				};
			}

			major.matches.push(match);
		}

		if(major !== null)
			majors.push(major);

		return majors;
	}
}


function Major(major: IMajorInternal)
{
	return <>
		<h3>{major.name}</h3>
		<div className="matches">
			{major.matches.map((match) =>
				<Link to={`/game/${match.id}`}>
					<MajorMatch key={`${major.id}_${match.id}`} majorIconUrl={major.iconUrl} {...match} />
				</Link>
			)}
		</div>
	</>;
}


function MajorMatch(match: IMatch & {majorIconUrl: string})
{
	const mapsNames: string = match.maps.map((map) => map.data.name).join(', '),
		teamAScore = match.maps.filter((v) => v.winnerTeam === match.teamAId).length,
		teamBScore = match.maps.filter((v) => v.winnerTeam === match.teamBId).length;

	return <div className="major-match">
		<img src={match.maps[0].data.iconUrl} className="map-icon" />
		<img src={match.majorIconUrl} className="major-icon" />
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


interface IMajorInternal extends IMajor
{
	matches: IMatch[]
}
