import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pause from '../utils/Pause';
import Close from '../utils/Close';
import Volume from '../utils/Volume';

class Controls extends Component {
	state = {};

	render() {
		let style = {
			position: 'absolute',
			width: '100%',
			height: '100%',
			transition: '0.3s',
			top: '0',
			left: '0',
			opacity: this.props.show ? '1' : '0'
		};

		let overlayStyle = {
			position: 'absolute',
			width: '100%',
			height: '100%',
			top: '0',
			left: '0'
		};

		let resizeStyle = {
			position: 'absolute',
			width: '10px',
			height: '10px',
			top: '0',
			left: '0',
			background: '#fff',
			cursor: 'nwse-resize'
		};

		return (
			<div style={style}>
				<div
					style={overlayStyle}
					onMouseDown={this.props.onMouseDown}
					onMouseUp={this.props.onMouseUp}
				/>
				<Close close={this.props.close} />
				<Pause play={this.props.play} iconState={this.props.playState} />
				<Volume mute={this.props.mute} iconState={this.props.muteState} />
				<div style={resizeStyle} />
			</div>
		);
	}
}

export default Controls;

Controls.propTypes = {
	show: PropTypes.bool,
	play: PropTypes.bool,
	mute: PropTypes.bool,
	onMouseDown: PropTypes.func,
	onMouseUp: PropTypes.func,
	close: PropTypes.func,
	muteState: PropTypes.bool,
	playState: PropTypes.bool
};
