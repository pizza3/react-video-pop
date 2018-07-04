import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Pop from './Pop';
const Hide = styled.div`
	width: 100%;
	height: 100%;
	background: #2b2b2b;
	position: absolute;
	top: 0;
	opacity: 0.8;
`;

const HideText = styled.div`
	position: absolute;
	color: #fff;
	font-family: sans-serif;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	height: 19px;
	margin-top: auto;
	margin-bottom: auto;
	font-weight: 100;
	font-size: 28px;
	text-shadow: 1px 1px #0a0a0a;
`;

class Video extends Component {
	state = {
		show: false,
		top: null,
		currTime: null,
		popPlaying: false
	};

	componentDidMount() {
		this.setEventListeners();
		let el = document.getElementById('video-pop').getBoundingClientRect();
		this.setState({
			top: ~~(window.scrollY + el.top)
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
		let el = document.getElementById('video-pop');
		let elProperty = el.getBoundingClientRect();
		let height = (elProperty.height * 80) / 100;
		if (document.querySelector('video').playing) {
			if (window.scrollY >= height + this.state.top) {
				this.setState(
					{
						show: true,
						currTime: el.currentTime,
						popPlaying: true
					},
					() => {
						el.pause();
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
						el.currentTime = el2.currentTime;
						el.play();
					}
				);
			}
		}
	};

	handleChange = time => {
		let el = document.getElementById('video-pop');
		this.setState(
			{
				currTime: time
			},
			() => {
				el.currentTime = this.state.currTime;
				el.play();
			}
		);
	};

	render() {
		const { Src, root } = this.props;
		return (
			<React.Fragment>
				<section id="vv">
					<video id="video-pop" className="choose" controls src={Src} />
				</section>
				{this.state.show ? (
					<React.Fragment>
						<Hide />
						<HideText>Floating Video Active</HideText>
					</React.Fragment>
				) : null}
				<Pop
					src={Src}
					root={root}
					Show={this.state.show}
					currtime={this.state.currTime}
					change={this.handleChange}
				/>
			</React.Fragment>
		);
	}
}

export default Video;

Video.propTypes = {
	Src: PropTypes.string.isRequired,
	root: PropTypes.string.isRequired
};
