(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/posts/detail"],{"007f":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=c(e("9f8b")),a=c(e("78b4"));function c(t){return t&&t.__esModule?t:{default:t}}var u={data:function(){return{postDetailData:{}}},filters:{},onLoad:function(t){this.getWpPostsDetail(t.id)},methods:{getWpPostsDetail:function(t){var n=this,e={};o.default.postsDetail(t,e).then((function(t){console.log(t),n.postDetailData=t})).catch((function(t){console.log(t)}))},getPostDetailById:function(t){var n=this,e={};postsApi.postDetailById(e,t).then((function(t){console.log(t),200==t.status?n.postDetailData=t.data:console.log(t)})).catch((function(t){console.log(t)}))},wxmlTagATap:function(n){console.log("aaa"),console.log(n),(0,a.default)({content:n.detail.src,success:function(n){t.showToast({title:"复制成功，在浏览器打开",icon:"none"})},error:function(n){t.showToast({title:n,icon:"none",duration:3e3})}})}},onShareAppMessage:function(){},onShareTimeline:function(){}};n.default=u}).call(this,e("543d")["default"])},"10d2":function(t,n,e){"use strict";e.r(n);var o=e("007f"),a=e.n(o);for(var c in o)"default"!==c&&function(t){e.d(n,t,(function(){return o[t]}))}(c);n["default"]=a.a},"7ce3":function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return o}));var a=function(){var t=this,n=t.$createElement;t._self._c},c=[]},bd28:function(t,n,e){},c7de:function(t,n,e){"use strict";var o=e("bd28"),a=e.n(o);a.a},f4e7:function(t,n,e){"use strict";(function(t){e("c574");o(e("66fd"));var n=o(e("f9bb"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},f9bb:function(t,n,e){"use strict";e.r(n);var o=e("7ce3"),a=e("10d2");for(var c in a)"default"!==c&&function(t){e.d(n,t,(function(){return a[t]}))}(c);e("c7de");var u,i=e("f0c5"),s=Object(i["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);n["default"]=s.exports}},[["f4e7","common/runtime","common/vendor"]]]);