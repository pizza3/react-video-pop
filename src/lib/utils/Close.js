import React from 'react';
import PropTypes from 'prop-types';

const Close = props => {
	let style = {
		position: 'absolute',
		top: '10px',
		left: '10px',
		width: '20px',
		height: '20px',
		background: 'rgb(0, 0, 0)',
		border: '1px solid rgb(226, 226, 226)',
		borderRadius: '50%',
		opacity: '0.9',
		cursor: 'pointer'
	};
	return (
		<div style={style} onClick={props.close}>
			<svg xmlns="http://www.w3.org/2000/svg"  width="18px"  viewBox="0 0 512 512"><path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"/></svg>
		</div>
	);
};

export default Close;

Close.propTypes = {
	close: PropTypes.func
};
