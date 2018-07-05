'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _close = require('./vectors/close.svg');

var _close2 = _interopRequireDefault(_close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
		_react2.default.createElement('img', { src: _close2.default, width: '18px' })
	);
};

exports.default = Close;


Close.propTypes = {
	close: _propTypes2.default.func
};