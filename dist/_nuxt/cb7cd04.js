(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{518:function(t,e,n){"use strict";n.r(e);var r={name:"Building",data:function(){return{currentTab:0,tabColor:"light-green lighten-4",systemBar:{color:"light-green",icon:"mdi-office-building",title:"Building"}}},computed:{tabs:function(){return this.$store.state.building.tabs}},created:function(){var t=this.$store.state.level,e=this.$store.getters["data/buildings"](t),n=[{name:"Goal Identification",to:"/".concat(t,"/building/goal-identification"),checked:!1},{name:"Decomposition",to:"/".concat(t,"/building/decomposition"),checked:!1},{name:"Planning",to:"/".concat(t,"/building/planning"),checked:!1}];this.$store.commit("building/setBuildings",e),this.$store.commit("building/setTabs",n)}},o=n(68),c=n(112),l=n.n(c),d=n(502),m=n(435),v=n(399),h=n(168),f=n(463),k=n(503),_=n(530),T=n(528),w=n(500),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"py-0 px-0",attrs:{fluid:""}},[n("v-system-bar",{attrs:{window:"",dark:"",color:t.systemBar.color}},[n("v-icon",{attrs:{color:"white"}},[t._v(t._s(t.systemBar.icon))]),t._v(" "),n("span",{staticClass:"white--text font-weight-medium mr-2"},[t._v(t._s(t.systemBar.title))])],1),t._v(" "),n("v-tabs",{attrs:{height:"32",centered:"","fixed-tabs":"","background-color":t.tabColor},model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}},t._l(t.tabs,(function(e,r){return n("v-tab",{key:"tab-"+r,staticStyle:{"font-size":"11px"},attrs:{nuxt:!0,to:e.to}},[t._v(t._s(r+1)+": "+t._s(e.name)+"\n      "),n("v-badge",{attrs:{color:e.checked?"primary":"",icon:e.checked?"mdi-check":""}})],1)})),1),t._v(" "),n("v-tabs-items",{model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}},t._l(t.tabs,(function(t,e){return n("v-tab-item",{key:"tabItem-"+e,attrs:{value:t.to}},[n("v-card",[n("nuxt-child",{attrs:{"keep-alive":""}})],1)],1)})),1)],1)}),[],!1,null,"4a9e8851",null);e.default=component.exports;l()(component,{VBadge:d.a,VCard:m.a,VContainer:v.a,VIcon:h.a,VSystemBar:f.a,VTab:k.a,VTabItem:_.a,VTabs:T.a,VTabsItems:w.a})}}]);