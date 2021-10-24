!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/puzzlebobble",o(o.s=1)}([function(e,t,o){},function(e,t,o){"use strict";o.r(t);var n={bgMusic:"res/sounds/SinglePlayerMusic.ogg",readyGo:"res/sounds/Reagy!Go!.ogg",elimination:"res/sounds/BallsElimination.ogg",extraElimination:"res/sounds/ExtraBallsElimination.ogg",shot:"res/sounds/BubbleShot.ogg"},r={logoPNG:"res/images/Tiny.js.png",bgPNG:"res/images/bg.png",tilesetVendorJSON:"res/images/tilesets/tileset-vendor.json",playerJSON:"res/images/tilesets/tileset-player.json",bobblesJSON:"res/images/tilesets/tileset-bobbles.json",audios:Object.keys(n).map((function(e){return{name:e,url:n[e]}}))},i={blue:{textures:["bobbles-blue-0","bobbles-blue-1","bobbles-blue-2","bobbles-blue-3","bobbles-blue-4","bobbles-blue-5","bobbles-blue-6","bobbles-blue-7","bobbles-blue-8","bobbles-blue-9","bobbles-blue-10","bobbles-blue-11","bobbles-blue-12","bobbles-blue-13","bobbles-blue-14","bobbles-blue-15","bobbles-blue-16"],idle:[0,1,2,3],slash:[4,5,6,7,8,9],explosion:[10,11,12,13,14,15,16]},gray:{textures:["bobbles-gray-0","bobbles-gray-1","bobbles-gray-2","bobbles-gray-3","bobbles-gray-4","bobbles-gray-5","bobbles-gray-6","bobbles-gray-7","bobbles-gray-8","bobbles-gray-9","bobbles-gray-10","bobbles-gray-11","bobbles-gray-12","bobbles-gray-13","bobbles-gray-14","bobbles-gray-15","bobbles-gray-16"],idle:[0,1,2,3],slash:[4,5,6,7,8,9],explosion:[10,11,12,13,14,15,16]},red:{textures:["bobbles-red-0","bobbles-red-1","bobbles-red-2","bobbles-red-3","bobbles-red-4","bobbles-red-5","bobbles-red-6","bobbles-red-7","bobbles-red-8","bobbles-red-9","bobbles-red-10","bobbles-red-11","bobbles-red-12","bobbles-red-13"],idle:[0],slash:[1,2,3,4,5,6],explosion:[7,8,9,10,11,12,13]},yellow:{textures:["bobbles-yellow-0","bobbles-yellow-1","bobbles-yellow-2","bobbles-yellow-3","bobbles-yellow-4","bobbles-yellow-5","bobbles-yellow-6","bobbles-yellow-7","bobbles-yellow-8","bobbles-yellow-9","bobbles-yellow-10","bobbles-yellow-11","bobbles-yellow-12","bobbles-yellow-13","bobbles-yellow-14","bobbles-yellow-15","bobbles-yellow-16"],idle:[0,1,2,3],slash:[4,5,6,7,8,9],explosion:[10,11,12,13,14,15,16]},green:{textures:["bobbles-green-0","bobbles-green-1","bobbles-green-2","bobbles-green-3","bobbles-green-4","bobbles-green-5","bobbles-green-6","bobbles-green-7","bobbles-green-8","bobbles-green-9","bobbles-green-10","bobbles-green-11","bobbles-green-12","bobbles-green-13","bobbles-green-14","bobbles-green-15","bobbles-green-16"],idle:[0,1,2,3],slash:[4,5,6,7,8,9],explosion:[10,11,12,13,14,15,16]},black:{textures:["bobbles-black-0","bobbles-black-1","bobbles-black-2","bobbles-black-3","bobbles-black-4","bobbles-black-5","bobbles-black-6","bobbles-black-7","bobbles-black-8","bobbles-black-9","bobbles-black-10","bobbles-black-11","bobbles-black-12","bobbles-black-13","bobbles-black-14","bobbles-black-15","bobbles-black-16"],idle:[0,1,2,3],slash:[4,5,6,7,8,9],explosion:[10,11,12,13,14,15,16]},orange:{textures:["bobbles-orange-0","bobbles-orange-1","bobbles-orange-2","bobbles-orange-3","bobbles-orange-4","bobbles-orange-5","bobbles-orange-6","bobbles-orange-7","bobbles-orange-8","bobbles-orange-9","bobbles-orange-10","bobbles-orange-11","bobbles-orange-12","bobbles-orange-13","bobbles-orange-14","bobbles-orange-15","bobbles-orange-16"],idle:[0,1,2,3],slash:[4,5,6,7,8,9],explosion:[10,11,12,13,14,15,16]},violet:{textures:["bobbles-violet-0","bobbles-violet-1","bobbles-violet-2","bobbles-violet-3","bobbles-violet-4","bobbles-violet-5","bobbles-violet-6","bobbles-violet-7","bobbles-violet-8","bobbles-violet-9","bobbles-violet-10","bobbles-violet-11","bobbles-violet-12","bobbles-violet-13","bobbles-violet-14","bobbles-violet-15","bobbles-violet-16"],idle:[0,1,2,3],slash:[4,5,6,7,8,9],explosion:[10,11,12,13,14,15,16]}};function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==o)return;var n,r,i=[],l=!0,b=!1;try{for(o=o.call(e);!(l=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);l=!0);}catch(e){b=!0,r=e}finally{try{l||null==o.return||o.return()}finally{if(b)throw r}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=p(e);if(t){var r=p(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return y(this,o)}}function y(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var g,v,m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(i,Tiny.AnimatedSprite);var t,o,n,r=f(i);function i(){var e;s(this,i);for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return d(h(e=r.call.apply(r,[this].concat(o))),"actionMap",new Map),e}return t=i,(o=[{key:"clone",value:function(){var e=new i(this.textures);return e.actionMap=this.actionMap,e}},{key:"addAction",value:function(e,t,o){this.actionMap.set(e,[t,o])}},{key:"playAction",value:function(e){var t=this;if(this.actionMap.has(e)){var o=b(this.actionMap.get(e),2),n=o[0],r=o[1];this.emit("actionstart",e,this),this.onFrameChange=function(o){(o>r||o<n)&&(t.emit("actionend",e,t),t.gotoAndPlay(n))},this.gotoAndPlay(n)}}}])&&u(t.prototype,o),n&&u(t,n),i}();function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=x(e);if(t){var r=x(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return A(this,o)}}function A(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return B(e)}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}!function(e){e.IDLE="idle",e.SLASH="slash",e.EXPLOSION="explosion"}(g||(g={})),function(e){e[e.BLUE=0]="BLUE",e[e.GRAY=1]="GRAY",e[e.RED=2]="RED",e[e.YELLOW=3]="YELLOW",e[e.GREEN=4]="GREEN",e[e.BLACK=5]="BLACK",e[e.ORANGE=6]="ORANGE",e[e.VIOLET=7]="VIOLET"}(v||(v={}));var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(i,e);var t,o,n,r=P(i);function i(){var e;S(this,i);for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return j(B(e=r.call.apply(r,[this].concat(o))),"gameX",void 0),j(B(e),"gameY",void 0),j(B(e),"color",void 0),e}return t=i,(o=[{key:"clone",value:function(){var e=new i(this.textures);return e.actionMap=this.actionMap,e.gameX=this.gameX,e.gameY=this.gameY,e.color=this.color,e}}])&&O(t.prototype,o),n&&O(t,n),i}(m);function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==o)return;var n,r,i=[],l=!0,b=!1;try{for(o=o.call(e);!(l=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);l=!0);}catch(e){b=!0,r=e}finally{try{l||null==o.return||o.return()}finally{if(b)throw r}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return L(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return L(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function _(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=X(e);if(t){var r=X(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return N(this,o)}}function N(e,t){if(t&&("object"===M(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return C(e)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function X(e){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var Y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(l,Tiny.Container);var t,o,n,r=I(l);function l(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),D(C(e=r.call(this)),"bobbleSprites",Object.keys(i).map((function(e,t){var o=i[e],n=new k(o.textures.map(Tiny.Texture.fromFrame));return n.addAction(g.IDLE,o[g.IDLE][0],o[g.IDLE][o[g.IDLE].length-1]),n.addAction(g.SLASH,o[g.SLASH][0],o[g.SLASH][o[g.SLASH].length-1]),n.addAction(g.EXPLOSION,o[g.EXPLOSION][0],o[g.EXPLOSION][o[g.EXPLOSION].length-1]),n.color=t,n}))),D(C(e),"arrow",void 0),D(C(e),"width",142),D(C(e),"height",176),D(C(e),"currentShot",void 0),D(C(e),"speed",160),D(C(e),"gameBobble",void 0),e.gameBobble=new Array(8).fill(1).map((function(){return new Array(16).fill(null)})),e.initWall(),e.initBobbles(),e.initArrow(),e.initEvent(),window.Game=C(e),e}return t=l,n=[{key:"gameXYtoPosition",value:function(e,t){var o=t%2==1,n=28*Math.floor(t/2)+15,r=16*e+15;return o&&(n+=14,r+=8),[r,n]}},{key:"bobbleActionStart",value:function(e){g.EXPLOSION===e&&Tiny.audio.manager.getAudio("elimination").play()}}],(o=[{key:"initWall",value:function(){var e=Tiny.Sprite.fromImage(Tiny.resources.bgPNG);e.setPosition(-1,-1),this.addChild(e)}},{key:"initEvent",value:function(){this.on("shotend",this.onShotEnd.bind(this));var e=Tiny.audio.manager.getAudio("readyGo");e.play(),e.on("end",(function(){var e=Tiny.audio.manager.getAudio("bgMusic");e.loop=!0,e.play()}))}},{key:"initBobbles",value:function(){for(var e=0;e<2;e++)for(var t=e%2==1?7:8,o=0;o<t;o++){var n=Math.floor(8*Math.random()),r=this.createBobbles(n),i=T(l.gameXYtoPosition(o,e),2),b=i[0],a=i[1];r.gameX=o,r.gameY=e,this.gameBobble[o][e]=r,r.setPosition(b,a),this.addChild(r)}}},{key:"initArrow",value:function(){var e=new Tiny.Sprite(Tiny.Texture.fromFrame("tileset-arrow"));e.setAnchor(.5),e.setPosition(this.width/2,168),this.arrow=e;var t=this.createBobbles(v.BLUE);this.currentShot=t,t.setPosition(this.width/2,168),this.addChild(e,t)}},{key:"setDist",value:function(e,t){var o=e-this.arrow.getGlobalPosition().x,n=t-this.arrow.getGlobalPosition().y,r=Math.atan2(n,o)+Math.PI/2;this.currentShot&&this.currentShot.setRotation(r),this.arrow.setRotation(r)}},{key:"replaceShot",value:function(e){this.currentShot&&this.removeChild(this.currentShot);var t=this.createBobbles(e);this.currentShot=t,t.setPosition(this.width/2,168),this.addChild(this.currentShot)}},{key:"shot",value:function(e,t){if(this.currentShot){var o=e-this.arrow.getGlobalPosition().x,n=t-this.arrow.getGlobalPosition().y,r=Math.atan2(n,o)+Math.PI/2;0===r&&(r=.001),this.arrow.setRotation(r),Tiny.audio.manager.getAudio("shot").play();var i=this.currentShot;this.currentShot=null,this.shotMove(i,r)}}},{key:"shotMove",value:function(e,t){var o=this,n=e.position,r=n.x,i=n.y,l=t>0?this.width-15:15,b=i-Math.tan(Math.PI/2-t)*(l-r);console.info(l);var a=Math.floor(Math.sqrt(Math.pow(l-r,2)+Math.pow(b-i,2))),s=Tiny.MoveTo(a/this.speed*1e3,{x:l,y:b});s.onUpdate=function(t,n){s._onUpdate.call(s,t,n),o.collision(e,s)},s.onComplete=function(){o.shotMove(e,-t),console.info("complete")},e.runAction(s)}},{key:"collision",value:function(e,t){for(var o=Number.MAX_VALUE,n=null,r=0;r<16;r++)for(var i=0;i<8;i++)if(this.gameBobble[i]&&this.gameBobble[i][r]){var b=this.gameBobble[i][r],a=Math.sqrt(Math.pow(b.position.x-e.position.x,2)+Math.pow(b.position.y-e.position.y,2));a<=14&&a<o&&(o=a,n=b)}if(n){var s=T(this.getNextPostion(n.gameX,n.gameY,e),4),u=s[0],c=s[1],f=s[2],y=s[3];e.gameX=u,e.gameY=c,this.gameBobble[u][c]=e,e.setPosition(f,y),e.setRotation(0),t.stop(),e.playAction(g.SLASH),this.shakeBobble(u,c),this.emit("shotend",e,n)}else if(e.position.y<15){console.info("collision bar");var h=Math.floor((e.position.x-7)/16),p=T(l.gameXYtoPosition(h,0),2),d=p[0],v=p[1];e.gameX=h,e.gameY=0,this.gameBobble[h][0]=e,e.setPosition(d,v),e.setRotation(0),t.stop(),e.playAction(g.SLASH),this.shakeBobble(h,0),this.emit("shotend",e,null)}}},{key:"getNextPostion",value:function(e,t,o){var n=this,r=[[e-1,t],[e+1,t],[e,t+1],[e,t-1]];t%2==1?(r.push([e+1,t+1]),r.push([e+1,t-1])):(r.push([e-1,t+1]),r.push([e-1,t-1]));var i=Number.MAX_VALUE,b=null;return r.forEach((function(e){var t=T(e,2),r=t[0],a=t[1];if(!(r<0||a<0||a%2==1&&7===r||n.gameBobble[r]&&n.gameBobble[r][a])){var s=T(l.gameXYtoPosition(r,a),2),u=s[0],c=s[1],f=Math.sqrt(Math.pow(u-o.position.x,2)+Math.pow(c-o.position.y,2));f<i&&(i=f,b=[r,a,u,c])}})),b}},{key:"shakeBobble",value:function(e,t){for(var o=t%2==1,n=0;n<2;n++)for(var r=0;r<2;r++){var i=Math.max(Math.min(7,e+n+(o?0:-1)),0),l=Math.max(t-r,0);this.gameBobble[i]&&this.gameBobble[i][l]&&this.gameBobble[i][l].runAction(Tiny.Back(Tiny.MoveBy(100,Tiny.point(1,-1))))}}},{key:"createBobbles",value:function(e){var t=this.bobbleSprites[e].clone();return t.animationSpeed=.2,t.setAnchor(.5),t.on("actionstart",l.bobbleActionStart),t.on("actionend",this.bobbleActionEnd.bind(this)),t.playAction(g.IDLE),t}},{key:"onShotEnd",value:function(e){var t=this.gameBobble.flat().map((function(e){return null==e?void 0:e.color})).filter((function(e){return!isNaN(e)}));console.info(t);var o=this.createBobbles(t[Math.floor(Math.random()*t.length)]);this.currentShot=o,o.setPosition(this.width/2,168),this.addChild(this.currentShot),this.findExplosion(e)}},{key:"findExplosion",value:function(e){var t=this,o={},n={},r=[],i=[],l=20;!function i(b,a){var s="".concat(b,",").concat(a);if(!o[s]&&(o[s]=!0,t.gameBobble[b]&&t.gameBobble[b][a]&&t.gameBobble[b][a].color===e.color)){a<l&&(l=a);var u=a%2==1?0:-1;r.push(t.gameBobble[b][a]),n[s]=!0,i(b-1,a),i(b+1,a);for(var c=0;c<2;c++)i(b+c+u,a-1),i(b+c+u,a+1)}}(e.gameX,e.gameY);var b={},a=function e(o,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1,l="".concat(o,",").concat(r);if(null!=b[l])return b[l];if(n[l])return b[l]=!0,!0;if(!t.gameBobble[o]||!t.gameBobble[o][r])return b[l]=!0,!0;if(0===r)return b[l]=!1,!1;if(r%2==1){if(!e(o,r-1)||!e(o+1,r-1))return b[l]=!1,!1}else if(!e(o,r-1)||!e(o-1,r-1))return b[l]=!1,!1;return(o-1==i||e(o-1,r,o))&&!(o+1!=i&&!e(o+1,r,o))||(b[l]=!1,!1)};r.length>=3&&(function(){for(var e=Math.max(l,1);e<20;e++)for(var o=0;o<8;o++)t.gameBobble[o]&&t.gameBobble[o][e]&&a(o,e)&&!n["".concat(o,",").concat(e)]&&i.push(t.gameBobble[o][e])}(),i.forEach((function(e){var o=Tiny.MoveBy(500,{x:0,y:200});t.gameBobble[e.gameX][e.gameY]=null,o.onComplete=t.handleDropEnd.bind(t,e),e.runAction(o)})),r.forEach((function(e){return e.playAction(g.EXPLOSION)})),r.length+i.length>=4&&Tiny.audio.manager.getAudio("extraElimination").play())}},{key:"bobbleActionEnd",value:function(e,t){g.IDLE!==e&&t.playAction(g.IDLE),g.EXPLOSION===e&&(this.gameBobble[t.gameX][t.gameY]=null,this.removeChild(t),this.printBobbles())}},{key:"handleDropEnd",value:function(e){this.removeChild(e)}},{key:"printBobbles",value:function(){for(var e=0;e<10;e++){var t="".concat(e,","),o=8;e%2==1&&(t+=" ",o=7);for(var n=0;n<o;n++)t+=this.gameBobble[n]&&this.gameBobble[n][e]?"1 ":"0 ";console.info(t)}}}])&&_(t.prototype,o),n&&_(t,n),l}();function G(e){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function H(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=V(e);if(t){var r=V(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return W(this,o)}}function W(e,t){if(t&&("object"===G(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(o,Tiny.Container);var t=H(o);function o(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),e=t.call(this);var n=Tiny.WIN_SIZE,r=n.width,i=(n.height,new Y),l=r/i.width;return i.setScale(l),i.setPosition(0,40),e.addChild(i),e.setEventEnabled(!0),e.on("pointermove",(function(e){var t=e.data.global,o=t.x,n=t.y;i.setDist(o,n)})),e.on("pointerup",(function(e){var t=e.data.global,o=t.x,n=t.y;console.info("touchend"),i.shot(o,n)})),document.body.addEventListener("keydown",(function(e){isNaN(+e.key)||i.replaceShot(+e.key)})),e}return o}(),q=window.navigator.userAgent,J=q.match(/Version\/(\d+)/),z=q.match(/OS\s(\d+)/);q.indexOf("iPhone")>-1&&(+z[1]>=10||+J[1]>=10)?window.disableWebAudio=!1:window.disableWebAudio=!0,o(0),Tiny.app=new Tiny.Application({showFPS:!0,referWidth:375,dpi:2,renderOptions:{backgroundColor:12303291}}),{init:function(){console.log("init"),Tiny.resources=r,this.resourceLoad()},resourceLoad:function(){var e=document.getElementById("progress"),t=document.getElementById("percent");Tiny.Loader.run({resources:Object.values(r).flat(1),onProgress:function(o,n){var r=~~o;t.innerHTML="".concat(r,"%"),e.style.width="".concat(r,"%")},onAllComplete:function(){var o=document.body;o.removeChild(t),o.removeChild(e.parentNode);var n=new F;Tiny.app.run(n),n.emit("transitionend")}})}}.init(),document.addEventListener("pause",(function(e){Tiny.app.pause()}),!1),document.addEventListener("resume",(function(e){Tiny.app.resume()}),!1)}]);