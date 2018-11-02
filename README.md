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

export default class App extends Component {
	render() {
		return (
            <VideoPop Src={Scene} mute={true} root="video-root" />
		);
	}
}

```

## API

| Prop           | Description                                                                                                                  | Default Value |
|----------------|------------------------------------------------------------------------------------------------------------------------------|---------------|
| src             | Required. A unique string to identify the component.                                                                         |      string         |
| mute        | mute the video before render.                                                                                                       | boolean         |
| duration       | Video duration (in  seconds).                                                                                                        | 0           |
| root       | root element id (the portal div id attritube)                                                                                            | string           |

## How does it work

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
