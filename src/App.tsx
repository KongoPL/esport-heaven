import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";


import Layout from 'layout/Layout';
import Index from 'pages/index/Index'; 
import News from 'pages/news/News';

const App: React.FC = () =>
{
	return (
		<Layout>
			<BrowserRouter>
				<Route path="/" exact component={Index} />
				<Route path="/news/:id" component={News} />
			</BrowserRouter>
		</Layout>
	);
}

export default App;
