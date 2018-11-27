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
        play: this.props.play,
        pos: {
            x: 10,
            y: 10
        },
        //br - bottomRight
        //tr - topRight
        //bl - bottomleft
        //tl - topLeft
        popCoordinate:'br',
        popTranslate:{
            top:'0px',
            left:'0px'
        },
        ratio:this.props.ratio,
        dimensions: {
            w: 300,
            h: 300*(this.props.ratio.h/this.props.ratio.w) 
        },
        rest: {
            x: window.innerWidth - (300 + 10),
            y: window.innerHeight - (300*(this.props.ratio.h/this.props.ratio.w) + 10)
        },
        scale: 0,
        Pop: React.createRef(),
        resizeDown: false,
        resizeCursor:'nwse-resize'
    };

    componentDidMount() {
        let node = this.state.Pop.current;
        this.handleEventListener();
        if (this.state.mute) {
            node.muted = true;
        } else {
            node.muted = false;
        }
        this.f, this.a, (this.v = { x: 0, y: 0 });
        this.fScale, this.aScale, (this.vScale = 0);
        this.renderAnimation();
        this.setState({
            active: true
        });
    }

    calculateAspect = (a,b,c)=>{
        return c*(b/a);
    }

    handleEventListener = () => {
        window.addEventListener('mousemove', this.handleMove);
        document.addEventListener('mouseleave', this.handleUp);
    };

    handleDown = e => {
        e.preventDefault();
        this.start = { x: e.clientX, y: e.clientY };
        this.pos = this.state.pos;
        this.setState({
            isDown: true
        });
    };

    resizeDown = e => {
        this.start = { x: e.clientX, y: e.clientY };
        this.pos = this.state.dimensions;
        this.setState({
            resizeDown: true
        });
        this.dim={x:this.pos.w,y:this.pos.h};
        window.addEventListener('mousemove',(e)=>{
            e.preventDefault();
            this.resizeMove(e);
        });
        window.addEventListener('mouseup',()=>{this.resizeUp();});
    };

    resizeMove=(e)=>{
        let { popCoordinate,resizeDown}= this.state;
        if(resizeDown){
            if(popCoordinate==='tl'){
                this.bottomRight(e);
            }
            else if(popCoordinate==='bl'){
                this.topLeft(e);
            }
            else if(popCoordinate==='tr'){
                this.bottomLeft(e);
            }
            else if(popCoordinate==='br'){
                this.topRight(e);
            }
        }
    }
    
    // position of the resize div
    bottomRight = e =>{
        let {dimensions, ratio}= this.state;
        let dist;
        if(this.start.x<=e.clientX){
            dist = e.clientX - this.start.x;
        }
        else{
            dist = e.clientX - this.start.x;
        }
        if(dimensions.w <= window.innerWidth/2 && dimensions.w >= 300){
            if(this.dim.x + dist < 300){
                let h = this.calculateAspect(ratio.w,ratio.h,300);
                this.setState({
                    dimensions:{
                        w:300,
                        h:h
                    }
                });
            }
            else if(this.dim.x + dist >= window.innerWidth/2){
                let h = this.calculateAspect(ratio.w,ratio.h,window.innerWidth/2);
                this.setState({
                    dimensions:{
                        w:window.innerWidth/2,
                        h:h
                    }
                });
            }
            else{
                let a = this.dim.x + dist;
                let h = this.calculateAspect(ratio.w,ratio.h,a);                    
                this.setState({
                    dimensions:{
                        w:this.dim.x + dist,
                        h:h
                    }
                });
            }
        }
    }

    bottomLeft=(e)=>{
        let {dimensions, ratio, pos}= this.state;
        let dist;
        dist = -(e.clientX - this.start.x);
    
        if(dimensions.w <= window.innerWidth/2 && dimensions.w >= 300){
            if(this.dim.x + dist < 300){
                let h = this.calculateAspect(ratio.w,ratio.h,300);
                this.setState({
                    dimensions:{
                        w:300,
                        h:h
                    },
                    pos:{
                        x:window.innerWidth - (300 +10),
                        y:pos.y
                    },
                    rest:{
                        x:window.innerWidth - (300 +10),
                        y:pos.y
                    }
                });
            }
            else if(this.dim.x + dist >= window.innerWidth/2){
                let h = this.calculateAspect(ratio.w,ratio.h,window.innerWidth/2);
                this.setState({
                    dimensions:{
                        w:window.innerWidth/2,
                        h:h
                    },
                    pos:{
                        x:window.innerWidth - (window.innerWidth/2 +10),
                        y:pos.y
                    },
                    rest:{
                        x:window.innerWidth - (window.innerWidth/2 +10),
                        y:pos.y
                    }
                });
            }
            else{
                let a = this.dim.x + dist;
                let h = this.calculateAspect(ratio.w,ratio.h,a);                    
                this.setState({
                    dimensions:{
                        w:this.dim.x + dist,
                        h:h
                    },
                    pos:{
                        x:window.innerWidth - (this.dim.x +dist +10),
                        y:pos.y
                    },
                    rest:{
                        x:window.innerWidth - (this.dim.x +dist +10),
                        y:pos.y
                    }
                });
            }
        }

    }

    topLeft=(e)=>{
        let {dimensions, ratio, pos}= this.state;
        let dist;
        dist = e.clientX - this.start.x;
    
        if(dimensions.w <= window.innerWidth/2 && dimensions.w >= 300){
            if(this.dim.x + dist < 300){
                let h = this.calculateAspect(ratio.w,ratio.h,300);
                this.setState({
                    dimensions:{
                        w:300,
                        h:h
                    },
                    pos:{
                        x:pos.x,
                        y:window.innerHeight - (h +10)
                    },
                    rest:{
                        x:pos.x,
                        y:window.innerHeight - (h +10)
                    }
                });
            }
            else if(this.dim.x + dist >= window.innerWidth/2){
                let h = this.calculateAspect(ratio.w,ratio.h,window.innerWidth/2);
                this.setState({
                    dimensions:{
                        w:window.innerWidth/2,
                        h:h
                    },
                    pos:{
                        x:pos.x,
                        y:window.innerHeight - (h +10)
                    },
                    rest:{
                        x:pos.x,
                        y:window.innerHeight - (h +10)
                    }
                });
            }
            else{
                let a = this.dim.x + dist;
                let h = this.calculateAspect(ratio.w,ratio.h,a);                    
                this.setState({
                    dimensions:{
                        w:this.dim.x + dist,
                        h:h
                    },
                    pos:{
                        x:pos.x,
                        y:window.innerHeight - (h +10)
                    },
                    rest:{
                        x:pos.x,
                        y:window.innerHeight - (h +10)
                    }
                });
            }
        }
    }

    topRight=(e)=>{
        let {dimensions, ratio}= this.state;
        let dist;
        dist = -(e.clientX - this.start.x);
    
        if(dimensions.w <= window.innerWidth/2 && dimensions.w >= 300){
            if(this.dim.x + dist < 300){
                let h = this.calculateAspect(ratio.w,ratio.h,300);
                this.setState({
                    dimensions:{
                        w:300,
                        h:h
                    },
                    pos:{
                        x:window.innerWidth - (300 +10),
                        y:window.innerHeight - (h +10)
                    },
                    rest:{
                        x:window.innerWidth - (300 +10),
                        y:window.innerHeight - (h +10)
                    }
                });
            }
            else if(this.dim.x + dist >= window.innerWidth/2){
                let h = this.calculateAspect(ratio.w,ratio.h,window.innerWidth/2);
                this.setState({
                    dimensions:{
                        w:window.innerWidth/2,
                        h:h
                    },
                    pos:{
                        x:window.innerWidth - (window.innerWidth/2 +10),
                        y:window.innerHeight - (h +10)
                    },
                    rest:{
                        x:window.innerWidth - (window.innerWidth/2 +10),
                        y:window.innerHeight - (h +10)
                    }
                });
            }
            else{
                let a = this.dim.x + dist;
                let h = this.calculateAspect(ratio.w,ratio.h,a);                    
                this.setState({
                    dimensions:{
                        w:this.dim.x + dist,
                        h:h
                    },
                    pos:{
                        x:window.innerWidth - (this.dim.x +dist +10),
                        y:window.innerHeight - (h +10)
                    },
                    rest:{
                        x:window.innerWidth - (this.dim.x +dist +10),
                        y:window.innerHeight - (h +10)
                    }
                });
            }
        }
    }

    resizeUp=()=>{
        this.setState({
            resizeDown:false
        });
    }

    handleMove = e => {
        e.preventDefault();
        if (this.state.isDown) {
            let node = this.state.Pop.current;
            let { width, height } = node.getBoundingClientRect();
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
                    },
                    popCoordinate:'br',
                    popTranslate:{
                        top:'0px',
                        left:'0px'
                    },
                    resizeCursor:'nwse-resize'
                });
            } else if (
                e.clientX >= window.innerWidth / 2 &&
                e.clientY < window.innerHeight / 2
            ) {
                this.setState({
                    rest: {
                        x: window.innerWidth - (width + 10),
                        y: 10
                    },
                    popCoordinate:'tr',
                    popTranslate:{
                        top:'calc(100% - 10px)',
                        left:'0px'
                    },
                    resizeCursor:'nesw-resize'
                });
            } else if (
                e.clientY >= window.innerHeight / 2 &&
                e.clientX < window.innerWidth
            ) {
                this.setState({
                    rest: {
                        x: 10,
                        y: window.innerHeight - (height + 10)
                    },
                    popCoordinate:'bl',
                    popTranslate:{
                        top:'0px',
                        left:'calc(100% - 10px)'
                    },
                    resizeCursor:'nesw-resize'

                });
            } else {
                this.setState({
                    rest: {
                        x: 10,
                        y: 10,
                    },
                    popCoordinate:'tl',
                    popTranslate:{
                        top:'calc(100% - 10px)',
                        left:'calc(100% - 10px)'
                    },
                    resizeCursor:'nwse-resize'
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

    handlePlay = () => {
        this.props.playVid();
    };

    handleScaleDown = () => {
        let node = this.state.Pop.current;
        let time = node.currentTime;
        this.props.closeVid(time);
    };

    renderAnimation = () => {
        if (!this.state.isDown) {
            if(!this.state.resizeDown){
                this.handleUpdate();
            }
        }
        this.state.show?
            this.handleScale(1):
            this.handleScale(0);
        requestAnimationFrame(this.renderAnimation);
    };

    checkUpdate=(props,state)=>{
        let node = state.Pop.current;
        if (props.currtime !== state.currtime) {
            node.currentTime = props.currtime;
            node.play();
            this.setState({
                currtime: props.currtime,
                show: props.Show
            }) ;
        } else if (props.Show !== state.show) {
            node.pause();
            this.setState({
                show: props.Show
            });
        } else if (props.mute !== state.mute) {
            if (props.mute) {
                node.muted = true;
                this.setState({
                    mute: props.mute
                });
            } else {
                node.muted = false;
                this.setState({
                    mute: props.mute
                });
            }
        } 
        else if (props.play !== state.play) {
            if (props.play) {
                node.play();
                this.setState({
                    play: props.play
                });
            } else {
                node.pause();
                this.setState({
                    play: props.play
                });
            }
        }
    }

    render() {
        this.checkUpdate(this.props,this.state);
        const {resizeCursor} = this.state;
        const root = document.getElementById(this.props.root);
        const style = {
            position: 'fixed',
            width: `${this.state.dimensions.w}px`,
            height: `${this.state.dimensions.h}px`,
            zIndex: '10',
            borderRadius: '4px',
            top:`${this.state.pos.y}px`,
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

        const resize = {
            position:'absolute',
            width:'10px',
            height:'10px',
            background:'transparent',
            left:this.state.popTranslate.left,
            top:this.state.popTranslate.top,
            cursor:resizeCursor
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
                    ref={this.state.Pop}
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
                    play={ this.props.playVid}
                    muteState={this.state.mute}
                    playState={this.state.play}
                />
                <div style={resize} onMouseDown={this.resizeDown}></div>
            </div>,
            root
        );
    }
}

Pop.propTypes = {
    Show: PropTypes.bool,
    mute: PropTypes.bool,
    play: PropTypes.bool,
    src: PropTypes.string,
    closeVid: PropTypes.func,
    muteVid: PropTypes.func,
    playVid: PropTypes.func,
    root: PropTypes.string,
    ratio: PropTypes.object
};
