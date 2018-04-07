!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("lodash")):"function"==typeof define&&define.amd?define(["lodash"],r):"object"==typeof exports?exports.areu=r(require("lodash")):t.areu=r(t._)}(global,function(t){return function(t){var r={};function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=r,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:e})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="",n.w={},n(n.s=2)}([
/*!*************************************************************************************!*\
  !*** external {"commonjs":"lodash","commonjs2":"lodash","amd":"lodash","root":"_"} ***!
  \*************************************************************************************/
/*! no static exports found */
/*! exports used: difference, forEach, isArray, isBoolean, isFunction, isNil, isNumber, isObject, isString */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(r,n){r.exports=t},
/*!**********************************!*\
  !*** ./src/index.ts + 6 modules ***!
  \**********************************/
/*! exports provided: ArrayChecker, ObjectChecker, StringChecker, TypeChecker, NumberChecker, object, array, string, number, boolean, any, validate, continuously */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with external {"commonjs":"lodash","commonjs2":"lodash","amd":"lodash","root":"_"} (<- Module is not an ECMAScript module) */function(t,r,n){"use strict";n.r(r);var e,o=n(0),i=function(t,r){if(!Object(o.isObject)(t)&&!Object(o.isNil)(t))return!1;var n,e=!0,i=!1,u=Object.keys(r),c=[];if(Object(o.forEach)(t,function(t,u){c.push(u.toString());var f=r[u];if(Object(o.isObject)(f)&&Object(o.isFunction)(f.check))i=!1,n=f;else if(i&&n)f=n;else{if(!Object(o.isString)(f)||f!==v)return!0;f=n,i=!0}if(!f.check(t))return e=!1,!1}),!e)return!1;var f=Object(o.difference)(u,c);return Object(o.forEach)(f,function(n){var i=r[n];if(!Object(o.isObject)(i)||!Object(o.isFunction)(i.check))throw new Error("[Object checker] one schema is not typeChecker");if(!i.check(t[n]))return e=!1,!1}),e},u=function(){function t(t){this._required=!1,this._checkers=[],this._typeChecker=t}return t.prototype.check=function(t){if(Object(o.isNil)(t)&&!this._required)return!0;var r=!0;return Object(o.forEach)(this._checkers,function(n){if(!n(t))return r=!1,!1}),!!r&&this._typeChecker(t)},t.prototype.required=function(){return this._required=!0,this},t.prototype._register=function(t){this._checkers.push(t)},t}(),c=(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])},function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}),f=function(t){function r(r){return t.call(this,function(t){return!!i(t,r)&&Object(o.isArray)(t)})||this}return c(r,t),r.prototype.length=function(t){return this._register(function(r){return r.length===t}),this},r.prototype.max=function(t){return this._register(function(r){return r.length<t}),this},r.prototype.min=function(t){return this._register(function(r){return r.length>t}),this},r}(u),s=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])};return function(r,n){function e(){this.constructor=r}t(r,n),r.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}}(),p=function(t){function r(){return t.call(this,function(t){return Object(o.isNumber)(t)})||this}return s(r,t),r.prototype.integer=function(){return this._register(function(t){return t<Number.MAX_VALUE&&t>Number.MIN_VALUE}),this},r.prototype.integerSafe=function(){return this._register(function(t){return t<Number.MAX_SAFE_INTEGER&&t>Number.MIN_SAFE_INTEGER}),this},r.prototype.max=function(t){return this._register(function(r){return r<t}),this},r.prototype.min=function(t){return this._register(function(r){return r>t}),this},r}(u),a=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])};return function(r,n){function e(){this.constructor=r}t(r,n),r.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}}(),h=function(t){function r(r){return t.call(this,function(t){return!!i(t,r)&&(Object(o.isObject)(t)&&!Object(o.isFunction)(t)&&!Object(o.isArray)(t))})||this}return a(r,t),r}(u),_=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])};return function(r,n){function e(){this.constructor=r}t(r,n),r.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}}(),y=/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,b=/^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}$/,l=function(t){function r(){return t.call(this,function(t){return Object(o.isString)(t)})||this}return _(r,t),r.prototype.test=function(t){if(!t||!t.test)throw new Error("[are-u test] test reg is not Regular expression");return this._register(function(r){return t.test(r)}),this},r.prototype.uuid=function(){return this._register(function(t){return b.test(t)}),this},r.prototype.email=function(){return this._register(function(t){return y.test(t)}),this},r}(u);n.d(r,"object",function(){return O}),n.d(r,"array",function(){return j}),n.d(r,"string",function(){return d}),n.d(r,"number",function(){return g}),n.d(r,"boolean",function(){return A}),n.d(r,"any",function(){return w}),n.d(r,"validate",function(){return k}),n.d(r,"continuously",function(){return v}),n.d(r,"ArrayChecker",function(){return f}),n.d(r,"ObjectChecker",function(){return h}),n.d(r,"StringChecker",function(){return l}),n.d(r,"TypeChecker",function(){return u}),n.d(r,"NumberChecker",function(){return p});var O=function(t){return new h(t)},j=function(t){return new f(t)},d=function(){return new l},g=function(){return new p},A=function(){return new u(function(t){return Object(o.isBoolean)(t)})},w=function(){return new u(function(){return!0})},k=function(t,r){return r.check(t)},v="..."},
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,r,n){t.exports=n(/*! ./src/index.ts */1)}])});
//# sourceMappingURL=app.js.map