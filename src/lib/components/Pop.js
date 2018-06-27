import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Controls from './Controls';
export default class Pop extends Component {
	state = {
		currtime: null,
		isDown: false,
		show: this.props.Show,
		pos: {
			x: 10,
			y: 10
		},
		rest: {
			x: window.innerWidth - (300 + 10),
			y: window.innerHeight - (168 + 10)
		}
	};

	componentDidMount() {
		this.handleEventListener();
		this.f = { x: 0, y: 0 };
		this.a = { x: 0, y: 0 };
		this.v = { x: 0, y: 0 };
		this.renderAnimation();
	}

	static getDerivedStateFromProps(props, state) {
		let el = document.getElementById('pop');
		if (props.currtime !== state.currtime || props.show !== state.show) {
			if (props.currtime !== state.currtime) {
				el.currentTime = props.currtime;
				el.play();
			}

			return {
				currtime: props.currtime,
				show: props.Show
			};
		}

		return null;
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.show !== prevState.show) {
			let el = document.getElementById('pop');
			let time = el.currentTime;
			el.pause();
			this.props.change(time);
		}
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

	renderAnimation = () => {
		if (!this.state.isDown) {
			this.handleUpdate();
		}
		requestAnimationFrame(this.renderAnimation);
	};

	render() {
		const root = document.getElementById(this.props.root);
		const style = {
			position: 'fixed',
			zIndex: '10',
			borderRadius: '4px',
			top: `${this.state.pos.y}px`,
			left: `${this.state.pos.x}px`,
			boxShadow: '0px 0px 41px -5px rgba(0,0,0,0.75)'
		};
		return ReactDOM.createPortal(
			<React.Fragment>
				<video
					id="pop"
					width="300"
					src={this.props.src}
					style={style}
					className="pop"
					onMouseDown={this.handleDown}
					onMouseUp={this.handleUp}
				/>
				<Controls />
			</React.Fragment>,
			root
		);
	}
}
