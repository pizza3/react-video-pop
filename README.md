# react-video-pop

[![Build Status](https://travis-ci.com/pizza3/react-video-pop.svg?branch=master)](https://travis-ci.com/pizza3/react-video-pop)

## Table Of Contents

-  [Introduction](#introduction)
-  [Installation](#installation)
-  [Usage](#usage)
-  [API](#api)
-  [Demo](#demo)
-  [How does it work](#how-does-it-work)
-  [TODO](#todo)
-  [Development](#development)
-  [License](#license)

## Introduction

Floating video component made in react , which is draggable across any coordinate of the screen, consist of basic controls like mute, play etc and resizable too across any corner of the window. The working is inspired from the MacOS picture to picture feature.

<p align="left">
  <img src="./demo.gif" height="283" width="450">
</p>

## Installation

```js
npm install --save react-video-pop
```

## Usage

Inside HTML file

```html
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <!-- the div where your react DOM renders everything -->
        <div id="root"></div>
        <!-- the div which will render floating video -->
        <div id='video-root'></div>
    </body>
</html>
```
Inside your js 

```js
import React, { Component } from 'react';
import Scene from '../assets/devstories.webm';
import VideoPop from 'react-video-pop';

export default class App extends Component {
    render() {
        return (
            <VideoPop Src={Scene} mute={true} autoplay={true}   root="video-root" ratio={{w:16,h:9}} />
        );
    }
}

```

## API

| Prop          | Description   | Type  | Default Value |
| ------------- |:-------------|:-----:|:-----|
| Src           | Required. A unique string to identify the component. | string  | null  |
| Poster        | Apply the thumbnail image over video before playing  | string  | null  |
| autoplay      | autoplay the video on render.                        | boolean | true  |
| mute          | mute the video before render.                        | boolean | false |
| duration      | Video duration (in seconds).                         | int     | 0     |
| root          | Required. Portal div element id attribute                      | string  | null  |
| ratio         | Required. Aspect ratio of the video src.             | object  | {w:16,h:9} | 

## Demo

[Basic Demo](https://pizza3.github.io/react-video-pop/)

## How does it work

The floating video element is made using the react portal api. Where when the user scrolls down to cenrtain limit the portal 
element gets rendered, following the ongoing video stream. The rest drag and drop animation on the floating video element is 
done with requestAnimationFrame API using the spring constant formula.

## TODO

- [ ] Synchronize the audio lag when the video modal gets shown.

## Development

In source folder:

```bash
npm run start
npm link
```

In project:

```bash
npm link react-video-pop
```

## License

MIT
