import React from 'react';

export default class TeamLogo extends React.Component<{src: string} & any>
{
	render()
	{
		const props = {
			alt: 'team-logo',
			...this.props,
			style: {
				'width': '128px',
				'height': '128px',

				'object-fit': 'contain'
			}
		};

		return <img {...props} />;
	}
}
