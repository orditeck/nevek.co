(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{110:function(e,t,n){e.exports=n(109)},209:function(e,t,n){__NEXT_REGISTER_PAGE("/_app",function(){return e.exports=n(210),{page:e.exports.default}})},210:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return b});var r=n(29),o=n.n(r),u=n(0),a=n.n(u),i=n(77),c=n.n(i),l=n(110),f=n.n(l);n(225);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t,n,r,o,u,a){try{var i=e[u](a),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,o)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,y(t).apply(this,arguments))}var n,r,u,l,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,c.a),n=t,r=[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return a.a.createElement(i.Container,null,a.a.createElement(f.a,null,a.a.createElement("title",null,"Keven Lefebvre | Stratège numérique à Chicoutimi, Saguenay (Québec)")),a.a.createElement(t,n))}}],u=[{key:"getInitialProps",value:(l=o.a.mark(function e(t){var n,r,u;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.Component,t.router,r=t.ctx,u={},!n.getInitialProps){e.next=6;break}return e.next=5,n.getInitialProps(r);case 5:u=e.sent;case 6:return e.abrupt("return",{pageProps:u});case 7:case"end":return e.stop()}},e,this)}),p=function(){var e=this,t=arguments;return new Promise(function(n,r){var o=l.apply(e,t);function u(e){s(o,n,r,u,a,"next",e)}function a(e){s(o,n,r,u,a,"throw",e)}u(void 0)})},function(e){return p.apply(this,arguments)})}],r&&h(n.prototype,r),u&&h(n,u),t}()},211:function(e,t,n){"use strict";var r=n(23),o=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.createUrl=P,t.Container=t.default=void 0;var u=o(n(44)),a=o(n(45)),i=o(n(212)),c=o(n(7)),l=o(n(8)),f=o(n(20)),p=o(n(21)),s=o(n(22)),h=o(n(15)),d=r(n(0)),y=o(n(37)),v=n(28),b=n(71),m=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}var n;return(0,s.default)(t,e),(0,l.default)(t,[{key:"getChildContext",value:function(){return{headManager:this.props.headManager,router:(0,b.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,o=P(t);return d.default.createElement(g,null,d.default.createElement(n,(0,i.default)({},r,{url:o})))}}],[{key:"getInitialProps",value:(n=(0,a.default)(u.default.mark(function e(t){var n,r,o;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,t.router,r=t.ctx,e.next=3,(0,v.loadGetInitialProps)(n,r);case 3:return o=e.sent,e.abrupt("return",{pageProps:o});case 5:case"end":return e.stop()}},e,this)})),function(e){return n.apply(this,arguments)})}]),t}(d.Component);t.default=m,(0,h.default)(m,"childContextTypes",{headManager:y.default.object,router:y.default.object});var g=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=window.location.hash;if(e=!!e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),t}(d.Component);t.Container=g;var w=(0,v.execOnce)(function(){0});function P(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return w(),r},get pathname(){return w(),t},get asPath(){return w(),n},back:function(){w(),e.back()},push:function(t,n){return w(),e.push(t,n)},pushTo:function(t,n){w();var r=n?t:null,o=n||t;return e.push(r,o)},replace:function(t,n){return w(),e.replace(t,n)},replaceTo:function(t,n){w();var r=n?t:null,o=n||t;return e.replace(r,o)}}}},212:function(e,t,n){var r=n(75);function o(){return e.exports=o=r||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}e.exports=o},77:function(e,t,n){e.exports=n(211)}},[[209,0,1,8]]]);