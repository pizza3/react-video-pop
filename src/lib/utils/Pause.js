import React from 'react';
import Img2 from './vectors/pause.svg';
import Img from './vectors/play.svg';

const Pause = () => {
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
		<div style={stylePause}>
			<img src={Img2} style={imgStyle} />
		</div>
	);
};

export default Pause;
