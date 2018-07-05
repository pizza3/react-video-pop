import React from 'react';
import PropTypes from 'prop-types';
import Img from './vectors/close.svg';

const Close = props => {
	let style = {
		position: 'absolute',
		top: '10px',
		left: '10px',
		width: '20px',
		height: '20px',
		background: 'rgb(226, 226, 226)',
		border: '1px solid rgb(226, 226, 226)',
		borderRadius: '50%',
		opacity: '0.9',
		cursor: 'pointer'
	};
	return (
		<div style={style} onClick={props.close}>
			<img src={Img} width="18px" />
		</div>
	);
};

export default Close;

Close.propTypes = {
	close: PropTypes.func
};
