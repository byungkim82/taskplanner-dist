(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{416:function(e,t,r){var content=r(417);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("7132a15d",content,!0,{sourceMap:!1})},417:function(e,t,r){var n=r(17)(!1);n.push([e.i,".theme--light.v-divider{border-color:rgba(0,0,0,.1)}.theme--dark.v-divider{border-color:#424242}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),e.exports=n},428:function(e,t,r){var content=r(440);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("37d05a4b",content,!0,{sourceMap:!1})},439:function(e,t,r){"use strict";r(428)},440:function(e,t,r){var n=r(17)(!1);n.push([e.i,".dense-letters[data-v-7e86dff2]{letter-spacing:-.01em}.denser-letters[data-v-7e86dff2]{font-size:.85em;text-transform:lowercase;letter-spacing:-.1em}.disable-events[data-v-7e86dff2]{pointer-events:none}",""]),e.exports=n},441:function(e,t,r){"use strict";r(8),r(6),r(4),r(12),r(7),r(13);var n=r(2),l=(r(416),r(32));function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=l.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(e){var t;return this.$attrs.role&&"separator"!==this.$attrs.role||(t=this.vertical?"vertical":"horizontal"),e("hr",{class:c({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:c({role:"separator","aria-orientation":t},this.$attrs),on:this.$listeners})}})},442:function(e,t,r){"use strict";r.r(t);var n={name:"ItemsListPanel",props:{reverse:{type:Boolean,default:!1},image:{type:String,default:""},color:{type:String,default:""},hexColor:{type:String,default:""},name:{type:String,default:""},extended:{type:Boolean,default:!1},checked:{type:Boolean,default:!1},subItems:{type:Array,default:function(){return[]}},properties:{type:Object,default:function(){return{}}}},computed:{}},l=(r(439),r(68)),o=r(112),c=r.n(o),v=r(171),d=r(435),h=r(427),f=r(441),m=r(168),_=r(143),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"h-full d-flex align-center",class:{"justify-end":!e.reverse,"justify-start":e.reverse,"flex-wrap-reverse":e.reverse},attrs:{elevation:"5"}},[r("div",{staticClass:"d-flex align-center flex-column",class:{"order-5":e.reverse}},[r("v-avatar",{attrs:{small:"",size:"50"}},[r("v-img",{attrs:{src:e.image,alt:e.name}})],1),e._v(" "),r("div",{staticClass:"align-center pt-1"},[r("span",{staticClass:"font-weight-medium text-body-2"},[e._v("\n        "+e._s(e._f("uppercase")(e.name))+"\n      ")])])],1),e._v(" "),r("v-divider",{class:{"order-4":e.reverse},attrs:{vertical:""}}),e._v(" "),e.subItems.length>0?r("div",{staticClass:"d-flex align-center flex-column",class:{"order-3":e.reverse}},e._l(e.subItems,(function(sub,t){return r("div",{key:t,staticClass:"d-flex ma-1",class:{"flex-wrap-reverse":e.reverse}},[r("v-chip",{staticClass:"px-1",class:{"order-5":e.reverse},attrs:{color:0===t?e.color:e.hexColor,"text-color":0===t?"black":"white",label:"",small:""}},[e._v("\n        "+e._s(sub.name.toUpperCase())+"\n        "),sub.properties.unitSpace.checked?[e._v("\n          "+e._s(sub.properties.unitSpace.value)+"\n        ")]:[e._v(" ? ")],e._v("\n         \n        "),sub.properties.unitSpace.measuringUnit?r("span",{staticClass:"denser-letters"},[e._v("\n          "+e._s(sub.properties.unitSpace.measuringUnit.slice(0,1))+"\n          "),sub.properties.unitSpace.measuringUnit.length>1?r("sup",[e._v(e._s(sub.properties.unitSpace.measuringUnit.slice(1,2)))]):e._e()]):e._e()],2),e._v(" "),r("v-icon",{class:{"order-4":e.reverse},attrs:{size:"small"}},[e._v("mdi-close")]),e._v(" "),r("v-chip",{staticClass:"px-1",class:{"order-3":e.reverse},attrs:{small:""}},[e._v("\n        "+e._s(sub.properties.count.value)+"\n      ")]),e._v(" "),r("v-icon",{class:{"order-2":e.reverse},attrs:{size:"small"}},[e._v("mdi-equal")]),e._v(" "),r("v-chip",{staticClass:"px-1",class:{"order-1":e.reverse},attrs:{label:"",small:""}},[sub.checked?[e._v("\n          "+e._s(sub.properties.unitSpace.value*sub.properties.count.value)+"\n        ")]:[e._v("?")]],2)],1)})),0):e._e(),e._v(" "),e.subItems.length>0?r("v-divider",{class:{"order-2":e.reverse},attrs:{vertical:""}}):e._e(),e._v(" "),r("div",{staticClass:"d-flex align-center flex-column",class:{"order-1":e.reverse}},[r("div",{staticClass:"d-flex ma-1 align-center",class:{"flex-wrap-reverse":e.reverse}},[r("v-chip",{staticClass:"font-weight-bold pr-0 pl-1",class:{"order-5":e.reverse},attrs:{color:e.color,"text-color":"black",label:"",small:""}},[e.properties.unitSpace.checked?[e._v("\n          "+e._s(e.properties.unitSpace.value)+"\n        ")]:[e._v("?")],e._v(" "),e.properties.unitSpace.measuringUnit?r("span",{staticClass:"denser-letters mx-1"},[e._v("\n          "+e._s(e.properties.unitSpace.measuringUnit.slice(0,1))+"\n          "),e.properties.unitSpace.measuringUnit.length>1?r("sup",[e._v(e._s(e.properties.unitSpace.measuringUnit.slice(1,2)))]):e._e()]):e._e()],2),e._v(" "),r("v-icon",{class:{"order-4":e.reverse},attrs:{size:"small"}},[e._v("mdi-close")]),e._v(" "),r("v-chip",{staticClass:"font-weight-bold px-1",class:{"order-3":e.reverse},attrs:{small:""}},[e.properties.count.checked?[e._v("\n          "+e._s(e.properties.count.value)+"\n        ")]:[e._v("?")]],2),e._v(" "),r("v-icon",{class:{"order-2":e.reverse},attrs:{size:"small"}},[e._v("mdi-equal")]),e._v(" "),r("v-chip",{staticClass:"font-weight-bold text-body-1 pr-0 pl-1",class:{"order-1":e.reverse},attrs:{color:e.hexColor,"text-color":"white"}},[e.properties.totalSpace.checked?[e._v("\n          "+e._s(e.properties.totalSpace.value)+"\n        ")]:[e._v("?")],e._v(" "),e.properties.totalSpace.measuringUnit?r("span",{staticClass:"denser-letters mx-1"},[e._v("\n          "+e._s(e.properties.totalSpace.measuringUnit.slice(0,1))+"\n          "),e.properties.totalSpace.measuringUnit.length>1?r("sup",[e._v(e._s(e.properties.totalSpace.measuringUnit.slice(1,2)))]):e._e()]):e._e()],2)],1)])],1)}),[],!1,null,"7e86dff2",null);t.default=component.exports;c()(component,{VAvatar:v.a,VCard:d.a,VChip:h.a,VDivider:f.a,VIcon:m.a,VImg:_.a})}}]);