/*! For license information please see track-timetable.js.LICENSE.txt */
!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=148)}({1:function(e,t,r){e.exports=r(149)},139:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var i=a.apply(null,n);i&&e.push(i)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var c in n)r.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},148:function(e,t,r){e.exports=r(150)},149:function(e,t,r){var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var a=t&&t.prototype instanceof f?t:f,o=Object.create(a.prototype),i=new S(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return _()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(e,r,i),o}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var u={};function f(){}function p(){}function m(){}var h={};h[a]=function(){return this};var d=Object.getPrototypeOf,v=d&&d(d(R([])));v&&v!==t&&r.call(v,a)&&(h=v);var y=m.prototype=f.prototype=Object.create(h);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function g(e,t){var n;this._invoke=function(a,o){function i(){return new t((function(n,i){!function n(a,o,i,c){var s=l(e[a],e,o);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(f).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(s.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function E(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=l(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function R(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=y.constructor=m,m.constructor=p,p.displayName=c(m,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(g.prototype),g.prototype[o]=function(){return this},e.AsyncIterator=g,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new g(s(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(y),c(y,i,"Generator"),y[a]=function(){return this},y.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=R,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),w(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;w(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:R(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}(e.exports);try{regeneratorRuntime=n}catch(e){Function("r","regeneratorRuntime = r")(n)}},150:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),o=r(139),i=r.n(o);function c(e){var t=e.data,r=t.id,n=t.title,a=t.start_time,o=t.end_time,i=t.topic,c=t.short_description,s=t.speakers;return React.createElement("div",{className:"session-grid-item",id:"session-".concat(r.toString()),key:r.toString()},React.createElement("div",{className:"session-grid-time"},a&&React.createElement("time",{className:"session-grid-time-start"},a),o&&React.createElement(React.Fragment,null,React.createElement("span",{className:"session-grid-time-separator"}),React.createElement("time",{className:"session-grid-time-end"},o))),React.createElement("div",{className:"session-grid-info"},React.createElement("h3",{className:"session-grid-title"},n.rendered),i&&React.createElement("p",{className:"session-grid-topic"},i),c&&React.createElement("p",{className:"session-grid-short-description"},c),s&&React.createElement("div",{className:"session-grid-speakers"},s.map((function(e){return React.createElement("div",{className:"speaker"},React.createElement("p",{className:"speaker-name"},e.name),e.title&&React.createElement("p",{className:"speaker-title"},e.title))})))))}function s(e){var t=e.data,r=t.id,n=t.title,a=t.start_time,o=t.end_time,i=t.topic,c=t.short_description,s=t.speakers;return React.createElement("div",{className:"session-list-item",id:"session-".concat(r.toString()),key:r.toString()},React.createElement("div",{className:"session-list-item-time"},a&&React.createElement("time",{className:"session-list-item-time-start"},a),o&&React.createElement(React.Fragment,null,React.createElement("span",{className:"session-list-item-time-separator"}),React.createElement("time",{className:"session-list-item-time-end"},o))),React.createElement("div",{className:"session-list-item-info"},React.createElement("h3",{className:"session-list-item-title"},n.rendered),i&&React.createElement("p",{className:"session-list-item-topic"},i),c&&React.createElement("p",{className:"session-list-item-short-description"},c),s&&React.createElement("div",{className:"session-list-item-speakers"},s.map((function(e){return React.createElement("div",{className:"speaker"},React.createElement("p",{className:"speaker-name"},e.name),e.title&&React.createElement("p",{className:"speaker-title"},e.title))})))))}var l=wp.i18n.__,u=wp.blockEditor.InspectorControls,f=wp.components,p=f.PanelBody,m=f.ToggleControl;f.SelectControl;function h(e){var t=e.attributes,r=e.setAttributes,n=t.showTimezoneSelector;return React.createElement(u,null,React.createElement(p,{title:l("Timezone Selector","bm-block-track-timetable")},React.createElement(m,{label:l("Show timezone selector?","bm-block-track-timetable"),checked:n,onChange:function(e){return r({showTimezoneSelector:e})}})))}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=k(e);if(t){var a=k(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return E(this,r)}}function E(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){R(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function R(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var _=wp.i18n.__,O=wp.apiFetch,x=wp.data,j=x.withSelect,N=x.registerStore,T=wp.element.Component,L=wp.components,P=L.Placeholder,C=L.Spinner,I=L.SelectControl,z={sessions:{}},F={setSessions:function(e){return{type:"SET_SESSIONS",sessions:e}},receiveSessions:function(e){return{type:"RECIEVE_SESSIONS",path:e}},setTracks:function(e){return{type:"SET_TRACKS",tracks:e}},receiveTracks:function(e){return{type:"RECIEVE_TRACKS",path:e}}};N("bm/track-timetable",{reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SESSIONS":return S(S({},e),{},{sessions:t.sessions});case"SET_TRACKS":return S(S({},e),{},{tracks:t.tracks})}return e},actions:F,selectors:{getSessions:function(e){return e.sessions},getTracks:function(e){return e.tracks}},controls:{RECIEVE_SESSIONS:function(e){return O({path:e.path})},RECIEVE_TRACKS:function(e){return O({path:e.path})}},resolvers:{getSessions:a.a.mark((function e(){var t,r,n=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"",e.next=3,F.receiveSessions("/wp/v2/session"+t);case 3:return r=e.sent,e.abrupt("return",F.setSessions(r));case 5:case"end":return e.stop()}}),e)})),getTracks:a.a.mark((function e(){var t,r,n=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"",e.next=3,F.receiveTracks("/wp/v2/track"+t);case 3:return r=e.sent,e.abrupt("return",F.setTracks(r));case 5:case"end":return e.stop()}}),e)}))}});var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(o,e);var t,r,n,a=g(o);function o(){return v(this,o),a.apply(this,arguments)}return t=o,(r=[{key:"getSessions",value:function(){var e=this.props.sessions;return e&&e.length?e:[]}},{key:"getTracksForSelect",value:function(){var e=this.props.tracks;return e&&e.length?[{value:0,label:_("Select a track...","bm-block-track-timetable")}].concat(e.map((function(e){return{value:e.id,label:e.name}}))):[]}},{key:"getStyle",value:function(e){return e.includes("is-style-list")?"list":e.includes("is-style-grid")?"grid":"list"}},{key:"renderSessions",value:function(){var e=this,t=this.props.className,r=this.getSessions(),n=i()("sessions",R({},t,t));return React.createElement("div",{className:n},r.map((function(r){return"grid"===e.getStyle(t)?React.createElement(c,{data:r}):React.createElement(s,{data:r})})))}},{key:"render",value:function(){var e=this.props,t=e.isRequesting,r=e.attributes,n=e.setAttributes;return 0===r.track_id?React.createElement(React.Fragment,null,React.createElement(h,this.props),React.createElement(P,{icon:"admin-post",label:_("Select A Track","bm-block-track-timetable"),instructions:_("Select the track you want to display the timetable for.","bm-block-track-timetable"),isColumnLayout:!0},React.createElement(I,{label:_("Select a track","bm-block-track-timetable"),onChange:function(e){n({track_id:parseInt(e)})},options:this.getTracksForSelect()}))):t?React.createElement(React.Fragment,null,React.createElement(h,this.props),React.createElement(P,{icon:"admin-post",label:_("Loading sessions...","bm-block-track-timetable")},React.createElement(C,null))):React.createElement(React.Fragment,null,React.createElement(h,this.props),this.renderSessions())}}])&&y(t.prototype,r),n&&y(t,n),o}(T),G=j((function(e,t){var r=t.attributes,n=e("bm/track-timetable"),a={per_page:100,track:r.track_id},o="?"+Object.keys(a).map((function(e){return"".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(a[e]))})).join("&");return{sessions:r.track_id?n.getSessions(o):[],tracks:n.getTracks("?per_page=50")}}))(A),D=wp.components,V=D.Path,K=D.SVG,M=React.createElement(K,{viewBox:"0 0 250 250",xmlns:"http://www.w3.org/2000/svg"},React.createElement(V,{d:"m81.27 47.66a5.37 5.37 0 0 0 -5.37-5.37h-5.63a5.37 5.37 0 0 0 -5.37 5.37v19.66a5.36 5.36 0 0 0 5.37 5.36h5.63a5.37 5.37 0 0 0 5.37-5.37zm-2.65 18.93a2 2 0 0 1 -2 2h-7.07a2 2 0 0 1 -2-2v-18.24a2 2 0 0 1 2-2h7.07a2 2 0 0 1 2 2z"}),React.createElement(V,{d:"m185.08 47.64a5.38 5.38 0 0 0 -5.37-5.37h-5.63a5.37 5.37 0 0 0 -5.37 5.38v19.65a5.38 5.38 0 0 0 5.37 5.37h5.63a5.37 5.37 0 0 0 5.37-5.38zm-2.65 18.93a2 2 0 0 1 -2 2h-7.06a2 2 0 0 1 -2-2v-18.23a2 2 0 0 1 2-2h7.06a2 2 0 0 1 2 2z"}),React.createElement(V,{d:"m225 64.33v120.3a5.36 5.36 0 0 1 -5.37 5.37h-189.24a5.36 5.36 0 0 1 -5.39-5.37v-120.3a5.36 5.36 0 0 1 5.39-5.33h37.16v6h-31.18a5.36 5.36 0 0 0 -5.37 5.31v21h187.93.07v-21a5.36 5.36 0 0 0 -5.37-5.37h-31.2v-5.94h37.2a5.36 5.36 0 0 1 5.37 5.33z"}),React.createElement(V,{d:"m78.62 58.96h92.75v5.98h-92.75z"}),React.createElement(V,{d:"m164.78 140.61c0 23.52-17.88 42.59-39.93 42.59s-39.92-19.07-39.92-42.59 17.87-42.61 39.92-42.61 39.93 19.09 39.93 42.61z",fill:"#fff"}),React.createElement(V,{d:"m124.84 100.81c-20.58 0-37.27 17.79-37.27 39.75s16.69 39.75 37.27 39.75 37.26-17.8 37.26-39.75-16.68-39.75-37.26-39.75zm0 76.32c-19.11 0-34.6-16.53-34.6-36.91s15.49-36.92 34.6-36.92 34.61 16.53 34.61 36.92-15.45 36.91-34.6 36.91z"}),React.createElement(V,{d:"m142 158a4.14 4.14 0 0 1 -5.85-.51l-15.54-18.49v-30a4.15 4.15 0 0 1 8.3 0v27l13.61 16.21a4.15 4.15 0 0 1 -.52 5.79z"}));var B=wp.i18n.__;(0,wp.blocks.registerBlockType)("bm/track-timetable",{title:B("Track Timetable","bm-block-track-timetable"),description:B("Show a timetable for a single track.","bm-block-track-timetable"),icon:M,category:"event",keywords:[B("calendar","bm-block-track-timetable"),B("events","bm-block-track-timetable"),B("agenda","bm-block-track-timetable")],styles:[{name:"list",label:B("Agenda","bm-block-track-timetable"),isDefault:!0},{name:"grid",label:B("Visual Grid","bm-block-track-timetable")}],supports:{anchor:!0,align:!1},edit:G,save:function(){return null}})}});