(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55906912"],{"0342":function(t,e,a){},"234b":function(t,e,a){},"2ba1":function(t,e,a){"use strict";a("0342")},"2ba6":function(t,e,a){},"515c":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABkCAYAAADE6GNbAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGfSURBVHic7dk9coJQGIXhY7IRGm1YhG5C2nS4jGQb0qWFTegCmKHWhiVkB1rRxCrc7+dM5rwlM3zDIyr3DhsAX/gHvWVfgFWCsCUIW4KwJQhbgrAlCFuCsCUIW4KwJQhbgrAlCFuCsCUIW4KwZQbp+35vNWtNJpC+7/fH4/Fwu90+LOatqRiyIABgu91WWZgNCl+9PR6Pz9/H7vf7vNvtvkvm/rXiO3I6nV4uOOPOFEO6rpsZMCY/dgaM2d9vNsb0gZiJMX+yZ2FcligZGLe1VjTGddEYiXFf/UZhQpbxEZiw/Yg3JnRj5YkJ3yF6Yai2utM0zWvPDYe0bVudz+eXT34YhkvTNNe1c0MhXgggEOKJAIIg3gggABKBAJwhUQjAERKJAJwg0QjAAZKBAIwhWQjAEJKJAIwg2QjAAMKAAAohLAgAeAdwWHvyOI4/dV2jrutqOZaBAAy+Wk3TXIdhuAB5CMDg/chS27ZV13Wzxaw1mUGyo9rqliQIW4KwJQhbgrAlCFuCsCUIW4KwJQhbgrAlCFuCsCUIW4KwJQhbT8O1EVrpUMwnAAAAAElFTkSuQmCC"},5242:function(t,e,a){"use strict";a("2ba6")},7447:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABkCAYAAADE6GNbAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGhSURBVHic7dsxbsJAEIXh5+Qi7rfJDeACLu02nblGcgzcpd29BByAO4SKNkdIFclCSRHv7MwTen8HxYhPUHhGogPwhgfoKfoDWCUIW4KwJQhbgrAlCFuCsCUIW4KwJQhbgrAlCFuCsCUIW4KwJQhboZB5nnurWWGQnPPueDy+5px3FvNCIDnn3TiOewAYx3FvgXkGsK8d8p/WiJ9SSv3tdrteLpevrXNdv5HfEABwOBw+lmX5rJntBmmJAJwgrRGAA8QDATSGeCGAhhBPBNAI4o0AGkAiEIAxJAoBGEIiEYARJBoBGEAYEEAlhAUBVECYEMADrbqb95FSyjWlhJRSv35/GIaX2t1iS1WLFROmekNkwZisugwYs509GmN6fIjEmF9RojBNzkERmGZ3LW9M0wOdJ6b5pdEL43Iy9cC43X5bYzo4/3/kr8f/ruvea+a6P8ZP03QupZzW792/3lLIPrLGlFJO0zSda2e6/7TWzfPcW22ToRDLHmbVFYQtQdgShC1B2BKELUHYEoQtQdgShC1B2BKELUHYEoQtQdgShK1vSJJFD6UJknAAAAAASUVORK5CYII="},"8dce":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"header"},[e("fachead")],1),e("div",{staticClass:"content"},[e("div",{staticClass:"box"},[t._m(0),e("div",{staticClass:"right"},[e("group",{attrs:{item:t.wudangpai}})],1)])]),e("foot")],1)},s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"left"},[e("div",{staticClass:"left_title"},[e("span",[t._v("无党派人士")])])])}],n=a("2bac"),r=a("5913"),A=a("c66d"),l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"box"},[e("div",{staticClass:"title1"},[t._v("院系统战")]),e("div",{staticClass:"select"},[e("div",{staticClass:"tag"},[t._v("学院选择")]),e("ul",{staticClass:"college"},t._l(t.collegeName,(function(a){return e("li",{key:a.id},[e("a",[t._v(t._s(a))])])})),0)])])},c=[],o={name:"faculty_united_front",data(){return{collegeName:["水产学院","食品科技学院","海洋与气象学院","滨海农业学院","机械与动力工程学院","海洋工程学院","马克思主义学院","经济学院","管理学院","数学与计算机学院","电子与信息工程学院","化学与环境学院","海运学院","文学与新闻传播学院","法政学院","外国语学院","中歌艺术学院","体育与休闲学院","继续教育学院","寸金学院","研究生院","党群行政系统","科研机构","教辅机构","后勤机构"]}}},u=o,d=(a("ae2a"),a("2877")),g=Object(d["a"])(u,l,c,!1,null,"2ef33c0d",null),p=g.exports,C=a("688e"),v=a("d52c"),w={name:"faculty",data(){return{wudangpai:[]}},components:{group:r["default"],foot:A["a"],front:p,navigator:C["a"],fachead:n["a"],scroll:v["a"]},methods:{getArticle(t){}},created(){this.$axios.get("http://175.178.83.49:9102/servicearticle/article/article/queryArticleByPosition?position=无党派人士").then(t=>{this.wudangpai=t.data.t})}},b=w,h=(a("2ba1"),Object(d["a"])(b,i,s,!1,null,"4199286a",null));e["default"]=h.exports},ae2a:function(t,e,a){"use strict";a("234b")},d52c:function(t,e,a){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"scroll-container"},[e("div",{staticClass:"swiper-wrapper"},t._l(t.content,(function(t,a){return e("div",{key:a,staticClass:"swiper-slide"},[e("img",{attrs:{src:t.imgUrl,alt:""}})])})),0),t._m(0),t._m(1),e("div",{staticClass:"swiper-pagination"})])},s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"swiper-button-prev"},[e("img",{attrs:{src:a("7447"),alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"swiper-button-next"},[e("img",{attrs:{src:a("515c"),alt:""}})])}],n=a("4da1");a("bbe3");n["e"].use([n["a"],n["b"],n["d"],n["c"]]);var r={props:{content:{type:Array,default(){return[]}}},data(){return{}},created(){},mounted(){new n["e"](".scroll-container",{loop:!0,speed:1e3,autoplay:{delay:2e3,stopOnLastSlide:!1,disableOnInteraction:!1,pauseOnMouseEnter:!0},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})},updated(){new n["e"](".scroll-container",{loop:!0,speed:1e3,autoplay:{delay:2e3,stopOnLastSlide:!1,disableOnInteraction:!1,pauseOnMouseEnter:!0},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})},methods:{}},A=r,l=(a("5242"),a("2877")),c=Object(l["a"])(A,i,s,!1,null,"2db61a35",null);e["a"]=c.exports}}]);