import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Layout from 'layout/Layout';
import Index from 'pages/index/Index'; 
import News from 'pages/news/News';
import Transmission from "./pages/transmission/Transmission";
import Game from "./pages/game/Game";

const App: React.FC = () =>
{
	return (
			<BrowserRouter>
				<Layout>
					<Route path="/" exact component={Index} />
					<Route path="/news/:id" exact component={News} />
					<Route path="/transmission/:id" exact component={Transmission} />
					<Route path="/game/:id" exact component={Game} />
				</Layout>
			</BrowserRouter>
	);
}

export default App;
