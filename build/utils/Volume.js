'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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
		props.iconState ? _react2.default.createElement(
			'svg',
			{ xmlns: 'http://www.w3.org/2000/svg', style: imgStyle, viewBox: '0 0 512 512' },
			_react2.default.createElement('path', { d: 'M405.5 256c0 22.717-4.883 44.362-13.603 63.855l31.88 31.88C439.283 323.33 448 290.653 448 256c0-93.256-64-172.254-149-192v44.978C361 127.632 405.5 186.882 405.5 256zM256 80.458l-51.021 52.48L256 183.957zM420.842 396.885L91.116 67.157l-24 24 90.499 90.413-8.28 10.43H64v128h85.334L256 431.543V280l94.915 94.686C335.795 387.443 318 397.213 299 403.022V448c31-7.172 58.996-22.163 82.315-42.809l39.61 39.693 24-24.043-24.002-24.039-.081.083z' }),
			_react2.default.createElement('path', { d: 'M352.188 256c0-38.399-21.188-72.407-53.188-88.863v59.82l50.801 50.801A100.596 100.596 0 0 0 352.188 256z' })
		) : _react2.default.createElement(
			'svg',
			{ xmlns: 'http://www.w3.org/2000/svg', style: imgStyle, viewBox: '0 0 512 512' },
			_react2.default.createElement('path', { d: 'M64 192v128h85.334L256 431.543V80.458L149.334 192H64zm288 64c0-38.399-21.333-72.407-53.333-88.863v176.636C330.667 328.408 352 294.4 352 256zM298.667 64v44.978C360.531 127.632 405.334 186.882 405.334 256c0 69.119-44.803 128.369-106.667 147.022V448C384 428.254 448 349.257 448 256c0-93.256-64-172.254-149.333-192z' })
		)
	);
};

exports.default = Volume;


Volume.propTypes = {
	mute: _propTypes2.default.func,
	iconState: _propTypes2.default.bool
};