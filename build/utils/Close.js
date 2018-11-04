'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Img = function Img() {
	return _react2.default.createElement(
		'svg',
		{ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 512 512' },
		_react2.default.createElement('path', { d: 'M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z' })
	);
};

var Close = function Close(props) {
	var style = {
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
	return _react2.default.createElement(
		'div',
		{ style: style, onClick: props.close },
		_react2.default.createElement('img', { src: Img, width: '18px' })
	);
};

exports.default = Close;


Close.propTypes = {
	close: _propTypes2.default.func
};