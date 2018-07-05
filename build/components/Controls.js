'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Pause = require('../utils/Pause');

var _Pause2 = _interopRequireDefault(_Pause);

var _Close = require('../utils/Close');

var _Close2 = _interopRequireDefault(_Close);

var _Volume = require('../utils/Volume');

var _Volume2 = _interopRequireDefault(_Volume);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Controls = function (_Component) {
	_inherits(Controls, _Component);

	function Controls() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Controls);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Controls.__proto__ || Object.getPrototypeOf(Controls)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Controls, [{
		key: 'render',
		value: function render() {
			var style = {
				position: 'absolute',
				width: '100%',
				height: '100%',
				transition: '0.3s',
				top: '0',
				left: '0',
				opacity: this.props.show ? '1' : '0'
			};

			var overlayStyle = {
				position: 'absolute',
				width: '100%',
				height: '100%',
				top: '0',
				left: '0'
			};

			var resizeStyle = {
				position: 'absolute',
				width: '10px',
				height: '10px',
				top: '0',
				left: '0',
				background: '#fff',
				cursor: 'nwse-resize'
			};

			return _react2.default.createElement(
				'div',
				{ style: style },
				_react2.default.createElement('div', {
					style: overlayStyle,
					onMouseDown: this.props.onMouseDown,
					onMouseUp: this.props.onMouseUp
				}),
				_react2.default.createElement(_Close2.default, { close: this.props.close }),
				_react2.default.createElement(_Pause2.default, null),
				_react2.default.createElement(_Volume2.default, { mute: this.props.mute, iconState: this.props.muteState }),
				_react2.default.createElement('div', { style: resizeStyle })
			);
		}
	}]);

	return Controls;
}(_react.Component);

exports.default = Controls;


Controls.propTypes = {
	show: _propTypes2.default.bool,
	onMouseDown: _propTypes2.default.func,
	onMouseUp: _propTypes2.default.func,
	close: _propTypes2.default.func,
	mute: _propTypes2.default.func,
	muteState: _propTypes2.default.bool
};