var sr=Object.defineProperty;var o=(u,n)=>sr(u,"name",{value:n,configurable:!0});import{w as lr,r as hr}from"./iframe.b2807edc.js";import"./es.map.constructor.3c685b6c.js";import{r as G}from"./index.ca8d4e45.js";import{r as x,R as ir}from"./index.427e9d60.js";import{j}from"./jsx-runtime.f4383a25.js";var pr={exports:{}};(function(u){var n=function(i){var c=Object.prototype,f=c.hasOwnProperty,p=Object.defineProperty||function(t,r,e){t[r]=e.value},s,v=typeof Symbol=="function"?Symbol:{},y=v.iterator||"@@iterator",O=v.asyncIterator||"@@asyncIterator",L=v.toStringTag||"@@toStringTag";function b(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}o(b,"define");try{b({},"")}catch{b=o(function(r,e,l){return r[e]=l},"define")}function _(t,r,e,l){var a=r&&r.prototype instanceof F?r:F,h=Object.create(a.prototype),m=new Y(l||[]);return p(h,"_invoke",{value:cr(t,e,m)}),h}o(_,"wrap"),i.wrap=_;function W(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(l){return{type:"throw",arg:l}}}o(W,"tryCatch");var Q="suspendedStart",ur="suspendedYield",X="executing",M="completed",E={};function F(){}o(F,"Generator");function N(){}o(N,"GeneratorFunction");function R(){}o(R,"GeneratorFunctionPrototype");var $={};b($,y,function(){return this});var B=Object.getPrototypeOf,A=B&&B(B(K([])));A&&A!==c&&f.call(A,y)&&($=A);var k=R.prototype=F.prototype=Object.create($);N.prototype=R,p(k,"constructor",{value:R,configurable:!0}),p(R,"constructor",{value:N,configurable:!0}),N.displayName=b(R,L,"GeneratorFunction");function Z(t){["next","throw","return"].forEach(function(r){b(t,r,function(e){return this._invoke(r,e)})})}o(Z,"defineIteratorMethods"),i.isGeneratorFunction=function(t){var r=typeof t=="function"&&t.constructor;return r?r===N||(r.displayName||r.name)==="GeneratorFunction":!1},i.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,R):(t.__proto__=R,b(t,L,"GeneratorFunction")),t.prototype=Object.create(k),t},i.awrap=function(t){return{__await:t}};function D(t,r){function e(h,m,d,g){var w=W(t[h],t,m);if(w.type==="throw")g(w.arg);else{var q=w.arg,T=q.value;return T&&typeof T=="object"&&f.call(T,"__await")?r.resolve(T.__await).then(function(S){e("next",S,d,g)},function(S){e("throw",S,d,g)}):r.resolve(T).then(function(S){q.value=S,d(q)},function(S){return e("throw",S,d,g)})}}o(e,"invoke");var l;function a(h,m){function d(){return new r(function(g,w){e(h,m,g,w)})}return o(d,"callInvokeWithMethodAndArg"),l=l?l.then(d,d):d()}o(a,"enqueue"),p(this,"_invoke",{value:a})}o(D,"AsyncIterator"),Z(D.prototype),b(D.prototype,O,function(){return this}),i.AsyncIterator=D,i.async=function(t,r,e,l,a){a===void 0&&(a=Promise);var h=new D(_(t,r,e,l),a);return i.isGeneratorFunction(r)?h:h.next().then(function(m){return m.done?m.value:h.next()})};function cr(t,r,e){var l=Q;return o(function(h,m){if(l===X)throw new Error("Generator is already running");if(l===M){if(h==="throw")throw m;return tr()}for(e.method=h,e.arg=m;;){var d=e.delegate;if(d){var g=rr(d,e);if(g){if(g===E)continue;return g}}if(e.method==="next")e.sent=e._sent=e.arg;else if(e.method==="throw"){if(l===Q)throw l=M,e.arg;e.dispatchException(e.arg)}else e.method==="return"&&e.abrupt("return",e.arg);l=X;var w=W(t,r,e);if(w.type==="normal"){if(l=e.done?M:ur,w.arg===E)continue;return{value:w.arg,done:e.done}}else w.type==="throw"&&(l=M,e.method="throw",e.arg=w.arg)}},"invoke")}o(cr,"makeInvokeMethod");function rr(t,r){var e=r.method,l=t.iterator[e];if(l===s)return r.delegate=null,e==="throw"&&t.iterator.return&&(r.method="return",r.arg=s,rr(t,r),r.method==="throw")||e!=="return"&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),E;var a=W(l,t.iterator,r.arg);if(a.type==="throw")return r.method="throw",r.arg=a.arg,r.delegate=null,E;var h=a.arg;if(!h)return r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,E;if(h.done)r[t.resultName]=h.value,r.next=t.nextLoc,r.method!=="return"&&(r.method="next",r.arg=s);else return h;return r.delegate=null,E}o(rr,"maybeInvokeDelegate"),Z(k),b(k,L,"Generator"),b(k,y,function(){return this}),b(k,"toString",function(){return"[object Generator]"});function fr(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}o(fr,"pushTryEntry");function U(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}o(U,"resetTryEntry");function Y(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(fr,this),this.reset(!0)}o(Y,"Context"),i.keys=function(t){var r=Object(t),e=[];for(var l in r)e.push(l);return e.reverse(),o(function a(){for(;e.length;){var h=e.pop();if(h in r)return a.value=h,a.done=!1,a}return a.done=!0,a},"next")};function K(t){if(t){var r=t[y];if(r)return r.call(t);if(typeof t.next=="function")return t;if(!isNaN(t.length)){var e=-1,l=o(function a(){for(;++e<t.length;)if(f.call(t,e))return a.value=t[e],a.done=!1,a;return a.value=s,a.done=!0,a},"next");return l.next=l}}return{next:tr}}o(K,"values"),i.values=K;function tr(){return{value:s,done:!0}}return o(tr,"doneResult"),Y.prototype={constructor:Y,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=s,this.done=!1,this.delegate=null,this.method="next",this.arg=s,this.tryEntries.forEach(U),!t)for(var r in this)r.charAt(0)==="t"&&f.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=s)},stop:function(){this.done=!0;var t=this.tryEntries[0],r=t.completion;if(r.type==="throw")throw r.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function e(g,w){return h.type="throw",h.arg=t,r.next=g,w&&(r.method="next",r.arg=s),!!w}o(e,"handle");for(var l=this.tryEntries.length-1;l>=0;--l){var a=this.tryEntries[l],h=a.completion;if(a.tryLoc==="root")return e("end");if(a.tryLoc<=this.prev){var m=f.call(a,"catchLoc"),d=f.call(a,"finallyLoc");if(m&&d){if(this.prev<a.catchLoc)return e(a.catchLoc,!0);if(this.prev<a.finallyLoc)return e(a.finallyLoc)}else if(m){if(this.prev<a.catchLoc)return e(a.catchLoc,!0)}else if(d){if(this.prev<a.finallyLoc)return e(a.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var l=this.tryEntries[e];if(l.tryLoc<=this.prev&&f.call(l,"finallyLoc")&&this.prev<l.finallyLoc){var a=l;break}}a&&(t==="break"||t==="continue")&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var h=a?a.completion:{};return h.type=t,h.arg=r,a?(this.method="next",this.next=a.finallyLoc,E):this.complete(h)},complete:function(t,r){if(t.type==="throw")throw t.arg;return t.type==="break"||t.type==="continue"?this.next=t.arg:t.type==="return"?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):t.type==="normal"&&r&&(this.next=r),E},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),U(e),E}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var l=e.completion;if(l.type==="throw"){var a=l.arg;U(e)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:K(t),resultName:r,nextLoc:e},this.method==="next"&&(this.arg=s),E}},i}(u.exports);try{regeneratorRuntime=n}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}})(pr);function z(u){return z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},z(u)}o(z,"_typeof");function vr(u,n){if(!(u instanceof n))throw new TypeError("Cannot call a class as a function")}o(vr,"_classCallCheck");function er(u,n){for(var i=0;i<n.length;i++){var c=n[i];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(u,c.key,c)}}o(er,"_defineProperties");function yr(u,n,i){return n&&er(u.prototype,n),i&&er(u,i),Object.defineProperty(u,"prototype",{writable:!1}),u}o(yr,"_createClass");function mr(u,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");u.prototype=Object.create(n&&n.prototype,{constructor:{value:u,writable:!0,configurable:!0}}),Object.defineProperty(u,"prototype",{writable:!1}),n&&V(u,n)}o(mr,"_inherits");function V(u,n){return V=Object.setPrototypeOf||o(function(c,f){return c.__proto__=f,c},"_setPrototypeOf"),V(u,n)}o(V,"_setPrototypeOf");function dr(u){var n=br();return o(function(){var c=I(u),f;if(n){var p=I(this).constructor;f=Reflect.construct(c,arguments,p)}else f=c.apply(this,arguments);return wr(this,f)},"_createSuperInternal")}o(dr,"_createSuper");function wr(u,n){if(n&&(z(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return gr(u)}o(wr,"_possibleConstructorReturn");function gr(u){if(u===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u}o(gr,"_assertThisInitialized");function br(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}o(br,"_isNativeReflectConstruct");function I(u){return I=Object.setPrototypeOf?Object.getPrototypeOf:o(function(i){return i.__proto__||Object.getPrototypeOf(i)},"_getPrototypeOf"),I(u)}o(I,"_getPrototypeOf");function nr(u,n,i,c,f,p,s){try{var v=u[p](s),y=v.value}catch(O){i(O);return}v.done?n(y):Promise.resolve(y).then(c,f)}o(nr,"asyncGeneratorStep");function J(u){return function(){var n=this,i=arguments;return new Promise(function(c,f){var p=u.apply(n,i);function s(y){nr(p,c,f,s,v,"next",y)}o(s,"_next");function v(y){nr(p,c,f,s,v,"throw",y)}o(v,"_throw"),s(void 0)})}}o(J,"_asyncToGenerator");var P=lr.FRAMEWORK_OPTIONS,C=new Map,Ar=o(function(n,i){var c=i.id,f=i.component;if(!f)throw new Error("Unable to render story ".concat(c," as the component annotation is missing from the default export"));return j(f,{...n})},"render"),Er=o(function(n){var i=n.callback,c=n.children,f=G.exports.useRef();return G.exports.useLayoutEffect(function(){f.current!==i&&(f.current=i,i())},[i]),c},"WithCallback"),Or=function(){var u=J(regeneratorRuntime.mark(o(function n(i,c){var f;return regeneratorRuntime.wrap(o(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Lr(c);case 2:return f=s.sent,s.abrupt("return",new Promise(function(v){f?f.render(j(Er,{callback:o(function(){return v(null)},"callback"),children:i})):ir.render(i,c,function(){return v(null)})}));case 4:case"end":return s.stop()}},"_callee$"),n)},"_callee")));return o(function(i,c){return u.apply(this,arguments)},"renderElement")}(),_r=x.exports.version&&(x.exports.version.startsWith("18")||x.exports.version.startsWith("0.0.0")),Rr=(P==null?void 0:P.legacyRootApi)!==!0,ar=Rr&&_r,Sr=o(function(n){var i=C.get(n);i&&ar?(i.unmount(),C.delete(n)):ir.unmountComponentAtNode(n)},"unmountElement"),Lr=function(){var u=J(regeneratorRuntime.mark(o(function n(i){var c,f;return regeneratorRuntime.wrap(o(function(s){for(;;)switch(s.prev=s.next){case 0:if(ar){s.next=2;break}return s.abrupt("return",null);case 2:if(c=C.get(i),c){s.next=9;break}return s.next=6,hr(()=>import("./client.4c1ee66d.js").then(v=>v.c),["assets/client.4c1ee66d.js","assets/index.427e9d60.js","assets/iframe.b2807edc.js","assets/index.ca8d4e45.js"]);case 6:f=s.sent.default,c=f.createRoot(i),C.set(i,c);case 9:return s.abrupt("return",c);case 10:case"end":return s.stop()}},"_callee2$"),n)},"_callee2")));return o(function(i){return u.apply(this,arguments)},"getReactRoot")}(),kr=function(u){mr(i,u);var n=dr(i);function i(){var c;vr(this,i);for(var f=arguments.length,p=new Array(f),s=0;s<f;s++)p[s]=arguments[s];return c=n.call.apply(n,[this].concat(p)),c.state={hasError:!1},c}return o(i,"ErrorBoundary"),yr(i,[{key:"componentDidMount",value:o(function(){var f=this.state.hasError,p=this.props.showMain;f||p()},"componentDidMount")},{key:"componentDidCatch",value:o(function(f){var p=this.props.showException;p(f)},"componentDidCatch")},{key:"render",value:o(function(){var f=this.state.hasError,p=this.props.children;return f?null:p},"render")}],[{key:"getDerivedStateFromError",value:o(function(){return{hasError:!0}},"getDerivedStateFromError")}]),i}(G.exports.Component),or=P!=null&&P.strictMode?G.exports.StrictMode:G.exports.Fragment;function Dr(u,n){return H.apply(this,arguments)}o(Dr,"renderToDOM");function H(){return H=J(regeneratorRuntime.mark(o(function u(n,i){var c,f,p,s,v,y,O,L;return regeneratorRuntime.wrap(o(function(_){for(;;)switch(_.prev=_.next){case 0:return c=n.storyContext,f=n.unboundStoryFn,p=n.showMain,s=n.showException,v=n.forceRemount,y=f,O=j(kr,{showMain:p,showException:s,children:j(y,{...c})}),L=or?j(or,{children:O}):O,v&&Sr(i),_.next=7,Or(L,i);case 7:case"end":return _.stop()}},"_callee3$"),u)},"_callee3"))),H.apply(this,arguments)}o(H,"_renderToDOM");var Ir={framework:"react"};export{Ir as parameters,Ar as render,Dr as renderToDOM};
//# sourceMappingURL=config.f1b0aab1.js.map
