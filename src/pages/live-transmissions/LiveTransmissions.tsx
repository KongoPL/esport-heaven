import React from 'react';
import SubpageBox from 'components/SubpageBox';

import 'scss/pages/live-transmissions.scss';
import {Link} from "react-router-dom";
import Config from "../../Config";
import Transmission from "../../models/Transmission";

export default class LiveTransmissions extends React.Component<any, {transmissions: Transmission[], gameId: number | null}>
{
	constructor( props: any )
	{
		super( props );

		this.state = {
			transmissions: [],
			gameId: null
		};
	}

	componentDidMount(): void
	{
		Config.getGameId((gameId: number | null) => this.setState({ gameId }));
	}

	componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<{ transmissions: Transmission[], gameId: number | null }>, snapshot?: any): void
	{
		if(prevState.gameId != this.state.gameId || this.state.transmissions.length === 0)
			this.fetchTransmissions();
	}


	protected fetchTransmissions()
	{
		let conditions: any = {};

		if(this.state.gameId !== null)
			conditions.gameId = this.state.gameId;

		Transmission.find({
			conditions: conditions,
			with: 'game'
		}).then(async (transmissions: Transmission[]) =>
		{
			transmissions[1] = transmissions[0];
			transmissions[2] = transmissions[0];
			transmissions[3] = transmissions[0];
			transmissions[4] = transmissions[0];
			transmissions[5] = transmissions[0];
			transmissions[6] = transmissions[0];

			this.setState({ transmissions });
		});
	}

	render()
	{
		return <>
			<SubpageBox>
				<h2 className="no-margin">Live Transmissions</h2>
				<div className="transmission-list">
				{this.state.transmissions.length > 0 ?
					this.state.transmissions.map((transmission) => <TransmissionBox key={transmission.id} transmission={transmission} />)
					: <p>There are currently no live transmissions!</p>}
				</div>
			</SubpageBox>
		</>;
	}
}


function TransmissionBox({transmission}: {transmission: Transmission})
{
	return <div className="transmission-box">
		<Link to={`/transmission/${transmission.id}`}>
			<img src={transmission.previewUrl} alt={transmission.title} />
			<header className="font-bold text-truncate">{transmission.title}</header>
			<div className="sub">
				<span className="game">Game: {transmission.game && transmission.game.nameShort}</span>
				<span className="float-right">Views: {transmission.viewsFormatted}</span>
			</div>
		</Link>
	</div>;
}
