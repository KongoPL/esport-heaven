import React from 'react';
import { INews } from 'DataTypes';
import Api from 'Api';
import NewsList from 'components/NewsList';
import SubpageBox from 'components/SubpageBox';

import 'scss/pages/news.scss';

export default class News extends React.Component<{}, { newsList: INews[] }>
{
	constructor( props: any )
	{
		super( props );

		this.state = {
			newsList: []
		};

		Api.getNewsList().then( ( newsList ) => newsList.filter( ( v ) => !v.isMain ) )
			.then( ( newsList ) => this.setState( { newsList } ) );
	}


	render()
	{
		const comment: IComment = {
			author: 'Looney Tunes',
			avatarUrl: '/images/user_avatar.png',
			createdAt: 'today at 14:19',
			content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mi lorem, consequat at luctus in, tincidunt vel mi. Nam sit amet faucibus urna. Ut non urna eleifend, suscipit urna ut, lacinia libero. Etiam a dignissim lacus. Morbi malesuada orci at ipsum gravida, ut bibendum est dignissim. Suspendisse at dignissim est. Aenean eu tortor at justo placerat blandit. Pellentesque a tincidunt diam. Phasellus ullamcorper, ex vitae laoreet semper, ligula ligula blandit urna, sit amet ornare mi justo sit amet massa. Cras tincidunt sollicitudin tellus eget blandit.'
		};

		return <>
			<SubpageBox>
				<header className="news-title">
					<h2>ASTRALIS WINS ELEAGUE PREMIER 2018!</h2>
					<sub>Written 16th September 2019, at 08:47 by Jakub Poliszuk | Game: Counter-Strike: Global Offensive</sub>
				</header>
				<section className="news-content">
					<div className="full-width news-image">
						<img src="/images/news-images/astralis.png" alt="news-1" />
					</div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales arcu et eros placerat aliquam. Phasellus volutpat orci ac ultrices ultricies. Suspendisse sed ex gravida, fringilla odio id, placerat neque. Donec lacinia posuere orci a vulputate. Morbi ultrices mollis turpis vitae ultricies. Proin eu ultricies turpis. Aliquam non neque purus. Etiam mauris tellus, semper in posuere quis, ornare nec nibh. Vivamus bibendum congue feugiat. Proin euismod laoreet finibus.
					</p>
					<p>
						Curabitur ornare ornare lacinia. Pellentesque sed dictum mauris, eget condimentum augue. Mauris ac efficitur eros. Vestibulum orci tortor, dignissim eu vehicula sit amet, aliquet ut dolor. In purus tortor, dictum ac condimentum vel, sodales sit amet neque. Nam ornare nibh in metus euismod, et dictum lectus ultrices. Proin pretium, mauris in venenatis pharetra, odio nisi pellentesque tellus, non lacinia ante massa non ex. Praesent pretium egestas turpis eu venenatis. Nam tincidunt massa ac dolor varius porta vel ut felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor nulla, cursus sed consequat eu, suscipit ac metus.
					</p>
					<p>
						Phasellus eleifend lobortis tortor, eget accumsan lorem interdum nec. Suspendisse hendrerit porta semper. Ut convallis, lacus nec ultrices viverra, nibh enim ullamcorper nisi, sed dapibus purus mauris ac elit. Nullam mattis odio ut augue volutpat blandit. Praesent sit amet tellus mi. Etiam quam purus, pretium vitae dui ut, molestie volutpat dui. Etiam feugiat vel ex eu ultricies. Duis sit amet nibh dui. Proin convallis vestibulum aliquet. Sed condimentum ligula quis urna ullamcorper, sit amet hendrerit diam posuere. Aenean vel ligula a neque auctor consectetur. Aliquam erat volutpat. Morbi quis euismod augue, ut iaculis arcu.
					</p>
					<p>
						In pretium eros dolor, tempor luctus neque accumsan eget. Sed eu fringilla leo, eget rutrum ligula. Vestibulum tempus tincidunt lorem, vel venenatis augue varius nec. Ut id justo eleifend, tempus dui a, commodo justo. Nunc fermentum venenatis enim, egestas commodo lorem sodales vel. Sed felis justo, pulvinar vitae eleifend ac, consectetur ut augue. Quisque venenatis libero dolor, sed pharetra augue aliquet vitae. Vivamus in orci eu ligula ultrices tristique at et dolor. Aenean at suscipit arcu. 
					</p>
				</section>
			</SubpageBox>
			<h3>You may be interested in with those news:</h3>
			<NewsList className="no-main" data={this.state.newsList} />
			<section id="comments">
				<h3>Comments (12):</h3>
				<SubpageBox>
					<Comment {...comment} />
					<Comment {...comment} />
					<Comment {...comment} />
				</SubpageBox>
			</section>
		</>;
	}
}

interface IComment
{
	avatarUrl: string,
	author: string,
	createdAt: string,
	content: string,
}

function Comment(props: IComment)
{
	return <div className="comment">
		<div className="avatar">
			<img src={props.avatarUrl} alt="avatar" />
		</div>
		<div className="author">
			<header>{props.author}</header>
			<sub>Written {props.createdAt}</sub>
		</div>
		<div className="content">
			{props.content}
		</div>
	</div>;
}
