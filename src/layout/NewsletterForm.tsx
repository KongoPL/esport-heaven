import React from 'react';

import 'scss/layout/NewsletterForm.scss';

export default class NewsletterForm extends React.Component
{
	render()
	{
		return (
			<div className="box newsletter">
				<div className="text">
					<h2 className="header">Subscribe to our newsletter!</h2>
					<span className="sub">Stay up to date with hottest news from esport world!</span>
				</div>
				<div className="form">
					<form>
						<input type="email" placeholder="Type your email address" />
						<button className="btn">Subscribe</button>
					</form>
				</div>
			</div>
		);
	}
}