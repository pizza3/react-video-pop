'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pause = require('./vectors/pause.svg');

var _pause2 = _interopRequireDefault(_pause);

var _play = require('./vectors/play.svg');

var _play2 = _interopRequireDefault(_play);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pause = function Pause() {
	var stylePause = {
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

	var imgStyle = {
		width: '20px',
		marginTop: '9px',
		marginLeft: '9px'
	};
	return _react2.default.createElement(
		'div',
		{ style: stylePause },
		_react2.default.createElement('img', { src: _pause2.default, style: imgStyle })
	);
};

exports.default = Pause;