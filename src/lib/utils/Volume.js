import React from 'react';
import PropTypes from 'prop-types';
import Img2 from './vectors/volumeOn.svg';
import Img from './vectors/mute.svg';

const Volume = props => {
	let stylePause = {
		position: 'absolute',
		top: '70%',
		left: 'calc((80% - 40px) / 2)',
		width: '40px',
		height: '40px',
		background: 'rgb(226, 226, 226)',
		border: '1px solid rgb(226, 226, 226)',
		borderRadius: '50%',
		opacity: '0.9',
		cursor: 'pointer'
	};

	let imgStyle = {
		width: '20px',
		marginTop: '9px',
		marginLeft: '9px'
	};
	return (
		<div style={stylePause} onClick={props.mute}>
			<img src={props.iconState ? Img : Img2} style={imgStyle} />
		</div>
	);
};

export default Volume;

Volume.propTypes = {
	mute: PropTypes.func,
	iconState: PropTypes.bool
};
