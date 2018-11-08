import React from 'react';

const Hide = {
	width: '100%',
	height: '100%',
	background: '#2b2b2b',
	position: 'absolute',
	top: '0',
	opacity: '0.8'
};
const HideText = {
	position: 'absolute',
	color: '#fff',
	fontFamily: 'sans-serif',
	top: '0',
	left: '0',
	right: '0',
	bottom: '0',
	height: '19px',
	marginTop: 'auto',
	marginBottom: 'auto',
	fontWeight: '100',
	fontSize: '28px',
	textShadow: '1px 1px #0a0a0a',
	textAlign: 'center'
};

const Overlay = () => {
	return (
		<React.Fragment>
			<div style={Hide} />
			<div style={HideText}>Floating Video Active</div>
		</React.Fragment>
	);
};

export default Overlay;
