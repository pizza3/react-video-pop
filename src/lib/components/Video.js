import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pop from './Pop';
import Overlay from './Overlay';
class Video extends Component {
	state = {
		show: false,
		top: null,
		currTime: null,
		popPlaying: false,
		mute: this.props.mute,
		Vid: React.createRef()
	};

	static defaultProps = {
		Src: null,
		root: null,
		Poster: null,
		mute: false
	};

	componentDidMount() {
		let node = this.state.Vid.current;
		this.setEventListeners();
		if (this.state.mute) {
			node.muted = true;
		} else {
			node.muted = false;
		}
		this.setState({
			top: ~~(window.scrollY + node.top)
		});
		Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
			get: function() {
				return !!(
					this.currentTime > 0 &&
					!this.paused &&
					!this.ended &&
					this.readyState > 2
				);
			}
		});
	}

	setEventListeners = () => {
		window.addEventListener('scroll', this.handleScroll);
	};

	handleScroll = () => {
		let node = this.state.Vid.current;
		let property = node.getBoundingClientRect();
		let height = (property.height * 80) / 100;
		if (document.querySelector('video').playing) {
			if (window.scrollY >= height + this.state.top) {
				this.setState(
					{
						show: true,
						currTime: node.currentTime,
						popPlaying: true
					},
					() => {
						node.pause();
					}
				);
			}
		}

		if (this.state.popPlaying) {
			if (window.scrollY <= height + this.state.top) {
				this.setState(
					{
						show: false,
						popPlaying: false
					},
					() => {
						let el2 = document.getElementById('pop');
						node.currentTime = el2.currentTime;
						node.play();
					}
				);
			}
		}
	};

	handleChange = time => {
		let node = this.state.Vid.current;
		this.setState(
			{
				currTime: time
			},
			() => {
				node.currentTime = this.state.currTime;
				node.play();
			}
		);
	};

	muteVids = () => {
		let node = this.state.Vid.current;
		let val = !this.state.mute;
		this.setState(
			{
				mute: val
			},
			() => {
				node.muted = this.state.mute;
			}
		);
	};

	playVids = () => {};

	closeVids = time => {
		let node = this.state.Vid.current;
		node.currentTime = time;
		this.setState({
			show: false,
			popPlaying: false
		});
	};

	render() {
		const { Src, root, Poster } = this.props;
		return (
			<React.Fragment>
				<video
					ref={this.state.Vid}
					id="video-pop"
					className="choose"
					controls
					src={Src}
					poster={Poster}
				/>
				{this.state.show ? <Overlay /> : null}
				<Pop
					src={Src}
					root={root}
					Show={this.state.show}
					currtime={this.state.currTime}
					change={this.handleChange}
					closeVid={this.closeVids}
					muteVid={this.muteVids}
					mute={this.state.mute}
				/>
			</React.Fragment>
		);
	}
}

export default Video;

Video.propTypes = {
	Src: PropTypes.string,
	root: PropTypes.string,
	Poster: PropTypes.string,
	mute: PropTypes.bool
};
