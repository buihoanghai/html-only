(self.AMP=self.AMP||[]).push({n:"amp-carousel",v:"1518049180919",f:(function(AMP){var f;function l(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]}function m(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var aa=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;self.log=self.log||{user:null,dev:null,userForEmbed:null};var n=self.log;function p(){if(n.dev)return n.dev;throw Error("failed to call initLogConstructor");};function ba(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView;if(b=b!=(b.__AMP_TOP||b)&&q(b,"action")?r(b,"action"):null)return b}b=t(a);b=u(b);return r(b,"action")}function v(a,b){a=a.__AMP_TOP||a;return r(a,b)}function t(a){return a.nodeType?v((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function u(a){a=t(a);return a.isSingleDoc()?a.win:a}
function r(a,b){q(a,b);var c=w(a);a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function x(a){var b=y(a);if(b)return b;var c,d=new Promise(function(a){c=a});w(a)["amp-analytics-instrumentation"]={obj:null,promise:d,resolve:c,context:null,ctor:null};return d}
function y(a){var b=w(a)["amp-analytics-instrumentation"];if(b){if(b.promise)return b.promise;r(a,"amp-analytics-instrumentation");return b.promise=Promise.resolve(b.obj)}return null}function w(a){var b=a.services;b||(b=a.services={});return b}function q(a,b){a=a.services&&a.services[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function z(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};function A(a){return a.ampExtendedElements?!!a.ampExtendedElements["amp-analytics"]:!1}function ca(a){var b=t(a),c=y(u(a));return c?c:Promise.resolve().then(function(){return A(b.win)?x(u(a)):b.whenBodyAvailable().then(function(){return A(b.win)?x(u(a)):null})})};function B(a){return v(a,"timer")};function C(a,b){var c;if(a.__AMP__EXPERIMENT_TOGGLES)c=a.__AMP__EXPERIMENT_TOGGLES;else{a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);c=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var d in a.AMP_CONFIG){var e=a.AMP_CONFIG[d];"number"===typeof e&&0<=e&&1>=e&&(c[d]=Math.random()<e)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length&&(d=a.AMP_CONFIG["allow-doc-opt-in"],e=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]')))for(var e=
e.getAttribute("content").split(","),g=0;g<e.length;g++)-1!=d.indexOf(e[g])&&(c[e[g]]=!0);Object.assign(c,da(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){d=a.AMP_CONFIG["allow-url-opt-in"];e=a.location.originalHash||a.location.hash;a=Object.create(null);if(e)for(var h;h=aa.exec(e);)g=m(h[1],h[1]),h=h[2]?m(h[2],h[2]):"",a[g]=h;for(e=0;e<d.length;e++)g=a["e-"+d[e]],"1"==g&&(c[d[e]]=!0),"0"==g&&(c[d[e]]=!1)}}var k=c;return!!k[b]}
function da(a){a:{var b;try{b=a.document.cookie}catch(k){b=""}if(a=b)for(a=a.split(";"),b=0;b<a.length;b++){var c=a[b].trim(),d=c.indexOf("="),e;if(e=-1!=d)e=c.substring(0,d).trim(),e="AMP_EXP"==m(e,void 0);if(e){a=c.substring(d+1).trim();a=m(a,a);break a}}a=null}var g=a,h=g?g.split(/\s*,\s*/g):[];a=Object.create(null);for(b=0;b<h.length;b++)0!=h[b].length&&("-"==h[b][0]?a[h[b].substr(1)]=!1:a[h[b]]=!0);return a};var D,E="Webkit webkit Moz moz ms O o".split(" ");function F(a,b){var c=void 0;if(z(b,"--"))return b;D||(D=Object.create(null));var d=D[b];if(!d||c){d=b;if(void 0===a[b]){var e=b.charAt(0).toUpperCase()+b.slice(1);a:{for(var g=0;g<E.length;g++){var h=E[g]+e;if(void 0!==a[h]){e=h;break a}}e=""}var k=e;void 0!==a[k]&&(d=k)}c||(D[b]=d)}return d}function G(a,b){var c,d=F(a.style,"order");d&&(a.style[d]=c?b+c:b)}function ea(a){var b=F(a.style,"scrollSnapType");if(b)return a.style[b]};function H(a,b,c){ca(a).then(function(d){d&&d.triggerEventForTarget(a,b,c)})};function I(a,b,c,d){var e=new J(0,0,a,b,c,d,1,1);return e.solveYValueFromXValue.bind(e)}function J(a,b,c,d,e,g,h,k){this.x0=a;this.y0=b;this.x1=c;this.y1=d;this.x2=e;this.y2=g;this.x3=h;this.y3=k}f=J.prototype;f.solveYValueFromXValue=function(a){return this.getPointY(this.solvePositionFromXValue(a))};
f.solvePositionFromXValue=function(a){var b=1E-6,c=(a-this.x0)/(this.x3-this.x0);if(0>=c)return 0;if(1<=c)return 1;for(var d=0,e=1,g=0,h=0;8>h;h++){var g=this.getPointX(c),k=(this.getPointX(c+b)-g)/b;if(Math.abs(g-a)<b)return c;if(Math.abs(k)<b)break;else g<a?d=c:e=c,c-=(g-a)/k}for(h=0;Math.abs(g-a)>b&&8>h;h++)g<a?(d=c,c=(c+e)/2):(e=c,c=(c+d)/2),g=this.getPointX(c);return c};
f.getPointX=function(a){if(0==a)return this.x0;if(1==a)return this.x3;var b=this.lerp(this.x0,this.x1,a),c=this.lerp(this.x1,this.x2,a),d=this.lerp(this.x2,this.x3,a),b=this.lerp(b,c,a),c=this.lerp(c,d,a);return this.lerp(b,c,a)};f.getPointY=function(a){if(0==a)return this.y0;if(1==a)return this.y3;var b=this.lerp(this.y0,this.y1,a),c=this.lerp(this.y1,this.y2,a),d=this.lerp(this.y2,this.y3,a),b=this.lerp(b,c,a),c=this.lerp(c,d,a);return this.lerp(b,c,a)};f.lerp=function(a,b,c){return a+c*(b-a)};
var fa=I(.25,.1,.25,1),ga=I(.42,0,1,1),ha=I(0,0,.58,1),ia=I(.42,0,.58,1),ja={linear:function(a){return a},ease:fa,"ease-in":ga,"ease-out":ha,"ease-in-out":ia};function K(a){if(!a)return null;if("string"==typeof a){if(-1!=a.indexOf("cubic-bezier")){var b=a.match(/cubic-bezier\((.+)\)/);if(b&&(b=b[1].split(",").map(parseFloat),4==b.length)){for(var c=0;4>c;c++)if(isNaN(b[c]))return null;return I(b[0],b[1],b[2],b[3])}return null}return ja[a]}return a};function ka(){}function L(a,b){this.J=a;(a=b)||(a=v(self,"vsync"));this.C=a;this.fa=null;this.o=[]}function M(a,b,c,d){return(new L(a)).setCurve(d).add(0,b,1).start(c)}L.prototype.setCurve=function(a){a&&(this.fa=K(a));return this};L.prototype.add=function(a,b,c,d){this.o.push({delay:a,func:b,duration:c,curve:K(d)});return this};
L.prototype.start=function(a){var b=new N(this.C,this.J,this.o,this.fa,a);a=b;a.ia=Date.now();a.W=!0;a.C.canAnimate(a.J)?a.ka(a.ja):(p().warn("Animation","cannot animate"),O(a,!1,0));return b};
function N(a,b,c,d,e){var g=this;this.C=a;this.J=b;this.o=[];for(b=0;b<c.length;b++){var h=c[b];this.o.push({delay:h.delay,func:h.func,duration:h.duration,curve:h.curve||d,started:!1,completed:!1})}this.la=e;this.sa=this.ra=this.ia=0;this.W=!1;this.ja={};this.ha=new Promise(function(a,b){g.na=a;g.ma=b});this.ka=this.C.createAnimTask(this.J,{mutate:this.oa.bind(this)})}N.prototype.then=function(a,b){return a||b?this.ha.then(a,b):this.ha};
N.prototype.thenAlways=function(a){a=a||ka;return this.then(a,a)};N.prototype.halt=function(a){O(this,!1,a||0)};function O(a,b,c){if(a.W){a.W=!1;if(0!=c){1<a.o.length&&a.o.sort(function(a,b){return a.delay+a.duration-(b.delay+b.duration)});try{if(0<c)for(c=0;c<a.o.length;c++)a.o[c].func(1,!0);else for(var d=a.o.length-1;0<=d;d--)a.o[d].func(0,!1)}catch(e){p().error("Animation","completion failed: "+e,e),b=!1}}b?a.na():a.ma()}}
N.prototype.oa=function(){if(this.W){for(var a=Date.now(),b=Math.min((a-this.ia)/this.la,1),c=0;c<this.o.length;c++){var d=this.o[c];!d.started&&b>=d.delay&&(d.started=!0)}for(c=0;c<this.o.length;c++)if(d=this.o[c],d.started&&!d.completed)a:{var e,g;if(0<d.duration){if(e=g=Math.min((b-d.delay)/d.duration,1),d.curve&&1!=e)try{e=d.curve(g)}catch(h){p().error("Animation","step curve failed: "+h,h);O(this,!1,0);break a}}else e=g=1;1==g&&(d.completed=!0);try{d.func(e,d.completed)}catch(h){p().error("Animation",
"step mutate failed: "+h,h),O(this,!1,0)}}1==b?O(this,!0,0):this.C.canAnimate(this.J)?this.ka(this.ja):(p().warn("Animation","cancel animation"),O(this,!1,0))}};function la(a,b){return function(c){return a+(b-a)*c}};function P(a){a=AMP.BaseElement.call(this,a)||this;a.m=null;a.l=null;a.N=!1;return a}l(P,AMP.BaseElement);f=P.prototype;f.buildCallback=function(){(this.N=v(this.win,"input").isMouseDetected()||this.element.hasAttribute("controls"))&&this.element.classList.add("i-amphtml-carousel-has-controls");this.buildCarousel();this.buildButtons();this.setupGestures();this.setControlsState()};f.viewportCallback=function(a){this.onViewportCallback(a);a&&this.hintControls()};f.onViewportCallback=function(){};
f.buildButtons=function(){var a=this;this.m=this.element.ownerDocument.createElement("div");this.m.classList.add("amp-carousel-button");this.m.classList.add("amp-carousel-button-prev");this.m.setAttribute("role","button");this.element.hasAttribute("data-previous-button-aria-label")?this.m.setAttribute("aria-label",this.element.getAttribute("data-previous-button-aria-label")):this.m.setAttribute("aria-label","Previous item in carousel");this.m.setAttribute("tabindex",0);this.m.onkeydown=function(b){13!=
b.keyCode&&32!=b.keyCode||b.defaultPrevented||(b.preventDefault(),a.interactionPrev())};this.m.onclick=function(){a.interactionPrev()};this.element.appendChild(this.m);this.l=this.element.ownerDocument.createElement("div");this.l.classList.add("amp-carousel-button");this.l.classList.add("amp-carousel-button-next");this.l.setAttribute("role","button");this.element.hasAttribute("data-next-button-aria-label")?this.l.setAttribute("aria-label",this.element.getAttribute("data-next-button-aria-label")):
this.l.setAttribute("aria-label","Next item in carousel");this.l.setAttribute("tabindex",0);this.l.onkeydown=function(b){13!=b.keyCode&&32!=b.keyCode||b.defaultPrevented||(b.preventDefault(),a.interactionNext())};this.l.onclick=function(){a.interactionNext()};this.element.appendChild(this.l)};f.prerenderAllowed=function(){return!0};f.isRelayoutNeeded=function(){return!0};f.buildCarousel=function(){};f.setupGestures=function(){};f.go=function(a,b,c){c=void 0===c?!1:c;this.goCallback(a,b,c)};
f.goCallback=function(){};f.setControlsState=function(){this.m.classList.toggle("amp-disabled",!this.hasPrev());this.m.setAttribute("aria-disabled",!this.hasPrev());this.l.classList.toggle("amp-disabled",!this.hasNext());this.l.setAttribute("aria-disabled",!this.hasNext())};
f.hintControls=function(){var a=this;!this.N&&this.isInViewport()&&this.getVsync().mutate(function(){a.element.classList.add("i-amphtml-carousel-button-start-hint");B(a.win).delay(function(){a.deferMutate(function(){a.element.classList.remove("i-amphtml-carousel-button-start-hint");a.m.classList.toggle("i-amphtml-screen-reader",!a.N);a.l.classList.toggle("i-amphtml-screen-reader",!a.N)})},4E3)})};f.unlayoutCallback=function(){return!0};f.hasPrev=function(){};f.hasNext=function(){};
f.interactionNext=function(){this.l.classList.contains("amp-disabled")||this.go(1,!0,!1)};f.interactionPrev=function(){this.m.classList.contains("amp-disabled")||this.go(-1,!0,!1)};function Q(a){a=P.call(this,a)||this;a.R=null;a.T=!1;a.L=!1;a.ea=5E3;a.shouldLoop=!1;a.D=!1;return a}l(Q,P);f=Q.prototype;f.buildCarousel=function(){var a=this;this.T=this.element.hasAttribute("loop");this.L=this.element.hasAttribute("autoplay");this.buildSlides();this.shouldLoop=this.T&&this.isLoopingEligible();(this.D=this.L&&this.isLoopingEligible())&&ma(this);this.registerAction("toggleAutoplay",function(b){var c=b.args;c&&void 0!==c.toggleOn?na(a,c.toggleOn):na(a,!a.L)},1)};f.buildSlides=function(){};
f.onViewportCallback=function(a){this.updateViewportState(a);a?R(this):this.clearAutoplay()};f.goCallback=function(a,b,c){this.moveSlide(a,b);c?R(this):this.clearAutoplay()};f.moveSlide=function(){};f.updateViewportState=function(){};f.isLoopingEligible=function(){return!1};function ma(a){var b=Number(a.element.getAttribute("delay"));0<b&&(a.ea=Math.max(1E3,b));a.T||(a.element.setAttribute("loop",""),a.T=!0,a.shouldLoop=!0)}
function R(a){a.D&&(a.clearAutoplay(),a.R=B(a.win).delay(a.go.bind(a,1,!0,!0),a.ea))}function na(a,b){if(b!=a.D){var c=a.D;a.L=b;a.D=a.L&&a.isLoopingEligible();!c&&a.D&&ma(a);a.D?R(a):a.clearAutoplay()}}f.clearAutoplay=function(){null!==this.R&&(B(this.win).cancel(this.R),this.R=null)};function S(a){a=Q.call(this,a)||this;a.C=null;a.G=!1;a.j=[];a.w=0;a.h=null;a.H=[];a.O=!1;a.M=null;a.P=null;a.Z=!1;a.K=0;a.c=null;a.ga=0;a.F=0;a.V=0;a.Y=[];var b=v(a.win,"platform");a.U=b.isIos();a.da=null;a.ca=C(a.win,"slidescroll-disable-css-snap")&&z(v(a.win,"platform").getIosVersionString(),"10.3");return a}l(S,Q);f=S.prototype;f.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a};
f.buildSlides=function(){var a=this;this.C=this.getVsync();this.da=ba(this.element);this.G=void 0!=ea(this.element);this.ca&&(this.G=!1);this.element.classList.add("i-amphtml-slidescroll");this.j=this.getRealChildren();this.w=this.j.length;this.h=this.win.document.createElement("div");this.h.classList.add("i-amphtml-slides-container");this.h.setAttribute("aria-live","polite");this.ca&&this.h.classList.add("i-amphtml-slidescroll-no-snap");if(this.G){var b=this.win.document.createElement("div");b.classList.add("i-amphtml-carousel-start-marker");
this.h.appendChild(b);b=this.win.document.createElement("div");b.classList.add("i-amphtml-carousel-end-marker");this.h.appendChild(b)}this.element.appendChild(this.h);this.j.forEach(function(b,d){a.Y.push(b.getAttribute("data-slide-id")||d.toString());a.setAsOwner(b);b.classList.add("amp-carousel-slide");var c=a.win.document.createElement("div");c.classList.add("i-amphtml-slide-item");a.h.appendChild(c);d=c;do{if(Node.prototype.getRootNode)d=d.getRootNode()||d;else for(;d.parentNode;d=d.parentNode);
if(d.host)d=d.host;else break}while(1);c.appendChild(b);a.H.push(c)});this.X();this.h.addEventListener("scroll",this.aa.bind(this));this.h.addEventListener("touchmove",this.qa.bind(this));this.h.addEventListener("touchend",this.pa.bind(this));this.registerAction("goToSlide",function(b){(b=b.args)&&a.showSlideWhenReady(b.index)},100)};f.isLoopingEligible=function(){return 2<this.w};f.mutatedAttributesCallback=function(a){var b=a.slide;void 0!==b&&this.showSlideWhenReady(b)};
f.qa=function(){this.clearAutoplay();this.G&&(this.Z=!0,this.P&&B(this.win).cancel(this.P))};f.pa=function(){var a=this;if(this.Z){this.M&&B(this.win).cancel(this.M);var b=this.ca?45:120;this.P=B(this.win).delay(function(){var b=a.h.scrollLeft;a.O||(T(a,b),a.P=null)},b)}this.Z=!1};f.onLayoutMeasure=function(){this.F=this.getLayoutWidth();null!==this.c&&(this.h.scrollLeft=oa(this,this.c));this.V=this.h.scrollLeft};
f.layoutCallback=function(){null===this.c?pa(this,this.ga):this.scheduleLayout(this.j[this.c]);return Promise.resolve()};f.unlayoutCallback=function(){this.c=null;return Q.prototype.unlayoutCallback.call(this)};f.updateViewportState=function(a){null!==this.c&&this.updateInViewport(this.j[this.c],a)};f.hasPrev=function(){return this.shouldLoop||0<this.c};f.hasNext=function(){return this.shouldLoop||this.c<this.j.length-1};
f.moveSlide=function(a,b){if(null!==this.c){var c=this.hasNext(),d=this.hasPrev();if(1==a&&c||-1==a&&d){var e=this.c+a;-1==e?e=this.w-1:e>=this.w&&(e=0);b?U(this,1!=a||d?this.F:0,a):V(this,e)}}};f.aa=function(){var a=this;this.M&&B(this.win).cancel(this.M);var b=this.h.scrollLeft;this.U||qa(this,b);if(!this.P){var c=this.G?35:this.U?45:100;this.M=B(this.win).delay(function(){a.O||(a.G?T(a,b):U(a,b))},c)}this.V=b};
function qa(a,b){var c=a.h.scrollWidth;-1==a.K&&b>=a.V?U(a,b).then(function(){a.K=0}):1==a.K&&b<=a.V?U(a,b).then(function(){a.K=0}):a.K=0>b?-1:b+a.F>c?1:0}function U(a,b,c){a.O=!0;var d,e=ra(a,b)-a.c,g=a.hasPrev();0!=e||1!=c&&-1!=c||(e=c);if(0==e)d=g?a.F:0;else if(1==e||-1!=e&&e==-1*(a.w-1))d=g?2*a.F:a.F;else if(-1==e||e==a.w-1)d=0;return sa(a,b,d).then(function(){T(a,d)})}
function ra(a,b){var c=Math.round(b/a.F),d=0;b=a.hasPrev();var e=a.hasNext();b&&e?d=c-1:e?d=c:b&&(d=c-1);b=a.c+d;return b=a.shouldLoop?0>b?a.w-1:b>=a.w?0:b:0>b?0:b>=a.w?a.w-1:b}function T(a,b){a.O=!0;var c=ra(a,b);a.C.mutate(function(){a.U&&a.h.classList.add("i-amphtml-no-scroll");V(a,c);a.C.mutate(function(){a.U&&a.h.classList.remove("i-amphtml-no-scroll");a.O=!1})})}
f.showSlideWhenReady=function(a){var b=parseInt(a,10);!isFinite(b)||0>b||b>=this.w?this.user().error("AMP-CAROUSEL","Invalid [slide] value: %s",a):null===this.c?this.ga=b:V(this,b)};
function pa(a,b){var c=a.w;if(0>b||b>=c||a.c==b)return!1;var d=0<=b-1?b-1:a.shouldLoop?c-1:null,e=b+1<c?b+1:a.shouldLoop?0:null,g=[];null!=d&&g.push(d);g.push(b);null!=e&&g.push(e);null!==a.c&&a.updateInViewport(a.j[a.c],!1);var h=a.j[b];if(void 0===h){var k=Error("Attempting to access a non-existant slide");k.args={index:b,noOfSlides:c};p().error("AMP-CAROUSEL",k);return!1}a.updateInViewport(h,!0);g.forEach(function(c,d){a.shouldLoop&&G(a.H[c],d+1);a.H[c].classList.add("i-amphtml-slide-item-show");
c==b?(a.scheduleLayout(a.j[c]),a.scheduleResume(a.j[c]),a.j[c].setAttribute("aria-hidden","false")):(a.schedulePreload(a.j[c]),a.j[c].setAttribute("aria-hidden","true"))});a.h.scrollLeft=oa(a,b);ta(a,b);a.c=b;ua(a,g);a.setControlsState();return!0}
function V(a,b){var c=pa(a,b);if(c){var d;var e=a.win;d={index:b};var g={detail:d};Object.assign(g,void 0);"function"==typeof e.CustomEvent?d=new e.CustomEvent("slidescroll.slideChange",g):(e=e.document.createEvent("CustomEvent"),e.initCustomEvent("slidescroll.slideChange",!!g.bubbles,!!g.cancelable,d),d=e);a.da.trigger(a.element,"slideChange",d,100);a.element.dispatchCustomEvent("slideChange",{index:b})}}function oa(a,b){var c=a.F;a.shouldLoop||0!=b||(c=0);return c}
function ua(a,b){for(var c=a.w,d=0;d<c;d++)a.H[d].classList.contains("i-amphtml-slide-item-show")&&(b.includes(d)||(a.shouldLoop&&G(a.H[d],""),a.H[d].classList.remove("i-amphtml-slide-item-show"),a.j[d].removeAttribute("aria-hidden")),a.c!=d&&a.schedulePause(a.j[d]))}function sa(a,b,c){if(b==c)return Promise.resolve();var d=la(b,c);c=I(.4,0,.2,1);var e=a.h;return M(e,function(b){a.h.scrollLeft=d(b)},80,c).thenAlways()}f.X=function(){this.element.addEventListener("touchmove",function(a){a.stopPropagation()})};
function ta(a,b){var c=b-a.c;if(0!=c){1!==Math.abs(c)&&(c=0>c?1:-1,null===a.c&&(c=1));var d=null===a.c?"null":a.Y[a.c],e={fromSlide:d,toSlide:a.Y[b]};H(a.element,"amp-carousel-change",e);1==c?H(a.element,"amp-carousel-next",e):H(a.element,"amp-carousel-prev",e)}};function W(a){a=P.call(this,a)||this;a.A=0;a.$=0;a.S=null;a.B=null;a.ba=null;a.I=!1;return a}l(W,P);f=W.prototype;f.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a};
f.buildCarousel=function(){var a=this;this.S=this.getRealChildren();this.B=this.element.ownerDocument.createElement("div");this.B.classList.add("i-amphtml-scrollable-carousel-container");this.element.appendChild(this.B);this.I=C(this.win,"layers");this.S.forEach(function(b){a.I||a.setAsOwner(b);b.classList.add("amp-carousel-slide");b.classList.add("amp-scrollable-carousel-slide");a.B.appendChild(b)});this.X();this.B.addEventListener("scroll",this.aa.bind(this));this.I&&this.declareLayer(this.B)};
f.layoutCallback=function(){this.I||(va(this,this.A),wa(this,this.A,1));this.setControlsState();return Promise.resolve()};f.onViewportCallback=function(){this.I||xa(this,this.A,this.A)};f.goCallback=function(a,b){var c=this,d=ya(this,this.A,a),e=this.A;if(d!=e)if(b){var g=la(e,d);M(this.element,function(a){c.B.scrollLeft=g(a)},200,"ease-in-out").thenAlways(function(){X(c,d)})}else X(this,d),this.B.scrollLeft=d};f.aa=function(){var a=this.B.scrollLeft;this.A=a;null===this.ba&&za(this,a)};
function za(a,b){a.ba=B(a.win).delay(function(){30>Math.abs(b-a.A)?(a.ba=null,X(a,a.A)):za(a,a.A)},100)}function X(a,b){a.I||(xa(a,b,a.$),va(a,b),wa(a,b,Math.sign(b-a.$)),a.$=b);a.A=b;a.setControlsState()}function ya(a,b,c){var d=a.element.offsetWidth,e=a.B.scrollWidth;a=b+c*d;return 0>a?0:e>=d&&a>e-d?e-d:a}function Y(a,b,c){for(var d=a.getLayoutWidth(),e=0;e<a.S.length;e++){var g=a.S[e];g.offsetLeft+g.offsetWidth>=b&&g.offsetLeft<=b+d&&c(g)}}
function va(a,b){Y(a,b,function(b){a.scheduleLayout(b)})}function wa(a,b,c){var d=ya(a,b,c);d!=b&&Y(a,d,function(b){a.schedulePreload(b)})}function xa(a,b,c){var d=[];Y(a,b,function(b){d.push(b);a.updateInViewport(b,!0)});c!=b&&Y(a,c,function(b){d.includes(b)||(a.updateInViewport(b,!1),a.schedulePause(b))})}f.hasPrev=function(){return 0!=this.A};f.hasNext=function(){var a=this.getLayoutWidth(),b=Math.max(this.B.scrollWidth-a,0);return this.A!=b};
f.X=function(){this.element.addEventListener("touchmove",function(a){a.stopPropagation()})};function Z(a){return AMP.BaseElement.apply(this,arguments)||this}l(Z,AMP.BaseElement);Z.prototype.upgradeCallback=function(){return"slides"==this.element.getAttribute("type")?new S(this.element):new W(this.element)};(function(a){a.registerElement("amp-carousel",Z,".amp-carousel-slide>.i-amphtml-replaced-content{-o-object-fit:contain;object-fit:contain}.amp-carousel-button{position:absolute;box-sizing:border-box;top:50%;height:34px;width:34px;border-radius:2px;opacity:0;pointer-events:all;background-color:rgba(0,0,0,0.5);background-position:50% 50%;background-repeat:no-repeat;-webkit-transform:translateY(-50%);transform:translateY(-50%);visibility:hidden;z-index:10}.amp-mode-mouse .amp-carousel-button,amp-carousel[controls] .amp-carousel-button{opacity:1;visibility:visible}.amp-carousel-button-prev{left:16px;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='%23fff' viewBox='0 0 18 18'%3E%3Cpath d='M15 8.25H5.87l4.19-4.19L9 3 3 9l6 6 1.06-1.06-4.19-4.19H15v-1.5z'/%3E%3C/svg%3E\");background-size:18px 18px}.amp-carousel-button-next{right:16px;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='%23fff' viewBox='0 0 18 18'%3E%3Cpath d='M9 3L7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z'/%3E%3C/svg%3E\");background-size:18px 18px}.i-amphtml-carousel-button-start-hint .amp-carousel-button:not(.amp-disabled){-webkit-animation:i-amphtml-carousel-hint 1s ease-in 3s 1 normal both;animation:i-amphtml-carousel-hint 1s ease-in 3s 1 normal both}.amp-mode-mouse .i-amphtml-carousel-button-start-hint .amp-carousel-button:not(.amp-disabled){-webkit-animation:none;animation:none}@-webkit-keyframes i-amphtml-carousel-hint{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}@keyframes i-amphtml-carousel-hint{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}amp-carousel .amp-carousel-button.amp-disabled{-webkit-animation:none;animation:none;opacity:0;visibility:hidden}.i-amphtml-slides-container{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-wrap:nowrap;flex-wrap:nowrap;height:100%!important;left:0;overflow-x:auto!important;overflow-y:hidden!important;position:absolute!important;top:0;width:100%!important;-webkit-scroll-snap-type:mandatory!important;scroll-snap-type:mandatory!important;padding-bottom:20px!important;box-sizing:content-box!important;-webkit-overflow-scrolling:touch!important}.i-amphtml-slides-container.i-amphtml-no-scroll{overflow-x:hidden!important}.i-amphtml-slide-item{-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important;display:none!important;-webkit-box-flex:0!important;-ms-flex:0 0 100%!important;flex:0 0 100%!important;height:100%!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;position:relative!important;-webkit-scroll-snap-coordinate:0 0!important;scroll-snap-coordinate:0 0!important;width:100%!important}.i-amphtml-slide-item>*{height:100%;width:100%;overflow:hidden!important}.i-amphtml-slide-item-show{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}.i-amphtml-carousel-end-marker,.i-amphtml-carousel-start-marker{background-color:transparent!important;display:block!important;-webkit-box-flex:0!important;-ms-flex:0 0 1px!important;flex:0 0 1px!important;height:100%!important;position:relative!important;-webkit-scroll-snap-coordinate:0 0!important;scroll-snap-coordinate:0 0!important;width:1px!important}.i-amphtml-carousel-start-marker{-webkit-box-ordinal-group:0!important;-ms-flex-order:-1!important;order:-1!important;margin-left:-1px!important}.i-amphtml-carousel-end-marker{-webkit-box-ordinal-group:100000001!important;-ms-flex-order:100000000!important;order:100000000!important;margin-right:-1px!important}.i-amphtml-slidescroll-no-snap.i-amphtml-slides-container{-webkit-scroll-snap-type:none!important;scroll-snap-type:none!important}.i-amphtml-slidescroll-no-snap .i-amphtml-slide-item{-webkit-scroll-snap-coordinate:none!important;scroll-snap-coordinate:none!important}.i-amphtml-slidescroll-no-snap.i-amphtml-slides-container.i-amphtml-no-scroll{-webkit-overflow-scrolling:auto!important}.amp-scrollable-carousel-slide{display:inline-block!important;margin-left:8px}.amp-scrollable-carousel-slide:first-child{margin-left:0px}.i-amphtml-scrollable-carousel-container{white-space:nowrap!important;overflow-x:auto!important;overflow-y:hidden!important;-webkit-overflow-scrolling:touch!important}\n/*# sourceURL=/extensions/amp-carousel/0.1/amp-carousel.css*/")})(self.AMP);
})});
//# sourceMappingURL=amp-carousel-0.1.js.map

