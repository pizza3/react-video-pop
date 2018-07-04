import React from 'react';
import Img from './vectors/close.svg';

const handleClick = props => {
	props.scale();
};

const Close = props => {
	let style = {
		position: 'absolute',
		top: '10px',
		left: '10px',
		width: '20px',
		height: '20px',
		background: '#fff',
		border: '1px solid #fff',
		borderRadius: '50%',
		opacity: '0.9',
		cursor: 'pointer'
	};
	return (
		<div style={style} onClick={props.scale}>
			<img src={Img} width="18px" />
		</div>
	);
};

export default Close;
