import React, { Component } from 'react';
import Scene from '../assets/devstories.webm';
import VideoPop from '../../lib/index';
import styled from 'styled-components';
const Title = styled.div`
	position: relative;
	text-align: center;
	background: #404b69;
	height: 200vh;
`;

const Wrapper = styled.div`
	position: relative;
	border-radius: 5px;
	width: 640px;
	height: 360px;
	overflow: hidden;
	float: left;
	margin-top: 13vh;
	margin-left: calc((100% - 640px) / 2);
`;

const Comp = ()=>{
	return(
		<div>
			<VideoPop Src={Scene} mute={false} root="video-root" />
		</div>
	);
};
export default class App extends Component {
	render() {
		return (
			<Title>
				<Wrapper>
					<Comp/>
				</Wrapper>
			</Title>
		);
	}
}
