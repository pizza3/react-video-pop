import React, { Component } from 'react';
import styled from 'styled-components';

const Control = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	background: #000;
	opacity: 0.8;
`;
class Controls extends Component {
	state = {};

	render() {
		return <Control />;
	}
}

export default Controls;
