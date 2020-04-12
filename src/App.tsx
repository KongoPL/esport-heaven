import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from 'layout/Layout';
import Index from 'pages/index/Index'; 
import News from 'pages/news/News';
import Transmission from "./pages/transmission/Transmission";
import Game from "./pages/game/Game";
import Api from "./Api";
import UpcomingGames from "./pages/upcoming-games/UpcomingGames";
import PageNotFound from "./pages/page-not-found/PageNotFound";
import Lipsum from "./pages/lipsum/Lipsum";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const App: React.FC = () =>
{
	Api.init();

	return (
			<BrowserRouter>
				<ScrollToTopOnRouteUpdate />
				<Layout>

					<Switch>
						<Route path="/" exact component={Index} />
						<Route path="/upcoming-games" exact  render={(props) => <UpcomingGames />} />
						<Route path="/who-we-are" exact  render={(props) => <Lipsum title="Who we are?" />} />
						<Route path="/our-team" exact  render={(props) => <Lipsum title="Our Team" />} />
						<Route path="/work-with-us" exact  render={(props) => <Lipsum title="Work with us" />} />

						<Route path="/news/:id" exact render={(props) => <News id={props.match.params.id} />} />
						<Route path="/transmission/:id" exact render={(props) => <Transmission id={props.match.params.id}/>} />
						<Route path="/game/:id" exact render={(props) => <Game id={props.match.params.id}/>} />

						<Route component={PageNotFound} />
					</Switch>
				</Layout>
			</BrowserRouter>
	);
}

export default App;

function ScrollToTopOnRouteUpdate() {
	const { pathname } = useLocation();

	window.scrollTo(0, 0);

	return null;
}
