'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _volumeOn = require('./vectors/volumeOn.svg');

var _volumeOn2 = _interopRequireDefault(_volumeOn);

var _mute = require('./vectors/mute.svg');

var _mute2 = _interopRequireDefault(_mute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Volume = function Volume(props) {
	var stylePause = {
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

	var imgStyle = {
		width: '20px',
		marginTop: '9px',
		marginLeft: '9px'
	};
	return _react2.default.createElement(
		'div',
		{ style: stylePause, onClick: props.mute },
		_react2.default.createElement('img', { src: props.iconState ? _mute2.default : _volumeOn2.default, style: imgStyle })
	);
};

exports.default = Volume;


Volume.propTypes = {
	mute: _propTypes2.default.func,
	iconState: _propTypes2.default.bool
};