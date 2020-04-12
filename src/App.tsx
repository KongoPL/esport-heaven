import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Layout from 'layout/Layout';
import Index from 'pages/index/Index'; 
import News from 'pages/news/News';
import Transmission from "./pages/transmission/Transmission";
import Game from "./pages/game/Game";
import Api from "./Api";
import UpcomingGames from "./pages/upcoming-games/UpcomingGames";
import WhoWeAre from "./pages/who-we-are/WhoWeAre";

const App: React.FC = () =>
{
	Api.init();

	return (
			<BrowserRouter>
				<Layout>
					<Route path="/" exact component={Index} />
					<Route path="/upcoming-games" exact  render={(props) => <UpcomingGames />} />
					<Route path="/who-we-are" exact  render={(props) => <WhoWeAre />} />

					<Route path="/news/:id" exact render={(props) => <News id={props.match.params.id} />} />
					<Route path="/transmission/:id" exact render={(props) => <Transmission id={props.match.params.id}/>} />
					<Route path="/game/:id" exact render={(props) => <Game id={props.match.params.id}/>} />
				</Layout>
			</BrowserRouter>
	);
}

export default App;
