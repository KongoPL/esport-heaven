import React from 'react';
import {Link} from "react-router-dom";

export default class Logo extends React.Component<{ className?: string}>
{
	render()
	{
		const className = ( 'className' in this.props ? this.props.className : 'logo' );

		return (
			<div className={className}>
				<Link to="/"><img src="/images/logo.png" /></Link>
			</div>
		);
	}
}
