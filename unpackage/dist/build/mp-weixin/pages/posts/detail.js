(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/posts/detail"],{"5ea1":function(t,n,o){"use strict";o.r(n);var e=o("dc60"),a=o.n(e);for(var c in e)"default"!==c&&function(t){o.d(n,t,(function(){return e[t]}))}(c);n["default"]=a.a},"649b":function(t,n,o){},"69eb":function(t,n,o){"use strict";var e=o("649b"),a=o.n(e);a.a},"71c2":function(t,n,o){"use strict";o.r(n);var e=o("db3f"),a=o("5ea1");for(var c in a)"default"!==c&&function(t){o.d(n,t,(function(){return a[t]}))}(c);o("69eb");var u,i=o("f0c5"),s=Object(i["a"])(a["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],u);n["default"]=s.exports},cf20:function(t,n,o){"use strict";(function(t){o("9210");e(o("66fd"));var n=e(o("71c2"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,o("543d")["createPage"])},db3f:function(t,n,o){"use strict";var e;o.d(n,"b",(function(){return a})),o.d(n,"c",(function(){return c})),o.d(n,"a",(function(){return e}));var a=function(){var t=this,n=t.$createElement;t._self._c},c=[]},dc60:function(t,n,o){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=c(o("d0fa")),a=c(o("0823"));function c(t){return t&&t.__esModule?t:{default:t}}var u={data:function(){return{postDetailData:{}}},filters:{},onLoad:function(t){this.getWpPostsDetail(t.id)},methods:{getWpPostsDetail:function(t){var n=this,o={};e.default.postsDetail(t,o).then((function(t){console.log(t),n.postDetailData=t})).catch((function(t){console.log(t)}))},getPostDetailById:function(t){var n=this,o={};postsApi.postDetailById(o,t).then((function(t){console.log(t),200==t.status?n.postDetailData=t.data:console.log(t)})).catch((function(t){console.log(t)}))},wxmlTagATap:function(n){console.log("aaa"),console.log(n),(0,a.default)({content:n.detail.src,success:function(n){t.showToast({title:"复制成功，在浏览器打开",icon:"none"})},error:function(n){t.showToast({title:n,icon:"none",duration:3e3})}})}},onShareAppMessage:function(){},onShareTimeline:function(){}};n.default=u}).call(this,o("543d")["default"])}},[["cf20","common/runtime","common/vendor"]]]);