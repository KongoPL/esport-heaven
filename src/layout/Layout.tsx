import React from 'react';

import 'scss/layout/index.scss';

export default class Layout extends React.Component
{
	render()
	{
		return (
			<>
				<header className="page">
					<div className="logo">
						<a href="#"><img src="images/logo.png" /></a>
					</div>
					<div className="menu">
						<ul className="main-links">
							<li><a href="#">Main page</a></li>
							<li><a href="#">Upcoming games</a></li>
							<li><a href="#">Live transmissions</a></li>
							<li><a href="#">Contact</a></li>
							<li className="float-right"><a href="#">My Account</a></li>
						</ul>
						<ul className="sub-links text-right">
							<li>
								<a href="#">
									<img src="images/game-icons/csgo.png" />
									CS:GO
								</a>
							</li>
							<li>
								<a href="#">
									<img src="images/game-icons/lol.png" />
									LoL
								</a>
							</li>
							<li>
								<a href="#">
									<img src="images/game-icons/dota2.png" />
									Dota 2
								</a>
							</li>
							<li>
								<a href="#">
									<img src="images/game-icons/fortnite.png" />
									Fortnite
								</a>
							</li>
							<li>
								<a href="#">
									<img src="images/game-icons/pubg.png" />
									PUBG
								</a>
							 </li>
						</ul>
					</div>  
				</header>

				<div className="left-column">
					{this.props.children}
				</div>
				<div className="right-column">
					<div className="box upcoming-games">
						<header>Upcoming games</header>
						{Array( 6 ).fill(
							<div className="upcoming-game">
								<div className="team">
									<img src="images/team-icons/fnatic.png" className="icon" />
									Fnatic
								</div>
								<div className="center text-center">vs.</div>
								<div className="team">
									Astralis
									<img src="images/team-icons/astralis.png" className="icon" />
								</div>
							</div>
						)}
						<div className="margin-top-10 text-center">
							<a href="#" className="btn">Load more</a>
						</div>
					</div>

					<div className="box live-transmissions">
						<header>Live transmissions</header>
						{Array( 5 ).fill(
							<div className="live-transmission">
								<div className="icon"><img src="images/transmission-icon.png" /></div>
								<div className="title text-truncate"><a href="#">TRIO CASH CUP, TOP 54 SOLO and some more text that I don't remember yet</a></div>
								<div className="subtitle text-truncate">ryux</div>
								<div className="views">445K</div>
							</div>
						)}
						<div className="text-center">
							<a href="#" className="btn">Load more</a>
						</div>
					</div>

					<div className="social-media">
						<a href="#"><img src="images/social-icons/facebook.png" /></a>
						<a href="#"><img src="images/social-icons/twitter.png" /></a>
						<a href="#"><img src="images/social-icons/twitch.png" /></a>
					</div>
				</div>

				<footer className="page">
					<div className="box newsletter">
						<div className="text">
							<h2>Subscribe to our newsletter!</h2>
							<span className="sub">Stay up to date with hottest news from esport world!</span>
						</div>
						<div className="form">
							<form>
								<input type="email" placeholder="Type your email address" />
								<button>Subscribe</button>
							</form>
						</div>
					</div>

					<div className="page-links">
						<div className="column-left-1">
							<h4>Shortcuts</h4>
							<ul>
								<li><a href="#">Main page</a></li>
								<li><a href="#">Upcoming games</a></li>
								<li><a href="#">Live transmissions</a></li>
								<li><a href="#">Contact</a></li>
							</ul>
						</div>
						<div className="column-left-2">
							<h4>Games</h4>
							<ul>
								<li><a href="#">CS:GO</a></li>
								<li><a href="#">League of Legends</a></li>
								<li><a href="#">Dota 2</a></li>
								<li><a href="#">Fortnite</a></li>
								<li><a href="#">PUBG</a></li>
							</ul>
						</div>
						<div className="site-logo">
							<a href="#"><img src="images/logo.png" /></a>
						</div>
						<div className="column-left-1">
							<h4>Community</h4>
							<ul>
								<li><a href="#">Facebook</a></li>
								<li><a href="#">Twitter</a></li>
								<li><a href="#">Twitch</a></li>
								<li><a href="#">Instagram</a></li>
							</ul>
						</div>
						<div className="column-left-2">
							<h4>Career</h4>
							<ul>
								<li><a href="#">Who we are?</a></li>
								<li><a href="#">Our team</a></li>
								<li><a href="#">Work with us!</a></li>
							</ul>
						</div>
					</div>

					<div className="copyright-text">
						&copy; All rights reserved by eSport Heaven inc.
						<span className="float-right">
							Created by Jakub Poliszuk
						</span>
					</div>
				</footer>
			</>
		);
	}
}