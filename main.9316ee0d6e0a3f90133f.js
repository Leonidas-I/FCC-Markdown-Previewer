!function(e){function t(t){for(var r,a,u=t[0],l=t[1],s=t[2],f=0,p=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(c&&c(t);p.length;)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==o[l]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={1:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var c=l;i.push([19,0,2]),n()}([function(e,t,n){e.exports=n(17)()},,,function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},,,function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,u,l=a(e),s=1;s<arguments.length;s++){for(var c in n=Object(arguments[s]))o.call(n,c)&&(l[c]=n[c]);if(r){u=r(n);for(var f=0;f<u.length;f++)i.call(n,u[f])&&(l[u[f]]=n[u[f]])}}return l}},,,,,function(e,t,n){"use strict";e.exports=n(12)},function(e,t,n){"use strict";
/** @license React v0.18.0
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r,o,i,a,u;if(Object.defineProperty(t,"__esModule",{value:!0}),"undefined"==typeof window||"function"!=typeof MessageChannel){var l=null,s=null,c=function(){if(null!==l)try{var e=t.unstable_now();l(!0,e),l=null}catch(e){throw setTimeout(c,0),e}},f=Date.now();t.unstable_now=function(){return Date.now()-f},r=function(e){null!==l?setTimeout(r,0,e):(l=e,setTimeout(c,0))},o=function(e,t){s=setTimeout(e,t)},i=function(){clearTimeout(s)},a=function(){return!1},u=t.unstable_forceFrameRate=function(){}}else{var p=window.performance,d=window.Date,m=window.setTimeout,h=window.clearTimeout;if("undefined"!=typeof console){var y=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!=typeof y&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"==typeof p&&"function"==typeof p.now)t.unstable_now=function(){return p.now()};else{var b=d.now();t.unstable_now=function(){return d.now()-b}}var v=!1,w=null,g=-1,T=5,_=0;a=function(){return t.unstable_now()>=_},u=function(){},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):T=0<e?Math.floor(1e3/e):5};var x=new MessageChannel,k=x.port2;x.port1.onmessage=function(){if(null!==w){var e=t.unstable_now();_=e+T;try{w(!0,e)?k.postMessage(null):(v=!1,w=null)}catch(e){throw k.postMessage(null),e}}else v=!1},r=function(e){w=e,v||(v=!0,k.postMessage(null))},o=function(e,n){g=m((function(){e(t.unstable_now())}),n)},i=function(){h(g),g=-1}}function O(e,t){var n=e.length;e.push(t);e:for(;;){var r=Math.floor((n-1)/2),o=e[r];if(!(void 0!==o&&0<E(o,t)))break e;e[r]=t,e[n]=o,n=r}}function P(e){return void 0===(e=e[0])?null:e}function j(e){var t=e[0];if(void 0!==t){var n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length;r<o;){var i=2*(r+1)-1,a=e[i],u=i+1,l=e[u];if(void 0!==a&&0>E(a,n))void 0!==l&&0>E(l,a)?(e[r]=l,e[u]=n,r=u):(e[r]=a,e[i]=n,r=i);else{if(!(void 0!==l&&0>E(l,n)))break e;e[r]=l,e[u]=n,r=u}}}return t}return null}function E(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}var M=[],I=[],C=1,S=null,L=3,A=!1,F=!1,R=!1;function N(e){for(var t=P(I);null!==t;){if(null===t.callback)j(I);else{if(!(t.startTime<=e))break;j(I),t.sortIndex=t.expirationTime,O(M,t)}t=P(I)}}function z(e){if(R=!1,N(e),!F)if(null!==P(M))F=!0,r(W);else{var t=P(I);null!==t&&o(z,t.startTime-e)}}function W(e,n){F=!1,R&&(R=!1,i()),A=!0;var r=L;try{for(N(n),S=P(M);null!==S&&(!(S.expirationTime>n)||e&&!a());){var u=S.callback;if(null!==u){S.callback=null,L=S.priorityLevel;var l=u(S.expirationTime<=n);n=t.unstable_now(),"function"==typeof l?S.callback=l:S===P(M)&&j(M),N(n)}else j(M);S=P(M)}if(null!==S)var s=!0;else{var c=P(I);null!==c&&o(z,c.startTime-n),s=!1}return s}finally{S=null,L=r,A=!1}}function q(e){switch(e){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var H=u;t.unstable_ImmediatePriority=1,t.unstable_UserBlockingPriority=2,t.unstable_NormalPriority=3,t.unstable_IdlePriority=5,t.unstable_LowPriority=4,t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=L;L=e;try{return t()}finally{L=n}},t.unstable_next=function(e){switch(L){case 1:case 2:case 3:var t=3;break;default:t=L}var n=L;L=t;try{return e()}finally{L=n}},t.unstable_scheduleCallback=function(e,n,a){var u=t.unstable_now();if("object"==typeof a&&null!==a){var l=a.delay;l="number"==typeof l&&0<l?u+l:u,a="number"==typeof a.timeout?a.timeout:q(e)}else a=q(e),l=u;return e={id:C++,callback:n,priorityLevel:e,startTime:l,expirationTime:a=l+a,sortIndex:-1},l>u?(e.sortIndex=l,O(I,e),null===P(M)&&e===P(I)&&(R?i():R=!0,o(z,l-u))):(e.sortIndex=a,O(M,e),F||A||(F=!0,r(W))),e},t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_wrapCallback=function(e){var t=L;return function(){var n=L;L=t;try{return e.apply(this,arguments)}finally{L=n}}},t.unstable_getCurrentPriorityLevel=function(){return L},t.unstable_shouldYield=function(){var e=t.unstable_now();N(e);var n=P(M);return n!==S&&null!==S&&null!==n&&null!==n.callback&&n.startTime<=e&&n.expirationTime<S.expirationTime||a()},t.unstable_requestPaint=H,t.unstable_continueExecution=function(){F||A||(F=!0,r(W))},t.unstable_pauseExecution=function(){},t.unstable_getFirstCallbackNode=function(){return P(M)},t.unstable_Profiling=null},function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(o.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new i(o.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n(14),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(3))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,o,i,a,u,l=1,s={},c=!1,f=e.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(e);p=p&&p.setTimeout?p:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick((function(){m(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){m(e.data)},r=function(e){i.port2.postMessage(e)}):f&&"onreadystatechange"in f.createElement("script")?(o=f.documentElement,r=function(e){var t=f.createElement("script");t.onreadystatechange=function(){m(e),t.onreadystatechange=null,o.removeChild(t),t=null},o.appendChild(t)}):r=function(e){setTimeout(m,0,e)}:(a="setImmediate$"+Math.random()+"$",u=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&m(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",u,!1):e.attachEvent("onmessage",u),r=function(t){e.postMessage(a+t,"*")}),p.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var o={callback:e,args:t};return s[l]=o,r(l),l++},p.clearImmediate=d}function d(e){delete s[e]}function m(e){if(c)setTimeout(m,0,e);else{var t=s[e];if(t){c=!0;try{!function(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}(t)}finally{d(e),c=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(3),n(15))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var l,s=[],c=!1,f=-1;function p(){c&&l&&(c=!1,l.length?s=l.concat(s):f=-1,s.length&&d())}function d(){if(!c){var e=u(p);c=!0;for(var t=s.length;t;){for(l=s,s=[];++f<t;)l&&l[f].run();f=-1,t=s.length}l=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new m(e,t)),1!==s.length||c||u(d)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){},function(e,t,n){"use strict";var r=n(18);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),i=n(7),a=n.n(i),u=n(2),l=n(5);u.b.add(l.a,l.b);n(16);var s=n(8),c=n(4),f=n.n(c);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}f.a.setOptions({breaks:!0});var b=new f.a.Renderer;b.link=function(e,t,n){return'<a target="_blank" href="'.concat(e,'">').concat(n)+"</a>"};var v=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?h(e):t}(this,m(t).call(this,e))).state={input:_,editorMax:!1,previewMax:!1},n.inputChange=n.inputChange.bind(h(n)),n.editorMaxProcess=n.editorMaxProcess.bind(h(n)),n.previewMaxProcess=n.previewMaxProcess.bind(h(n)),n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(r=[{key:"inputChange",value:function(e){this.setState({input:e.target.value})}},{key:"editorMaxProcess",value:function(){this.setState({editorMax:!this.state.editorMax})}},{key:"previewMaxProcess",value:function(){this.setState({previewMax:!this.state.previewMax})}},{key:"render",value:function(){var e=this.state.editorMax?["editorText maximize","previewText minimize","compress-arrows-alt"]:this.state.previewMax?["editorText minimize","previewText maximize","compress-arrows-alt"]:["editorText","previewText","expand-arrows-alt"];return o.a.createElement("div",null,o.a.createElement("div",{className:e[0]},o.a.createElement(w,{title:"Editor",onClick:this.editorMaxProcess,icon:e[2]}),o.a.createElement(g,{onChange:this.inputChange,inputfield:this.state.input})),o.a.createElement("div",{className:e[1]},o.a.createElement(w,{title:"Preview",onClick:this.previewMaxProcess,icon:e[2]}),o.a.createElement(T,{inputfield:this.state.input})))}}])&&d(n.prototype,r),i&&d(n,i),t}(r.Component),w=function(e){return o.a.createElement("div",{className:"toolbar"},e.title,o.a.createElement(s.a,{icon:e.icon,className:e.icon,onClick:e.onClick,size:"lg"}))},g=function(e){return o.a.createElement("textarea",{id:"editor",type:"text",onChange:e.onChange,value:e.inputfield})},T=function(e){return o.a.createElement("div",{id:"preview",dangerouslySetInnerHTML:{__html:f()(e.inputfield,{renderer:b})}})},_="# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n  \nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n  \nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n";a.a.render(o.a.createElement(v,null),document.getElementById("project"))}]);