import React, { Component } from 'react';
import Scene from '../assets/devstories.webm';
import VideoPop from '../../lib/index';
import styled from 'styled-components';
import TextContent from './TextContent';

const Title = styled.div`
	position: relative;
	background: #ffffff;
	height: 200vh;
	width: 100vw;
`;

const Head  =  styled.div`
	max-width: 1000px;
	display: block;
	width: 95%;
	margin: 0 auto;
`;

const Wrapper = styled.div`
	position: relative;
	border-radius: 5px;
	width: 100%;
	height: 360px;
	overflow: hidden;
	float: left;
	margin-top: 9vh;
`;

const ContLeft = styled.div`
	position: relative;
	float: left;
	width: 50%;
	top: 50px;
	height: calc(100vh - 50px);
	padding-top: 6vh;
`;

const ContRight =  styled.div`
	position: relative;
	float: left;
	width: 50%;
	top: 50px;
	height: calc(100vh - 50px);
	padding-top: 19vh;
	padding-left: 3%;
`;

const Comp = ()=>{
	return(
		<div>
			<VideoPop Src={Scene} mute={true} autoplay={false} root="video-root" />
		</div>
	);
};
export default class App extends Component {
	render() {
		return (
			<Title>
				<Head>
					<ContLeft>
						<Wrapper>
							<Comp/>
						</Wrapper>
					</ContLeft>
					<ContRight>
						<TextContent/>
					</ContRight>
				</Head>
			</Title>
		);
	}
}
