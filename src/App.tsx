import React from 'react';
import Layout from 'layout/Layout';

import 'css/pages/index.css';

const App: React.FC = () =>
{
	return (
		<Layout>
			<div className="news-list main-wide">
				<div className="news main">
					<div className="image">
						<img src="/images/news-images/astralis.png" />
					</div>
					<div className="content">
						<header>ASTRALIS WINS ELEAGUE PREMIER 2018!</header>
						<section className="text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo et ipsum ornare lobortis at et orci. Mauris id ligula laoreet, ornare lacus tempor, mollis turpis. In et orci eget quam viverra feugiat. Sed non mi posuere, hendrerit orci nec, tempor turpis. Donec et faucibus eros, quis dictum lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dui justo, consectetur sit amet ipsum non, mollis euismod quam. Maecenas accumsan malesuada porta. Duis vitae orci auctor, pharetra lacus eu, laoreet ipsum. Phasellus eu nisl est. Suspendisse velit elit, finibus quis ex sit amet, vehicula convallis ligula. Ut ac nisl et mi scelerisque tincidunt.
						</section>
					</div>
				</div>
				{new Array( 4 ).fill( <div className="news">
					<div className="image">
						<img src="/images/news-images/fnatic.png" />
					</div>
					<div className="content">
						<header>FNatic wins League of Legends cup 2019!</header>
					</div>
				</div> )}
			</div>

			<div className="google-ad-news">
				<img src="/images/ad.png" style={{ width: '100%' }} />
			</div>

			<div className="contest">
				<img src="/images/contest.png" style={{ width: '100%' }} />
			</div>

			<div className="news-list main-side">
				<div className="news main">
					<div className="image">
						<img src="/images/news-images/astralis.png" />
					</div>
					<div className="content">
						<header>ASTRALIS WINS ELEAGUE PREMIER 2018!</header>
						<section className="text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo et ipsum ornare lobortis at et orci. Mauris id ligula laoreet, ornare lacus tempor, mollis turpis. In et orci eget quam viverra feugiat. Sed non mi posuere, hendrerit orci nec, tempor turpis. Donec et faucibus eros, quis dictum lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dui justo, consectetur sit amet ipsum non, mollis euismod quam. Maecenas accumsan malesuada porta. Duis vitae orci auctor, pharetra lacus eu, laoreet ipsum. Phasellus eu nisl est. Suspendisse velit elit, finibus quis ex sit amet, vehicula convallis ligula. Ut ac nisl et mi scelerisque tincidunt.
						</section>
					</div>
				</div>
				{new Array( 4 ).fill( <div className="news">
					<div className="image">
						<img src="/images/news-images/fnatic.png" />
					</div>
					<div className="content">
						<header>FNatic wins League of Legends cup 2019!</header>
					</div>
				</div> )}
			</div>

			<div className="text-center">
				<a className="btn large">Load more</a>
			</div>
		</Layout>
	);
}

export default App;
