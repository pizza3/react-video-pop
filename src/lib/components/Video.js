import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Hide = styled.div`
	width: 100%;
	height: 100%;
	background: #000;
	position: absolute;
`;

const Poo = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	width: 400px;
	border-radius: 7px;
	overflow: hidden;
	border-radius: 4px;
	visibility: hidden;
`;

const modalRoot = document.getElementById('modal-root');

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
	}

	setEventListeners = () => {
		window.addEventListener('scroll', this.handleScroll);
	};

	handleScroll = e => {
		let el = document.getElementById('video-pop');
		let elProperty = el.getBoundingClientRect();
		let height = (elProperty.height * 80) / 100;
		if (window.scrollY >= height + this.state.top) {
			var isMobileVersion = document.getElementsByClassName('change');
			if (isMobileVersion.length > 0) {
				// elements with class "snake--mobile" exist
			} else {
				el.className += ' change';
			}
			this.setState(
				{
					show: true,
					time: el.currentTime
				},
				() => {
					// el.pause();
				}
			);
		} else {
			el.classList.remove('change');
			this.setState(
				{
					show: false
				},
				() => {
					// el.play();
				}
			);
		}
	};

	render() {
		const { Src } = this.props;
		return (
			<React.Fragment>
				<video
					id="video-pop"
					className="choose"
					controls
					muted
					autoPlay
					src={Src}
				/>
				<Poo>
					<video
						id="video-po"
						width="300px"
						style={{ borderRadius: '4px' }}
						controls
						muted
						src={Src}
					/>
				</Poo>
			</React.Fragment>
		);
	}
}

export default Video;

Video.propTypes = {
	Src: PropTypes.string.isRequired
};
