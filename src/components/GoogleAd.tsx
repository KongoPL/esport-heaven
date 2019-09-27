import React from 'react';

export default class GoogleAd extends React.Component<{id?:string}>
{
	render()
	{
		return (
			<div id={this.props.id}>
				<img src="/images/ad.png" style={{ width: '100%' }} />
			</div>
		);
	}
}