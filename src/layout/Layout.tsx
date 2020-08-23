import React, {useState} from 'react';
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
import Game from "../models/Game";
import Config from "../Config";

export default class Layout extends React.Component<{}, { games: Game[] }>
{
	private mainLinks = [
		<Link to="/">Main page</Link>,
		<Link to="/upcoming-games">Upcoming games</Link>,
		<Link to="/live-transmissions">Live transmissions</Link>,
		<Link to="/contact">Contact</Link>,
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

		Game.find({limit: [0, 5]}).then( ( games: Game[] ) => this.setState( { games } ) );
	}


	render()
	{
		const subLinks = this.state.games.map( ( game: Game ) => <GameLink id={game.id} iconUrl={game.icon} name={game.nameShort} /> );

		this.footerLinks[1].links = this.state.games.map( ( game: Game ) => <GameLink simple id={game.id} iconUrl={game.icon} name={game.nameShort} /> );

		return (
			<>
				<PageHeader>
					<Logo />
					<Menu mainLinks={this.mainLinks} subLinks={subLinks} />
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


function GameLink( props: { simple?: boolean, id: number, iconUrl: string, name: string } )
{
	const [gameId, setGameId] = useState<number | null>(null);
	const changeGame = () => {
		if(gameId == props.id)
			Config.setGameId(null);
		else
			Config.setGameId(props.id);
	};

	Config.getGameId((v) => v != gameId && setGameId(v));

	return (
		<Link to="/" onClick={changeGame} className={props.id == gameId ? 'active' : ''}>
			{props.simple ? false : <img src={props.iconUrl} />}
			{props.name}
		</Link>
	);
}
