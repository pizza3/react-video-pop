# react-video-float

[![Build Status](https://travis-ci.com/pizza3/react-video.svg?token=4NFkLbpiPxAhFzZX3Yhz&branch=master)](https://travis-ci.com/pizza3/react-video)

## Introduction

Floating video component made in react , which is draggable across any coordinate of the screen and resizable too. The working is inspired from the MacOS picture to picture feature.

## Installation

```js
npm install --save react-video-pop
```

## Usage
```js
import React, { Component } from 'react';
import Scene from '../assets/devstories.webm';
import VideoPop from 'react-video-pop';
import styled from 'styled-components';
const Title = styled.div`
	position: relative;
	text-align: center;
	background: #404b69;
	height: 200vh;
`;

const Wrapper = styled.div`
	position: relative;
	border-radius: 5px;
	width: 640px;
	height: 360px;
	overflow: hidden;
	float: left;
	margin-top: 13vh;
	margin-left: calc((100% - 640px) / 2);
`;

export default class App extends Component {
	render() {
		return (
			<Title>
				<Wrapper>
					<VideoPop Src={Scene} mute={true} root="video-root" />
				</Wrapper>
			</Title>
		);
	}
}

```
## Development

In source folder:

```bash
npm run start
npm link
```

In project:

```bash
npm link react-video-float
```

## License

MIT
