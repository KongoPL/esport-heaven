import React from 'react';
import SubpageBox from 'components/SubpageBox';
import TwitchTransmission from "components/TwitchTransmission";
import 'scss/pages/game.scss';


export default class Game extends React.Component<{}, {}>
{
	render()
	{
		return <SubpageBox>
			<h2>ESL Fnatic vs. Astralis (BO 3)</h2>
			<section className="game-overview">
				<h3>Game's overview</h3>
				<GameOverview/>
			</section>
			<section className="transmission">
				<h3>Match transmission</h3>
				<TwitchTransmission channelName={"izakooo"}/>
			</section>
		</SubpageBox>;
	}
}


function GameOverview()
{
	return <div className="game-overview">
		<div className="teams-score">
			<TeamDescription name="Fnatic" image="/images/team-icons/fnatic-big.png" className="team-a" />
			<TeamDescription name="Astralis" image="/images/team-icons/astralis-big.png" className="team-b" />
			<div className="score">
				1 : 0
			</div>
		</div>
		<div className="maps">
			<div className="map left"><span className="text">Mirage</span></div>
			<div className="map right"><span className="text">Inferno</span></div>
			<div className="map"><span className="text">Cache</span></div>
		</div>
	</div>;
}

function TeamDescription(props: {name: string, image: string, className?: string})
{
	return <div className={`team-description ${props.className}`}>
		<div className="image">
			<img src={props.image} />
		</div>
		<div className="name">
			{props.name}
		</div>
	</div>;
}
