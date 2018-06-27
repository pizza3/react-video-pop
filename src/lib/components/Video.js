import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Pop from './Pop';
const Hide = styled.div`
	width: 100%;
	height: 100%;
	background: #2b2b2b;
	position: absolute;
	visibility: hidden;
	top: 0;
`;

class Video extends Component {
	state = {
		show: false,
		top: null,
		currTime: null
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
						currTime: el.currentTime
					},
					() => {
						el.pause();
					}
				);
			} else {
				this.setState(
					{
						show: false
					},
					() => {
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
				<video id="video-pop" className="choose" controls src={Src} />
				<Hide />
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
