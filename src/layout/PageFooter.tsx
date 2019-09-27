import React from 'react';


export default class PageFooter extends React.Component
{
	render()
	{
		return (
			<footer className="page">
				{this.props.children}
			</footer>
		);
	}
}