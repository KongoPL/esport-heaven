import React from 'react';

import Logo from 'components/Logo';

import 'scss/layout/FooterLinks.scss';

export default class FooterLinks extends React.Component<{ columns: FooterLinkColumn[] }>
{
	render()
	{
		return (
			<div className="footer-links">
				<div className="column-left-1 links-list">
					{this.displayColumn( EColumnLocation.LOCATION_LEFT_1 )}
				</div>
				<div className="column-left-2 links-list">
					{this.displayColumn( EColumnLocation.LOCATION_LEFT_2 )}
				</div>
				<Logo className="center site-logo" />
				<div className="column-right-1 links-list">
					{this.displayColumn( EColumnLocation.LOCATION_RIGHT_1 )}
				</div>
				<div className="column-right-2 links-list">
					{this.displayColumn( EColumnLocation.LOCATION_RIGHT_2 )}
				</div>
			</div>
		);
	}


	displayColumn( name: EColumnLocation )
	{
		const column = this.props.columns.find( ( v ) => v.location == name );

		if ( !column )
			return;

		const links = column.links.map( ( v, i ) => <li key={i}>{v}</li> );

		return (
			<>
				<h4 className="header">{column.header}</h4>
				<ul>
					{links}
				</ul>
			</>
		);
	}
}

export class FooterLinkColumn
{
	constructor( public location: EColumnLocation, public header: string, public links: JSX.Element[] = [] ) { }
}

export enum EColumnLocation
{
	LOCATION_LEFT_1 = 'left_1',
	LOCATION_LEFT_2 = 'left_2',
	LOCATION_RIGHT_1 = 'left_1',
	LOCATION_RIGHT_2 = 'left_2',
}