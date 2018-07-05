'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n\twidth: 100%;\n\theight: 100%;\n\tbackground: #2b2b2b;\n\tposition: absolute;\n\ttop: 0;\n\topacity: 0.8;\n'], ['\n\twidth: 100%;\n\theight: 100%;\n\tbackground: #2b2b2b;\n\tposition: absolute;\n\ttop: 0;\n\topacity: 0.8;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\tposition: absolute;\n\tcolor: #fff;\n\tfont-family: sans-serif;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\theight: 19px;\n\tmargin-top: auto;\n\tmargin-bottom: auto;\n\tfont-weight: 100;\n\tfont-size: 28px;\n\ttext-shadow: 1px 1px #0a0a0a;\n'], ['\n\tposition: absolute;\n\tcolor: #fff;\n\tfont-family: sans-serif;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\theight: 19px;\n\tmargin-top: auto;\n\tmargin-bottom: auto;\n\tfont-weight: 100;\n\tfont-size: 28px;\n\ttext-shadow: 1px 1px #0a0a0a;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Pop = require('./Pop');

var _Pop2 = _interopRequireDefault(_Pop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Hide = _styledComponents2.default.div(_templateObject);

var HideText = _styledComponents2.default.div(_templateObject2);

var Video = function (_Component) {
	_inherits(Video, _Component);

	function Video() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Video);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Video.__proto__ || Object.getPrototypeOf(Video)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			show: true,
			top: null,
			currTime: null,
			popPlaying: false,
			mute: _this.props.mute
		}, _this.setEventListeners = function () {
			window.addEventListener('scroll', _this.handleScroll);
		}, _this.handleScroll = function () {
			var node = _this.Vid.current;
			var property = node.getBoundingClientRect();
			var height = property.height * 80 / 100;
			if (document.querySelector('video').playing) {
				if (window.scrollY >= height + _this.state.top) {
					_this.setState({
						show: true,
						currTime: node.currentTime,
						popPlaying: true
					}, function () {
						node.pause();
					});
				}
			}

			if (_this.state.popPlaying) {
				if (window.scrollY <= height + _this.state.top) {
					_this.setState({
						show: false,
						popPlaying: false
					}, function () {
						var el2 = document.getElementById('pop');
						node.currentTime = el2.currentTime;
						node.play();
					});
				}
			}
		}, _this.handleChange = function (time) {
			var node = _this.Vid.current;
			_this.setState({
				currTime: time
			}, function () {
				node.currentTime = _this.state.currTime;
				node.play();
			});
		}, _this.muteVids = function () {
			var node = _this.Vid.current;
			var val = !_this.state.mute;
			_this.setState({
				mute: val
			}, function () {
				node.muted = _this.state.mute;
			});
		}, _this.playVids = function () {}, _this.closeVids = function (time) {
			var node = _this.Vid.current;
			node.currentTime = time;
			_this.setState({
				show: false,
				popPlaying: false
			});
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Video, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.Vid = _react2.default.createRef();
			var node = this.Vid.current;
			var el = document.getElementById('video-pop');
			this.setEventListeners();
			if (this.state.mute) {
				el.muted = true;
			} else {
				el.muted = false;
			}
			this.setState({
				top: ~~(window.scrollY + el.top)
			});
			Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
				get: function get() {
					return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    Src = _props.Src,
			    root = _props.root;

			return _react2.default.createElement(
				_react2.default.Fragment,
				null,
				_react2.default.createElement(
					'section',
					{ id: 'vv' },
					_react2.default.createElement('video', {
						ref: this.Vid,
						id: 'video-pop',
						className: 'choose',
						controls: true,
						src: Src
					})
				),
				this.state.show ? _react2.default.createElement(
					_react2.default.Fragment,
					null,
					_react2.default.createElement(Hide, null),
					_react2.default.createElement(
						HideText,
						null,
						'Floating Video Active'
					)
				) : null,
				_react2.default.createElement(_Pop2.default, {
					src: Src,
					root: root,
					Show: this.state.show,
					currtime: this.state.currTime,
					change: this.handleChange,
					closeVid: this.closeVids,
					muteVid: this.muteVids,
					mute: this.state.mute
				})
			);
		}
	}]);

	return Video;
}(_react.Component);

exports.default = Video;


Video.propTypes = {
	Src: _propTypes2.default.string.isRequired,
	root: _propTypes2.default.string.isRequired
};