import React from 'react';

import 'scss/layout/FooterCopyrightText.scss';

export default class FooterCopyrightText extends React.Component<{ left?: string | JSX.Element, right?: string | JSX.Element }>
{
	render()
	{
		return (
			<div className="copyright-text">
				{this.props.left}
				<span className="float-right">
					{this.props.right}
				</span>
			</div>
		);
	}
}