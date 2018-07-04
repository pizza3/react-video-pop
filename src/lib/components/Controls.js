import React, { Component } from 'react';
import Pause from '../utils/Pause';
import Close from '../utils/Close';
import Volume from '../utils/Volume';

class Controls extends Component {
	state = {};

	render() {
		let style = {
			position: 'relative',
			width: '100%',
			height: '100%',
			transition: '0.3s',
			opacity: this.props.show ? '1' : '0'
		};
		return (
			<div style={style}>
				<Close scale={this.props.scale} />
				<Pause />
				<Volume mute={this.props.mute} />
			</div>
		);
	}
}

export default Controls;
