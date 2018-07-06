import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Video from '../src/lib/index';

configure({
	adapter: new Adapter()
});

describe('<Video/>', () => {
	it('renders the video', () => {
		const modalRoot = global.document.createElement('div');
		modalRoot.setAttribute('id', 'video-root');
		const body = global.document.querySelector('body');
		body.appendChild(modalRoot);

		const wrapper = shallow(
			<Video
				Src={
					'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
				}
				Poster={
					'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'
				}
				mute={true}
				root="video-root"
			/>,
			{
				context: {},
				disableLifecycleMethods: true
			}
		);
		console.log(wrapper.debug());
	});
});
