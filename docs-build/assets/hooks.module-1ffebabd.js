import{l as r}from"./preact.module-a8db4ca9.js";var e,u,H,g,m=0,T=[],p=[],b=r.__b,A=r.__r,F=r.diffed,q=r.__c,C=r.unmount;function v(_,n){r.__h&&r.__h(u,_,m||n),m=0;var t=u.__H||(u.__H={__:[],__h:[]});return _>=t.__.length&&t.__.push({__V:p}),t.__[_]}function W(_){return m=1,j(x,_)}function j(_,n,t){var o=v(e++,2);if(o.t=_,!o.__c&&(o.__=[t?t(n):x(void 0,n),function(f){var a=o.__N?o.__N[0]:o.__[0],h=o.t(a,f);a!==h&&(o.__N=[h,o.__[1]],o.__c.setState({}))}],o.__c=u,!u.u)){var c=function(f,a,h){if(!o.__c.__H)return!0;var s=o.__c.__H.__.filter(function(i){return i.__c});if(s.every(function(i){return!i.__N}))return!l||l.call(this,f,a,h);var E=!1;return s.forEach(function(i){if(i.__N){var P=i.__[0];i.__=i.__N,i.__N=void 0,P!==i.__[0]&&(E=!0)}}),!(!E&&o.__c.props===f)&&(!l||l.call(this,f,a,h))};u.u=!0;var l=u.shouldComponentUpdate,y=u.componentWillUpdate;u.componentWillUpdate=function(f,a,h){if(this.__e){var s=l;l=void 0,c(f,a,h),l=s}y&&y.call(this,f,a,h)},u.shouldComponentUpdate=c}return o.__N||o.__}function S(_,n){var t=v(e++,3);!r.__s&&V(t.__H,n)&&(t.__=_,t.i=n,u.__H.__h.push(t))}function k(_,n){var t=v(e++,4);!r.__s&&V(t.__H,n)&&(t.__=_,t.i=n,u.__h.push(t))}function $(_){return m=5,U(function(){return{current:_}},[])}function G(_,n,t){m=6,k(function(){return typeof _=="function"?(_(n()),function(){return _(null)}):_?(_.current=n(),function(){return _.current=null}):void 0},t==null?t:t.concat(_))}function U(_,n){var t=v(e++,7);return V(t.__H,n)?(t.__V=_(),t.i=n,t.__h=_,t.__V):t.__}function I(_,n){return m=8,U(function(){return _},n)}function J(_){var n=u.context[_.__c],t=v(e++,9);return t.c=_,n?(t.__==null&&(t.__=!0,n.sub(u)),n.props.value):_.__}function K(_,n){r.useDebugValue&&r.useDebugValue(n?n(_):_)}function L(_){var n=v(e++,10),t=W();return n.__=_,u.componentDidCatch||(u.componentDidCatch=function(o,c){n.__&&n.__(o,c),t[1](o)}),[t[0],function(){t[1](void 0)}]}function M(){var _=v(e++,11);if(!_.__){for(var n=u.__v;n!==null&&!n.__m&&n.__!==null;)n=n.__;var t=n.__m||(n.__m=[0,0]);_.__="P"+t[0]+"-"+t[1]++}return _.__}function w(){for(var _;_=T.shift();)if(_.__P&&_.__H)try{_.__H.__h.forEach(d),_.__H.__h.forEach(N),_.__H.__h=[]}catch(n){_.__H.__h=[],r.__e(n,_.__v)}}r.__b=function(_){u=null,b&&b(_)},r.__r=function(_){A&&A(_),e=0;var n=(u=_.__c).__H;n&&(H===u?(n.__h=[],u.__h=[],n.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=p,t.__N=t.i=void 0})):(n.__h.forEach(d),n.__h.forEach(N),n.__h=[],e=0)),H=u},r.diffed=function(_){F&&F(_);var n=_.__c;n&&n.__H&&(n.__H.__h.length&&(T.push(n)!==1&&g===r.requestAnimationFrame||((g=r.requestAnimationFrame)||z)(w)),n.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==p&&(t.__=t.__V),t.i=void 0,t.__V=p})),H=u=null},r.__c=function(_,n){n.some(function(t){try{t.__h.forEach(d),t.__h=t.__h.filter(function(o){return!o.__||N(o)})}catch(o){n.some(function(c){c.__h&&(c.__h=[])}),n=[],r.__e(o,t.__v)}}),q&&q(_,n)},r.unmount=function(_){C&&C(_);var n,t=_.__c;t&&t.__H&&(t.__H.__.forEach(function(o){try{d(o)}catch(c){n=c}}),t.__H=void 0,n&&r.__e(n,t.__v))};var D=typeof requestAnimationFrame=="function";function z(_){var n,t=function(){clearTimeout(o),D&&cancelAnimationFrame(n),setTimeout(_)},o=setTimeout(t,100);D&&(n=requestAnimationFrame(t))}function d(_){var n=u,t=_.__c;typeof t=="function"&&(_.__c=void 0,t()),u=n}function N(_){var n=u;_.__c=_.__(),u=n}function V(_,n){return!_||_.length!==n.length||n.some(function(t,o){return t!==_[o]})}function x(_,n){return typeof n=="function"?n(_):n}export{G as A,U as F,L as P,I as T,M as V,$ as _,W as h,S as p,J as q,j as s,K as x,k as y};
//# sourceMappingURL=hooks.module-1ffebabd.js.map
