import React from 'react';

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

import 'css/layout/Layout.css';

export default class Layout extends React.Component
{
	private mainLinks = [
		<a href="#">Main page</a>,
		<a href="#">Upcoming games</a>,
		<a href="#">Live transmissions</a>,
		<a href="#">Contact</a>,
		<a href="#">My Account</a>
	];

	private subLinks = [
		<GameLink iconUrl="/images/game-icons/csgo.png" name="CS:GO" />,
		<GameLink iconUrl="/images/game-icons/lol.png" name="LoL" />,
		<GameLink iconUrl="/images/game-icons/dota2.png" name="Dota 2" />,
		<GameLink iconUrl="/images/game-icons/fortnite.png" name="Fortnite" />,
		<GameLink iconUrl="/images/game-icons/pubg.png" name="PUBG" />
	];


	private footerLinks = [
		new FooterLinkColumn( EColumnLocation.LOCATION_LEFT_1, 'Shortcuts', [
			<a href="#">Main page</a>,
			<a href="#">Upcoming games</a>,
			<a href="#">Live transmissions</a>,
			<a href="#">Contact</a>
		] ),

		new FooterLinkColumn( EColumnLocation.LOCATION_LEFT_2, 'Games', [
			<a href="#">CS:GO</a>,
			<a href="#">League of Legends</a>,
			<a href="#">Dota 2</a>,
			<a href="#">Fortnite</a>,
			<a href="#">PUBG</a>
		] ),

		new FooterLinkColumn( EColumnLocation.LOCATION_RIGHT_1, 'Community', [
			<a href="#">Facebook</a>,
			<a href="#">Twitter</a>,
			<a href="#">Twitch</a>,
			<a href="#">Instagram</a>
		] ),

		new FooterLinkColumn( EColumnLocation.LOCATION_RIGHT_2, 'Career', [
			<a href="#">Who we are?</a>,
			<a href="#">Our team</a>,
			<a href="#">Work with us!</a>
		] ),
	];


	render()
	{
		return (
			<>
				<PageHeader>
					<Logo />
					<Menu mainLinks={this.mainLinks} mainLinksLastFloatRight subLinks={this.subLinks} />
				</PageHeader>
				<div className="left-column">
					{this.props.children}
				</div>
				<div className="right-column">
					<UpcomingGames />,
					<LiveTransmissions />,
					<SocialMediaLinks />,
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
		<a href="#">
			<img src={props.iconUrl} />
			{props.name}
		</a>
	);
}