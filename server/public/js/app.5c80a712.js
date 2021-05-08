(function(t){function e(e){for(var a,i,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],a=!0,o=1;o<r.length;o++){var c=r[o];0!==n[c]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},n={app:0},s=[];function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("PostComponent")],1)},s=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[t._m(0),r("div",{staticStyle:{"margin-top":"-1rem"}},[r("hr",{staticStyle:{height:"0.8rem","background-color":"#209cee","margin-bottom":"-0.rem"}}),r("div",{staticClass:"box",staticStyle:{background:"#3273dc","margin-top":"-1.7rem","margin-bottom":"-1.7rem"},attrs:{onload:"",id:"dateBanner"}},[r("h1",{staticClass:"subtitle is-4",staticStyle:{color:"white"},attrs:{id:"topDate"}},[t._v(" "+t._s(""+(new Date).toDateString("en-US"))+" ")])]),r("hr",{staticStyle:{height:"0.5rem","background-color":"#209cee"}})]),r("div",{staticClass:"create-post",staticStyle:{"margin-top":"3rem"}},[t._m(1),r("div",{staticStyle:{"margin-right":"10px"},attrs:{id:"yes"}},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"textarea is-primary",attrs:{id:"create-post5",placeholder:"add tasks"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),r("div",{staticClass:"control has-icons-left",staticStyle:{"margin-top":"0.5rem"}},[r("div",{staticClass:"select is-warning"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.priority,expression:"priority"}],on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.priority=e.target.multiple?r:r[0]},t.selectColor]}},[r("option",{attrs:{disabled:"",value:""}},[t._v("Select Priority")]),r("option",[t._v("High Priority")]),r("option",[t._v("Medium Priority")]),r("option",[t._v("Low Priority")])]),t._m(2)])]),r("button",{staticClass:"button is-primary is",staticStyle:{"margin-top":"3px"},attrs:{id:"button"},on:{click:t.createPost}},[t._m(3),r("span",[t._v("Add Task")])])]),t._m(4),t._l(t.posts,(function(e,a){return r("div",{key:e._id,staticClass:"card w3-animate-top",attrs:{item:e,index:a,id:"taskCard"}},[r("header",{staticClass:"card-header",staticStyle:{background:"#00d1b2"},attrs:{id:"cardHeader"}},[r("p",{staticClass:"card-header-title",attrs:{id:"postNumber"}},[t._v(" Task "+t._s(""+(t.posts.indexOf(e)+1))+" "+t._s("| "+e.priority)+" ")]),t._m(5,!0)]),r("div",{staticClass:"card-content",staticStyle:{"margin-top":"-1rem"}},[r("div",{staticClass:"content"},[t.error?r("p",{staticClass:"error"},[t._v(" "+t._s(t.error))]):t._e(),r("p",{staticClass:"text",staticStyle:{"white-space":"pre-wrap",height:"100%","font-size":"1.2rem","text-align":"center"}},[t._v(t._s(e.text))]),r("span",{attrs:{id:"posty"}},[t._v("created at "),r("b",{staticStyle:{"font-size":"1.2rem"}},[t._v("·")]),t._v(" "+t._s(e.createdAt.getHours()+":"+e.createdAt.getMinutes()+": "+e.createdAt.getSeconds()))])])]),r("footer",{staticClass:"card-footer",staticStyle:{height:"40px","margin-top":"-1.4rem"}},[r("a",{staticClass:"card-footer-item",attrs:{href:"#",id:"footerEdit"}},[t._v("Edit")]),r("a",{staticClass:"card-footer-item",attrs:{href:"#",id:"footerDelete"},on:{click:function(r){return t.deletePost(e._id)}}},[t._v("Delete")])])])})),t._m(6)],2)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"navbar has-shadow"},[r("div",{staticClass:"navbar-brand"},[r("a",{staticClass:"navbar-item"},[r("img",{staticStyle:{height:"4rem"},attrs:{src:"enc.png",alt:"site logo"}}),r("i",[r("b",{staticStyle:{"font-size":"1.2rem",color:"grey"}},[t._v(" Littera ")])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:"create-post"}},[r("i",[t._v("add a task!")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"icon is-small is-left"},[r("i",{staticClass:"fas fa-exclamation-circle"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"icon is-small"},[r("i",{staticClass:"fas fa-plus"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{"margin-top":"2rem"}},[r("div",{staticClass:"subtitle",staticStyle:{"font-size":"1.5rem"}},[r("b",[r("u",{attrs:{id:"tasksLabel"}})])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"icon",staticStyle:{"margin-top":"0.7rem","margin-right":"1rem"},attrs:{id:"icon2"}},[r("i",{staticClass:"fas fa-tasks fa-2x",attrs:{id:"icon","aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"box",staticStyle:{"margin-bottom":"-2rem"}},[r("div",{staticClass:"subtitle"},[t._v(" created by adolph ")])])}],c=r("1da1"),l=(r("498a"),r("96cf"),r("5530")),u=r("d4ec"),d=r("bee2"),p=(r("d3b7"),r("d81d"),r("bc3a")),f=r.n(p),m="api/posts/",v=function(){function t(){Object(u["a"])(this,t)}return Object(d["a"])(t,null,[{key:"getPosts",value:function(){return new Promise((function(t,e){f.a.get(m).then((function(e){var r=e.data;t(r.map((function(t){return Object(l["a"])(Object(l["a"])({},t),{},{createdAt:new Date(t.createdAt)})})))})).catch((function(t){e(t)}))}))}},{key:"insertPost",value:function(t,e){return f.a.post(m,{text:t,priority:e})}},{key:"deletePost",value:function(t){return f.a.delete("".concat(m).concat(t))}}]),t}(),g=v,h={name:"PostComponent",data:function(){return{posts:[],error:"",text:"",priority:""}},created:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.getPosts();case 3:t.posts=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),t.error=e.t0.message;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},methods:{selectColor:function(t){var e=t.target.value.trim();this.color=e;var r="";"High Priority"===e?r="red":"Medium Priority"===e&&(r="yellow"),document.getElementById("cardHeader").style.background=r,console.log(r)},createPost:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g.insertPost(t.text,t.priority);case 2:return e.next=4,g.getPosts();case 4:t.posts=e.sent,document.getElementById("tasksLabel").innerHTML="TASKS";case 6:case"end":return e.stop()}}),e)})))()},deletePost:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,g.deletePost(t);case 2:return r.next=4,g.getPosts();case 4:e.posts=r.sent;case 5:case"end":return r.stop()}}),r)})))()}}},y=h,b=(r("66f8"),r("2877")),_=Object(b["a"])(y,i,o,!1,null,"1f1971e7",null),x=_.exports,C={name:"App",components:{PostComponent:x}},w=C,S=(r("034f"),Object(b["a"])(w,n,s,!1,null,null,null)),P=S.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(P)}}).$mount("#app")},"66f8":function(t,e,r){"use strict";r("d0a3")},"85ec":function(t,e,r){},d0a3:function(t,e,r){}});
//# sourceMappingURL=app.5c80a712.js.map