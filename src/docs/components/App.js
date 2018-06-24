import React, { Component } from 'react';
import Scene from '../assets/devstories.webm';
import Video from '../../lib/index';
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
	margin-left: 7%;
`;

export default class App extends Component {
	state = {};

	render() {
		return (
			<Title>
				<Wrapper>
					<Video Src={Scene} />
				</Wrapper>
			</Title>
		);
	}
}
