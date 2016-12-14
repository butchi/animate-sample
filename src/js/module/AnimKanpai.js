import $ from 'jquery';

const canvas = document.querySelector('.anim-kanpai canvas');
const stage = new window.createjs.Stage(canvas);

export default class AnimKanpai {
  constructor (opts = {}) {
    this.initialize();
  }

  initialize() {
    this.$elm = $(canvas);

    this.init();
  }

  init() {
    images = images||{};
    ss = ss||{};
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", (evt) => {
      this.handleFileLoad(evt);
    });
    loader.addEventListener("complete", (evt) => {
      this.handleComplete(evt);
    });
    loader.loadManifest(lib.properties.manifest);
  }

  handleFileLoad(evt) {  
    if (evt.item.type == "image") { images[evt.item.id] = evt.result; } 
  }

  handleComplete(evt) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;
    for(let i=0; i<ssMetadata.length; i++) {
      ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
    }
    this.exportRoot = new lib.kanpai();
    stage.addChild(this.exportRoot); 
    //Registers the "tick" event listener.
    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);      
    //Code to support hidpi screens and responsive scaling.
    (function(isResp, respDim, isScale, scaleType) {    
      var lastW, lastH, lastS=1;    
      window.addEventListener('resize', resizeCanvas);    
      resizeCanvas();   
      function resizeCanvas() {     
        var w = lib.properties.width, h = lib.properties.height;      
        var iw = window.innerWidth, ih=window.innerHeight;      
        var pRatio = window.devicePixelRatio, xRatio=iw/w, yRatio=ih/h, sRatio=1;     
        if(isResp) {                
          if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
            sRatio = lastS;                
          }       
          else if(!isScale) {         
            if(iw<w || ih<h)            
              sRatio = Math.min(xRatio, yRatio);        
          }       
          else if(scaleType==1) {         
            sRatio = Math.min(xRatio, yRatio);        
          }       
          else if(scaleType==2) {         
            sRatio = Math.max(xRatio, yRatio);        
          }     
        }     
        canvas.width = w*pRatio*sRatio;     
        canvas.height = h*pRatio*sRatio;
        canvas.style.width = w*sRatio+'px';     
        canvas.style.height = h*sRatio+'px';
        stage.scaleX = pRatio*sRatio;     
        stage.scaleY = pRatio*sRatio;     
        lastW = iw; lastH = ih; lastS = sRatio;   
      }
    })(false,'both',false,1); 
  }
};

(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
  width: 375,
  height: 375,
  fps: 30,
  color: "#FFFFFF",
  opacity: 1.00,
  webfonts: {},
  manifest: [
    {src:"/img/sprite-kanpai.png", id:"kanpai_atlas_"}
  ]
};



lib.ssMetadata = [
    {name:"kanpai_atlas_", frames: [[0,0,348,382],[0,384,347,382],[64,768,92,40],[158,768,30,71],[0,768,62,61],[97,810,41,41],[49,831,46,41],[0,831,47,44]]}
];


lib.webfontAvailable = function(family) { 
  lib.properties.webfonts[family] = true;
  var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
  for(var f = 0; f < txtFilters.length; ++f) {
    txtFilters[f].updateCache();
  }
};
// symbols:



(lib.beer_left = function() {
  this.spriteSheet = ss["kanpai_atlas_"];
  this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.beer_right = function() {
  this.spriteSheet = ss["kanpai_atlas_"];
  this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.lineright = function() {
  this.spriteSheet = ss["kanpai_atlas_"];
  this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.line_center = function() {
  this.spriteSheet = ss["kanpai_atlas_"];
  this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.line_left = function() {
  this.spriteSheet = ss["kanpai_atlas_"];
  this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.star_blue = function() {
  this.spriteSheet = ss["kanpai_atlas_"];
  this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.star_green = function() {
  this.spriteSheet = ss["kanpai_atlas_"];
  this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.star_red = function() {
  this.spriteSheet = ss["kanpai_atlas_"];
  this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.star_red_1 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // レイヤー 1
  this.instance = new lib.star_red();
  this.instance.setTransform(0,0,0.25,0.25);

  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11.8,11);


(lib.star_green_1 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // レイヤー 1
  this.instance = new lib.star_green();
  this.instance.setTransform(0,0,0.25,0.25);

  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11.5,10.3);


(lib.star_blue_1 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // レイヤー 1
  this.instance = new lib.star_blue();
  this.instance.setTransform(0,0,0.25,0.25);

  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10.3,10.3);


(lib.pai = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // レイヤー 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#666666").s().p("Ah2CuIAAiRQAAgdAGgrQgNArgJAUQgUAqgKAOQgEAHgHAAQgFAAgEgDQgGgFAAgHQAAgEADgFQAPgTAYgtQAKgYAPgzIgsAAQgLAAAAgOQAAgNALAAIAxAAIAAhCQAAgMAOAAQAPAAAAAMIAABCIApAAQALAAAAANQAAAOgLAAIgnAAQAIASAMAQQALAQAPAQQAFAEAAAGQAAAEgEADQgFAFgFAAQgFAAgFgFQgJgIgJgOQgKgPgGgQQAFAkAAAZIAACjQAAALgPAAQgOAAAAgLgAAnCtIAAicQAAgZAEggQgMAZgQAUQgNASgNAPQgPAQgRAMQgEADgHAAQgHAAgEgEQgEgFAAgGQAAgIAHgFQAXgRATgUQAUgUARgZQAOgWAMgXQAMgXAIgXIhnAAQgLAAAAgPQAAgNALAAIDVAAQALAAAAANQAAAPgLAAIhNAAQgLAegPAbIAAD4QAAALgQAAQgPAAAAgLgAClBBQgggdgPgSQgPgSgXgkIgCgHQAAgIAIgEIAIgCQAIAAAFAIQALATAaAfQATAWAWAQQAGAFAAAJQAAAFgDAEQgFAGgIAAQgFABgFgEg");
  this.shape.setTransform(19.1,18.6);

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.3,37.2);


(lib.line_right = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // レイヤー 1
  this.instance = new lib.lineright();
  this.instance.setTransform(0,0,0.25,0.25);

  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23,10);


(lib.line_left_1 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // レイヤー 1
  this.instance = new lib.line_left();
  this.instance.setTransform(0,0,0.25,0.25);

  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.5,15.3);


(lib.line_center_1 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // レイヤー 1
  this.instance = new lib.line_center();
  this.instance.setTransform(0,0,0.25,0.25);

  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.5,17.8);


(lib.kan = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // レイヤー 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#666666").s().p("AhqC4QgFgDAAgFIAAg4Ig/AAQgKAAAAgOQAAgOAKAAIA/AAIAAgiIgcAAQgQAAgIgHQgHgHAAgQIAAhTQAAgQAHgHQAIgHAQAAIAdAAIAAggIg/AAQgKgBAAgNQAAgOAKAAIA/AAIAAgdQAAgLAOAAQAPAAAAALIAAAdIBBAAQALAAAAAOQAAANgLABIhBAAIAAAgIAfAAQARAAAHAHQAHAHAAAQIAABTQAAAQgHAHQgHAHgRAAIgfAAIAAAiIA+AAQALAAAAAOQAAAOgLAAIg+AAIAAA4QAAAFgFADQgEACgGAAQgHAAgDgCgAiOAYQAAAJALAAIBKAAQAKAAAAgJIAAgaIhfAAgAiOgzIAAAZIBfAAIAAgZQAAgKgKAAIhKAAQgLAAAAAKgAAvCrQgRgCgKgFQgKgFgFgIQgEgIAAgMQAAgOANgcQAJgSARgTQATgXA4g1IACgDQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAIhUAAQgLAAAAgOQAAgOALAAIBmAAQANAAAGAGQAHAGAAAIQAAANgKAIQhCA+gSAXQgfApAAAOQAAAMAJAEQAMAFAlgBQAeAAANgDQAKgEAEgIQAGgLABgZQAAgIAEgDQADgDAHgBIACAAQAOACAAANIAAABQgEAmgGAMQgEAHgFAGQgGAFgJAEQgKAEgOABIglACQgaAAgRgCgAgIgzQgFgEAAgHQAAgFAEgFQAKgPATgjQAOgaAIgbQADgJAJAAIAGABQALACAAAKIgBAGQgGARgHAQIB0AAQAMAAAAAPQAAAOgMAAIiCAAQgPAbgRAWQgFAIgGAAQgDAAgFgFg");
  this.shape.setTransform(18.6,18.7);

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,37.2,37.3);


(lib.beer_right_1 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // レイヤー 1
  this.instance = new lib.beer_right();
  this.instance.setTransform(0,0,0.25,0.25);

  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,86.8,95.5);


(lib.beer_left_1 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // レイヤー 1
  this.instance = new lib.beer_left();
  this.instance.setTransform(0,0,0.25,0.25);

  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,87,95.5);


(lib.kanpai_1 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // レイヤー 1
  this.instance = new lib.pai("synched",0);
  this.instance.setTransform(78.6,18.6,1,1,0,0,0,19.1,18.6);

  this.instance_1 = new lib.kan("synched",0);
  this.instance_1.setTransform(18.6,18.7,1,1,0,0,0,18.6,18.7);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97.8,37.3);


// stage content:
(lib.kanpai = function(mode,startPosition,loop) {
if (loop == null) { loop = false; } this.initialize(mode,startPosition,loop,{});

  // text
  this.instance = new lib.kanpai_1("synched",0);
  this.instance.setTransform(180.2,402.6,1,1,0,0,0,48.9,18.7);
  this.instance._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({y:262.6},7,cjs.Ease.get(0.75)).to({y:292.6},3,cjs.Ease.get(-0.75)).wait(41));

  // line_right
  this.instance_1 = new lib.line_right("synched",0);
  this.instance_1.setTransform(197.1,150,1,1,0,0,0,11.5,5);
  this.instance_1._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({x:217.1,y:110,alpha:0},10).wait(41));

  // line_center
  this.instance_2 = new lib.line_center_1("synched",0);
  this.instance_2.setTransform(187.3,143.3,1,1,0,0,0,3.8,8.8);
  this.instance_2._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({x:197.3,y:103.3,alpha:0},10).wait(41));

  // line_left
  this.instance_3 = new lib.line_left_1("synched",0);
  this.instance_3.setTransform(170.5,146.6,1,1,0,0,0,7.8,7.6);
  this.instance_3._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({x:150.5,y:106.6,alpha:0},10).wait(41));

  // star_blue
  this.instance_4 = new lib.star_blue_1("synched",0);
  this.instance_4.setTransform(217,134.9,1,1,0,0,0,5.1,5.1);
  this.instance_4._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({x:237,y:94.9,alpha:0},10).wait(41));

  // star_green
  this.instance_5 = new lib.star_green_1("synched",0);
  this.instance_5.setTransform(149.1,143.1,1,1,0,0,0,5.8,5.1);
  this.instance_5._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({x:129.1,y:103.1,alpha:0},10).wait(41));

  // star_red
  this.instance_6 = new lib.star_red_1("synched",0);
  this.instance_6.setTransform(171.7,127.5,1,1,0,0,0,5.9,5.5);
  this.instance_6._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).to({y:87.5,alpha:0},10).wait(41));

  // beer_right
  this.instance_7 = new lib.beer_right_1("synched",0);
  this.instance_7.setTransform(420,200.8,1,1,0,0,0,43.4,47.8);

  this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:225},9,cjs.Ease.get(-0.75)).to({rotation:15,x:245,y:180.7},5).to({x:265,y:190.7},5).wait(41));

  // beer_left
  this.instance_8 = new lib.beer_left_1("synched",0);
  this.instance_8.setTransform(-50,200.1,1,1,0,0,0,43.5,47.8);

  this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:145},9,cjs.Ease.get(-0.75)).to({regX:43.6,rotation:-15,x:125.1,y:180},5).to({x:105.1,y:190},5).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(94,339.8,556.8,96.2);

})(lib = lib||{}, images = images||{}, createjs = window.createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
