/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */


define("mixins",["module"],function(n){"use strict";function r(n){return!!~n.indexOf("!")}function i(n){return"mixins!"+n}function e(n,r){var i=r.baseUrl||"",e=n.indexOf(i);return~e&&(n=n.substring(i.length-e)),n}function t(n,r){return e(a.require.toUrl(n),r)}function u(n){return!!~n.indexOf("./")}function s(n){return Array.prototype.slice.call(arguments,1).forEach(function(r){n=r(n)}),n}var o,c=require.s.contexts,f=c._,a=require.s.newContext("$"),l=f.config,x={baseUrl:l.baseUrl,paths:l.paths,shim:l.shim,config:l.config,map:l.map};return a.configure(x),o={load:function(n,r,i,e){var u=t(n,e);r([n].concat(this.getMixins(u)),function(){i(s.apply(null,arguments))})},getMixins:function(r){var i,e=n.config()||{};return-1!==r.indexOf("?")&&(r=r.substring(0,r.indexOf("?"))),i=e[r]||{},Object.keys(i).filter(function(n){return!1!==i[n]})},hasMixins:function(n){return this.getMixins(n).length},processNames:function(n,e){function s(n){var e=t(n,c);return r(n)||!u(n)&&!o.hasMixins(e)?n:i(n)}var c=e.config;return"string"!=typeof n?n.map(s):s(n)}}}),require(["mixins"],function(n){"use strict";var r=require.s.contexts,i=r._,e=i.require,t=n.processNames;i.require=function(n,r,u){return n=t(n,i),e(n,r,u)},Object.keys(e).forEach(function(n){i.require[n]=e[n]}),i.defQueue.shift=function(){var n=Array.prototype.shift.call(this),r=n&&n[1];return Array.isArray(r)&&(n[1]=t(n[1],i)),n}});
//# sourceMappingURL=mixins.js.map