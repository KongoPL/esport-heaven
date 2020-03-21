import React from 'react';
import 'scss/components/TwitchTransmission.scss';


export default class TwitchTransmission extends React.Component<{channelName: string}>
{
	render()
	{
		return <div className="twitch-transmission">
			<iframe id="video-stream" src={`https://player.twitch.tv/?channel=${this.props.channelName}`} frameBorder="0" allowFullScreen={true} scrolling="no"></iframe>
			<iframe id="chat" src={`https://www.twitch.tv/embed/${this.props.channelName}/chat`} frameBorder="0" scrolling="no"></iframe>
		</div>;
	}
}
