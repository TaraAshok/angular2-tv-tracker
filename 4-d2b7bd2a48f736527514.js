webpackJsonp([4],{159:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=e(6),u=e(279),o=e(181),d=e(280),r=e(17),i=e(172),a=e(166),p=e(191),s=e(169),c=e(174),m=e(192),f=e(176),y=e(182),C=e(173),v=e(170),h=e(177),R=e(165),M=e(163),S=e(26),O=e(226);n.EpisodesModuleNgFactory=t.ɵcmf(u.EpisodesModule,[],function(l){return t.ɵmod([t.ɵmpd(512,t.ComponentFactoryResolver,t.ɵCodegenComponentFactoryResolver,[[8,[o.ConfirmationPopoverWindowNgFactory,d.EpisodesComponentNgFactory]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t.ɵmpd(4608,r.NgLocalization,r.NgLocaleLocalization,[t.LOCALE_ID]),t.ɵmpd(4608,i.BrowserXhr,i.BrowserXhr,[]),t.ɵmpd(4608,i.ResponseOptions,i.BaseResponseOptions,[]),t.ɵmpd(5120,i.XSRFStrategy,i.ɵb,[]),t.ɵmpd(4608,i.XHRBackend,i.XHRBackend,[i.BrowserXhr,i.ResponseOptions,i.XSRFStrategy]),t.ɵmpd(4608,i.RequestOptions,i.BaseRequestOptions,[]),t.ɵmpd(5120,i.Http,i.ɵc,[i.XHRBackend,i.RequestOptions]),t.ɵmpd(5120,a.ConfirmationPopoverOptions,p.optionsFactory,[p.USER_OPTIONS]),t.ɵmpd(4608,s.Positioning,s.Positioning,[]),t.ɵmpd(5120,c.AsyncCacheOptions,m.asyncCacheOptionsFactory,[]),t.ɵmpd(5120,f.LocalStorageDriver,y.localStorageDriverFactory,[c.AsyncCacheOptions]),t.ɵmpd(5120,C.MemoryDriver,y.memoryDriverFactory,[c.AsyncCacheOptions]),t.ɵmpd(4608,v.AsyncCache,v.AsyncCache,[c.AsyncCacheOptions]),t.ɵmpd(4608,h.CachedHttp,h.CachedHttp,[i.Http,v.AsyncCache]),t.ɵmpd(4608,R.LocalStorage,R.LocalStorage,[]),t.ɵmpd(4608,M.TVMaze,M.TVMaze,[h.CachedHttp]),t.ɵmpd(512,S.RouterModule,S.RouterModule,[[2,S.ɵa],[2,S.Router]]),t.ɵmpd(512,r.CommonModule,r.CommonModule,[]),t.ɵmpd(512,p.ConfirmationPopoverModule,p.ConfirmationPopoverModule,[]),t.ɵmpd(512,i.HttpModule,i.HttpModule,[]),t.ɵmpd(512,y.AsyncCacheModule,y.AsyncCacheModule,[]),t.ɵmpd(512,m.SharedModule,m.SharedModule,[]),t.ɵmpd(512,u.EpisodesModule,u.EpisodesModule,[]),t.ɵmpd(256,p.USER_OPTIONS,{confirmButtonType:"danger",cancelButtonType:"secondary"},[]),t.ɵmpd(1024,S.ROUTES,function(){return[[{path:"",component:O.EpisodesComponent}]]},[])])})},226:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=e(26);e(81),e(190);var u=e(163),o=function(){function l(l,n){this.route=l,this.tvMaze=n,this.sort={field:null,desc:!1}}return l.prototype.ngOnInit=function(){var l=this;this.episodes=this.route.params.map(function(l){return+l.id}).flatMap(function(n){return l.tvMaze.getEpisodes(n)})},l.ctorParameters=function(){return[{type:t.ActivatedRoute},{type:u.TVMaze}]},l}();n.EpisodesComponent=o},279:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=function(){function l(){}return l}();n.EpisodesModule=t},280:function(l,n,e){"use strict";function t(l){return d.ɵvid(0,[(l()(),d.ɵeld(0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),d.ɵted(null,["\n          "])),(l()(),d.ɵeld(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d.ɵted(null,["",""])),(l()(),d.ɵted(null,["\n          "])),(l()(),d.ɵeld(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d.ɵted(null,["",""])),(l()(),d.ɵted(null,["\n          "])),(l()(),d.ɵeld(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d.ɵted(null,["",""])),(l()(),d.ɵted(null,["\n          "])),(l()(),d.ɵeld(0,null,null,2,"td",[],null,null,null,null,null)),(l()(),d.ɵted(null,["",""])),d.ɵppd(2),(l()(),d.ɵted(null,["\n          "])),(l()(),d.ɵeld(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d.ɵted(null,["",""])),(l()(),d.ɵted(null,["\n          "])),(l()(),d.ɵeld(0,null,null,0,"td",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),d.ɵted(null,["\n        "]))],null,function(l,n){l(n,3,0,n.context.$implicit.name),l(n,6,0,n.context.$implicit.season),l(n,9,0,n.context.$implicit.number),l(n,12,0,d.ɵunv(n,12,0,l(n,13,0,d.ɵnov(n.parent,1),n.context.$implicit.airstamp,"fullDate"))),l(n,16,0,n.context.$implicit.runtime),l(n,18,0,n.context.$implicit.summary)})}function u(l){return d.ɵvid(0,[d.ɵpid(0,r.OrderBy,[]),d.ɵpid(0,i.DatePipe,[d.LOCALE_ID]),(l()(),d.ɵted(null,["\n    "])),(l()(),d.ɵeld(0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),d.ɵted(null,["View episodes"])),(l()(),d.ɵted(null,["\n    "])),(l()(),d.ɵeld(0,null,null,36,"table",[["class","table"]],null,null,null,null,null)),(l()(),d.ɵted(null,["\n      "])),(l()(),d.ɵeld(0,null,null,25,"thead",[],null,null,null,null,null)),(l()(),d.ɵted(null,["\n        "])),(l()(),d.ɵeld(0,null,null,22,"tr",[],null,null,null,null,null)),(l()(),d.ɵted(null,["\n          "])),(l()(),d.ɵeld(0,null,null,2,"th",[["mwlSortableHeader","name"]],null,null,null,a.View_SortableHeaderComponent_0,a.RenderType_SortableHeaderComponent)),d.ɵdid(49152,null,0,p.SortableHeaderComponent,[],{fieldName:[0,"fieldName"],sort:[1,"sort"]},null),(l()(),d.ɵted(0,["Name"])),(l()(),d.ɵted(null,["\n          "])),(l()(),d.ɵeld(0,null,null,2,"th",[["mwlSortableHeader","season"]],null,null,null,a.View_SortableHeaderComponent_0,a.RenderType_SortableHeaderComponent)),d.ɵdid(49152,null,0,p.SortableHeaderComponent,[],{fieldName:[0,"fieldName"],sort:[1,"sort"]},null),(l()(),d.ɵted(0,["Season"])),(l()(),d.ɵted(null,["\n          "])),(l()(),d.ɵeld(0,null,null,2,"th",[["mwlSortableHeader","number"]],null,null,null,a.View_SortableHeaderComponent_0,a.RenderType_SortableHeaderComponent)),d.ɵdid(49152,null,0,p.SortableHeaderComponent,[],{fieldName:[0,"fieldName"],sort:[1,"sort"]},null),(l()(),d.ɵted(0,["Number"])),(l()(),d.ɵted(null,["\n          "])),(l()(),d.ɵeld(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),d.ɵted(null,["Air date"])),(l()(),d.ɵted(null,["\n          "])),(l()(),d.ɵeld(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),d.ɵted(null,["Runtime"])),(l()(),d.ɵted(null,["\n          "])),(l()(),d.ɵeld(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),d.ɵted(null,["Summary"])),(l()(),d.ɵted(null,["\n        "])),(l()(),d.ɵted(null,["\n      "])),(l()(),d.ɵted(null,["\n      "])),(l()(),d.ɵeld(0,null,null,6,"tbody",[],null,null,null,null,null)),(l()(),d.ɵted(null,["\n        "])),(l()(),d.ɵand(16777216,null,null,3,null,t)),d.ɵdid(802816,null,0,i.NgForOf,[d.ViewContainerRef,d.TemplateRef,d.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),d.ɵpid(131072,i.AsyncPipe,[d.ChangeDetectorRef]),d.ɵppd(3),(l()(),d.ɵted(null,["\n      "])),(l()(),d.ɵted(null,["\n    "])),(l()(),d.ɵted(null,["\n  "]))],function(l,n){var e=n.component;l(n,13,0,"name",e.sort);l(n,17,0,"season",e.sort);l(n,21,0,"number",e.sort),l(n,38,0,d.ɵunv(n,38,0,l(n,40,0,d.ɵnov(n,0),d.ɵunv(n,38,0,d.ɵnov(n,39).transform(e.episodes)),e.sort.field,e.sort.desc)))},null)}function o(l){return d.ɵvid(0,[(l()(),d.ɵeld(0,null,null,1,"ng-component",[],null,null,null,u,n.RenderType_EpisodesComponent)),d.ɵdid(114688,null,0,s.EpisodesComponent,[c.ActivatedRoute,m.TVMaze],null,null)],function(l,n){l(n,1,0)},null)}Object.defineProperty(n,"__esModule",{value:!0});var d=e(6),r=e(219),i=e(17),a=e(220),p=e(197),s=e(226),c=e(26),m=e(163),f=[];n.RenderType_EpisodesComponent=d.ɵcrt({encapsulation:2,styles:f,data:{}}),n.View_EpisodesComponent_0=u,n.View_EpisodesComponent_Host_0=o,n.EpisodesComponentNgFactory=d.ɵccf("ng-component",s.EpisodesComponent,o,{},{},[])}});
//# sourceMappingURL=4-d2b7bd2a48f736527514.js.map