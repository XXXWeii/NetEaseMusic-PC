(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-191e8e3d"],{c72c:function(t,s,e){"use strict";var a=e("f19a"),i=e.n(a);i.a},dbea:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.details?e("div",{staticClass:"album"},[e("div",{staticClass:"w1200"},[e("div",{staticClass:"album-cover"},[e("div",{staticClass:"album-img"},[e("el-image",{attrs:{src:t.details.picUrl}},[e("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[e("i",{staticClass:"iconfont icon-placeholder"})])])],1),e("div",{staticClass:"album-info"},[e("div",{staticClass:"album-title"},[t._v(" "+t._s(t.details.name)+" "),e("span",[t._v(t._s("#"+t.details.type))])]),e("div",{staticClass:"album-singer"},[t._v("歌手："),t._l(t.details.artists,(function(s,a){return e("router-link",{key:s.name,staticClass:"song_name",attrs:{to:{path:"/singer",query:{id:s.id}}}},[t._v(t._s(0!==a?" / "+s.name:s.name))])}))],2),e("div",{staticClass:"album-time"},[t._v("发行时间："+t._s(t.$utils.formartDate(t.details.publishTime,"yyyy-MM-dd")))]),e("div",{staticClass:"album-company"},[t._v("发行公司："+t._s(t.details.company))]),t.details.description?e("div",{staticClass:"album-desc"},[e("h5",[t._v("歌单简介"),t.isShowDesc?e("em",{staticClass:"desc-close",on:{click:function(s){t.isShowDesc=!1}}},[e("i",{staticClass:"iconfont icon-closed"})]):t._e()]),e("p",{on:{click:t.showAllDesc}},[t._v(t._s(t.details.description))]),t.isShowDesc?e("pre",{staticClass:"album-desc-all"},[t._v("                        "+t._s(t.details.description)+"\n                    ")]):t._e()]):t._e()])]),e("div",{staticClass:"detail-container"},[e("div",{staticClass:"detail-main"},[e("div",{staticClass:"song-header"},[e("h4",[t._v("包含歌曲列表 "),e("em",[t._v(t._s(t.details.size+"首歌"))])]),e("span",{staticClass:"play-all",on:{click:t.playAllSongs}},[e("i",{staticClass:"iconfont icon-audio-play"}),t._v(" 播放全部")]),e("span",{class:["collect",t.dynamic.isSub?"active":""],on:{click:t.subAlbum}},[e("i",{class:["iconfont","icon-collect"+(t.dynamic.isSub?"-active":"")]}),t._v(" "+t._s(t.dynamic.isSub?"已收藏":"收藏"))])]),e("song-list",{attrs:{songList:t.songList,stripe:!0}}),e("div",{ref:"comment",staticClass:"album-comments"},[e("Comments",{attrs:{type:t.type,id:t.albumId}})],1)],1),e("div",{staticClass:"detail-aside"},[e("h3",{staticClass:"aside-title"},[t._v(t._s(t.details.artists[0].name)+"的其他专辑"),e("router-link",{staticClass:"album-more",attrs:{to:{path:"/singer",query:{id:t.details.artists[0].id,type:"album"}}}},[t._v("全部>>")])],1),e("div",{staticClass:"aside-main aside-album-main"},t._l(t.hotAlbums,(function(s){return e("router-link",{key:s.id,staticClass:"aside-album-item",attrs:{to:{path:"/album",query:{id:s.id}}}},[e("el-image",{attrs:{src:s.picUrl}},[e("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[e("i",{staticClass:"iconfont icon-placeholder"})])]),e("div",{staticClass:"aside-album-info"},[e("div",{staticClass:"aside-album-name"},[t._v(t._s(s.name))]),e("div",{staticClass:"aside-album-time"},[t._v(" "+t._s(t.$utils.formartDate(t.details.publishTime,"yyyy-MM-dd"))+" ")])])],1)})),1)])])])]):t._e()},i=[],n=(e("a4d3"),e("e01a"),e("d81d"),e("a9e3"),e("96cf"),e("1da1")),r=e("5530"),l=e("2f62"),c=e("eb4d"),u=e("18fd"),o=e("09a4"),d={name:"albumDetail",components:{songList:u["a"],Comments:o["a"]},mounted:function(){this.albumId=this.$route.query.id,this._initialize()},data:function(){return{albumId:"",details:null,songList:[],dynamic:{},hotAlbums:[],comments:[],type:3,isShowDesc:!1}},computed:{},methods:Object(r["a"])(Object(r["a"])({},Object(l["d"])({setPlayStatus:"SET_PLAYSTATUS",setPlayList:"SET_PLAYLIST",setPlayIndex:"SET_PLAYINDEX"})),{},{getAlbum:function(t){var s=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.$http.album(t);case 2:if(a=e.sent,i=a.data,200===i.code){e.next=6;break}return e.abrupt("return",s.$msg.error("数据请求失败"));case 6:s.details=i.album,s.songList=s._formatSongs(i.songs),s.getArtistAlbum();case 9:case"end":return e.stop()}}),e)})))()},getAlbumDynamic:function(t){var s=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.$http.albumDynamic(t);case 2:if(a=e.sent,i=a.data,200===i.code){e.next=6;break}return e.abrupt("return",s.$msg.error("数据请求失败"));case 6:s.dynamic=i;case 7:case"end":return e.stop()}}),e)})))()},getArtistAlbum:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var e,a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,t.$http.artistAlbum({id:t.details.artists[0].id,limit:5});case 2:if(e=s.sent,a=e.data,200===a.code){s.next=6;break}return s.abrupt("return",t.$msg.error("数据请求失败"));case 6:t.hotAlbums=a.hotAlbums;case 7:case"end":return s.stop()}}),s)})))()},showAllDesc:function(){this.details.description.length>120&&(this.isShowDesc=!this.isShowDesc)},playAllSongs:function(){this.playAll({list:this.songList})},subAlbum:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var e,a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,t.$http.albumSub({id:t.albumId,t:Number(!t.dynamic.isSub)});case 2:if(e=s.sent,a=e.data,200===a.code){s.next=6;break}return s.abrupt("return",t.$msg.error("数据请求失败"));case 6:t.dynamic.isSub=Number(!t.dynamic.isSub);case 7:case"end":return s.stop()}}),s)})))()},_formatSongs:function(t){var s=[];return t.map((function(e,a){e.id&&(e.license=!t[a].privilege.cp,s.push(Object(c["a"])(e)))})),s},_initialize:function(){this.getAlbum({id:this.albumId}),this.getAlbumDynamic({id:this.albumId})}},Object(l["b"])(["playAll"])),watch:{$route:function(t,s){this.albumId=this.$route.query.id,this.albumId&&this._initialize()}}},m=d,b=(e("c72c"),e("2877")),p=Object(b["a"])(m,a,i,!1,null,"69ce4289",null);s["default"]=p.exports},f19a:function(t,s,e){}}]);
//# sourceMappingURL=chunk-191e8e3d.89482a4f.js.map