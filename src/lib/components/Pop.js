import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Controls from './Controls';
export default class Pop extends Component {
	state = {
		currtime: null,
		isDown: false,
		active: false,
		show: this.props.Show,
		mouseOver: false,
		mute: this.props.mute,
		pos: {
			x: 10,
			y: 10
		},
		dimensions: {
			w: 300,
			h: 168
		},
		rest: {
			x: window.innerWidth - (300 + 10),
			y: window.innerHeight - (168 + 10)
		},
		scale: 0
	};

	componentDidMount() {
		let el = document.getElementById('pop');
		this.Pop = React.createRef();
		this.handleEventListener();

		if (this.state.mute) {
			el.muted = true;
		} else {
			el.muted = false;
		}
		this.f, this.a, (this.v = { x: 0, y: 0 });
		this.fScale, this.aScale, (this.vScale = 0);
		this.renderAnimation();
		this.setState({
			active: true
		});
	}

	static getDerivedStateFromProps(props, state) {
		let el = document.getElementById('pop');

		if (props.currtime !== state.currtime) {
			el.currentTime = props.currtime;
			el.play();
			return {
				currtime: props.currtime,
				show: props.Show
			};
		} else if (props.Show !== state.show) {
			el.pause();
			return {
				show: props.Show
			};
		} else if (props.mute !== state.mute) {
			if (props.mute) {
				el.muted = true;
				return {
					mute: props.mute
				};
			} else {
				el.muted = false;
				return {
					mute: props.mute
				};
			}
		}

		return null;
	}

	handleEventListener = () => {
		window.addEventListener('mousemove', this.handleMove);
		document.addEventListener('mouseleave', this.handleUp);
	};

	handleDown = e => {
		this.start = { x: e.clientX, y: e.clientY };
		this.pos = this.state.pos;
		this.setState({
			isDown: true
		});
	};

	resizeDown = e => {
		this.start = { x: e.clientX, y: e.clientY };
		this.pos = this.state.pos;
		this.setState({
			resizeDown: true
		});
	};

	handleMove = e => {
		if (this.state.isDown) {
			let { width, height } = document
				.getElementById('pop')
				.getBoundingClientRect();
			let xdiff = -(this.start.x - e.clientX) + this.pos.x;
			let ydiff = -(this.start.y - e.clientY) + this.pos.y;
			this.setState({
				pos: {
					x: xdiff,
					y: ydiff
				}
			});
			if (
				e.clientX >= window.innerWidth / 2 &&
				e.clientY >= window.innerHeight / 2
			) {
				this.setState({
					rest: {
						x: window.innerWidth - (width + 10),
						y: window.innerHeight - (height + 10)
					}
				});
			} else if (
				e.clientX >= window.innerWidth / 2 &&
				e.clientY < window.innerHeight / 2
			) {
				this.setState({
					rest: {
						x: window.innerWidth - (width + 10),
						y: 10
					}
				});
			} else if (
				e.clientY >= window.innerHeight / 2 &&
				e.clientX < window.innerWidth
			) {
				this.setState({
					rest: {
						x: 10,
						y: window.innerHeight - (height + 10)
					}
				});
			} else {
				this.setState({
					rest: {
						x: 10,
						y: 10
					}
				});
			}
		}
	};

	handleUp = () => {
		this.setState({
			isDown: false
		});
	};

	handleUpdate = () => {
		let mass = 0.9;
		let damping = 0.6;
		this.f = {
			x: -0.2 * (this.state.pos.x - this.state.rest.x),
			y: -0.2 * (this.state.pos.y - this.state.rest.y)
		};
		this.a = {
			x: this.f.x / mass,
			y: this.f.y / mass
		};
		this.v = {
			x: damping * (this.v.x + this.a.x),
			y: damping * (this.v.y + this.a.y)
		};
		this.setState({
			pos: {
				x: this.state.pos.x + this.v.x,
				y: this.state.pos.y + this.v.y
			}
		});
	};

	handleScale = rest => {
		let mass = 0.9;
		let damping = 0.6;
		this.fScale = -0.2 * (this.state.scale - rest);
		this.aScale = this.fScale / mass;
		this.vScale = damping * (this.vScale + this.aScale);
		this.setState({
			scale: this.state.scale + this.vScale
		});
	};

	handleMute = () => {
		this.props.muteVid();
	};

	handleScaleDown = () => {
		let node = this.Pop.current;
		let time = node.currentTime;
		this.props.closeVid(time);
	};

	renderAnimation = () => {
		if (!this.state.isDown) {
			this.handleUpdate();
		}
		if (this.state.show) {
			this.handleScale(1);
		} else {
			this.handleScale(0);
		}

		requestAnimationFrame(this.renderAnimation);
	};

	render() {
		const root = document.getElementById(this.props.root);
		const style = {
			position: 'fixed',
			width: `${this.state.dimensions.w}px`,
			height: `${this.state.dimensions.h}px`,
			zIndex: '10',
			borderRadius: '4px',
			top: `${this.state.pos.y}px`,
			left: `${this.state.pos.x}px`,
			boxShadow: '0px 0px 41px -5px rgba(0,0,0,0.75)',
			transformOrigin: 'center',
			transform: `scale(${this.state.scale})`,
			overflow: 'hidden'
		};

		const videoStyle = {
			width: '100%',
			height: '100%'
		};
		return ReactDOM.createPortal(
			<div
				style={style}
				onMouseOver={() => {
					this.setState({
						mouseOver: true
					});
				}}
				onMouseLeave={() => {
					this.setState({
						mouseOver: false
					});
				}}
			>
				<video
					ref={this.Pop}
					id="pop"
					width="300"
					src={this.props.src}
					style={videoStyle}
					className="pop"
				/>
				<Controls
					onMouseDown={this.handleDown}
					onMouseUp={this.handleUp}
					show={this.state.mouseOver}
					close={this.handleScaleDown}
					mute={this.handleMute}
					muteState={this.state.mute}
				/>
			</div>,
			root
		);
	}
}

Pop.propTypes = {
	Show: PropTypes.bool,
	src: PropTypes.string.isRequired,
	closeVid: PropTypes.func,
	root: PropTypes.string.isRequired
};
