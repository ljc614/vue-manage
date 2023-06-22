(function(){var e={7758:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"login-container"},[t("el-form",{ref:"form",attrs:{rules:e.rules,model:e.form,inline:"","label-width":"70px"}},[t("h3",{staticClass:"login_title"},[e._v("系统登录")]),t("el-form-item",{attrs:{label:"用户名",prop:"username"}},[t("el-input",{attrs:{placeholder:"请输入用户名",type:"text"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{placeholder:"请输入密码",type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v(" 登录 ")])],1)],1)],1)},o=[],r=(n(7658),n(7634),n(680)),i=n(586),s={data(){return{form:{username:"",password:""},rules:{username:[{required:!0,trigger:"blur",message:"请输入用户名"}],password:[{required:!0,trigger:"blur",message:"请输入密码"}]}}},methods:{submit(){this.$refs.form.validate((e=>{e&&(0,i.r7)(this.form).then((({data:e})=>{2e4===e.code?(r.Z.set("token",e.data.token),this.$store.commit("setMenu",e.data.menu),this.$store.commit("addMenu",this.$router),this.$router.push("home")):2e4!==e.code&&this.$message.error(e.data.message)}))}))}}},u=s,l=n(1001),c=(0,l.Z)(u,a,o,!1,null,"44d9fa11",null),d=c.exports},6814:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return B}});var a=function(){var e=this,t=e._self._c;return t("div",[t("el-container",[t("el-aside",{staticStyle:{width:"auto"}},[t("CommonAside")],1),t("el-container",[t("el-header",[t("CommonHeader")],1),t("CommonTag"),t("el-main",[t("router-view")],1)],1)],1)],1)},o=[],r=function(){var e=this,t=e._self._c;return t("el-menu",{ref:"menu",staticClass:"el-menu-vertical-demo",attrs:{collapse:e.isCollapse,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{open:e.handleOpen,close:e.handleClose}},[t("h3",[e._v(e._s(e.isCollapse?"后台":"通用后台管理"))]),e._l(e.noChildren,(function(n){return t("el-menu-item",{key:n.name,attrs:{index:n.path},on:{click:function(t){return e.changeMenu(n)}}},[t("i",{class:`el-icon-${n.icon}`}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(n.label))])])})),e._l(e.hasChildren,(function(n){return t("el-submenu",{key:n.label,attrs:{index:n.label}},[t("template",{slot:"title"},[t("i",{class:`el-icon-${n.icon}`}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(n.label))])]),e._l(n.children,(function(n){return t("el-menu-item-group",{key:n.path},[t("el-menu-item",{attrs:{index:n.path,"default-active":n.path},on:{click:function(t){return e.changeMenu(n)}}},[e._v(e._s(n.label))])],1)}))],2)}))],2)},i=[],s=(n(7658),n(680)),u={data(){return{}},methods:{handleOpen(e,t){console.log(e,t)},handleClose(e,t){console.log(e,t)},changeMenu(e){this.$route.path===e.path||"/home"===this.$route.path&&"/"===e.path||this.$router.push(e.path),this.$store.commit("selectMenu",e)}},computed:{noChildren(){return this.menuData.filter((e=>!e.children))},hasChildren(){return this.menuData.filter((e=>e.children))},isCollapse(){return this.$store.state.tab.isCollapse},menuData(){return JSON.parse(s.Z.get("menu"))||this.$store.state.tab.menu}},watch:{"$route.path"(e,t){"/home"===e?(console.log(`route.path变化了:${t} => ${e}`),this.$refs.menu.activeIndex="/"):(console.log(`route.path变化了:${t} => ${e}`),this.$refs.menu.activeIndex=`${e}`)}}},l=u,c=n(1001),d=(0,c.Z)(l,r,i,!1,null,"5beee9e7",null),m=d.exports,p=function(){var e=this,t=e._self._c;return t("div",{staticClass:"header-container"},[t("div",{staticClass:"l-content"},[t("el-button",{attrs:{icon:"el-icon-menu",size:"mini"}}),t("el-breadcrumb",{attrs:{separator:"/"}},e._l(e.tags,(function(n){return t("el-breadcrumb-item",{key:n.path},[t("router-link",{attrs:{to:n.path}},[e._v(e._s(n.label))])],1)})),1)],1),t("div",{staticClass:"r-content"},[t("el-dropdown",{on:{command:e.handleClick}},[t("span",{staticClass:"el-dropdown-link"},[t("img",{staticClass:"user",attrs:{src:n(6414),alt:""}})]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",[e._v("个人中心")]),t("el-dropdown-item",{attrs:{command:"cancel"}},[e._v("退出登录")])],1)],1)],1)])},f=[],h=n(3822),g={data(){return{}},methods:{changeMenu(e){this.$route.path===e.path||"/home"===this.$route.path&&"/"===e.path||this.$router.push(e.path),this.$store.commit("clickMenu",[this.$route.path,e.path])},handleClick(e){"cancel"===e&&(s.Z.remove("token"),s.Z.remove("menu"),this.$store.commit("clearLogin"),this.$message.success("退出成功"),this.$router.push("/login"))}},computed:{...(0,h.rn)({tags:e=>e.tab.tabList})}},v=g,b=(0,c.Z)(v,p,f,!1,null,"c76a5378",null),y=b.exports,k=function(){var e=this,t=e._self._c;return t("div",{staticClass:"tabs"},e._l(e.tags,(function(n){return t("el-tag",{key:n.path,attrs:{closable:"home"!==n.name,type:n.type,effect:e.$route.name===n.name?"dark":"plain",size:"small"},on:{close:function(t){return e.handleClose(n)},click:function(t){return e.changeMenu(n)}}},[e._v(" "+e._s(n.label)+" ")])})),1)},w=[],C={name:"CommonTag",data(){return{}},methods:{handleClose(e){const t=this.tags;if("home"===this.$route.name)t.splice(t.indexOf(e),1);else if(this.$route.name!==e.name)t.splice(t.indexOf(e),1);else if(this.$route.name===t[t.length-1].name)t.splice(t.indexOf(e),1),this.$router.push(t[t.length-1]);else{const n=t.indexOf(e);t.splice(t.indexOf(e),1),this.$router.push(t[n-1])}},changeMenu(e){this.$route.path===e.path||"/home"===this.$route.path&&"/"===e.path||this.$router.push(e.path)}},computed:{...(0,h.rn)({tags:e=>e.tab.tabList})}},_=C,$=(0,c.Z)(_,k,w,!1,null,"6302bb45",null),O=$.exports,x={data(){return{msg:"我是main"}},components:{CommonAside:m,CommonHeader:y,CommonTag:O}},M=x,S=(0,c.Z)(M,a,o,!1,null,"875d32ec",null),B=S.exports},586:function(e,t,n){"use strict";n.d(t,{cn:function(){return u},ti:function(){return c},uz:function(){return l},Yu:function(){return i},r7:function(){return d},PR:function(){return s}});var a=n(4161);const o=a.Z.create({baseURL:"api",timeout:3e3});a.Z.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),a.Z.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}));var r=o;const i=()=>r.get("/home/getData"),s=e=>r.get("/user/getUser",e),u=e=>r.post("user/add",e),l=e=>r.post("user/edit",e),c=e=>r.post("user/del",e),d=e=>r.post("permission/getMenu",e)},5948:function(e,t,n){"use strict";var a=n(6369),o=n(8499),r=n.n(o),i=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},s=[],u={name:"App",components:{}},l=u,c=n(1001),d=(0,c.Z)(l,i,s,!1,null,null,null),m=d.exports,p=n(2631),f=n(6814),h=n(7758);a["default"].use(p.ZP);const g=[{path:"/",component:f["default"],name:"Main",redirect:"home"},{path:"/login",name:"login",component:h["default"]}],v=new p.ZP({routes:g});var b=v,y=n(3822),k=(n(7658),n(680)),w={state:{tabList:[{path:"/",name:"home",label:"首页",icon:"s-home",url:"Home/Home"}],isCollapse:!1,menu:[]},mutations:{collapseMenu(e){e.isCollapse=!e.isCollapse},selectMenu(e,t){if("home"!==t.name){const n=e.tabList.findIndex((e=>e.name===t.name));-1===n&&e.tabList.push(t)}},clearLogin(e){e.tabList=[{path:"/",name:"home",label:"首页",icon:"s-home",url:"Home/Home"}],e.menu=[],console.log("qingchule")},setMenu(e,t){e.menu=t,k.Z.set("menu",JSON.stringify(t))},addMenu(e,t){if(!k.Z.get("menu"))return;const a=JSON.parse(k.Z.get("menu"));e.menu=a;const o=[];a.forEach((e=>{e.children?(e.children=e.children.map((e=>e)),o.push(...e.children)):o.push(e)})),console.log(o,"menuArr"),o.forEach((e=>{console.log(e.path),t.addRoute("Main",{path:e.name,name:e.name,label:e.label,icon:e.icon,url:e.url,component:()=>n(6968)(`./${e.url}`)})}))}}};a["default"].use(y.ZP);var C=new y.ZP.Store({modules:{tab:w}}),_=n(7634),$=n.n(_);let O=[];var x={getStatisticalData:()=>{for(let e=0;e<7;e++)O.push($().mock({"苹果":$().Random.float(100,8e3,0,0),vivo:$().Random.float(100,8e3,0,0),oppo:$().Random.float(100,8e3,0,0),"魅族":$().Random.float(100,8e3,0,0),"三星":$().Random.float(100,8e3,0,0),"小米":$().Random.float(100,8e3,0,0)}));return{code:2e4,data:{videoData:[{name:"小米",value:2999},{name:"苹果",value:5999},{name:"vivo",value:1500},{name:"oppo",value:1999},{name:"魅族",value:3999},{name:"三星",value:4999}],userData:[{date:"周一",new:5,active:200},{date:"周二",new:5,active:200},{date:"周三",new:5,active:200},{date:"周四",new:5,active:200},{date:"周五",new:5,active:200},{date:"周六",new:5,active:200},{date:"周日",new:5,active:200}],orderData:{date:["20191001","20191002","20191003","20191004","20191005","20191006","20191007"],data:O},tableData:[{name:"oppo",todayBuy:1e4,monthBuy:3e4,totalBuy:8e4},{name:"vivo",todayBuy:1e4,monthBuy:3e4,totalBuy:8e4},{name:"苹果",todayBuy:1e4,monthBuy:3e4,totalBuy:8e4},{name:"小米",todayBuy:1e4,monthBuy:3e4,totalBuy:8e4},{name:"三星",todayBuy:1e4,monthBuy:3e4,totalBuy:8e4},{name:"魅族",todayBuy:1e4,monthBuy:3e4,totalBuy:8e4}]}}}};function M(e){const t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'!"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}let S=[];const B=200;for(let N=0;N<B;N++)S.push($().mock({id:$().Random.guid(),name:$().Random.cname(),addr:$().mock("@county(true)"),"age|18-60":1,birth:$().Random.date(),sex:$().Random.integer(0,1)}));var P={getUserList:e=>{const{name:t,page:n=1,limit:a=20}=M(e.url);console.log("name: "+t,"page: "+n,"分页大小limit: "+a);const o=S.filter((e=>!t||-1!==e.name.indexOf(t)||-1!==e.addr.indexOf(t))),r=o.filter(((e,t)=>t<a*n&&t>=a*(n-1)));return{code:2e4,count:o.length,list:r}},createUser:e=>{const{name:t,addr:n,age:a,birth:o,sex:r}=JSON.parse(e.body);return console.log(JSON.parse(e.body)),S.unshift({id:$().Random.guid(),name:t,addr:n,age:a,birth:o,sex:r}),{code:200,data:{message:"添加成功"}}},deleteUser:e=>{const{id:t}=JSON.parse(e.body);return t?(S=S.filter((e=>e.id!==t)),{code:2e4,message:"删除成功"}):{code:-999,message:"参数不正确"}},batchremove:e=>{let{ids:t}=param2obj(e.url);return t=t.split(","),S=S.filter((e=>!t.includes(e.id))),{code:2e4,data:{message:"批量删除成功"}}},updateUser:e=>{const{id:t,name:n,addr:a,age:o,birth:r,sex:i}=JSON.parse(e.body),s=parseInt(i);return S.some((e=>{if(e.id===t)return e.name=n,e.addr=a,e.age=o,e.birth=r,e.sex=s,!0})),{code:2e4,data:{message:"编辑成功"}}}},Z={getMenu:e=>{const{username:t,password:n}=JSON.parse(e.body);return"admin"===t&&"admin"===n?{code:2e4,data:{menu:[{path:"/home",name:"home",label:"首页",icon:"s-home",url:"Home.vue"},{path:"/mall",name:"mall",label:"商品管理",icon:"video-play",url:"Mall.vue"},{path:"/user",name:"user",label:"用户管理",icon:"user",url:"User.vue"},{label:"其他",icon:"location",children:[{path:"/page1",name:"page1",label:"页面1",icon:"setting",url:"PageOne.vue"},{path:"/page2",name:"page2",label:"页面2",icon:"setting",url:"PageTwo.vue"}]}],token:$().Random.guid(),message:"获取成功"}}:"ljc"===t&&"123456"===n?{code:2e4,data:{menu:[{path:"/home",name:"home",label:"首页",icon:"s-home",url:"Home.vue"},{path:"/video",name:"video",label:"商品管理",icon:"video-play",url:"Mall.vue"}],token:$().Random.guid(),message:"获取成功"}}:{code:-999,data:{message:"用户名或密码错误"}}}};$().mock("api/home/getData","get",x.getStatisticalData),$().mock("api/user/add","post",P.createUser),$().mock("api/user/edit","post",P.updateUser),$().mock("api/user/del","post",P.deleteUser),$().mock(/api\/user\/getUser/,"get",P.getUserList),$().mock(/api\/permission\/getMenu/,"post",Z.getMenu),a["default"].use(r()),b.beforeEach(((e,t,n)=>{const a=k.Z.get("token");a||"login"===e.name?a&&"login"===e.name?n({name:"home"}):n():n({name:"login"})})),a["default"].config.productionTip=!1,new a["default"]({router:b,store:C,el:"#app",render:e=>e(m),created(){C.commit("addMenu",b)}})},6968:function(e,t,n){var a={"./Home":[2553,553],"./Home.vue":[2553,553],"./Login":[7758],"./Login.vue":[7758],"./Main":[6814],"./Main.vue":[6814],"./Mall":[2595,595],"./Mall.vue":[2595,595],"./PageOne":[8541,541],"./PageOne.vue":[8541,541],"./PageTwo":[7517,517],"./PageTwo.vue":[7517,517],"./User":[6717,717],"./User.vue":[6717,717]};function o(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],o=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(o)}))}o.keys=function(){return Object.keys(a)},o.id=6968,e.exports=o},6414:function(e,t,n){"use strict";e.exports=n.p+"img/QQ图片20230605191623.4d027a84.jpg"}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,a,o,r){if(!a){var i=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],r=e[c][2];for(var s=!0,u=0;u<a.length;u++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](a[u])}))?a.splice(u--,1):(s=!1,r<i&&(i=r));if(s){e.splice(c--,1);var l=o();void 0!==l&&(t=l)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[a,o,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{517:"8551f68c",541:"f09179ab",553:"b93b5710",595:"aca1981b",717:"5a69d645"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{553:"f950b610",717:"912c7582"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-manage:";n.l=function(a,o,r,i){if(e[a])e[a].push(o);else{var s,u;if(void 0!==r)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+r){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+r),s.src=a),e[a]=[o];var m=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var o=e[a];if(delete e[a],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,a,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(n){if(r.onerror=r.onload=null,"load"===n.type)a();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,r.parentNode&&r.parentNode.removeChild(r),o(u)}};return r.onerror=r.onload=i,r.href=t,n?n.parentNode.insertBefore(r,n.nextSibling):document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var o=n[a],r=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(r===e||r===t))return o}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){o=i[a],r=o.getAttribute("data-href");if(r===e||r===t)return o}},a=function(a){return new Promise((function(o,r){var i=n.miniCssF(a),s=n.p+i;if(t(i,s))return o();e(a,s,null,o,r)}))},o={143:0};n.f.miniCss=function(e,t){var n={553:1,717:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=a(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,a){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(n,a){o=e[t]=[n,a]}));a.push(o[2]=r);var i=n.p+n.u(t),s=new Error,u=function(a){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var r=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,o[1](s)}};n.l(i,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,r,i=a[0],s=a[1],u=a[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(u)var c=u(n)}for(t&&t(a);l<i.length;l++)r=i[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},a=self["webpackChunkvue_manage"]=self["webpackChunkvue_manage"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(5948)}));a=n.O(a)})();
//# sourceMappingURL=app.721a636b.js.map