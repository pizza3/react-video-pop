'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Hide = {
	width: '100%',
	height: '100%',
	background: '#2b2b2b',
	position: 'absolute',
	top: '0',
	opacity: '0.8'
};
var HideText = {
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

var Overlay = function Overlay() {
	return _react2.default.createElement(
		_react2.default.Fragment,
		null,
		_react2.default.createElement('div', { style: Hide }),
		_react2.default.createElement(
			'div',
			{ style: HideText },
			'Floating Video Active'
		)
	);
};

exports.default = Overlay;