import React from 'react';
import SubpageBox from 'components/SubpageBox';

import 'scss/pages/contact.scss';

export default class Contact extends React.Component<{}>
{
	render()
	{
		return <>
			<SubpageBox>
				<h2 className="no-margin">Contact with us!</h2>
				<p className="contact-text">
					If you have any questions or problems with our website and you want to contact with us, you can send email on <a href="mailto:contact@esport-heaven.com" className="link">contact@esport-heaven.com</a> or use form below. We will contact with you as soon as possible!
				</p>
				<form className="contact-form block-form">
					<input type="email" placeholder="Type your email address"  />
					<input type="email" placeholder="Your name" />
					<textarea placeholder="Your message"></textarea>
					<button className="btn">Send message</button>
				</form>
			</SubpageBox>
		</>;
	}
}
