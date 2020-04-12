import React from 'react';
import SubpageBox from 'components/SubpageBox';

export default class PageNotFound extends React.Component<{}>
{
	render()
	{
		return <>
			<SubpageBox>
				<h2 className="no-margin">Page not found</h2>
				<div className="text-center">
					<h1>404</h1>
					It seems that page you requested does not exists. If you think it's a bug, let us know.
				</div>
			</SubpageBox>
		</>;
	}
}
