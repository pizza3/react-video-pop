'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pause = function Pause(props) {
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

	var Img = function Img() {
		return _react2.default.createElement(
			'svg',
			{ xmlns: 'http://www.w3.org/2000/svg', style: imgStyle, viewBox: '0 0 512 512' },
			_react2.default.createElement('path', { d: 'M96 52v408l320-204L96 52z' })
		);
	};

	var Img2 = function Img2() {
		_react2.default.createElement(
			'svg',
			{ xmlns: 'http://www.w3.org/2000/svg', style: imgStyle, viewBox: '0 0 512 512' },
			_react2.default.createElement('path', { d: 'M96 448h106.7V64H96v384zM309.3 64v384H416V64H309.3z' })
		);
	};
	return _react2.default.createElement(
		'div',
		{ style: stylePause, onClick: props.play },
		props.iconState ? _react2.default.createElement(
			'svg',
			{ xmlns: 'http://www.w3.org/2000/svg', style: imgStyle, viewBox: '0 0 512 512' },
			_react2.default.createElement('path', { d: 'M96 448h106.7V64H96v384zM309.3 64v384H416V64H309.3z' })
		) : _react2.default.createElement(
			'svg',
			{ xmlns: 'http://www.w3.org/2000/svg', style: imgStyle, viewBox: '0 0 512 512' },
			_react2.default.createElement('path', { d: 'M96 52v408l320-204L96 52z' })
		)
	);
};

Pause.propTypes = {
	iconState: _propTypes2.default.bool,
	play: _propTypes2.default.func
};

exports.default = Pause;