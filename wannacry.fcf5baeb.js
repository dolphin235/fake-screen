parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"9vwl":[function(require,module,exports) {
"use strict";function t(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function i(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function e(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=function(){function i(e){t(this,i),e.setSeconds(e.getSeconds()+1),this.till=e,this.callbacks={stop:[],second:[]},this.toFixStr=this.toFixStr.bind(this),this.interval=null,this.origin=new Date,this.start()}return e(i,[{key:"formatTill",value:function(){var t=this,i=this.till.getFullYear(),e=this.till.getMonth()+1,n=this.till.getDate(),r=this.till.getHours(),o=this.till.getMinutes(),l=this.till.getSeconds();return[e,n,i].map(function(i){return t.toFixStr(i)}).join("/")+" "+[r,o,l].map(function(i){return t.toFixStr(i)}).join(":")}},{key:"toFixStr",value:function(t){return(t<10?"0":"")+t}},{key:"progress",value:function(){var t=this.timeDiff/(this.till.getTime()-this.origin);return t<0?0:t}},{key:"formatLast",value:function(){var t=this,i=Math.floor(this.timeDiff/864e5),e=Math.floor(this.timeDiff/36e5),n=Math.floor(this.timeDiff/6e4);return[i,e-24*i,n-60*e,Math.floor(this.timeDiff/1e3)-60*n].map(function(i){return t.toFixStr(i)}).join(":")}},{key:"start",value:function(){var t=this;this.timeDiff=this.till.getTime()-(new Date).getTime(),this.interval=setInterval(function(){t.timeDiff=t.till.getTime()-(new Date).getTime(),t.timeDiff<0?t.stop():t.callbacks.second.forEach(function(t){return t()})},1e3)}},{key:"stop",value:function(){clearInterval(this.interval),this.callbacks.stop.forEach(function(t){return t()})}},{key:"on",value:function(t,i){if(!(t in this.callbacks))throw Error("no ".concat(t," type callback"));this.callbacks[t].push(i)}}]),i}(),r=n;exports.default=r;
},{}],"cxht":[function(require,module,exports) {

},{}],"Xz1E":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.render=void 0,require("babel-polyfill");var e=n(require("./CountDowner.js"));require("./wannacry.scss");var t=n(require("./wannacry.pug"));function n(e){return e&&e.__esModule?e:{default:e}}var o=function(){return setTimeout(r),t.default};function r(){var t=document.querySelector("#pay"),n=document.querySelector("#pay-on"),o=document.querySelector("#pay-progress"),r=document.querySelector("#payment"),u=document.querySelector("#lost"),a=document.querySelector("#lost-on"),l=document.querySelector("#lost-progress"),s=document.querySelector("#check"),i=document.querySelector("#decrypt"),d=document.querySelector("#copy"),y=new Date,p=new Date(y.getFullYear(),y.getMonth(),y.getDate(),y.getHours(),y.getMinutes()+10,y.getSeconds()),f=new Date(y.getFullYear(),y.getMonth(),y.getDate(),y.getHours()+1,y.getMinutes(),y.getSeconds()),m=new e.default(p);t.innerHTML=m.formatLast(),n.innerHTML=m.formatTill(),m.on("second",function(){o.style.height="".concat(100*(1-m.progress()),"%"),t.innerHTML=m.formatLast()}),m.on("stop",function(){o.style.height="".concat(100*(1-m.progress()),"%"),r.innerHTML="$600"});var g=new e.default(f);u.innerHTML=g.formatLast(),a.innerHTML=g.formatTill(),g.on("second",function(){l.style.height="".concat(100*(1-g.progress()),"%"),u.innerHTML=g.formatLast()}),g.on("stop",function(){l.style.height="".concat(100*(1-g.progress()),"%")}),s.onclick=function(){alert("You didn't pay!\nYour files will be lost on ".concat(g.formatTill(),"!"))},i.onclick=function(){alert("Decrypt failed!\nPlease click <Contact Us>!")},d.onclick=function(e){document.addEventListener("copy",c),document.execCommand("copy"),alert("Content copied Successfully!")}}function c(e){e.preventDefault(),e.clipboardData&&e.clipboardData.setData("text/plain","Money! Give me Money! ლ(́◉◞౪◟◉‵ლ)"),document.removeEventListener("copy",c)}exports.render=o;
},{"babel-polyfill":"JIy0","./CountDowner.js":"9vwl","./wannacry.scss":"cxht","./wannacry.pug":"4odx"}]},{},[], null)
//# sourceMappingURL=/fake-screen/wannacry.fcf5baeb.map