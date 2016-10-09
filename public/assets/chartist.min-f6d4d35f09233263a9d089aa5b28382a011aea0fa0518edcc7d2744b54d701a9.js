!function(t,e){"function"==typeof define&&define.amd?define([],function(){return t.Chartist=e()}):"object"==typeof exports?module.exports=e():t.Chartist=e()}(this,function(){var t={version:"0.7.4"};return function(t,e,n){"use strict";n.noop=function(t){return t},n.alphaNumerate=function(t){return String.fromCharCode(97+t%26)},n.extend=function(t){t=t||{};var e=Array.prototype.slice.call(arguments,1);return e.forEach(function(e){for(var i in e)t[i]="object"!=typeof e[i]||e[i]instanceof Array?e[i]:n.extend({},t[i],e[i])}),t},n.replaceAll=function(t,e,n){return t.replace(new RegExp(e,"g"),n)},n.stripUnit=function(t){return"string"==typeof t&&(t=t.replace(/[^0-9\+-\.]/g,"")),+t},n.ensureUnit=function(t,e){return"number"==typeof t&&(t+=e),t},n.querySelector=function(t){return t instanceof Node?t:e.querySelector(t)},n.times=function(t){return Array.apply(null,new Array(t))},n.sum=function(t,e){return t+e},n.serialMap=function(t,e){var i=[],a=Math.max.apply(null,t.map(function(t){return t.length}));return n.times(a).forEach(function(n,a){var r=t.map(function(t){return t[a]});i[a]=e.apply(null,r)}),i},n.roundWithPrecision=function(t,e){var i=Math.pow(10,e||n.precision);return Math.round(t*i)/i},n.precision=8,n.escapingMap={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"},n.serialize=function(t){return null===t||void 0===t?t:("number"==typeof t?t=""+t:"object"==typeof t&&(t=JSON.stringify({data:t})),Object.keys(n.escapingMap).reduce(function(t,e){return n.replaceAll(t,e,n.escapingMap[e])},t))},n.deserialize=function(t){if("string"!=typeof t)return t;t=Object.keys(n.escapingMap).reduce(function(t,e){return n.replaceAll(t,n.escapingMap[e],e)},t);try{t=JSON.parse(t),t=void 0!==t.data?t.data:t}catch(t){}return t},n.createSvg=function(t,e,i,a){var r;return e=e||"100%",i=i||"100%",Array.prototype.slice.call(t.querySelectorAll("svg")).filter(function(t){return t.getAttribute(n.xmlNs.qualifiedName)}).forEach(function(e){t.removeChild(e)}),r=new n.Svg("svg").attr({width:e,height:i}).addClass(a).attr({style:"width: "+e+"; height: "+i+";"}),t.appendChild(r._node),r},n.reverseData=function(t){t.labels.reverse(),t.series.reverse();for(var e=0;e<t.series.length;e++)"object"==typeof t.series[e]&&void 0!==t.series[e].data?t.series[e].data.reverse():t.series[e].reverse()},n.getDataArray=function(t,e){var i,a,r=[];(e&&!t.reversed||!e&&t.reversed)&&(n.reverseData(t),t.reversed=!t.reversed);for(var o=0;o<t.series.length;o++){a="object"==typeof t.series[o]&&void 0!==t.series[o].data?t.series[o].data:t.series[o],a instanceof Array?(r[o]=[],Array.prototype.push.apply(r[o],a)):r[o]=a;for(var s=0;s<r[o].length;s++)i=r[o][s],i=0===i.value?0:i.value||i,r[o][s]=+i}return r},n.normalizePadding=function(t,e){return e=e||0,"number"==typeof t?{top:t,right:t,bottom:t,left:t}:{top:"number"==typeof t.top?t.top:e,right:"number"==typeof t.right?t.right:e,bottom:"number"==typeof t.bottom?t.bottom:e,left:"number"==typeof t.left?t.left:e}},n.normalizeDataArray=function(t,e){for(var n=0;n<t.length;n++)if(t[n].length!==e)for(var i=t[n].length;e>i;i++)t[n][i]=0;return t},n.getMetaData=function(t,e){var i=t.data?t.data[e]:t[e];return i?n.serialize(i.meta):void 0},n.orderOfMagnitude=function(t){return Math.floor(Math.log(Math.abs(t))/Math.LN10)},n.projectLength=function(t,e,n){return e/n.range*t},n.getAvailableHeight=function(t,e){return Math.max((n.stripUnit(e.height)||t.height())-(e.chartPadding.top+e.chartPadding.bottom)-e.axisX.offset,0)},n.getHighLow=function(t){var e,n,i={high:-Number.MAX_VALUE,low:Number.MAX_VALUE};for(e=0;e<t.length;e++)for(n=0;n<t[e].length;n++)t[e][n]>i.high&&(i.high=t[e][n]),t[e][n]<i.low&&(i.low=t[e][n]);return i},n.getBounds=function(t,e,i,a){var r,o,s,l={high:e.high,low:e.low};l.high===l.low&&(0===l.low?l.high=1:l.low<0?l.high=0:l.low=0),(a||0===a)&&(l.high=Math.max(a,l.high),l.low=Math.min(a,l.low)),l.valueRange=l.high-l.low,l.oom=n.orderOfMagnitude(l.valueRange),l.min=Math.floor(l.low/Math.pow(10,l.oom))*Math.pow(10,l.oom),l.max=Math.ceil(l.high/Math.pow(10,l.oom))*Math.pow(10,l.oom),l.range=l.max-l.min,l.step=Math.pow(10,l.oom),l.numberOfSteps=Math.round(l.range/l.step);for(var c=n.projectLength(t,l.step,l),u=i>c;;)if(u&&n.projectLength(t,l.step,l)<=i)l.step*=2;else{if(u||!(n.projectLength(t,l.step/2,l)>=i))break;l.step/=2}for(o=l.min,s=l.max,r=l.min;r<=l.max;r+=l.step)r+l.step<l.low&&(o+=l.step),r-l.step>=l.high&&(s-=l.step);for(l.min=o,l.max=s,l.range=l.max-l.min,l.values=[],r=l.min;r<=l.max;r+=l.step)l.values.push(n.roundWithPrecision(r));return l},n.polarToCartesian=function(t,e,n,i){var a=(i-90)*Math.PI/180;return{x:t+n*Math.cos(a),y:e+n*Math.sin(a)}},n.createChartRect=function(t,e,i){var a=e.axisY?e.axisY.offset||0:0,r=e.axisX?e.axisX.offset||0:0,o=n.stripUnit(e.width)||t.width(),s=n.stripUnit(e.height)||t.height(),l=n.normalizePadding(e.chartPadding,i);return{x1:l.left+a,y1:Math.max(s-l.bottom-r,l.bottom),x2:Math.max(o-l.right,l.right+a),y2:l.top,width:function(){return this.x2-this.x1},height:function(){return this.y1-this.y2}}},n.createGrid=function(t,e,i,a,r,o,s,l){var c={};c[i.units.pos+"1"]=t.pos,c[i.units.pos+"2"]=t.pos,c[i.counterUnits.pos+"1"]=a,c[i.counterUnits.pos+"2"]=a+r;var u=o.elem("line",c,s.join(" "));l.emit("draw",n.extend({type:"grid",axis:i,index:e,group:o,element:u},c))},n.createLabel=function(t,e,i,a,r,o,s,l,c,u){var d,h={};if(h[a.units.pos]=t.pos+o[a.units.pos],h[a.counterUnits.pos]=o[a.counterUnits.pos],h[a.units.len]=t.len,h[a.counterUnits.len]=r,c){var p='<span class="'+l.join(" ")+'">'+i[e]+"</span>";d=s.foreignObject(p,n.extend({style:"overflow: visible;"},h))}else d=s.elem("text",h,l.join(" ")).text(i[e]);u.emit("draw",n.extend({type:"label",axis:a,index:e,group:s,element:d,text:i[e]},h))},n.createAxis=function(t,e,i,a,r,o,s,l){var c=s["axis"+t.units.pos.toUpperCase()],u=e.map(t.projectValue.bind(t)).map(t.transform),d=e.map(c.labelInterpolationFnc);u.forEach(function(e,u){(d[u]||0===d[u])&&(c.showGrid&&n.createGrid(e,u,t,t.gridOffset,i[t.counterUnits.len](),a,[s.classNames.grid,s.classNames[t.units.dir]],l),c.showLabel&&n.createLabel(e,u,d,t,c.offset,t.labelOffset,r,[s.classNames.label,s.classNames[t.units.dir]],o,l))})},n.optionsProvider=function(e,i,a){function r(e){var r=s;if(s=n.extend({},c),i)for(l=0;l<i.length;l++){var o=t.matchMedia(i[l][0]);o.matches&&(s=n.extend(s,i[l][1]))}a&&!e&&a.emit("optionsChanged",{previousOptions:r,currentOptions:s})}function o(){u.forEach(function(t){t.removeListener(r)})}var s,l,c=n.extend({},e),u=[];if(!t.matchMedia)throw"window.matchMedia not found! Make sure you're using a polyfill.";if(i)for(l=0;l<i.length;l++){var d=t.matchMedia(i[l][0]);d.addListener(r),u.push(d)}return r(!0),{get currentOptions(){return n.extend({},s)},removeMediaQueryListeners:o}}}(window,document,t),function(t,e,n){"use strict";n.Interpolation={},n.Interpolation.none=function(){return function(t){for(var e=(new n.Svg.Path).move(t[0],t[1]),i=3;i<t.length;i+=2)e.line(t[i-1],t[i]);return e}},n.Interpolation.simple=function(t){var e={divisor:2};t=n.extend({},e,t);var i=1/Math.max(1,t.divisor);return function(t){for(var e=(new n.Svg.Path).move(t[0],t[1]),a=2;a<t.length;a+=2){var r=t[a-2],o=t[a-1],s=t[a],l=t[a+1],c=(s-r)*i;e.curve(r+c,o,s-c,l,s,l)}return e}},n.Interpolation.cardinal=function(t){var e={tension:1};t=n.extend({},e,t);var i=Math.min(1,Math.max(0,t.tension)),a=1-i;return function(t){if(t.length<=4)return n.Interpolation.none()(t);for(var e,r=(new n.Svg.Path).move(t[0],t[1]),o=0,s=t.length;s-2*!e>o;o+=2){var l=[{x:+t[o-2],y:+t[o-1]},{x:+t[o],y:+t[o+1]},{x:+t[o+2],y:+t[o+3]},{x:+t[o+4],y:+t[o+5]}];e?o?s-4===o?l[3]={x:+t[0],y:+t[1]}:s-2===o&&(l[2]={x:+t[0],y:+t[1]},l[3]={x:+t[2],y:+t[3]}):l[0]={x:+t[s-2],y:+t[s-1]}:s-4===o?l[3]=l[2]:o||(l[0]={x:+t[o],y:+t[o+1]}),r.curve(i*(-l[0].x+6*l[1].x+l[2].x)/6+a*l[2].x,i*(-l[0].y+6*l[1].y+l[2].y)/6+a*l[2].y,i*(l[1].x+6*l[2].x-l[3].x)/6+a*l[2].x,i*(l[1].y+6*l[2].y-l[3].y)/6+a*l[2].y,l[2].x,l[2].y)}return r}}}(window,document,t),function(t,e,n){"use strict";n.EventEmitter=function(){function t(t,e){i[t]=i[t]||[],i[t].push(e)}function e(t,e){i[t]&&(e?(i[t].splice(i[t].indexOf(e),1),0===i[t].length&&delete i[t]):delete i[t])}function n(t,e){i[t]&&i[t].forEach(function(t){t(e)}),i["*"]&&i["*"].forEach(function(n){n(t,e)})}var i=[];return{addEventHandler:t,removeEventHandler:e,emit:n}}}(window,document,t),function(t,e,n){"use strict";function i(t){var e=[];if(t.length)for(var n=0;n<t.length;n++)e.push(t[n]);return e}function a(t,e){var i=e||this.prototype||n.Class,a=Object.create(i);n.Class.cloneDefinitions(a,t);var r=function(){var t,e=a.constructor||function(){};return t=this===n?Object.create(a):this,e.apply(t,Array.prototype.slice.call(arguments,0)),t};return r.prototype=a,r["super"]=i,r.extend=this.extend,r}function r(){var t=i(arguments),e=t[0];return t.splice(1,t.length-1).forEach(function(t){Object.getOwnPropertyNames(t).forEach(function(n){delete e[n],Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}),e}n.Class={extend:a,cloneDefinitions:r}}(window,document,t),function(t,e,n){"use strict";function i(t,e,i){return t&&(this.data=t,this.eventEmitter.emit("data",{type:"update",data:this.data})),e&&(this.options=n.extend({},i?this.options:this.defaultOptions,e),this.initializeTimeoutId||(this.optionsProvider.removeMediaQueryListeners(),this.optionsProvider=n.optionsProvider(this.options,this.responsiveOptions,this.eventEmitter))),this.initializeTimeoutId||this.createChart(this.optionsProvider.currentOptions),this}function a(){return t.removeEventListener("resize",this.resizeListener),this.optionsProvider.removeMediaQueryListeners(),this}function r(t,e){return this.eventEmitter.addEventHandler(t,e),this}function o(t,e){return this.eventEmitter.removeEventHandler(t,e),this}function s(){t.addEventListener("resize",this.resizeListener),this.optionsProvider=n.optionsProvider(this.options,this.responsiveOptions,this.eventEmitter),this.eventEmitter.addEventHandler("optionsChanged",function(){this.update()}.bind(this)),this.options.plugins&&this.options.plugins.forEach(function(t){t instanceof Array?t[0](this,t[1]):t(this)}.bind(this)),this.eventEmitter.emit("data",{type:"initial",data:this.data}),this.createChart(this.optionsProvider.currentOptions),this.initializeTimeoutId=void 0}function l(e,i,a,r,o){this.container=n.querySelector(e),this.data=i,this.defaultOptions=a,this.options=r,this.responsiveOptions=o,this.eventEmitter=n.EventEmitter(),this.supportsForeignObject=n.Svg.isSupported("Extensibility"),this.supportsAnimations=n.Svg.isSupported("AnimationEventsAttribute"),this.resizeListener=function(){this.update()}.bind(this),this.container&&(this.container.__chartist__&&(this.container.__chartist__.initializeTimeoutId?t.clearTimeout(this.container.__chartist__.initializeTimeoutId):this.container.__chartist__.detach()),this.container.__chartist__=this),this.initializeTimeoutId=setTimeout(s.bind(this),0)}n.Base=n.Class.extend({constructor:l,optionsProvider:void 0,container:void 0,svg:void 0,eventEmitter:void 0,createChart:function(){throw new Error("Base chart type can't be instantiated!")},update:i,detach:a,on:r,off:o,version:n.version,supportsForeignObject:!1})}(window,document,t),function(t,e,n){"use strict";function i(t,i,a,r,o){t instanceof SVGElement?this._node=t:(this._node=e.createElementNS(k,t),"svg"===t&&this._node.setAttributeNS(T,n.xmlNs.qualifiedName,n.xmlNs.uri),i&&this.attr(i),a&&this.addClass(a),r&&(o&&r._node.firstChild?r._node.insertBefore(this._node,r._node.firstChild):r._node.appendChild(this._node)))}function a(t,e){return"string"==typeof t?e?this._node.getAttributeNS(e,t):this._node.getAttribute(t):(Object.keys(t).forEach(function(i){void 0!==t[i]&&(e?this._node.setAttributeNS(e,[n.xmlNs.prefix,":",i].join(""),t[i]):this._node.setAttribute(i,t[i]))}.bind(this)),this)}function r(t,e,i,a){return new n.Svg(t,e,i,this,a)}function o(){return this._node.parentNode instanceof SVGElement?new n.Svg(this._node.parentNode):null}function s(){for(var t=this._node;"svg"!==t.nodeName;)t=t.parentNode;return new n.Svg(t)}function l(t){var e=this._node.querySelector(t);return e?new n.Svg(e):null}function c(t){var e=this._node.querySelectorAll(t);return e.length?new n.Svg.List(e):null}function u(t,n,i,a){if("string"==typeof t){var r=e.createElement("div");r.innerHTML=t,t=r.firstChild}t.setAttribute("xmlns",P);var o=this.elem("foreignObject",n,i,a);return o._node.appendChild(t),o}function d(t){return this._node.appendChild(e.createTextNode(t)),this}function h(){for(;this._node.firstChild;)this._node.removeChild(this._node.firstChild);return this}function p(){return this._node.parentNode.removeChild(this._node),this.parent()}function f(t){return this._node.parentNode.replaceChild(t._node,this._node),t}function g(t,e){return e&&this._node.firstChild?this._node.insertBefore(t._node,this._node.firstChild):this._node.appendChild(t._node),this}function v(){return this._node.getAttribute("class")?this._node.getAttribute("class").trim().split(/\s+/):[]}function m(t){return this._node.setAttribute("class",this.classes(this._node).concat(t.trim().split(/\s+/)).filter(function(t,e,n){return n.indexOf(t)===e}).join(" ")),this}function y(t){var e=t.trim().split(/\s+/);return this._node.setAttribute("class",this.classes(this._node).filter(function(t){return-1===e.indexOf(t)}).join(" ")),this}function b(){return this._node.setAttribute("class",""),this}function w(){return this._node.clientHeight||Math.round(this._node.getBBox().height)||this._node.parentNode.clientHeight}function x(){return this._node.clientWidth||Math.round(this._node.getBBox().width)||this._node.parentNode.clientWidth}function C(t,e,i){return void 0===e&&(e=!0),Object.keys(t).forEach(function(a){function r(t,e){var r,o,s,l={};t.easing&&(s=t.easing instanceof Array?t.easing:n.Svg.Easing[t.easing],delete t.easing),t.begin=n.ensureUnit(t.begin,"ms"),t.dur=n.ensureUnit(t.dur,"ms"),s&&(t.calcMode="spline",t.keySplines=s.join(" "),t.keyTimes="0;1"),e&&(t.fill="freeze",l[a]=t.from,this.attr(l),o=n.stripUnit(t.begin||0),t.begin="indefinite"),r=this.elem("animate",n.extend({attributeName:a},t)),e&&setTimeout(function(){try{r._node.beginElement()}catch(e){l[a]=t.to,this.attr(l),r.remove()}}.bind(this),o),i&&r._node.addEventListener("beginEvent",function(){i.emit("animationBegin",{element:this,animate:r._node,params:t})}.bind(this)),r._node.addEventListener("endEvent",function(){i&&i.emit("animationEnd",{element:this,animate:r._node,params:t}),e&&(l[a]=t.to,this.attr(l),r.remove())}.bind(this))}t[a]instanceof Array?t[a].forEach(function(t){r.bind(this)(t,!1)}.bind(this)):r.bind(this)(t[a],e)}.bind(this)),this}function S(t){var e=this;this.svgElements=[];for(var i=0;i<t.length;i++)this.svgElements.push(new n.Svg(t[i]));Object.keys(n.Svg.prototype).filter(function(t){return-1===["constructor","parent","querySelector","querySelectorAll","replace","append","classes","height","width"].indexOf(t)}).forEach(function(t){e[t]=function(){var i=Array.prototype.slice.call(arguments,0);return e.svgElements.forEach(function(e){n.Svg.prototype[t].apply(e,i)}),e}})}var k="http://www.w3.org/2000/svg",T="http://www.w3.org/2000/xmlns/",P="http://www.w3.org/1999/xhtml";n.xmlNs={qualifiedName:"xmlns:ct",prefix:"ct",uri:"http://gionkunz.github.com/chartist-js/ct"},n.Svg=n.Class.extend({constructor:i,attr:a,elem:r,parent:o,root:s,querySelector:l,querySelectorAll:c,foreignObject:u,text:d,empty:h,remove:p,replace:f,append:g,classes:v,addClass:m,removeClass:y,removeAllClasses:b,height:w,width:x,animate:C}),n.Svg.isSupported=function(t){return e.implementation.hasFeature("www.http://w3.org/TR/SVG11/feature#"+t,"1.1")};var E={easeInSine:[.47,0,.745,.715],easeOutSine:[.39,.575,.565,1],easeInOutSine:[.445,.05,.55,.95],easeInQuad:[.55,.085,.68,.53],easeOutQuad:[.25,.46,.45,.94],easeInOutQuad:[.455,.03,.515,.955],easeInCubic:[.55,.055,.675,.19],easeOutCubic:[.215,.61,.355,1],easeInOutCubic:[.645,.045,.355,1],easeInQuart:[.895,.03,.685,.22],easeOutQuart:[.165,.84,.44,1],easeInOutQuart:[.77,0,.175,1],easeInQuint:[.755,.05,.855,.06],easeOutQuint:[.23,1,.32,1],easeInOutQuint:[.86,0,.07,1],easeInExpo:[.95,.05,.795,.035],easeOutExpo:[.19,1,.22,1],easeInOutExpo:[1,0,0,1],easeInCirc:[.6,.04,.98,.335],easeOutCirc:[.075,.82,.165,1],easeInOutCirc:[.785,.135,.15,.86],easeInBack:[.6,-.28,.735,.045],easeOutBack:[.175,.885,.32,1.275],easeInOutBack:[.68,-.55,.265,1.55]};n.Svg.Easing=E,n.Svg.List=n.Class.extend({constructor:S})}(window,document,t),function(t,e,n){"use strict";function i(t,e,i,a,r){i.splice(a,0,n.extend({command:r?t.toLowerCase():t.toUpperCase()},e))}function a(t,e){t.forEach(function(n,i){y[n.command.toLowerCase()].forEach(function(a,r){e(n,a,i,r,t)})})}function r(t,e){this.pathElements=[],this.pos=0,this.close=t,this.options=n.extend({},b,e)}function o(t){return void 0!==t?(this.pos=Math.max(0,Math.min(this.pathElements.length,t)),this):this.pos}function s(t){return this.pathElements.splice(this.pos,t),this}function l(t,e,n){return i("M",{x:+t,y:+e},this.pathElements,this.pos++,n),this}function c(t,e,n){return i("L",{x:+t,y:+e},this.pathElements,this.pos++,n),this}function u(t,e,n,a,r,o,s){return i("C",{x1:+t,y1:+e,x2:+n,y2:+a,x:+r,y:+o},this.pathElements,this.pos++,s),this}function d(t,e,n,a,r,o,s,l){return i("A",{rx:+t,ry:+e,xAr:+n,lAf:+a,sf:+r,x:+o,y:+s},this.pathElements,this.pos++,l),this}function h(t){var e=t.replace(/([A-Za-z])([0-9])/g,"$1 $2").replace(/([0-9])([A-Za-z])/g,"$1 $2").split(/[\s,]+/).reduce(function(t,e){return e.match(/[A-Za-z]/)&&t.push([]),t[t.length-1].push(e),t},[]);"Z"===e[e.length-1][0].toUpperCase()&&e.pop();var i=e.map(function(t){var e=t.shift(),i=y[e.toLowerCase()];return n.extend({command:e},i.reduce(function(e,n,i){return e[n]=+t[i],e},{}))}),a=[this.pos,0];return Array.prototype.push.apply(a,i),Array.prototype.splice.apply(this.pathElements,a),this.pos+=i.length,this}function p(){var t=Math.pow(10,this.options.accuracy);return this.pathElements.reduce(function(e,n){var i=y[n.command.toLowerCase()].map(function(e){return this.options.accuracy?Math.round(n[e]*t)/t:n[e]}.bind(this));return e+n.command+i.join(",")}.bind(this),"")+(this.close?"Z":"")}function f(t,e){return a(this.pathElements,function(n,i){n[i]*="x"===i[0]?t:e}),this}function g(t,e){return a(this.pathElements,function(n,i){n[i]+="x"===i[0]?t:e}),this}function v(t){return a(this.pathElements,function(e,n,i,a,r){var o=t(e,n,i,a,r);(o||0===o)&&(e[n]=o)}),this}function m(){var t=new n.Svg.Path(this.close);return t.pos=this.pos,t.pathElements=this.pathElements.slice().map(function(t){return n.extend({},t)}),t.options=n.extend({},this.options),t}var y={m:["x","y"],l:["x","y"],c:["x1","y1","x2","y2","x","y"],a:["rx","ry","xAr","lAf","sf","x","y"]},b={accuracy:3};n.Svg.Path=n.Class.extend({constructor:r,position:o,remove:s,move:l,line:c,curve:u,arc:d,scale:f,translate:g,transform:v,parse:h,stringify:p,clone:m}),n.Svg.Path.elementDescriptions=y}(window,document,t),function(t,e,n){"use strict";function i(t,e,n,i,r){this.units=t,this.counterUnits=t===a.x?a.y:a.x,this.chartRect=e,this.axisLength=e[t.rectEnd]-e[t.rectStart],this.gridOffset=e[t.rectOffset],this.transform=n,this.labelOffset=i,this.options=r}var a={x:{pos:"x",len:"width",dir:"horizontal",rectStart:"x1",rectEnd:"x2",rectOffset:"y2"},y:{pos:"y",len:"height",dir:"vertical",rectStart:"y2",rectEnd:"y1",rectOffset:"x1"}};n.Axis=n.Class.extend({constructor:i,projectValue:function(){throw new Error("Base axis can't be instantiated!")}}),n.Axis.units=a}(window,document,t),function(t,e,n){"use strict";function i(t,e,i,a,r){n.LinearScaleAxis["super"].constructor.call(this,t,e,i,a,r),this.bounds=n.getBounds(this.axisLength,r.highLow,r.scaleMinSpace,r.referenceValue)}function a(t){return{pos:this.axisLength*(t-this.bounds.min)/(this.bounds.range+this.bounds.step),len:n.projectLength(this.axisLength,this.bounds.step,this.bounds)}}n.LinearScaleAxis=n.Axis.extend({constructor:i,projectValue:a})}(window,document,t),function(t,e,n){"use strict";function i(t,e,i,a,r){n.StepAxis["super"].constructor.call(this,t,e,i,a,r),this.stepLength=this.axisLength/(r.stepCount-(r.stretch?1:0))}function a(t,e){return{pos:this.stepLength*e,len:this.stepLength}}n.StepAxis=n.Axis.extend({constructor:i,projectValue:a})}(window,document,t),function(t,e,n){"use strict";function i(t){var e=[],i=n.normalizeDataArray(n.getDataArray(this.data,t.reverseData),this.data.labels.length),a=n.normalizePadding(t.chartPadding,r.padding);this.svg=n.createSvg(this.container,t.width,t.height,t.classNames.chart);var o=n.createChartRect(this.svg,t,r.padding),s=n.getHighLow(i);s.high=+t.high||(0===t.high?0:s.high),s.low=+t.low||(0===t.low?0:s.low);var l=new n.StepAxis(n.Axis.units.x,o,function(t){return t.pos=o.x1+t.pos,t},{x:t.axisX.labelOffset.x,y:o.y1+t.axisX.labelOffset.y+(this.supportsForeignObject?5:20)},{stepCount:this.data.labels.length,stretch:t.fullWidth}),c=new n.LinearScaleAxis(n.Axis.units.y,o,function(t){return t.pos=o.y1-t.pos,t},{x:a.left+t.axisY.labelOffset.x+(this.supportsForeignObject?-10:0),y:t.axisY.labelOffset.y+(this.supportsForeignObject?-15:0)},{highLow:s,scaleMinSpace:t.axisY.scaleMinSpace}),u=this.svg.elem("g").addClass(t.classNames.labelGroup),d=this.svg.elem("g").addClass(t.classNames.gridGroup);n.createAxis(l,this.data.labels,o,d,u,this.supportsForeignObject,t,this.eventEmitter),n.createAxis(c,c.bounds.values,o,d,u,this.supportsForeignObject,t,this.eventEmitter),this.data.series.forEach(function(a,r){e[r]=this.svg.elem("g"),e[r].attr({"series-name":a.name,meta:n.serialize(a.meta)},n.xmlNs.uri),e[r].addClass([t.classNames.series,a.className||t.classNames.series+"-"+n.alphaNumerate(r)].join(" "));var s=[];if(i[r].forEach(function(u,d){var h={x:o.x1+l.projectValue(u,d,i[r]).pos,y:o.y1-c.projectValue(u,d,i[r]).pos};if(s.push(h.x,h.y),t.showPoint){var p=e[r].elem("line",{x1:h.x,y1:h.y,x2:h.x+.01,y2:h.y},t.classNames.point).attr({value:u,meta:n.getMetaData(a,d)},n.xmlNs.uri);this.eventEmitter.emit("draw",{type:"point",value:u,index:d,group:e[r],element:p,x:h.x,y:h.y})}}.bind(this)),t.showLine||t.showArea){var u="function"==typeof t.lineSmooth?t.lineSmooth:t.lineSmooth?n.Interpolation.cardinal():n.Interpolation.none(),d=u(s);if(t.showLine){var h=e[r].elem("path",{d:d.stringify()},t.classNames.line,!0).attr({values:i[r]},n.xmlNs.uri);this.eventEmitter.emit("draw",{type:"line",values:i[r],path:d.clone(),chartRect:o,index:r,group:e[r],element:h})}if(t.showArea){var p=Math.max(Math.min(t.areaBase,c.bounds.max),c.bounds.min),f=o.y1-c.projectValue(p).pos,g=d.clone();g.position(0).remove(1).move(o.x1,f).line(s[0],s[1]).position(g.pathElements.length).line(s[s.length-2],f);var v=e[r].elem("path",{d:g.stringify()},t.classNames.area,!0).attr({values:i[r]},n.xmlNs.uri);this.eventEmitter.emit("draw",{type:"area",values:i[r],path:g.clone(),chartRect:o,index:r,group:e[r],element:v})}}}.bind(this)),this.eventEmitter.emit("created",{bounds:c.bounds,chartRect:o,axisX:l,axisY:c,svg:this.svg,options:t})}function a(t,e,i,a){n.Line["super"].constructor.call(this,t,e,r,n.extend({},r,i),a)}var r={axisX:{offset:30,labelOffset:{x:0,y:0},showLabel:!0,showGrid:!0,labelInterpolationFnc:n.noop},axisY:{offset:40,labelOffset:{x:0,y:0},showLabel:!0,showGrid:!0,labelInterpolationFnc:n.noop,scaleMinSpace:20},width:void 0,height:void 0,showLine:!0,showPoint:!0,showArea:!1,areaBase:0,lineSmooth:!0,low:void 0,high:void 0,chartPadding:5,fullWidth:!1,reverseData:!1,classNames:{chart:"ct-chart-line",label:"ct-label",labelGroup:"ct-labels",series:"ct-series",line:"ct-line",point:"ct-point",area:"ct-area",grid:"ct-grid",gridGroup:"ct-grids",vertical:"ct-vertical",horizontal:"ct-horizontal"}};n.Line=n.Base.extend({constructor:a,createChart:i})}(window,document,t),function(t,e,n){"use strict";function i(t){var e,i=[],a=n.normalizeDataArray(n.getDataArray(this.data,t.reverseData),this.data.labels.length),o=n.normalizePadding(t.chartPadding,r.padding);if(this.svg=n.createSvg(this.container,t.width,t.height,t.classNames.chart),t.stackBars){var s=n.serialMap(a,function(){return Array.prototype.slice.call(arguments).reduce(n.sum,0)});e=n.getHighLow([s])}else e=n.getHighLow(a);e.high=+t.high||(0===t.high?0:e.high),e.low=+t.low||(0===t.low?0:e.low);var l,c,u,d,h=n.createChartRect(this.svg,t,r.padding);t.horizontalBars?(c=d=new n.StepAxis(n.Axis.units.y,h,function(t){return t.pos=h.y1-t.pos,t},{x:o.left+t.axisY.labelOffset.x+(this.supportsForeignObject?-10:0),y:t.axisY.labelOffset.y-h.height()/this.data.labels.length},{stepCount:this.data.labels.length,stretch:t.fullHeight}),l=u=new n.LinearScaleAxis(n.Axis.units.x,h,function(t){return t.pos=h.x1+t.pos,t},{x:t.axisX.labelOffset.x,y:h.y1+t.axisX.labelOffset.y+(this.supportsForeignObject?5:20)},{highLow:e,scaleMinSpace:t.axisX.scaleMinSpace,referenceValue:0})):(c=u=new n.StepAxis(n.Axis.units.x,h,function(t){return t.pos=h.x1+t.pos,t},{x:t.axisX.labelOffset.x,y:h.y1+t.axisX.labelOffset.y+(this.supportsForeignObject?5:20)},{stepCount:this.data.labels.length}),l=d=new n.LinearScaleAxis(n.Axis.units.y,h,function(t){return t.pos=h.y1-t.pos,t},{x:o.left+t.axisY.labelOffset.x+(this.supportsForeignObject?-10:0),y:t.axisY.labelOffset.y+(this.supportsForeignObject?-15:0)},{highLow:e,scaleMinSpace:t.axisY.scaleMinSpace,referenceValue:0}));var p=this.svg.elem("g").addClass(t.classNames.labelGroup),f=this.svg.elem("g").addClass(t.classNames.gridGroup),g=t.horizontalBars?h.x1+l.projectValue(0).pos:h.y1-l.projectValue(0).pos,v=[];n.createAxis(c,this.data.labels,h,f,p,this.supportsForeignObject,t,this.eventEmitter),n.createAxis(l,l.bounds.values,h,f,p,this.supportsForeignObject,t,this.eventEmitter),this.data.series.forEach(function(e,r){var o=r-(this.data.series.length-1)/2,s=h[c.units.len]()/a[r].length/2;i[r]=this.svg.elem("g"),i[r].attr({"series-name":e.name,meta:n.serialize(e.meta)},n.xmlNs.uri),i[r].addClass([t.classNames.series,e.className||t.classNames.series+"-"+n.alphaNumerate(r)].join(" ")),a[r].forEach(function(u,d){var p,f,m={x:h.x1+(t.horizontalBars?l:c).projectValue(u,d,a[r]).pos,y:h.y1-(t.horizontalBars?c:l).projectValue(u,d,a[r]).pos};m[c.units.pos]+=s*(t.horizontalBars?-1:1),m[c.units.pos]+=t.stackBars?0:o*t.seriesBarDistance*(t.horizontalBars?-1:1),f=v[d]||g,v[d]=f-(g-m[c.counterUnits.pos]);var y={};y[c.units.pos+"1"]=m[c.units.pos],y[c.units.pos+"2"]=m[c.units.pos],y[c.counterUnits.pos+"1"]=t.stackBars?f:g,y[c.counterUnits.pos+"2"]=t.stackBars?v[d]:m[c.counterUnits.pos],p=i[r].elem("line",y,t.classNames.bar).attr({value:u,meta:n.getMetaData(e,d)},n.xmlNs.uri),this.eventEmitter.emit("draw",n.extend({type:"bar",value:u,index:d,chartRect:h,group:i[r],element:p},y))}.bind(this))}.bind(this)),this.eventEmitter.emit("created",{bounds:l.bounds,chartRect:h,axisX:u,axisY:d,svg:this.svg,options:t})}function a(t,e,i,a){n.Bar["super"].constructor.call(this,t,e,r,n.extend({},r,i),a)}var r={axisX:{offset:30,labelOffset:{x:0,y:0},showLabel:!0,showGrid:!0,labelInterpolationFnc:n.noop,scaleMinSpace:40},axisY:{offset:40,labelOffset:{x:0,y:0},showLabel:!0,showGrid:!0,labelInterpolationFnc:n.noop,scaleMinSpace:20},width:void 0,height:void 0,high:void 0,low:void 0,chartPadding:5,seriesBarDistance:15,stackBars:!1,horizontalBars:!1,reverseData:!1,classNames:{chart:"ct-chart-bar",label:"ct-label",labelGroup:"ct-labels",series:"ct-series",bar:"ct-bar",grid:"ct-grid",gridGroup:"ct-grids",vertical:"ct-vertical",horizontal:"ct-horizontal"}};n.Bar=n.Base.extend({constructor:a,createChart:i})}(window,document,t),function(t,e,n){"use strict";function i(t,e,n){var i=e.x>t.x;return i&&"explode"===n||!i&&"implode"===n?"start":i&&"implode"===n||!i&&"explode"===n?"end":"middle"}function a(t){var e,a,r,s,l=[],c=t.startAngle,u=n.getDataArray(this.data,t.reverseData);this.svg=n.createSvg(this.container,t.width,t.height,t.classNames.chart),e=n.createChartRect(this.svg,t,o.padding),a=Math.min(e.width()/2,e.height()/2),s=t.total||u.reduce(function(t,e){return t+e},0),a-=t.donut?t.donutWidth/2:0,r=t.donut?a:a/2,r+=t.labelOffset;for(var d={x:e.x1+e.width()/2,y:e.y2+e.height()/2},h=1===this.data.series.filter(function(t){return 0!==t}).length,p=0;p<this.data.series.length;p++){l[p]=this.svg.elem("g",null,null,!0),this.data.series[p].name&&l[p].attr({"series-name":this.data.series[p].name,meta:n.serialize(this.data.series[p].meta)},n.xmlNs.uri),l[p].addClass([t.classNames.series,this.data.series[p].className||t.classNames.series+"-"+n.alphaNumerate(p)].join(" "));var f=c+u[p]/s*360;f-c===360&&(f-=.01);var g=n.polarToCartesian(d.x,d.y,a,c-(0===p||h?0:.2)),v=n.polarToCartesian(d.x,d.y,a,f),m=new n.Svg.Path(!t.donut).move(v.x,v.y).arc(a,a,0,f-c>180,0,g.x,g.y);t.donut||m.line(d.x,d.y);var y=l[p].elem("path",{d:m.stringify()},t.classNames.slice+(t.donut?" "+t.classNames.donut:""));if(y.attr({value:u[p]},n.xmlNs.uri),t.donut&&y.attr({style:"stroke-width: "+ +t.donutWidth+"px"}),this.eventEmitter.emit("draw",{type:"slice",value:u[p],totalDataSum:s,index:p,group:l[p],element:y,path:m.clone(),center:d,radius:a,startAngle:c,endAngle:f}),t.showLabel){var b=n.polarToCartesian(d.x,d.y,r,c+(f-c)/2),w=t.labelInterpolationFnc(this.data.labels?this.data.labels[p]:u[p],p),x=l[p].elem("text",{dx:b.x,dy:b.y,"text-anchor":i(d,b,t.labelDirection)},t.classNames.label).text(""+w);this.eventEmitter.emit("draw",{type:"label",index:p,group:l[p],element:x,text:""+w,x:b.x,y:b.y})}c=f}this.eventEmitter.emit("created",{chartRect:e,svg:this.svg,options:t})}function r(t,e,i,a){n.Pie["super"].constructor.call(this,t,e,o,n.extend({},o,i),a)}var o={width:void 0,height:void 0,chartPadding:5,classNames:{chart:"ct-chart-pie",series:"ct-series",slice:"ct-slice",donut:"ct-donut",label:"ct-label"},startAngle:0,total:void 0,donut:!1,donutWidth:60,showLabel:!0,labelOffset:0,labelInterpolationFnc:n.noop,labelDirection:"neutral",reverseData:!1};n.Pie=n.Base.extend({constructor:r,createChart:a,determineAnchorPosition:i})}(window,document,t),t});