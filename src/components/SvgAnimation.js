import React, { Component } from 'react';

const myColors = [
'#EE2E31',
'#F4C095',
'#679289',
'#1D7874',
'#071E22',
'#2AA399'
];

const ease = {
  quadraticOut: function quadraticOut(t) {
    return -t * (t - 2.0);
  },
  quarticOut: function quarticOut(t) {
    return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;
  }
};


const GooeyOverlay = function () {
  function GooeyOverlay(path1, path2) {
    this.path1 = path1;
    this.path2 = path2;
    this.duration = 750;
    this.delay =250;
    this.timeStart = Date.now();
    this.direction = true;
    this.animating = false;
  }

  GooeyOverlay.prototype.myHandler = function myHandler(e) {
    e.preventDefault();
    return false;
  };

  GooeyOverlay.prototype.open = function open() {

    document.body.addEventListener('touch', this.myHandler);
    document.body.className = 'hide-overflow';

    this.direction = false;
    this.timeStart = Date.now();
    this.animating = true;
    this.renderLoop();
  };

  GooeyOverlay.prototype.close = function close() {
    // SET COLOR ON BODY AND SVG
    var rando = Math.floor((Math.random() * myColors.length-1) + 1);
    this.path2.setAttribute('style', 'fill:'+myColors[rando]);

    this.direction = true;
    this.timeStart = Date.now();
    this.renderLoop();
  };

  GooeyOverlay.prototype.updatePathOpen = function updatePathOpen(time) {
    var ease1 = ease.quadraticOut(Math.min(time / this.duration, 1));
    var ease2 = ease.quarticOut(Math.min(time / this.duration, 1));
    return '\n      M ' + (100 - ease2 * 100) + ' 0\n      Q ' + (100 - ease2 * 100) + ' 12.5 ' + (100 - ease1 * 100) + ' 25\n      T ' + (100 - ease1 * 100) + ' 50\n      T ' + (100 - ease1 * 100) + ' 75\n      T ' + (100 - ease2 * 100) + ' 100\n      H 100\n      V 0\n    ';
  };

  GooeyOverlay.prototype.updatePathClose = function updatePathClose(time) {
    var ease1 = ease.quadraticOut(Math.min(time / this.duration, 1));
    var ease2 = ease.quarticOut(Math.min(time / this.duration, 1));
    return '\n      M 0 0\n      H ' + (100 - ease2 * 100) + '\n      Q ' + (100 - ease2 * 100) + ' 12.5 ' + (100 - ease1 * 100) + ' 25\n      T ' + (100 - ease1 * 100) + ' 50\n      T ' + (100 - ease1 * 100) + ' 75\n      T ' + (100 - ease2 * 100) + ' 100\n      H 0\n      V 0\n    ';
  };

  GooeyOverlay.prototype.render = function render() {
    if (this.direction) {
      this.path1.setAttribute('d', this.updatePathOpen(Date.now() - this.timeStart));
      this.path2.setAttribute('d', this.updatePathOpen(Date.now() - (this.timeStart + this.delay)));
    } else {
      this.path1.setAttribute('d', this.updatePathClose(Date.now() - (this.timeStart + this.delay)));
      this.path2.setAttribute('d', this.updatePathClose(Date.now() - this.timeStart));
    }
  };

  GooeyOverlay.prototype.renderLoop = function renderLoop() {
    var _this = this;
    this.render();

    if (Date.now() - this.timeStart >= this.duration + this.delay) {
      if (!this.direction) {
        console.log('We are done with anination!');
        document.body.removeEventListener('touch', this.myHandler);
        document.body.className = 'ready';
        this.animating = false;
      } else {
        this.open();
      }
    } else {
      requestAnimationFrame(function () {
        _this.renderLoop();
      });
    }
  };

  return GooeyOverlay;
}();

class SvgAnimation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      animating:false
    };
  } 

  componentDidMount() {
    this.gooeyOverlay = new GooeyOverlay(this.refs.path1, this.refs.path2, this);
  }

  componentWillUnmount() {
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('FROM SVG THis is componentWillUpdate!');
  }

  componentDidUpdate(prevProps, prevState) {
      console.log('FROM SVG THis is from componentDidUpdate!');
  }

  shouldComponentUpdate(nextProps, nextState) {
      this.gooeyOverlay.close();
      console.log('FROM SVG THis is from shouldComponentUpdate!');
      return false;
  }

  render() {
    return (
      <svg id="page-animation" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path className="path01" id="path01" d="" ref="path1"></path>
          <path className="path02" id="path02" d="" ref="path2"></path>
      </svg>
    );
    }
}


export default SvgAnimation;