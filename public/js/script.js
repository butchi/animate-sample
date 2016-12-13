(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AnimKanpai = function AnimKanpai() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  _classCallCheck(this, AnimKanpai);

  var canvas, stage, exportRoot;
  function init() {
    canvas = document.getElementById("canvas");
    images = images || {};
    ss = ss || {};
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.loadManifest(lib.properties.manifest);
  }
  function handleFileLoad(evt) {
    if (evt.item.type == "image") {
      images[evt.item.id] = evt.result;
    }
  }
  function handleComplete(evt) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;
    for (i = 0; i < ssMetadata.length; i++) {
      ss[ssMetadata[i].name] = new createjs.SpriteSheet({ "images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames });
    }
    exportRoot = new lib.kanpai();
    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    //Registers the "tick" event listener.
    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);
    //Code to support hidpi screens and responsive scaling.
    (function (isResp, respDim, isScale, scaleType) {
      var lastW,
          lastH,
          lastS = 1;
      window.addEventListener('resize', resizeCanvas);
      resizeCanvas();
      function resizeCanvas() {
        var w = lib.properties.width,
            h = lib.properties.height;
        var iw = window.innerWidth,
            ih = window.innerHeight;
        var pRatio = window.devicePixelRatio,
            xRatio = iw / w,
            yRatio = ih / h,
            sRatio = 1;
        if (isResp) {
          if (respDim == 'width' && lastW == iw || respDim == 'height' && lastH == ih) {
            sRatio = lastS;
          } else if (!isScale) {
            if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio);
          } else if (scaleType == 1) {
            sRatio = Math.min(xRatio, yRatio);
          } else if (scaleType == 2) {
            sRatio = Math.max(xRatio, yRatio);
          }
        }
        canvas.width = w * pRatio * sRatio;
        canvas.height = h * pRatio * sRatio;
        canvas.style.width = w * sRatio + 'px';
        canvas.style.height = h * sRatio + 'px';
        stage.scaleX = pRatio * sRatio;
        stage.scaleY = pRatio * sRatio;
        lastW = iw;lastH = ih;lastS = sRatio;
      }
    })(false, 'both', false, 1);
  }
};

exports.default = AnimKanpai;
;

},{}],2:[function(require,module,exports){
'use strict';

var _AnimKanpai = require('./module/AnimKanpai');

var _AnimKanpai2 = _interopRequireDefault(_AnimKanpai);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./module/AnimKanpai":1}]},{},[2]);
