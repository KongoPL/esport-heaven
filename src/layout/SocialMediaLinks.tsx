import React from 'react';

export default class SocialMediaLinks extends React.Component
{
	render()
	{
		return (
			<div className="social-media">
				<a href="https://www.facebook.com/kuba.poliszuk"><img src="/images/social-icons/facebook.png" alt="facebook" /></a>
				<a href="https://twitter.com/"><img src="/images/social-icons/twitter.png" alt="twitter" /></a>
				<a href="https://twitch.tv/"><img src="/images/social-icons/twitch.png" alt="twitch" /></a>
			</div>
		);
	}
}
