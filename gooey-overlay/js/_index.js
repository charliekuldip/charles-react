'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var myColors = [
'#EE2E31',
'#F4C095',
'#679289',
'#1D7874',
'#071E22',
'#2AA399'
];

var btn = document.getElementById('btn');
var body = document.getElementsByTagName("BODY")[0];
var $path1 = document.getElementById('path01');
var $path2 = document.getElementById('path02');
var newColor;

var ease = {
  quadraticOut: function quadraticOut(t) {
    return -t * (t - 2.0);
  },
  quarticOut: function quarticOut(t) {
    return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;
  }
};

var GooeyOverlay = function () {
  function GooeyOverlay(path1, path2) {
    _classCallCheck(this, GooeyOverlay);

    this.path1 = path1;
    this.path2 = path2;
    this.duration = 1000;
    this.delay = 200;
    this.timeStart = Date.now();
    this.direction = true;
  }

  GooeyOverlay.prototype.open = function open() {
    // console.log('This is this from open: ', this);
    var rando = Math.floor((Math.random() * myColors.length-1) + 1);
    newColor = myColors[rando];

    this.path2.setAttribute('style', 'fill:'+newColor);

    this.direction = true;
    this.timeStart = Date.now();
    this.renderLoop();
  };

  GooeyOverlay.prototype.close = function close() {
    this.direction = false;
    this.timeStart = Date.now();
    this.renderLoop();
  };

  GooeyOverlay.prototype.updatePathOpen = function updatePathOpen(time) {
    var ease1 = ease.quadraticOut(Math.min(time / this.duration, 1));
    var ease2 = ease.quarticOut(Math.min(time / this.duration, 1));
    // console.log('This is this.duration: ', this.duration);
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
    var done = false;
    this.render();
    if (Date.now() - this.timeStart >= this.duration + this.delay) {
      if (!this.direction) {
        this.open();
      } else {
        // this.close();
        // done = true;
        body.setAttribute('style', 'background:'+newColor);
      }
    } else {
      requestAnimationFrame(function () {
        _this.renderLoop();
      });
    }
    // console.log('TJHis is done: ', done);
    // if(done === true) {
    //   console.log('We are done baby!');
    //   body.setAttribute('style', 'background:'+newColor);
    //   done = false;
    // }
  };

  return GooeyOverlay;
}();



var path1 = document.getElementById('path01');
var path2 = document.getElementById('path02');
var gooeyOverlay = new GooeyOverlay(path1, path2);
// gooeyOverlay.close();


btn.addEventListener('click', function(e) {
  console.log('I have been clicked!');
  gooeyOverlay.open();
  console.log(gooeyOverlay.direction)
});