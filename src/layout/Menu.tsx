import React from 'react';

export default class Menu extends React.Component<{ mainLinks: any[], subLinks: any[], mainLinksLastFloatRight?: boolean }>
{
	render()
	{
		return (
			<div className="menu">
				<ul className="main-links">
					{this.getMainLinks()}
				</ul>
				<ul className="sub-links text-right game-pick">
					{this.getSubLinks()}
				</ul>
			</div>
		);
	}


	getMainLinks()
	{
		const lastMainLinkFloatsRight = ( 'mainLinksLastFloatRight' in this.props );

		return this.props.mainLinks.map( ( v, i, a ) =>
			<li key={i} className={lastMainLinkFloatsRight && i == a.length - 1 ? "float-right" : ""}>
				{v}
			</li>
		);
	}

	getSubLinks()
	{
		return this.props.subLinks.map( ( v, i ) =>
			<li key={i}>
				{v}
			</li>
		);
	}
}