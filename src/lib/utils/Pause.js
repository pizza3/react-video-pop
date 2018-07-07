import React from 'react';
import Img from './vectors/play.svg';
import Img2 from './vectors/pause.svg';

const Pause = props => {
	let stylePause = {
		position: 'absolute',
		top: '70%',
		left: 'calc((120% - 40px)/2)',
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
		<div style={stylePause} onClick={props.play}>
			<img src={props.iconState ? Img2 : Img} style={imgStyle} />
		</div>
	);
};

export default Pause;
