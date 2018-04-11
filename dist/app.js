!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define("areu",[],r):"object"==typeof exports?exports.areu=r():t.areu=r()}(this,function(){return function(t){var r={};function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=r,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:e})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="",n.w={},n(n.s=10)}([
/*!**********************************!*\
  !*** external "lodash/isObject" ***!
  \**********************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,r){t.exports=require("lodash/isObject")},
/*!************************************!*\
  !*** external "lodash/isFunction" ***!
  \************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,r){t.exports=require("lodash/isFunction")},
/*!*********************************!*\
  !*** external "lodash/forEach" ***!
  \*********************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,r){t.exports=require("lodash/forEach")},
/*!**********************************!*\
  !*** external "lodash/isString" ***!
  \**********************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,r){t.exports=require("lodash/isString")},
/*!*******************************!*\
  !*** external "lodash/isNil" ***!
  \*******************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,r){t.exports=require("lodash/isNil")},
/*!*********************************!*\
  !*** external "lodash/isArray" ***!
  \*********************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,r){t.exports=require("lodash/isArray")},
/*!**********************************!*\
  !*** external "lodash/isNumber" ***!
  \**********************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,r){t.exports=require("lodash/isNumber")},
/*!************************************!*\
  !*** external "lodash/difference" ***!
  \************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,r){t.exports=require("lodash/difference")},
/*!***********************************!*\
  !*** external "lodash/isBoolean" ***!
  \***********************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,r){t.exports=require("lodash/isBoolean")},
/*!**********************************!*\
  !*** ./src/index.ts + 6 modules ***!
  \**********************************/
/*! exports provided: ArrayChecker, ObjectChecker, StringChecker, TypeChecker, NumberChecker, object, array, string, number, boolean, any, validate, continuously */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with external "lodash/difference" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "lodash/forEach" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "lodash/isArray" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "lodash/isBoolean" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "lodash/isFunction" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "lodash/isNil" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "lodash/isNumber" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "lodash/isObject" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "lodash/isString" (<- Module is not an ECMAScript module) */function(t,r,n){"use strict";n.r(r);var e,o=n(8),u=n.n(o),i=n(5),c=n.n(i),f=n(7),s=n.n(f),p=n(2),a=n.n(p),h=n(1),_=n.n(h),y=n(4),l=n.n(y),d=n(0),b=n.n(d),g=n(3),O=n.n(g),x=function(t,r){if(!b()(t)&&!l()(t))return!1;var n,e=!0,o=!1,u=Object.keys(r),i=[];if(a()(t,function(t,u){i.push(u.toString());var c=r[u];if(b()(c)&&_()(c.check))o=!1,n=c;else if(o&&n)c=n;else{if(!O()(c)||c!==L)return!0;c=n,o=!0}if(!c.check(t))return e=!1,!1}),!e)return!1;var c=s()(u,i);return a()(c,function(n){var o=r[n];if(!b()(o)||!_()(o.check))throw new Error("[Object checker] one schema is not typeChecker");if(!o.check(t[n]))return e=!1,!1}),e},A=function(){function t(t){this._required=!1,this._checkers=[],this._typeChecker=t}return t.prototype.check=function(t){if(l()(t)&&!this._required)return!0;var r=!0;return a()(this._checkers,function(n){if(!n(t))return r=!1,!1}),!!r&&this._typeChecker(t)},t.prototype.required=function(){return this._required=!0,this},t.prototype._register=function(t){this._checkers.push(t)},t}(),w=(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])},function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}),j=function(t){function r(r){return t.call(this,function(t){return!!x(t,r)&&c()(t)})||this}return w(r,t),r.prototype.length=function(t){return this._register(function(r){return r.length===t}),this},r.prototype.max=function(t){return this._register(function(r){return r.length<t}),this},r.prototype.min=function(t){return this._register(function(r){return r.length>t}),this},r}(A),k=n(6),v=n.n(k),m=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])};return function(r,n){function e(){this.constructor=r}t(r,n),r.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}}(),q=function(t){function r(){return t.call(this,function(t){return v()(t)})||this}return m(r,t),r.prototype.integer=function(){return this._register(function(t){return t<Number.MAX_VALUE&&t>Number.MIN_VALUE}),this},r.prototype.integerSafe=function(){return this._register(function(t){return t<Number.MAX_SAFE_INTEGER&&t>Number.MIN_SAFE_INTEGER}),this},r.prototype.max=function(t){return this._register(function(r){return r<t}),this},r.prototype.min=function(t){return this._register(function(r){return r>t}),this},r}(A),E=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])};return function(r,n){function e(){this.constructor=r}t(r,n),r.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}}(),N=function(t){function r(r){return t.call(this,function(t){return!!x(t,r)&&(b()(t)&&!_()(t)&&!c()(t))})||this}return E(r,t),r}(A),P=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])};return function(r,n){function e(){this.constructor=r}t(r,n),r.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}}(),C=/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,F=/^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}$/,M=function(t){function r(){return t.call(this,function(t){return O()(t)})||this}return P(r,t),r.prototype.test=function(t){if(!t||!t.test)throw new Error("[are-u test] test reg is not Regular expression");return this._register(function(r){return t.test(r)}),this},r.prototype.uuid=function(){return this._register(function(t){return F.test(t)}),this},r.prototype.email=function(){return this._register(function(t){return C.test(t)}),this},r}(A);n.d(r,"object",function(){return S}),n.d(r,"array",function(){return z}),n.d(r,"string",function(){return Z}),n.d(r,"number",function(){return I}),n.d(r,"boolean",function(){return R}),n.d(r,"any",function(){return T}),n.d(r,"validate",function(){return G}),n.d(r,"continuously",function(){return L}),n.d(r,"ArrayChecker",function(){return j}),n.d(r,"ObjectChecker",function(){return N}),n.d(r,"StringChecker",function(){return M}),n.d(r,"TypeChecker",function(){return A}),n.d(r,"NumberChecker",function(){return q});var S=function(t){return new N(t)},z=function(t){return new j(t)},Z=function(){return new M},I=function(){return new q},R=function(){return new A(function(t){return u()(t)})},T=function(){return new A(function(){return!0})},G=function(t,r){return r.check(t)},L="..."},
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,r,n){t.exports=n(/*! ./src/index.ts */9)}])});
//# sourceMappingURL=app.js.map