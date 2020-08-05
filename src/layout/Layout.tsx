import React from 'react';
import {Link} from "react-router-dom";

import PageHeader from 'layout/PageHeader';
import PageFooter from 'layout/PageFooter';

import Logo from 'components/Logo';
import Menu from 'layout/Menu';

import UpcomingGames from 'layout/UpcomingGames';
import LiveTransmissions from 'layout/LiveTransmissions';
import SocialMediaLinks from 'layout/SocialMediaLinks';
import GoogleAd from 'components/GoogleAd';

import FooterLinks, { FooterLinkColumn, EColumnLocation } from 'layout/FooterLinks';
import FooterCopyrightText from 'layout/FooterCopyrightText';
import NewsletterForm from 'layout/NewsletterForm';

import 'scss/layout/Layout.scss';
import { IGame } from 'DataTypes';
import Game from "../models/Game";

export default class Layout extends React.Component<{}, { games: IGame[] }>
{
	private mainLinks = [
		<Link to="/">Main page</Link>,
		<Link to="/upcoming-games">Upcoming games</Link>,
		<Link to="/live-transmissions">Live transmissions</Link>,
		<Link to="/contact">Contact</Link>,
		<Link to="/">My Account</Link>
	];

	private footerLinks = [
		new FooterLinkColumn( EColumnLocation.LOCATION_LEFT_1, 'Shortcuts', [
			<Link to="/">Main page</Link>,
			<Link to="/upcoming-games">Upcoming games</Link>,
			<Link to="/live-transmissions">Live transmissions</Link>,
			<Link to="/contact">Contact</Link>,
		] ),

		new FooterLinkColumn( EColumnLocation.LOCATION_LEFT_2, 'Games' ),

		new FooterLinkColumn( EColumnLocation.LOCATION_RIGHT_1, 'Community', [
			<a href="https://www.facebook.com/kuba.poliszuk">Facebook</a>,
			<a href="https://twitter.com/">Twitter</a>,
			<a href="https://twitch.tv/">Twitch</a>,
			<a href="https://www.instagram.com/">Instagram</a>
		] ),

		new FooterLinkColumn( EColumnLocation.LOCATION_RIGHT_2, 'Career', [
			<Link to="/who-we-are">Who we are?</Link>,
			<Link to="/our-team">Our team</Link>,
			<Link to="/work-with-us">Work with us!</Link>
		] ),
	];

	constructor( params: any )
	{
		super( params );

		this.state = {
			games: []
		};

		Game.find({limit: [0, 5]}).then( ( games: IGame[] ) => this.setState( { games } ) );
	}


	render()
	{
		const subLinks = this.state.games.map( ( game: IGame ) => <GameLink iconUrl={game.icon} name={game.nameShort} /> );

		this.footerLinks[1].links = this.state.games.map( ( game: IGame ) => <a href="#">{game.name}</a> );

		return (
			<>
				<PageHeader>
					<Logo />
					<Menu mainLinks={this.mainLinks} mainLinksLastFloatRight subLinks={subLinks} />
				</PageHeader>
				<div className="left-column">
					{this.props.children}
				</div>
				<div className="right-column">
					<UpcomingGames />
					<LiveTransmissions />
					<SocialMediaLinks />
					<GoogleAd id="google-ad-side" />
				</div>
				<PageFooter>
					<div className="container">
						<GoogleAd id="google-ad-footer" />
						<NewsletterForm />
					</div>

					<FooterLinks columns={this.footerLinks} />
					<FooterCopyrightText
						left={<span>&copy; All rights reserved by eSport Heaven inc.</span>}
						right="Created by Jakub Poliszuk" />
				</PageFooter>
			</>
		);
	}
}


function GameLink( props: { iconUrl: string, name: string } )
{
	return (
		<Link to="/">
			<img src={props.iconUrl} />
			{props.name}
		</Link>
	);
}
