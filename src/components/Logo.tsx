import React from 'react';

export default class Logo extends React.Component<{ className?: string}>
{
	render()
	{
		const className = ( 'className' in this.props ? this.props.className : 'logo' );

		return (
			<div className={className}>
				<a href="#"><img src="/images/logo.png" /></a>
			</div>
		);
	}
}