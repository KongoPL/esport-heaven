import React from 'react';
import SubpageBox from 'components/SubpageBox';
import TwitchTransmission from "../../components/TwitchTransmission";
import {ITransmission} from "../../DataTypes";
import Api from "../../Api";

export default class Transmission extends React.Component<{id: string}, {transmission: ITransmission | null}>
{
	constructor(props: any)
	{
		super(props);

		this.state = {
			transmission: null
		}

		Api.getTransmissionById(this.props.id).then((transmission: any) => this.setState({transmission}));
	}

	componentDidUpdate(prevProps: Readonly<{ id: string }>, prevState: Readonly<{ transmission: ITransmission | null }>, snapshot?: any): void
	{
		if(this.props.id != prevProps.id)
			Api.getTransmissionById(this.props.id).then((transmission: any) => this.setState({transmission}));
	}

	render()
	{
		if(!this.state.transmission)
			return null;

		return <SubpageBox>
				<header>
					<h2 style={{margin:'0px 0px 25px'}}>{this.state.transmission.title}</h2>
				</header>
				<TwitchTransmission channelName={this.state.transmission.channelId}/>
			</SubpageBox>;
	}
}
