webpackJsonp([1],{"1Ivt":function(t,e){},"2wgI":function(t,e){},E6gb:function(t,e){},Gre8:function(t,e){},JMyr:function(t,e){},K11V:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("rVsN"),i=n.n(a),s=n("MVMM"),r=n("9rMa"),o=n("3cXf"),l=n.n(o),c=n("CkgV"),d=n.n(c),u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"User"}},[n("el-alert",{directives:[{name:"show",rawName:"v-show",value:""!=t.error,expression:"error != ''"}],attrs:{title:"登录/注册错误",type:"error",description:t.error,"show-icon":""}}),t._v(" "),n("el-form",{ref:"form",attrs:{model:t.form}},[n("el-form-item",{attrs:{label:"邮箱"}},[n("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"密码"}},[n("el-input",{attrs:{type:"password"},model:{value:t.form.passwd,callback:function(e){t.$set(t.form,"passwd",e)},expression:"form.passwd"}})],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.login}},[t._v("登录")]),t._v(" "),n("el-button",{on:{click:t.signin}},[t._v("注册")])],1)],1)],1)},staticRenderFns:[]},f=n("Z0/y")({name:"User",data:function(){return{form:{name:"",passwd:""},error:""}},methods:{login:function(){var t=this;this.lcs.Login(this.form.name,this.form.passwd).then(function(){t.$emit("login")}).catch(function(){t.error="登录出错！"})},signin:function(){var t=this;this.lcs.Signin(this.form.name,this.form.passwd).then(function(){t.$emit("login")}).catch(function(){t.error="注册失败耶"})}}},u,!1,null,null,null).exports,p={name:"Navbar",components:{User:f},data:function(){return{dialogVisible:!1,loading:!1,mycode:!1}},methods:{storgeStateChange:function(t){t?this.lcs.isLogin()?this.login_success():(this.dialogVisible=!0,this.$store.state.storge.toCloud=!1):this.$store.state.storge.toCloud=!1},login_success:function(){this.$store.state.storge.toCloud=!0},save:function(){var t=this;this.loading=!0,window.localStorage?(localStorage.setItem("roadmap",l()(this.$store.getters.exportData)),console.log(localStorage.getItem("roadmap")),this.$store.state.storge.toCloud?this.lcs.saveToCloud(l()(this.$store.getters.exportData)).then(function(e){console.log(e),t.loading=!1}).catch(function(e){console.log(e),t.loading=!1}):this.loading=!1):(this.$message({message:"保存需要使用localstorge",type:"error"}),this.loading=!1)},showCode:function(){var t=this;setTimeout(function(){var e=document.getElementById("qrcode");d.a.toCanvas(e,"https://dixeran.github.io/RoadMap/?type=mobile&email="+t.lcs.getEmail()+"/",function(t){t&&console.error(t),console.log("success!")})},100)}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Navbar"}},[t._m(0),t._v(" "),t.isMobile?t._e():n("ul",{attrs:{id:"navlist"}},[n("router-link",{attrs:{to:"/"}},[t._v("路径规划")]),t._v(" "),n("router-link",{attrs:{to:"/abstract"}},[t._v("行程概览")])],1),t._v(" "),t.isMobile?t._e():n("input",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.city,expression:"$store.state.city"}],class:""==t.$store.state.city?"unName":"",attrs:{id:"cityName",type:"text",placeholder:"输入城市名"},domProps:{value:t.$store.state.city},on:{input:function(e){e.target.composing||t.$set(t.$store.state,"city",e.target.value)}}}),t._v(" "),t.isMobile?t._e():n("el-popover",{attrs:{placement:"top-start",trigger:"hover"}},[n("el-switch",{attrs:{"active-text":"保存至云端",value:t.$store.state.storge.toCloud},on:{change:t.storgeStateChange}}),t._v(" "),t.$store.state.storge.toCloud?n("el-button",{on:{click:function(e){t.mycode=!0}}},[t._v("生成分享二维码")]):t._e(),t._v(" "),n("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{slot:"reference",icon:"el-icon-upload",circle:""},on:{click:t.save},slot:"reference"})],1),t._v(" "),n("el-dialog",{attrs:{title:"登录/注册",visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("User",{on:{login:function(e){t.dialogVisible=!1,t.login_success()}}})],1),t._v(" "),n("el-dialog",{attrs:{title:"分享二维码",visible:t.mycode},on:{"update:visible":function(e){t.mycode=e},open:t.showCode}},[n("canvas",{attrs:{id:"qrcode"}})])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"logo"}},[e("span",[this._v("RoadMap")])])}]};var m={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"Errorhandler"}},[this._v("\n  "+this._s(this.errorData)+"\n")])},staticRenderFns:[]};var h={name:"Initmodel",components:{User:f},data:function(){return{init:!1,val:[],option:[],props:{label:"name",value:"name",children:"districtList"},dialogVisible:!1}},created:function(){this.lcs.Init()},mounted:function(){var t=this;AMap.service("AMap.DistrictSearch",function(){new AMap.DistrictSearch({level:"country",subdistrict:2}).search("中国",function(e,n){t.formatArray(n.districtList[0].districtList),t.option=n.districtList[0].districtList})}),this.isMobile&&this.importCloud(this.email)},methods:{formatArray:function(t){var e=this;t.forEach(function(t){t.districtList&&0!=t.districtList.length&&"district"!=t.districtList[0].level?e.formatArray(t.districtList):t.districtList=null,t.label=t.value=t.name,t.children=t.districtList})},importLocal:function(){var t=JSON.parse(localStorage.getItem("roadmap"));t?(this.$store.state.storge.localData=t,this.$store.state.city=t.city,this.$store.state.AMap_Bus.city=t.city,this.$store.state.AMap_PlaceSearch.config.city=t.city,this.init=!0,this.$emit("init")):this.$emit("error","数据不存在")},importCloud:function(t){var e=this;this.lcs.getDataByEmail(t).then(function(t){var n=JSON.parse(t);e.$store.state.storge.localData=n,e.$store.state.city=n.city,e.$store.state.AMap_Bus.city=n.city,e.$store.state.storge.toCloud=!0,e.$store.state.AMap_PlaceSearch.config.city=n.city,e.init=!0,e.$emit("init")}).catch(function(t){e.$emit("error",t)})},importUser:function(){this.lcs.isLogin()?this.importCloud():this.dialogVisible=!0}},watch:{val:function(){var t=this.val[this.val.length-1];this.$store.state.city=t,this.$store.state.AMap_Bus.city=t;var e=this.$store.state.AMap_PlaceSearch.config;e.city=t;var n=new AMap.PlaceSearch(e);this.$store.commit("setPlaceSearch",{config:e,search:n}),this.init=!0,this.$emit("init")}}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.init?t._e():n("div",{attrs:{id:"Initmodel"}},[n("div",{attrs:{id:"container"}},[n("div",{attrs:{id:"select"}},[n("h1",[t._v("去哪？(･ω´･ )")]),t._v(" "),n("div",{attrs:{id:"select-or"}},[n("el-cascader",{attrs:{options:t.option,size:"medium"},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}})],1)]),t._v(" "),n("div",{attrs:{id:"import"}},[n("h1",[t._v("导入！")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.importLocal}},[t._v("本地导入")]),t._v(" "),n("el-button",{attrs:{plain:""},on:{click:t.importUser}},[t._v("云端导入")])],1)]),t._v(" "),n("el-dialog",{attrs:{title:"登录/注册",modal:!1,visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("User",{on:{login:function(e){t.dialogVisible=!1,t.importUser()}}})],1)],1)},staticRenderFns:[]};var g={name:"App",components:{Navbar:n("Z0/y")(p,v,!1,function(t){n("K11V")},"data-v-06ae0bf8",null).exports,Errorhandler:n("Z0/y")({name:"Errorhandler",props:["errorData"]},m,!1,function(t){n("zpZT")},"data-v-0ea0fdf0",null).exports,Initmodel:n("Z0/y")(h,_,!1,function(t){n("VMY/")},"data-v-7d9285fd",null).exports},methods:{errorConfirmed:function(t){this.error=""},HandleError:function(t){this.$notify.error({title:"错误",message:t})}},data:function(){return{error:"",init:!1}}},y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Initmodel",{on:{init:function(e){t.init=!0},error:t.HandleError}}),t._v(" "),n("Navbar"),t._v(" "),n("transition",{attrs:{name:"slide"}},[""!=t.error?n("Errorhandler",{attrs:{errorData:t.error},nativeOn:{click:function(e){return t.errorConfirmed(e)}}}):t._e()],1),t._v(" "),t.init?n("keep-alive",{attrs:{include:"Roadpage"},on:{error:t.HandleError}},[n("router-view")],1):t._e()],1)},staticRenderFns:[]};var w=n("Z0/y")(g,y,!1,function(t){n("sqer")},null,null).exports,$=n("zO6J"),I={name:"Checklist",mounted:function(){var t=this,e=new XMLHttpRequest;e.open("get","https://v1.hitokoto.cn/?c=d"),e.onreadystatechange=function(){if(4===e.readyState){var n=JSON.parse(e.responseText);"。"==n.hitokoto[n.hitokoto.length-1]&&(n.hitokoto=n.hitokoto.substring(0,n.hitokoto.length-1)),t.hitokoto=n}},e.send()},data:function(){return{hitokoto:{}}},methods:{getDailyCost:function(t){t=this.$store.state.POIs[t];for(var e=0,n=0;n<t.length;n++)"SCENIC"==t[n].detail.deep_type&&(e+=parseFloat(t[n].detail.scenic.price));return e}},computed:{mapState:function(){return this.$store.state}}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Checklist"}},[n("el-row",{attrs:{justify:"end",type:"flex"}},[n("el-col",{attrs:{span:20}},[n("h1",{staticClass:"text",attrs:{id:"hTitle"}},[t._v(t._s(t.mapState.city)+" "+t._s(t.mapState.POIs.length)+" 日游")])])],1),t._v(" "),n("el-row",{attrs:{justify:"end",type:"flex"}},[n("el-col",{attrs:{span:16}},[n("h2",{staticClass:"text",attrs:{id:"mTitle"}},[t._v(t._s(t.hitokoto.hitokoto))]),t._v(" "),n("h2",{staticClass:"text",attrs:{id:"mTitle"}},[t._v("—— 《"+t._s(t.hitokoto.from)+"》")])])],1),t._v(" "),t._l(t.$store.state.POIs,function(e,a){return n("el-row",{key:a,staticClass:"block",attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{span:4}},[n("el-card",{staticClass:"box-card"},[n("h3",{staticClass:"text dTitle"},[t._v("Day "+t._s(a+1))]),t._v(" "),n("p",[t._v("门票花费："+t._s(t.getDailyCost(a)))])])],1),t._v(" "),n("el-col",{attrs:{span:20}},[n("el-table",{attrs:{data:e}},[n("el-table-column",{attrs:{prop:"detail.name",label:"名称"}}),t._v(" "),n("el-table-column",{attrs:{prop:"detail.address",label:"地址"}}),t._v(" "),n("el-table-column",{attrs:{prop:"detail.name",label:"Tag"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",[t._v(t._s(e.row.detail.type.split(";")[0]))]),t._v(" "),e.row.detail.groupby?n("el-tag",[t._v("团购")]):t._e()]}}])})],1)],1)],1)})],2)},staticRenderFns:[]};var P=n("Z0/y")(I,x,!1,function(t){n("2wgI")},"data-v-4a6ee969",null).exports,b=n("HOBB"),D=n.n(b),k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Drivedetail"}},[n("p",{staticClass:"nums"},[t._v("驾驶距离："),n("code",[t._v(t._s(t.Rtem.distance))]),t._v(" 米")]),t._v(" "),n("p",{staticClass:"nums"},[t._v("预计耗时："),n("code",[t._v(t._s(t.Rtem.time/60))]),t._v(" 分钟")]),t._v(" "),0!==t.Rtem.tolls?n("p",{staticClass:"nums"},[t._v("路费："),n("code",[t._v(t._s(t.Rtem.tolls))]),t._v(" 元")]):t._e(),t._v(" "),1==t.Rtem.restriction?n("p",{staticClass:"nums"},[n("i"),n("code",[t._v("存在限行警告")])]):t._e(),t._v(" "),t._t("default")],2)},staticRenderFns:[]};var C=n("Z0/y")({name:"Drivedetail",props:["item"],computed:{Rtem:function(){return this.item.plan.routes[0]}}},k,!1,function(t){n("P/Nj")},"data-v-13c4d6b8",null).exports,O={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Walkdetail"}},[n("p",{staticClass:"nums"},[t._v("步行距离："),n("code",[t._v(t._s(t.Rtem.distance))]),t._v(" 米")]),t._v(" "),n("p",{staticClass:"nums"},[t._v("预计耗时："),n("code",[t._v(t._s(Math.floor(t.Rtem.time/60)))]),t._v(" 分钟")]),t._v(" "),t._t("default")],2)},staticRenderFns:[]};var M=n("Z0/y")({name:"Walkdetail",props:["item"],computed:{Rtem:function(){return this.item.plan.routes[0]}}},O,!1,function(t){n("Gre8")},"data-v-47e28da0",null).exports,T={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Busdetail"}},[n("p",{staticClass:"nums"},[t._v("路程花费："),n("code",[t._v(t._s(t.Rtem.cost))]),t._v(" 元")]),t._v(" "),n("p",{staticClass:"nums"},[t._v("预期时间："),n("code",[t._v(t._s(Math.floor(t.Rtem.time)))]),t._v(" 分钟")]),t._v(" "),n("p",{staticClass:"nums"},[t._v("全程距离："),n("code",[t._v(t._s(t.Rtem.distance))]),t._v(" 米")]),t._v(" "),n("p",{staticClass:"nums"},[t._v("步行距离："),n("code",[t._v(t._s(t.Rtem.walking_distance))]),t._v(" 米")]),t._v(" "),t._t("default")],2)},staticRenderFns:[]};var A=n("Z0/y")({name:"Busdetail",props:["item"],computed:{Rtem:function(){return this.item.plan.plans?this.item.plan.plans[0]:this.item.plan.routes[0]}}},T,!1,function(t){n("E6gb")},"data-v-56654320",null).exports,F={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Ridedetail"}},[n("p",{staticClass:"nums"},[t._v("骑行距离："),n("code",[t._v(t._s(t.Rtem.distance))]),t._v(" 米")]),t._v(" "),n("p",{staticClass:"nums"},[t._v("预计耗时："),n("code",[t._v(t._s(Math.floor(t.Rtem.time/60)))]),t._v(" 分钟")]),t._v(" "),t._t("default")],2)},staticRenderFns:[]};var R=n("Z0/y")({name:"Ridedetail",props:["item"],computed:{Rtem:function(){return this.item.plan.routes[0]}}},F,!1,function(t){n("x8bm")},"data-v-6483d86a",null).exports,E=n("V2Z7"),S=n.n(E),H={name:"Collapse",components:{Drivedetail:C,Walkdetail:M,Busdetail:A,Ridedetail:R},props:["transferItem"],data:function(){return{isActive:!1,contentHeight:0,_mounted:!1}},mounted:function(){this.$children[0]&&(this.contentHeight=this.$el.clientHeight-this.$children[0].$el.clientHeight)},methods:{transActive:function(){var t=0;t=this.isActive?this.$el.clientHeight-this.$children[0].$el.clientHeight:this.$el.clientHeight+this.$children[0].$el.clientHeight,console.log(this.$el.clientHeight),console.log(t);var e=new S.a.Tween(this).to({contentHeight:t},200);e.easing(S.a.Easing.Cubic.InOut),e.start(),function t(){requestAnimationFrame(t);S.a.update()}(),this.isActive=!this.isActive},enterApp:function(){this.transferItem.kit.searchOnAMAP({origin:this.transferItem.plan.origin,destination:this.transferItem.plan.destination})}},computed:{transferComp:function(){var t=this.transferItem.type;return"driving"===t?C:"walk"===t?M:"bus"===t?A:"ride"===t?R:void console.log("errfuck")}},watch:{contentHeight:function(){this.$el.style.height=this.contentHeight+"px"}}},L={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Collapse"}},[n("span",{staticClass:"select"},[t._t("selector")],2),t._v(" "),n("span",{staticClass:"trigger",on:{click:t.transActive}},[n("i",{staticClass:"iconfont icon-more"})]),t._v(" "),n("div",{attrs:{id:"content"}},[t.transferItem?n(t.transferComp,{tag:"component",attrs:{item:t.transferItem}},[n("el-button",{attrs:{type:"text",size:"mini"},on:{click:t.enterApp}},[t._v("在高德地图打开")])],1):t._e()],1)])},staticRenderFns:[]};var N={name:"Cardcollapse",props:["detail"],data:function(){return{isActive:!1,contentHeight:0}},methods:{transActive:function(){var t=this.$el.querySelector("#content"),e=0;e=this.isActive?this.$el.clientHeight-t.clientHeight:this.$el.clientHeight+t.clientHeight;var n=new S.a.Tween(this).to({contentHeight:e},200);n.easing(S.a.Easing.Cubic.InOut),n.start(),function t(){requestAnimationFrame(t);S.a.update()}(),this.isActive=!this.isActive}},mounted:function(){this.contentHeight=this.$el.clientHeight-this.$el.querySelector("#content").clientHeight},computed:{transferComp:function(){return"driving"===this.transferItem.type?Drivedetail:"walk"===this.transferItem.type?Walkdetail:"bus"===this.transferItem.type?Busdetail:Ridedetail}},watch:{contentHeight:function(){this.$el.style.height=this.contentHeight+"px"}}},W={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Cardcollapse"}},[n("div",{attrs:{id:"trigger"},on:{click:t.transActive}},[t._t("header")],2),t._v(" "),n("div",{attrs:{id:"content"}},[n("h1",[t._v(t._s(t.detail.type))]),t._v(" "),"DINING"==t.detail.deep_type?n("div",{staticClass:"dts"},[n("p",[t._v("开业时间："),n("code",[t._v(t._s(t.detail.dining.opentime))])]),t._v(" "),n("p",[t._v("打分："),n("code",[t._v(t._s(t.detail.dining.cp_rating))])]),t._v(" "),n("p",[t._v("人均花费："),n("code",[t._v(t._s(t.detail.dining.cost))]),t._v(" 元")])]):t._e(),t._v(" "),"SCENIC"==t.detail.deep_type?n("div",{staticClass:"dts"},[n("p",[t._v("开放时间："),n("code",[t._v(t._s(t.detail.scenic.opentime))])]),t._v(" "),t.detail.scenic.rating?n("p",[t._v("评分："),n("code",[t._v(t._s(t.detail.scenic.rating))])]):t._e(),t._v(" "),0!=t.detail.scenic.price?n("p",[t._v("门票价格："),n("code",[t._v(t._s(t.detail.scenic.price))]),t._v(" 元")]):t._e()]):t._e(),t._v(" "),"HOTEL"==t.detail.deep_type?n("div",{staticClass:"dts"},[n("p",[t._v("评分："),n("code",[t._v(t._s(t.detail.hotel.rating))])]),t._v(" "),n("p",[t._v("星级："),n("code",[t._v(t._s(t.detail.hotel.star))])]),t._v(" "),n("p",[t._v("最低价格："),n("code",[t._v(t._s(t.detail.hotel.lowest_price))]),t._v(" 元")])]):t._e()])])},staticRenderFns:[]};var U={name:"Detailpath",components:{Collapse:n("Z0/y")(H,L,!1,function(t){n("gmXR")},"data-v-dcf4bdd4",null).exports,Cardcollapse:n("Z0/y")(N,W,!1,function(t){n("1Ivt")},"data-v-78f5b1a7",null).exports},data:function(){return{transPlan:[{data:"driving",name:"驾车"},{data:"bus",name:"公交"},{data:"ride",name:"骑行"},{data:"walk",name:"步行"}]}},methods:{updateTransferPlan:function(t,e){var n=t.target.value;this.$emit("updateTransferPlan",e,n)}},updated:function(){if(!this.isMobile){var t=this,e=document.getElementById("nodex");D.a.create(e,{animation:120,handle:".cd-main",draggable:".nodeCard",supportPointer:!1,onStart:function(e){t.$emit("drag")},onEnd:function(e){if(t.$emit("drag"),e.oldIndex!==e.newIndex){if(e.oldIndex<e.newIndex){var n=e.from.childNodes[e.oldIndex];e.from.insertBefore(e.item,n)}else{var a=e.from.childNodes[e.oldIndex+1]||null;a?e.from.insertBefore(e.item,a):e.from.appendChild(e.item)}t.$emit("sort",e.oldIndex,e.newIndex)}},setData:function(t,e){t.setData("ItemIndex",e.getAttribute("index"))}})}}},V={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Detailpath"}},[n("div",{attrs:{id:"daySelector"}},[n("div",{attrs:{id:"selector"}},[n("a",{attrs:{href:"#"},on:{click:function(e){t.$store.commit("switchDay",t.$store.state.nowDay-1)}}},[n("i",{staticClass:"iconfont icon-left"})]),t._v(" "),n("span",[t._v("第"),n("span",[t._v(t._s(t.$store.state.nowDay+1))]),t._v("天")]),t._v(" "),n("a",{attrs:{href:"#"},on:{click:function(e){t.$store.commit("switchDay",t.$store.state.nowDay+1)}}},[n("i",{staticClass:"iconfont icon-right"})]),t._v(" "),t.isMobile?t._e():n("a",{attrs:{href:"#"},on:{click:function(e){t.$store.commit("addNewDay")}}},[n("i",{staticClass:"iconfont icon-plus"})]),t._v(" "),t.isMobile?t._e():n("a",{staticClass:"alert",attrs:{href:"#"},on:{click:function(e){t.$store.commit("deleteDay",t.$store.state.nowDay)}}},[n("i",{staticClass:"iconfont icon-minus"})])]),t._v(" "),n("div",{attrs:{id:"total"},on:{click:function(e){t.$emit("updateTransferPlan",5,5)}}},[t._v("\n      共"+t._s(t.$store.state.totalDays)+"天\n    ")])]),t._v(" "),n("div",{attrs:{id:"paths"}},[n("ul",{attrs:{id:"nodex"}},[t._l(t.$store.state.POIs[t.$store.state.nowDay],function(e,a){return[n("div",{key:e.name,staticClass:"nodeCard",attrs:{index:a}},[e.transfer?n("Collapse",{attrs:{transferItem:e.transfer}},[n("div",{staticClass:"cd-select-group",attrs:{slot:"selector"},slot:"selector"},[n("select",{staticClass:"cd-select",attrs:{name:"cd-method"},domProps:{value:e.transfer.type},on:{change:function(e){t.updateTransferPlan(e,a)}}},t._l(t.transPlan,function(e){return n("option",{key:e.data,domProps:{value:e.data}},[t._v("\n                  "+t._s(e.name)+"\n                ")])})),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.transfer.index,expression:"item.transfer.index"}],staticClass:"cd-select",attrs:{name:"cd-plan"},on:{change:[function(n){var a=Array.prototype.filter.call(n.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(e.transfer,"index",n.target.multiple?a:a[0])},function(n){t.$emit("updateTransferIndex",a,e.transfer.index)}]}},t._l((e.transfer.plan.routes||e.transfer.plan.plans).length,function(e){return n("option",{key:e,domProps:{value:e-1}},[t._v("\n                  方案"+t._s(e)+"\n                ")])}))])]):t._e(),t._v(" "),n("div",{staticClass:"cd-main"},[n("Cardcollapse",{attrs:{detail:e.detail}},[n("div",{attrs:{slot:"header",type:"simple"},slot:"header"},[n("p",[t._v(t._s(e.detail.name))]),t._v(" "),n("p",{staticClass:"sm"},[t._v(t._s(e.detail.address))])])])],1),t._v(" "),n("div",{staticClass:"cd-footer"},[n("button",{attrs:{href:"#"},on:{click:function(e){t.$emit("setCenter",a)}}},[n("i",{staticClass:"iconfont icon-androidlocate"})]),t._v(" "),t._m(0,!0),t._v(" "),n("button",{attrs:{href:"#"},on:{click:function(e){t.$emit("moveTo",a,null)}}},[n("i",{staticClass:"iconfont icon-delete color-alert"})])])],1)]})],2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{attrs:{href:"#"}},[e("i",{staticClass:"iconfont icon-move"})])}]};var B=n("Z0/y")(U,V,!1,function(t){n("XYzH")},"data-v-042b95a0",null).exports,Z=n("lC5x"),j=n.n(Z),q=n("J0Oq"),J=n.n(q),z={name:"Searchbar",data:function(){return{keyWord:"",suggests:[],page:1,lastSearch:null}},watch:{keyWord:function(){if(!this.lastSearch||this.lastSearch.getTime()-(new Date).getTime()<=-300){this.lastSearch=new Date;var t=this;this.$store.state.AMap_PlaceSearch.search.search(this.keyWord,function(e,n){"complete"==e&&n.poiList.count>0?t.suggests=n.poiList.pois:console.log(n)})}}},methods:{searchChecked:function(t){var e={id:t.id,name:t.name,lnglat:t.location,type:t.type};this.$emit("searchChecked",e),this.keyWord=""}}},X={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Searchbar"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.keyWord,expression:"keyWord"}],attrs:{type:"search",name:"searchPOI",id:"searchTile",placeholder:"搜索景点.."},domProps:{value:t.keyWord},on:{input:function(e){e.target.composing||(t.keyWord=e.target.value)}}}),t._v(" "),n("transition",{attrs:{name:"list"}},[""!=t.keyWord?n("div",{attrs:{id:"searchResult"}},[n("ul",[t._l(t.suggests,function(e){return[n("div",{key:e.id,staticClass:"suggest",on:{click:function(n){t.searchChecked(e)}}},[n("span",{attrs:{type:"name"}},[t._v(t._s(e.name))]),t._v(" "),n("span",{attrs:{type:"location"}},[t._v(t._s(e.address))])])]})],2)]):t._e()])],1)},staticRenderFns:[]};var K=n("Z0/y")(z,X,!1,function(t){n("kK4M")},"data-v-5c597b58",null).exports,Y=(n("i8gr"),{name:"Mapcontainer",components:{Searchbar:K},data:function(){return{count:0,map:{}}},created:function(){var t=this;this.$parent.$on("updateTransferPlan",function(e,n){var a=t.$store.state.POIs[t.$store.state.nowDay][e-1].detail.location,i=t.$store.state.POIs[t.$store.state.nowDay][e].detail.location;t.createTransferObj(a,i,n).then(function(n){t.$store.commit({type:"updateTransferPlan",newTransfer:n,index:e})})}),this.$parent.$on("updateTransferIndex",function(e,n){t.updateTransferIndex(e,n)}),this.$parent.$on("setCenter",function(e){var n=t.$store.state.POIs[t.$store.state.nowDay][e].marker.getPosition();t.map.panTo(n)}),this.$parent.$on("moveTo",function(e,n){var a=t.$store.state.POIs[t.$store.state.nowDay][e];a.marker.hide();for(var i=0;a.transfer&&i<a.transfer.routes.length;i++)a.transfer.routes[i].hide();if(t.$store.commit("wipe",e),null===n){a=null;var s=t.$store.state.POIs[t.$store.state.nowDay][e-1]||null,r=t.$store.state.POIs[t.$store.state.nowDay][e]||null;s&&r?t.createTransferObj(s.detail.location,r.detail.location,r.transfer.type).then(function(n){t.$store.commit({type:"updateTransferPlan",newTransfer:n,index:e})}):r&&t.$store.commit({type:"updateTransferPlan",newTransfer:null,index:e})}else{var o=t.$store.state.POIs[t.$store.state.nowDay][e-1]||null,l=t.$store.state.POIs[t.$store.state.nowDay][e]||null;o&&l?t.createTransferObj(o.detail.location,l.detail.location,l.transfer.type).then(function(n){t.$store.commit({type:"updateTransferPlan",newTransfer:n,index:e})}):l&&t.$store.commit({type:"updateTransferPlan",newTransfer:null,index:e});var c=t.$store.state.POIs[n];if(0!=c.length){var d=c[c.length-1].detail.location,u=a.detail.location;t.createTransferObj(d,u,"driving").then(function(e){a.transfer=e;for(var i=0;i<e.routes.length;i++)e.routes[i].hide();t.$store.dispatch({type:"addPOIFromMap",data:a,dayTo:n})})}else a.transfer=null,t.$store.dispatch({type:"addPOIFromMap",data:a,dayTo:n})}}),this.$parent.$on("sort",function(e,n){var a=t.$store.state.POIs[t.$store.state.nowDay][e],i=t.$store.state.POIs[t.$store.state.nowDay][e-1]||null,s=t.$store.state.POIs[t.$store.state.nowDay][e+1]||null;if(i&&s){var r=i.detail.location,o=s.detail.location;t.createTransferObj(r,o,"driving").then(function(n){t.$store.commit("updateTransferPlan",{newTransfer:n,index:e+1})})}else s&&t.$store.commit("updateTransferPlan",{newTransfer:null,index:e+1});t.$store.commit("sortItem",{oldIndex:e,newIndex:n});var l=t.$store.state.POIs[t.$store.state.nowDay][n-1]||null;if(l){var c=l.detail.location,d=a.detail.location;t.createTransferObj(c,d,"driving").then(function(e){t.$store.commit("updateTransferPlan",{newTransfer:e,index:n})})}else t.$store.commit("updateTransferPlan",{newTransfer:null,index:n});var u=t.$store.state.POIs[t.$store.state.nowDay][n+1]||null;if(u){var f=a.detail.location,p=u.detail.location;t.createTransferObj(f,p,"driving").then(function(e){t.$store.commit("updateTransferPlan",{newTransfer:e,index:n+1})})}})},mounted:function(){var t=new AMap.Map("map",{resizeEnable:!0,zoom:11,center:[116.397428,39.90923],animateEnable:!0,mapStyle:"amap://styles/fe7d1f157e05c97d6930995928e4f39d"});t.setCity(this.$store.state.city),this.map=t;var e=this.$store.state.AMap_PlaceSearch.config,n=new AMap.PlaceSearch(e);this.$store.commit("setPlaceSearch",{config:e,search:n});var a=this;t.on("hotspotclick",function(t){a.createInfoWindow(t)});if(this.$store.state.storge.localData){var s=function(t,e,n){return new i.a(function(i,s){var r={};r.id=t.id,n.getDetails(t.id,function(n,s){r.detail=s.poiList.pois[0];var o=new AMap.Marker({map:a.map,position:r.detail.location,animation:"AMAP_ANIMATION_DROP",title:r.detail.name});if(o.show(),r.marker=o,t.transfer&&e){var l=e.detail.location;a.createTransferObj(l,r.detail.location,t.transfer.type).then(function(t){r.transfer=t,i(r)})}else r.transfer=null,i(r)})})};this.$emit("setLoading",!0);var r=this.$store.state.storge.localData,o=new AMap.PlaceSearch({city:r.city,extensions:"all"});J()(j.a.mark(function t(){var e,n,i,l;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=0;case 1:if(!(e<r.POIs.length)){t.next=19;break}e!=r.POIs.length-1&&a.$store.commit("addNewDay"),n=0;case 4:if(!(n<r.POIs[e].length)){t.next=15;break}return t.next=7,s(r.POIs[e][n],0==n?null:a.$store.state.POIs[e][n-1],o);case 7:return i=t.sent,console.log(i),t.next=11,a.$store.dispatch({type:"addPOIFromMap",data:i,dayTo:e});case 11:r.POIs[e][n].transfer&&0!=r.POIs[e][n].transfer.index&&(l=r.POIs[e][n].transfer.index,a.updateTransferIndex(n,l));case 12:n++,t.next=4;break;case 15:e!=r.POIs.length-1&&a.$store.commit("switchDay",e+1);case 16:e++,t.next=1;break;case 19:a.$store.commit("switchDay",0),a.$emit("setLoading",!1);case 21:case"end":return t.stop()}},t,this)}))()}},methods:{createInfoWindow:function(t){var e=document.createElement("div"),n='<div id="infoWindow">        <span class="infoName">'+t.name+'</span>        <span id="infoAction">          <i class="iconfont icon-plus"></i>        </span>      </div>      <div id="infoWindowArrow">        <div></div>      </div>';e.innerHTML+=n;var a=this;e.querySelector("#infoAction").onclick=function(e){a.addPOIToData(t)},new AMap.InfoWindow({isCustom:!0,content:e,offset:new AMap.Pixel(0,-10),closeWhenClickMap:!0,autoMove:!0}).open(this.map,t.lnglat)},drawResultOnMap:function(t,e,n){var a=[];if("driving"===n){for(var i=[],s=0;s<t.routes[e].steps.length;s++)for(var r=0;r<t.routes[e].steps[s].path.length;r++)i.push(t.routes[e].steps[s].path[r]);var o=new AMap.Polyline({map:this.map,isOutline:!0,outlineColor:"#FFFFFF",strokeWeight:5,strokeColor:"#13afc8",showDir:!0,lineJoin:"round",path:i});return a.push(o),a}if("bus"===n){for(var l=t.plans[e],c=0;c<l.segments.length;c++){var d=l.segments[c].transit_mode,u=new AMap.Polyline({map:this.map,isOutline:!0,outlineColor:"#FFFFFF",strokeWeight:5,strokeColor:"BUS"==d?"#2775b6":"SUBWAY"==d?"#51c4d3":"#fed71a",showDir:!0,lineJoin:"round",path:l.segments[c].transit.path});a.push(u)}return a}if("ride"===n){for(var f=t.routes[e],p=[],v=0;v<f.rides.length;v++)for(var m=0;m<f.rides[v].path.length;m++)p.push(f.rides[v].path[m]);var h=new AMap.Polyline({map:this.map,isOutline:!0,outlineColor:"#FFFFFF",strokeWeight:5,strokeColor:"#21a265",showDir:!0,lineJoin:"round",path:p});return a.push(h),a}if("walk"===n){for(var _=t.routes[e],g=[],y=0;y<_.steps.length;y++)for(var w=0;w<_.steps[y].path.length;w++)g.push(_.steps[y].path[w]);var $=new AMap.Polyline({map:this.map,isOutline:!0,outlineColor:"#FFFFFF",strokeWeight:5,strokeColor:"#fed71a",showDir:!0,lineJoin:"round",path:g});return a.push($),a}},createTransferObj:function(t,e,n){var a=this;return new i.a(function(i,s){var r={type:"",index:0,kit:{},plan:{},routes:{}};if("driving"===n){r.type="driving";var o=new AMap.Driving(a.$store.state.AMap_Driving);r.kit=o,o.search(t,e,function(t,e){"complete"==t?(r.plan=e,r.routes=a.drawResultOnMap(e,0,"driving"),i(r)):(console.log(e),s())})}else if("bus"===n){r.type="bus";var l=new AMap.Transfer(a.$store.state.AMap_Bus);r.kit=l,console.log("set"),l.search(t,e,function(t,e){console.log("reso"),"complete"==t?(r.plan=e,r.routes=a.drawResultOnMap(e,0,"bus"),i(r)):s(e)})}else if("ride"===n){r.type="ride";var c=new AMap.Riding(a.$store.state.AMap_Ride);r.kit=c,c.search(t,e,function(t,e){"complete"==t?(r.plan=e,r.routes=a.drawResultOnMap(e,0,"ride"),i(r)):s(e)})}else if("walk"===n){r.type="walk";var d=new AMap.Walking(a.$store.state.AMap_Walk);r.kit=d,d.search(t,e,function(t,e){"complete"==t?(r.plan=e,r.routes=a.drawResultOnMap(e,0,"walk"),i(r)):s(e)})}})},addPOIToData:function(t){for(var e=this.$store.state.POIs,n=0;n<e.length;n++)for(var a=0;a<e[n].length;a++)if(e[n][a].id==t.id)return;var i=this,s=new AMap.Marker({map:i.map,position:t.lnglat,animation:"AMAP_ANIMATION_DROP",title:t.name});s.show();var r=this.$store.state.POIs[this.$store.state.nowDay],o={id:t.id,marker:s,transfer:null};r.length>0?this.createTransferObj(r[r.length-1].detail.location,t.lnglat,"driving").then(function(t){console.log(t),o.transfer=t,i.$store.dispatch({type:"addPOIFromMap",data:o}),i.$emit("setLoading",!1)}).catch(function(t){console.log(t)}):i.$store.dispatch({type:"addPOIFromMap",data:o})},updateTransferIndex:function(t,e){var n=this.$store.state.POIs[this.$store.state.nowDay][t].transfer,a=this.drawResultOnMap(n.plan,e,n.type);this.$store.commit({type:"updateTransferIndex",newRoutes:a,index:t,transferIndex:e})}}}),G={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"Mapcontainer"}},[e("div",{attrs:{id:"map"}}),this._v(" "),this.isMobile?this._e():e("Searchbar",{on:{searchChecked:this.createInfoWindow}})],1)},staticRenderFns:[]};var Q={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Daytransmit"}},[n("div",{staticClass:"header"},[t._v("拖动至此处分发到其他日期")]),t._v(" "),n("ul",t._l(t.$store.state.totalDays,function(e){return e-1!=t.$store.state.nowDay?n("div",{key:e,staticClass:"item",attrs:{dayIndex:e-1},on:{dragover:function(t){t.preventDefault()},drop:function(e){e.preventDefault(),t.moveTo(e)}}},[1==e||e-2==t.$store.state.nowDay&&e-1==1?t._e():n("div",{staticClass:"item-line"}),t._v(" "),n("i",{staticClass:"item-icon iconfont icon-right"}),t._v("\n      第"+t._s(e)+"天\n    ")]):t._e()}))])},staticRenderFns:[]};var tt={name:"Drawer",props:["width","enable"],data:function(){return{leftMargin:0}},watch:{enable:function(t){if(t){new S.a.Tween(this).to({leftMargin:-this.width},150).start(),function t(){requestAnimationFrame(t),S.a.update()}()}else{new S.a.Tween(this).to({leftMargin:0},150).start(),function t(){requestAnimationFrame(t),S.a.update()}()}}}},et={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{width:t.width+"px",marginLeft:t.leftMargin+"px"},attrs:{id:"Drawer"}},[n("div",{attrs:{id:"content"}},[t._t("default")],2),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.enable?n("div",{attrs:{id:"mask"},on:{click:function(e){t.$emit("close")}}}):t._e()])],1)},staticRenderFns:[]};var nt={name:"Roadpage",components:{Detailpath:B,Mapcontainer:n("Z0/y")(Y,G,!1,function(t){n("nIIM")},null,null).exports,Daytransmit:n("Z0/y")({name:"Daytransmit",data:function(){return{}},methods:{moveTo:function(t){var e=t.dataTransfer.getData("ItemIndex");this.$emit("moveTo",e,t.target.getAttribute("dayIndex"))}}},Q,!1,function(t){n("UFyb")},"data-v-002b6210",null).exports,Drawer:n("Z0/y")(tt,et,!1,function(t){n("rt9+")},"data-v-36649872",null).exports},data:function(){return{onDrag:!1,loading:!1,drawerOpen:!1}},methods:{updateTransferPlan:function(t,e){this.$emit("updateTransferPlan",t,e)},updateTransferIndex:function(t,e){this.$emit("updateTransferIndex",t,e)},setCenter:function(t){this.$emit("setCenter",t)},moveTo:function(t,e){this.$emit("moveTo",t,e)},sort:function(t,e){this.$emit("sort",t,e)},setLoading:function(t){this.loading=t}}},at={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Roadpage"}},[n("Mapcontainer",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.loading,expression:"loading",modifiers:{fullscreen:!0,lock:!0}}],on:{setLoading:t.setLoading}}),t._v(" "),t.onDrag?n("Daytransmit",{on:{moveTo:t.moveTo}}):t._e(),t._v(" "),t.isMobile?t._e():n("Detailpath",{on:{updateTransferPlan:t.updateTransferPlan,updateTransferIndex:t.updateTransferIndex,setCenter:t.setCenter,moveTo:t.moveTo,drag:function(e){t.onDrag=!t.onDrag},sort:t.sort}}),t._v(" "),t.isMobile?n("Drawer",{attrs:{width:300,enable:t.drawerOpen},on:{close:function(e){t.drawerOpen=!1}}},[n("Detailpath",{on:{updateTransferPlan:t.updateTransferPlan,updateTransferIndex:t.updateTransferIndex,setCenter:t.setCenter,moveTo:t.moveTo,drag:function(e){t.onDrag=!t.onDrag},sort:t.sort}})],1):t._e(),t._v(" "),t.isMobile?n("div",{attrs:{id:"footer"},on:{click:function(e){t.drawerOpen=!0}}},[n("i",{staticClass:"iconfont icon-menu"})]):t._e()],1)},staticRenderFns:[]};var it=n("Z0/y")(nt,at,!1,function(t){n("JMyr")},"data-v-440e50be",null).exports;s.default.use($.a);var st=new $.a({routes:[{path:"/",name:"Roadpage",component:it,meta:{keepAlive:!0}},{path:"/abstract",name:"Abstract",component:P}],linkExactActiveClass:"active"}),rt=n("UM93"),ot=n.n(rt),lt=(n("bTWF"),n("JnRc")),ct=n.n(lt),dt=n("AJcs"),ut=n.n(dt),ft={install:function(t,e){t.mixin({data:function(){return{lcs:{Init:function(){ct.a.init({appId:"Bc3luL7In6UFyXHh5Vybnavi-gzGzoHsz",appKey:"ff359xQsjpOvWjxit9PsffnR"})},Login:function(t,e){return new i.a(function(n,a){ct.a.User.logIn(t,e).then(function(t){console.log("login success:"+t),n()},function(t){console.warn("login error:"+t),a()})})},Logout:function(){ct.a.User.logOut()},Signin:function(t,e){return new i.a(function(n,a){var i=new ct.a.User;i.setUsername(t),i.setPassword(e),i.setEmail(t),i.signUp().then(function(t){console.log("signin success:"+t),n()},function(t){console.warn("signin error:"+t),a()})})},isLogin:function(){return!!ct.a.User.current()},saveToCloud:function(t){return new i.a(function(e,n){if(ct.a.User.current()){var a=ct.a.User.current(),i=new ct.a.Query("roadmap");i.equalTo("belong",a),i.first().then(function(i){if(i){console.log("has:"+i);var s=ct.a.Object.createWithoutData("roadmap",i.id);s.set("data",t),s.save().then(function(t){e(t)},function(t){console.warn("save err:"+t),n(t)})}else{var r=new(ct.a.Object.extend("roadmap")),o=ut()(a.getEmail());r.set("belong",a),r.set("data",t),r.set("hash",o),r.save().then(function(t){e(t)},function(t){console.warn("save err:"+t),n(t)})}},function(t){console.log(t)})}else n()})},getDataByEmail:function(t){if(!t){var e=ct.a.User.current();t=ut()(e.getEmail())}return console.log(t),new i.a(function(e,n){var a=new ct.a.Query("roadmap");a.equalTo("hash",t),a.first().then(function(t){t?e(t.get("data")):n("云端不存在的Email")},function(t){console.warn("getByEmail error"+t),n(t)})})},getEmail:function(){var t=ct.a.User.current();return t?ut()(t.getEmail()):null}}}},methods:{test:function(){console.log("mixin")}}})}};if(s.default.use(r.a),s.default.use(ot.a),location.search.indexOf("mobile")<0)s.default.mixin({data:function(){return{isMobile:!1}}});else{var pt=location.search.match(/email=(\w+)/)[1];s.default.mixin({data:function(){return{isMobile:!0,email:pt}}})}s.default.use(ft),s.default.config.productionTip=!1;var vt=new r.a.Store({state:{city:"",totalDays:1,nowDay:0,POIs:[[]],AMap_PlaceSearch:{config:{city:"全国",extensions:"all"},search:{}},AMap_Driving:{policy:AMap.DrivingPolicy.LEAST_TIME,hideMarkers:!0,autoFitView:!1,showTraffic:!1},AMap_Bus:{city:"",hideMarkers:!0,autoFitView:!1},AMap_Ride:{hideMarkers:!0,autoFitView:!1},AMap_Walk:{hideMarkers:!0,autoFitView:!1},storge:{toCloud:!1,localData:""}},mutations:{setPlaceSearch:function(t,e){console.log(e),t.AMap_PlaceSearch.config=e.config,t.AMap_PlaceSearch.search=e.search},addNewDay:function(t){t.totalDays++,t.POIs.push([])},switchDay:function(t,e){if(e<t.totalDays&&e>=0){for(var n=t.POIs[t.nowDay],a=0;a<n.length;a++)if(n[a].marker.hide(),n[a].transfer)for(var i=0;i<n[a].transfer.routes.length;i++)n[a].transfer.routes[i].hide();for(var s=t.POIs[e],r=0;r<s.length;r++)if(s[r].marker.show(),s[r].transfer)for(var o=0;o<s[r].transfer.routes.length;o++)s[r].transfer.routes[o].show();t.nowDay=e}},deleteDay:function(t,e){if(e<t.totalDays&&e>=0){for(var n=0;n<t.POIs[e].length;n++)t.POIs[e][n].marker.hide(),t.POIs[e][n].transfer&&t.POIs[e][n].transfer.routes.hide();if(t.POIs.splice(e,1),t.totalDays--,t.nowDay==e){t.nowDay>0&&t.nowDay--;for(var a=0;a<t.POIs[t.nowDay].length;a++)t.POIs[t.nowDay][a].marker.show(),t.POIs[t.nowDay][a].transfer&&t.POIs[t.nowDay][a].transfer.routes.show()}}},addPOIFromMap:function(t,e){e.dayTo?t.POIs[e.dayTo].push(e.data):t.POIs[t.nowDay].push(e.data)},updateTransferPlan:function(t,e){if(t.POIs[t.nowDay][e.index].transfer)for(var n=t.POIs[t.nowDay][e.index].transfer.routes,a=0;a<n.length;a++)n[a].hide();t.POIs[t.nowDay][e.index].transfer=e.newTransfer},updateTransferIndex:function(t,e){if(t.POIs[t.nowDay][e.index].transfer)for(var n=t.POIs[t.nowDay][e.index].transfer.routes,a=0;a<n.length;a++)n[a].hide();t.POIs[t.nowDay][e.index];t.POIs[t.nowDay][e.index].transfer.routes=e.newRoutes,t.POIs[t.nowDay][e.index].transfer.index=e.transferIndex},wipe:function(t,e){t.POIs[t.nowDay].splice(e,1)},sortItem:function(t,e){var n=t.POIs[t.nowDay];n.splice(e.newIndex,0,n.splice(e.oldIndex,1)[0])},setStorgeType:function(t,e){t.storge.toCloud=e}},actions:{addPOIFromMap:function(t,e){return new i.a(function(n,a){e.data.detail?(t.commit("addPOIFromMap",e),n()):t.state.AMap_PlaceSearch.search.getDetails(e.data.id,function(a,i){"complete"==a?(e.data.detail=i.poiList.pois[0],t.commit("addPOIFromMap",e)):(console.log(i),t.commit("addPOIFromMap",e)),n()})})}},getters:{exportData:function(t){var e={};e.city=t.city,e.totalDays=t.totalDays;for(var n=[],a=0;a<t.totalDays;a++){n.push([]);for(var i=0;i<t.POIs[a].length;i++){var s=t.POIs[a][i];n[a].push({id:s.detail.id,transfer:s.transfer?{type:s.transfer.type,index:s.transfer.index}:null})}}return e.POIs=n,e}}});new s.default({el:"#app",router:st,store:vt,components:{App:w},template:"<App/>"})},"P/Nj":function(t,e){},UFyb:function(t,e){},"VMY/":function(t,e){},XYzH:function(t,e){},bTWF:function(t,e){},gmXR:function(t,e){},kK4M:function(t,e){},nIIM:function(t,e){},"rt9+":function(t,e){},sqer:function(t,e){},x8bm:function(t,e){},zpZT:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.cac56934b3d8341a8ad1.js.map