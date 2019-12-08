import React from 'react';

import 'scss/components/SubpageBox.scss';

export default class SubpageBox extends React.Component
{
	render()
	{
		return (
			<div className="box subpage-box">
				{this.props.children}
			</div>
		);
	}
}