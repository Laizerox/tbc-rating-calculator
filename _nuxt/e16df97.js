(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{214:function(t,n,e){var content=e(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(16).default)("490935f0",content,!0,{sourceMap:!1})},229:function(t,n,e){"use strict";e(90),e(29),e(213);var r=e(0).a.extend({data:function(){return{isDrawerVisible:!1,navigation:[{link:{name:"index"},name:"Combat rating calculator"},{link:{name:"hp-regen-calculator"},name:"Health regen calculator"},{link:{name:"mp-regen-calculator"},name:"Mana regen calculator"}]}},methods:{getPageTitle:function(){var t,n=this;return(null===(t=this.navigation.find((function(nav){return nav.link.name===n.$nuxt.$route.name})))||void 0===t?void 0:t.name)||"Title"}}}),o=(e(267),e(85)),l=e(166),c=e.n(l),v=e(331),d=e(337),f=e(336),m=e(332),w=e(333),k=e(159),x=e(102),_=e(129),V=e(334),h=e(335),y=e(227),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",[e("v-app-bar",{attrs:{app:"",flat:""}},[e("v-container",{staticClass:"container fill-height py-0"},[t.$vuetify.breakpoint.smAndDown?e("v-app-bar-nav-icon",{on:{click:function(n){t.isDrawerVisible=!t.isDrawerVisible}}}):t._e(),t._v(" "),e("v-toolbar-title",[t._v(t._s(t.getPageTitle()))])],1)],1),t._v(" "),e("v-main",[e("v-container",{staticClass:"container"},[e("div",{staticClass:"d-flex"},[e("v-navigation-drawer",{staticClass:"drawer",attrs:{absolute:t.$vuetify.breakpoint.smAndDown,bottom:t.$vuetify.breakpoint.smAndDown,permanent:t.$vuetify.breakpoint.mdAndUp,temporary:t.$vuetify.breakpoint.smAndDown},model:{value:t.isDrawerVisible,callback:function(n){t.isDrawerVisible=n},expression:"isDrawerVisible"}},[e("v-list",{attrs:{dense:"",nav:""}},t._l(t.navigation,(function(nav){return e("v-list-item",{key:nav.name,staticClass:"flex-grow-1",attrs:{exact:"",link:"",to:nav.link}},[e("v-list-item-content",[t._v(t._s(nav.name))])],1)})),1)],1),t._v(" "),e("div",{class:{"flex-grow-1":!0,"ps-5":t.$vuetify.breakpoint.mdAndUp}},[e("nuxt")],1)],1),t._v(" "),e("p",{staticClass:"text-center"},[t._v("\n        These calculators are based on data and formulas found in TBC 2.4 client and there can be very small rounding\n        errors!\n      ")])])],1),t._v(" "),e("v-footer",{staticClass:"pa-2"},[e("span",[e("a",{attrs:{href:"https://github.com/Laizerox"}},[t._v("Laizerox")]),t._v(" © 2021")])])],1)}),[],!1,null,"4c2a7fb5",null);n.a=component.exports;c()(component,{VApp:v.a,VAppBar:d.a,VAppBarNavIcon:f.a,VContainer:m.a,VFooter:w.a,VList:k.a,VListItem:x.a,VListItemContent:_.a,VMain:V.a,VNavigationDrawer:h.a,VToolbarTitle:y.a})},237:function(t,n,e){e(238),t.exports=e(239)},267:function(t,n,e){"use strict";e(214)},268:function(t,n,e){var r=e(15)(!1);r.push([t.i,".container[data-v-4c2a7fb5]{max-width:900px}.drawer[data-v-4c2a7fb5]{background-color:unset!important}",""]),t.exports=r}},[[237,6,2,7]]]);