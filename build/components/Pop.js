'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Controls = require('./Controls');

var _Controls2 = _interopRequireDefault(_Controls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pop = function (_Component) {
	_inherits(Pop, _Component);

	function Pop() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Pop);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Pop.__proto__ || Object.getPrototypeOf(Pop)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			currtime: null,
			isDown: false,
			active: false,
			show: _this.props.Show,
			pos: {
				x: 10,
				y: 10
			},
			rest: {
				x: window.innerWidth - (300 + 10),
				y: window.innerHeight - (168 + 10)
			},
			scale: 0
		}, _this.handleEventListener = function () {
			window.addEventListener('mousemove', _this.handleMove);
			document.addEventListener('mouseleave', _this.handleUp);
		}, _this.handleDown = function (e) {
			_this.start = { x: e.clientX, y: e.clientY };
			_this.pos = _this.state.pos;
			_this.setState({
				isDown: true
			});
		}, _this.handleMove = function (e) {
			if (_this.state.isDown) {
				var _document$getElementB = document.getElementById('pop').getBoundingClientRect(),
				    width = _document$getElementB.width,
				    height = _document$getElementB.height;

				var xdiff = -(_this.start.x - e.clientX) + _this.pos.x;
				var ydiff = -(_this.start.y - e.clientY) + _this.pos.y;
				_this.setState({
					pos: {
						x: xdiff,
						y: ydiff
					}
				});
				if (e.clientX >= window.innerWidth / 2 && e.clientY >= window.innerHeight / 2) {
					_this.setState({
						rest: {
							x: window.innerWidth - (width + 10),
							y: window.innerHeight - (height + 10)
						}
					});
				} else if (e.clientX >= window.innerWidth / 2 && e.clientY < window.innerHeight / 2) {
					_this.setState({
						rest: {
							x: window.innerWidth - (width + 10),
							y: 10
						}
					});
				} else if (e.clientY >= window.innerHeight / 2 && e.clientX < window.innerWidth) {
					_this.setState({
						rest: {
							x: 10,
							y: window.innerHeight - (height + 10)
						}
					});
				} else {
					_this.setState({
						rest: {
							x: 10,
							y: 10
						}
					});
				}
			}
		}, _this.handleUp = function () {
			_this.setState({
				isDown: false
			});
		}, _this.handleUpdate = function () {
			var mass = 0.9;
			var damping = 0.6;
			_this.f = {
				x: -0.2 * (_this.state.pos.x - _this.state.rest.x),
				y: -0.2 * (_this.state.pos.y - _this.state.rest.y)
			};
			_this.a = {
				x: _this.f.x / mass,
				y: _this.f.y / mass
			};
			_this.v = {
				x: damping * (_this.v.x + _this.a.x),
				y: damping * (_this.v.y + _this.a.y)
			};
			_this.setState({
				pos: {
					x: _this.state.pos.x + _this.v.x,
					y: _this.state.pos.y + _this.v.y
				}
			});
		}, _this.handleScale = function (rest) {
			var mass = 0.5;
			var damping = 0.6;
			_this.fScale = -0.2 * (_this.state.scale - rest);
			_this.aScale = _this.fScale / mass;
			_this.vScale = damping * (_this.vScale + _this.aScale);
			_this.setState({
				scale: _this.state.scale + _this.vScale
			});
		}, _this.renderAnimation = function () {
			if (!_this.state.isDown) {
				_this.handleUpdate();
			}
			if (_this.state.show) {
				_this.handleScale(1);
			} else {
				_this.handleScale(0);
			}

			requestAnimationFrame(_this.renderAnimation);
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Pop, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.handleEventListener();
			this.f, this.a, this.v = { x: 0, y: 0 };
			this.fScale, this.aScale, this.vScale = 0;
			this.renderAnimation();
			this.setState({
				active: true
			});
			Object.defineProperty(HTMLMediaElement.prototype, 'playingPop', {
				get: function get() {
					return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var root = document.getElementById(this.props.root);
			var videoStyle = {
				position: 'absolute',
				borderRadius: '4px'
			};
			var style = {
				position: 'fixed',
				zIndex: '10',
				borderRadius: '4px',
				top: this.state.pos.y + 'px',
				left: this.state.pos.x + 'px',
				boxShadow: '0px 0px 41px -5px rgba(0,0,0,0.75)',
				transformOrigin: 'center',
				transform: 'scale(' + this.state.scale + ')',
				overflow: 'hidden'
			};
			return _reactDom2.default.createPortal(_react2.default.createElement(
				'div',
				{ style: style },
				_react2.default.createElement('video', {
					id: 'pop',
					width: '300',
					src: this.props.src,
					style: videoStyle,
					className: 'pop',
					onMouseDown: this.handleDown,
					onMouseUp: this.handleUp
				}),
				_react2.default.createElement(_Controls2.default, null)
			), root);
		}
	}], [{
		key: 'getDerivedStateFromProps',
		value: function getDerivedStateFromProps(props, state) {
			var el = document.getElementById('pop');
			if (props.currtime !== state.currtime) {
				el.currentTime = props.currtime;
				el.play();
				return {
					currtime: props.currtime
				};
			}
			if (props.Show !== state.show) {
				if (props.Show === true) {
					el.currentTime = props.currtime;
					el.play();
					return {
						show: props.Show
					};
				} else {
					el.pause();
					return {
						show: props.Show
					};
				}
			}

			return null;
		}
	}]);

	return Pop;
}(_react.Component);

exports.default = Pop;