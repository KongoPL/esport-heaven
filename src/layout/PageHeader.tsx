import React from 'react';

import 'scss/layout/PageHeader.scss';

export default class PageHeader extends React.Component
{
	render()
	{
		return (
			<header className="page">
				{this.props.children}
			</header>
		);
	}
}