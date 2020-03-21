import React from 'react';
import SubpageBox from 'components/SubpageBox';

import 'scss/pages/news.scss';
import TwitchTransmission from "../../components/TwitchTransmission";

export default class Transmission extends React.Component<{}, {}>
{
	render()
	{
		return <SubpageBox>
				<header>
					<h2 style={{margin:'0px 0px 25px'}}>🔴LIVE: [VN] ESL Pro League Season 10 Finals - Quarter-Finals</h2>
				</header>
				<TwitchTransmission channelName={"izakooo"}/>
			</SubpageBox>;
	}
}
