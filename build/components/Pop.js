'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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
            mouseOver: false,
            mute: _this.props.mute,
            play: _this.props.play,
            pos: {
                x: 10,
                y: 10
            },
            //br - bottomRight
            //tr - topRight
            //bl - bottomleft
            //tl - topLeft
            popCoordinate: 'br',
            popTranslate: {
                top: '0px',
                left: '0px'
            },
            ratio: _this.props.ratio,
            dimensions: {
                w: 300,
                h: 300 * (_this.props.ratio.h / _this.props.ratio.w)
            },
            rest: {
                x: window.innerWidth - (300 + 10),
                y: window.innerHeight - (300 * (_this.props.ratio.h / _this.props.ratio.w) + 10)
            },
            scale: 0,
            Pop: _react2.default.createRef(),
            resizeDown: false,
            resizeCursor: 'nwse-resize'
        }, _this.calculateAspect = function (a, b, c) {
            return c * (b / a);
        }, _this.handleEventListener = function () {
            window.addEventListener('mousemove', _this.handleMove);
            document.addEventListener('mouseleave', _this.handleUp);
        }, _this.handleDown = function (e) {
            e.preventDefault();
            _this.start = { x: e.clientX, y: e.clientY };
            _this.pos = _this.state.pos;
            _this.setState({
                isDown: true
            });
        }, _this.resizeDown = function (e) {
            _this.start = { x: e.clientX, y: e.clientY };
            _this.pos = _this.state.dimensions;
            _this.setState({
                resizeDown: true
            });
            _this.dim = { x: _this.pos.w, y: _this.pos.h };
            window.addEventListener('mousemove', function (e) {
                e.preventDefault();
                _this.resizeMove(e);
            });
            window.addEventListener('mouseup', function () {
                _this.resizeUp();
            });
        }, _this.resizeMove = function (e) {
            var _this$state = _this.state,
                popCoordinate = _this$state.popCoordinate,
                resizeDown = _this$state.resizeDown;

            if (resizeDown) {
                if (popCoordinate === 'tl') {
                    _this.bottomRight(e);
                } else if (popCoordinate === 'bl') {
                    _this.topLeft(e);
                } else if (popCoordinate === 'tr') {
                    _this.bottomLeft(e);
                } else if (popCoordinate === 'br') {
                    _this.topRight(e);
                }
            }
        }, _this.bottomRight = function (e) {
            var _this$state2 = _this.state,
                dimensions = _this$state2.dimensions,
                ratio = _this$state2.ratio;

            var dist = void 0;
            if (_this.start.x <= e.clientX) {
                dist = e.clientX - _this.start.x;
            } else {
                dist = e.clientX - _this.start.x;
            }
            if (dimensions.w <= window.innerWidth / 2 && dimensions.w >= 300) {
                if (_this.dim.x + dist < 300) {
                    var h = _this.calculateAspect(ratio.w, ratio.h, 300);
                    _this.setState({
                        dimensions: {
                            w: 300,
                            h: h
                        }
                    });
                } else if (_this.dim.x + dist >= window.innerWidth / 2) {
                    var _h = _this.calculateAspect(ratio.w, ratio.h, window.innerWidth / 2);
                    _this.setState({
                        dimensions: {
                            w: window.innerWidth / 2,
                            h: _h
                        }
                    });
                } else {
                    var a = _this.dim.x + dist;
                    var _h2 = _this.calculateAspect(ratio.w, ratio.h, a);
                    _this.setState({
                        dimensions: {
                            w: _this.dim.x + dist,
                            h: _h2
                        }
                    });
                }
            }
        }, _this.bottomLeft = function (e) {
            var _this$state3 = _this.state,
                dimensions = _this$state3.dimensions,
                ratio = _this$state3.ratio,
                pos = _this$state3.pos;

            var dist = void 0;
            dist = -(e.clientX - _this.start.x);

            if (dimensions.w <= window.innerWidth / 2 && dimensions.w >= 300) {
                if (_this.dim.x + dist < 300) {
                    var h = _this.calculateAspect(ratio.w, ratio.h, 300);
                    _this.setState({
                        dimensions: {
                            w: 300,
                            h: h
                        },
                        pos: {
                            x: window.innerWidth - (300 + 10),
                            y: pos.y
                        },
                        rest: {
                            x: window.innerWidth - (300 + 10),
                            y: pos.y
                        }
                    });
                } else if (_this.dim.x + dist >= window.innerWidth / 2) {
                    var _h3 = _this.calculateAspect(ratio.w, ratio.h, window.innerWidth / 2);
                    _this.setState({
                        dimensions: {
                            w: window.innerWidth / 2,
                            h: _h3
                        },
                        pos: {
                            x: window.innerWidth - (window.innerWidth / 2 + 10),
                            y: pos.y
                        },
                        rest: {
                            x: window.innerWidth - (window.innerWidth / 2 + 10),
                            y: pos.y
                        }
                    });
                } else {
                    var a = _this.dim.x + dist;
                    var _h4 = _this.calculateAspect(ratio.w, ratio.h, a);
                    _this.setState({
                        dimensions: {
                            w: _this.dim.x + dist,
                            h: _h4
                        },
                        pos: {
                            x: window.innerWidth - (_this.dim.x + dist + 10),
                            y: pos.y
                        },
                        rest: {
                            x: window.innerWidth - (_this.dim.x + dist + 10),
                            y: pos.y
                        }
                    });
                }
            }
        }, _this.topLeft = function (e) {
            var _this$state4 = _this.state,
                dimensions = _this$state4.dimensions,
                ratio = _this$state4.ratio,
                pos = _this$state4.pos;

            var dist = void 0;
            dist = e.clientX - _this.start.x;

            if (dimensions.w <= window.innerWidth / 2 && dimensions.w >= 300) {
                if (_this.dim.x + dist < 300) {
                    var h = _this.calculateAspect(ratio.w, ratio.h, 300);
                    _this.setState({
                        dimensions: {
                            w: 300,
                            h: h
                        },
                        pos: {
                            x: pos.x,
                            y: window.innerHeight - (h + 10)
                        },
                        rest: {
                            x: pos.x,
                            y: window.innerHeight - (h + 10)
                        }
                    });
                } else if (_this.dim.x + dist >= window.innerWidth / 2) {
                    var _h5 = _this.calculateAspect(ratio.w, ratio.h, window.innerWidth / 2);
                    _this.setState({
                        dimensions: {
                            w: window.innerWidth / 2,
                            h: _h5
                        },
                        pos: {
                            x: pos.x,
                            y: window.innerHeight - (_h5 + 10)
                        },
                        rest: {
                            x: pos.x,
                            y: window.innerHeight - (_h5 + 10)
                        }
                    });
                } else {
                    var a = _this.dim.x + dist;
                    var _h6 = _this.calculateAspect(ratio.w, ratio.h, a);
                    _this.setState({
                        dimensions: {
                            w: _this.dim.x + dist,
                            h: _h6
                        },
                        pos: {
                            x: pos.x,
                            y: window.innerHeight - (_h6 + 10)
                        },
                        rest: {
                            x: pos.x,
                            y: window.innerHeight - (_h6 + 10)
                        }
                    });
                }
            }
        }, _this.topRight = function (e) {
            var _this$state5 = _this.state,
                dimensions = _this$state5.dimensions,
                ratio = _this$state5.ratio;

            var dist = void 0;
            dist = -(e.clientX - _this.start.x);

            if (dimensions.w <= window.innerWidth / 2 && dimensions.w >= 300) {
                if (_this.dim.x + dist < 300) {
                    var h = _this.calculateAspect(ratio.w, ratio.h, 300);
                    _this.setState({
                        dimensions: {
                            w: 300,
                            h: h
                        },
                        pos: {
                            x: window.innerWidth - (300 + 10),
                            y: window.innerHeight - (h + 10)
                        },
                        rest: {
                            x: window.innerWidth - (300 + 10),
                            y: window.innerHeight - (h + 10)
                        }
                    });
                } else if (_this.dim.x + dist >= window.innerWidth / 2) {
                    var _h7 = _this.calculateAspect(ratio.w, ratio.h, window.innerWidth / 2);
                    _this.setState({
                        dimensions: {
                            w: window.innerWidth / 2,
                            h: _h7
                        },
                        pos: {
                            x: window.innerWidth - (window.innerWidth / 2 + 10),
                            y: window.innerHeight - (_h7 + 10)
                        },
                        rest: {
                            x: window.innerWidth - (window.innerWidth / 2 + 10),
                            y: window.innerHeight - (_h7 + 10)
                        }
                    });
                } else {
                    var a = _this.dim.x + dist;
                    var _h8 = _this.calculateAspect(ratio.w, ratio.h, a);
                    _this.setState({
                        dimensions: {
                            w: _this.dim.x + dist,
                            h: _h8
                        },
                        pos: {
                            x: window.innerWidth - (_this.dim.x + dist + 10),
                            y: window.innerHeight - (_h8 + 10)
                        },
                        rest: {
                            x: window.innerWidth - (_this.dim.x + dist + 10),
                            y: window.innerHeight - (_h8 + 10)
                        }
                    });
                }
            }
        }, _this.resizeUp = function () {
            _this.setState({
                resizeDown: false
            });
        }, _this.handleMove = function (e) {
            e.preventDefault();
            if (_this.state.isDown) {
                var node = _this.state.Pop.current;

                var _node$getBoundingClie = node.getBoundingClientRect(),
                    width = _node$getBoundingClie.width,
                    height = _node$getBoundingClie.height;

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
                        },
                        popCoordinate: 'br',
                        popTranslate: {
                            top: '0px',
                            left: '0px'
                        },
                        resizeCursor: 'nwse-resize'
                    });
                } else if (e.clientX >= window.innerWidth / 2 && e.clientY < window.innerHeight / 2) {
                    _this.setState({
                        rest: {
                            x: window.innerWidth - (width + 10),
                            y: 10
                        },
                        popCoordinate: 'tr',
                        popTranslate: {
                            top: 'calc(100% - 10px)',
                            left: '0px'
                        },
                        resizeCursor: 'nesw-resize'
                    });
                } else if (e.clientY >= window.innerHeight / 2 && e.clientX < window.innerWidth) {
                    _this.setState({
                        rest: {
                            x: 10,
                            y: window.innerHeight - (height + 10)
                        },
                        popCoordinate: 'bl',
                        popTranslate: {
                            top: '0px',
                            left: 'calc(100% - 10px)'
                        },
                        resizeCursor: 'nesw-resize'

                    });
                } else {
                    _this.setState({
                        rest: {
                            x: 10,
                            y: 10
                        },
                        popCoordinate: 'tl',
                        popTranslate: {
                            top: 'calc(100% - 10px)',
                            left: 'calc(100% - 10px)'
                        },
                        resizeCursor: 'nwse-resize'
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
            var mass = 0.9;
            var damping = 0.6;
            _this.fScale = -0.2 * (_this.state.scale - rest);
            _this.aScale = _this.fScale / mass;
            _this.vScale = damping * (_this.vScale + _this.aScale);
            _this.setState({
                scale: _this.state.scale + _this.vScale
            });
        }, _this.handleMute = function () {
            _this.props.muteVid();
        }, _this.handlePlay = function () {
            _this.props.playVid();
        }, _this.handleScaleDown = function () {
            var node = _this.state.Pop.current;
            var time = node.currentTime;
            _this.props.closeVid(time);
        }, _this.renderAnimation = function () {
            if (!_this.state.isDown) {
                if (!_this.state.resizeDown) {
                    _this.handleUpdate();
                }
            }
            _this.state.show ? _this.handleScale(1) : _this.handleScale(0);
            requestAnimationFrame(_this.renderAnimation);
        }, _this.checkUpdate = function (props, state) {
            var node = state.Pop.current;
            if (props.currtime !== state.currtime) {
                node.currentTime = props.currtime;
                node.play();
                _this.setState({
                    currtime: props.currtime,
                    show: props.Show
                });
            } else if (props.Show !== state.show) {
                node.pause();
                _this.setState({
                    show: props.Show
                });
            } else if (props.mute !== state.mute) {
                if (props.mute) {
                    node.muted = true;
                    _this.setState({
                        mute: props.mute
                    });
                } else {
                    node.muted = false;
                    _this.setState({
                        mute: props.mute
                    });
                }
            } else if (props.play !== state.play) {
                if (props.play) {
                    node.play();
                    _this.setState({
                        play: props.play
                    });
                } else {
                    node.pause();
                    _this.setState({
                        play: props.play
                    });
                }
            }
            // return null;
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Pop, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var node = this.state.Pop.current;
            this.handleEventListener();
            if (this.state.mute) {
                node.muted = true;
            } else {
                node.muted = false;
            }
            this.f, this.a, this.v = { x: 0, y: 0 };
            this.fScale, this.aScale, this.vScale = 0;
            this.renderAnimation();
            this.setState({
                active: true
            });
        }

        // static getDerivedStateFromProps(props, state) {
        //     let node = state.Pop.current;
        //     if (props.currtime !== state.currtime) {
        //         node.currentTime = props.currtime;
        //         // console.log(node.currentTime);
        //         node.play();
        //         return {
        //             currtime: props.currtime,
        //             show: props.Show
        //         };
        //     } else if (props.Show !== state.show) {
        //         node.pause();
        //         return {
        //             show: props.Show
        //         };
        //     } else if (props.mute !== state.mute) {
        //         if (props.mute) {
        //             node.muted = true;
        //             return {
        //                 mute: props.mute
        //             };
        //         } else {
        //             node.muted = false;
        //             return {
        //                 mute: props.mute
        //             };
        //         }
        //     } else if (props.play !== state.play) {
        //         if (props.play) {
        //             node.play();
        //             return {
        //                 play: props.play
        //             };
        //         } else {
        //             node.pause();
        //             return {
        //                 play: props.play
        //             };
        //         }
        //     }
        //     return null;
        // }

        // position of the resize div

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            this.checkUpdate(this.props, this.state);
            var resizeCursor = this.state.resizeCursor;

            var root = document.getElementById(this.props.root);
            var style = {
                position: 'fixed',
                width: this.state.dimensions.w + 'px',
                height: this.state.dimensions.h + 'px',
                zIndex: '10',
                borderRadius: '4px',
                top: this.state.pos.y + 'px',
                left: this.state.pos.x + 'px',
                boxShadow: '0px 0px 41px -5px rgba(0,0,0,0.75)',
                transformOrigin: 'center',
                transform: 'scale(' + this.state.scale + ')',
                overflow: 'hidden'
            };

            var videoStyle = {
                width: '100%',
                height: '100%'
            };

            var resize = {
                position: 'absolute',
                width: '10px',
                height: '10px',
                background: 'transparent',
                left: this.state.popTranslate.left,
                top: this.state.popTranslate.top,
                cursor: resizeCursor
            };
            return _reactDom2.default.createPortal(_react2.default.createElement(
                'div',
                {
                    style: style,
                    onMouseOver: function onMouseOver() {
                        _this2.setState({
                            mouseOver: true
                        });
                    },
                    onMouseLeave: function onMouseLeave() {
                        _this2.setState({
                            mouseOver: false
                        });
                    }
                },
                _react2.default.createElement('video', {
                    ref: this.state.Pop,
                    id: 'pop',
                    width: '300',
                    src: this.props.src,
                    style: videoStyle,
                    className: 'pop'
                }),
                _react2.default.createElement(_Controls2.default, {
                    onMouseDown: this.handleDown,
                    onMouseUp: this.handleUp,
                    show: this.state.mouseOver,
                    close: this.handleScaleDown,
                    mute: this.handleMute,
                    play: this.props.playVid,
                    muteState: this.state.mute,
                    playState: this.state.play
                }),
                _react2.default.createElement('div', { style: resize, onMouseDown: this.resizeDown })
            ), root);
        }
    }]);

    return Pop;
}(_react.Component);

exports.default = Pop;


Pop.propTypes = {
    Show: _propTypes2.default.bool,
    mute: _propTypes2.default.bool,
    play: _propTypes2.default.bool,
    src: _propTypes2.default.string,
    closeVid: _propTypes2.default.func,
    muteVid: _propTypes2.default.func,
    playVid: _propTypes2.default.func,
    root: _propTypes2.default.string,
    ratio: _propTypes2.default.object
};