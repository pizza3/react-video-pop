import React from 'react';
import PropTypes from 'prop-types';

const Img = ()=>{
	return(
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M96 52v408l320-204L96 52z"/></svg>
	);
};

const Img2=()=>{
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M96 448h106.7V64H96v384zM309.3 64v384H416V64H309.3z"/></svg>;
};
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

Pause.propTypes = {
	iconState: PropTypes.bool,
	play: PropTypes.func
};


export default Pause;
