(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-86484b2e"],{4556:function(e,t,i){"use strict";i("5a34")},"4ffd":function(e,t,i){e.exports=i.p+"img/logo.1ffcebfe.png"},"55c4":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFNSURBVEiJ7VZbksQgCCR7sfFm7pxM52Q9PzgSBNRka7+mq1J5Ad0QxBB94QBAAlDgIwPI/0FYAiH3BKjAhUUkR1zm4zq5keVAFvhK8rLjS9IxENayNAMLAWYMy6FlapbK+a4z25hclmn2noOe7g37tPS5ogwiUSKzIfi05MLAK5v7XmTm9cQg7MdUYaM5vYx3Dz5Xx7c9/4iWxL9BYCKip3begBezf9/IW5Qs83Fa7xNf2yZsgG4ju1QjrYi+RCxsM/qsXir9LOOwXHeg4w9dPSuZtNux5ctqEVcKYDRSIaLPPYK5TdFygzMENGGzUYfEIAB9+NjCoCYMNrY4ZQtw02Ey/4escV46y0NDCViPYZVuldQhX4+B1X30r2NgbKidUsvyXhOuSpbhLBn036Bym9Qh19D90J4N4jSOHQF8majvzQ2Vz8/jOCp9YeANFLXNXMaYgtkAAAAASUVORK5CYII="},"5a34":function(e,t,i){},"84d1":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFXSURBVEiJxZa9ccMwDIVB75EyZZosYAzkHaQMlZr0DO48Q3Z4KQI6EM0fgLLP706nEwniAygKENGEAHwC+AFwmlk/LQAL/nSd9XHYGcP7q8BJPwDgh4HVti4DOyaiCCBaAmiCBRiJaJWhkbOjsjMHUINqLY35WIyzAG/yQLkFHIEbgVdtetDmghHYDVfb1DW0gCvw+uEssuVHgEt4y8CUrRcs9ndZH2SC6f9z+bI4c2qVe2bcfccphJAcDt+MducWuFuVKrrI/dti3ExGvV9zAAA+rLZivzm4000ihHAZW22U9MPe7uQR98BMT5CuC/l9Z3B6Jlgpc27gfNxdzdyhY3NmWFN3qFuKTQV9DjouxQpsb+B9qK3xwPAT4ATbfRVbHmcOW+ljdqG3lJrOSug4YCIqo01yndWY/rtkNb6GEOZbbCX7kUy708y4EgDTtn2y3JNc5MnwFz7VSjS0XubqAAAAAElFTkSuQmCC"},8607:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e._self._c;return t("el-container",{staticClass:"home-container"},[t("el-header",[t("div",{staticClass:"header_logo"},[t("img",{attrs:{src:i("4ffd"),alt:""}}),t("span",[e._v("海大云统战")])]),t("div",{staticClass:"header_right"},[t("div",{staticClass:"userinfo"},[t("img",{attrs:{src:i("55c4"),alt:""}}),t("p",[e._v("当前用户:"+e._s(e.user))])]),t("div",{staticClass:"help"},[t("img",{attrs:{src:i("c50b"),alt:""}}),t("p",[e._v("用户指南")])]),t("div",{staticClass:"exit",on:{click:e.logout}},[t("img",{attrs:{src:i("84d1"),alt:""}}),t("p",[e._v("退出")])])])]),t("el-container",[t("el-aside",{attrs:{width:e.isCollapse?"64px":"200px"}},[t("div",{staticClass:"toggle-button",on:{click:e.toggleCollapse}},[e._v("|||资料库")]),t("el-menu",{attrs:{"background-color":"#282b34","text-color":"#fff","active-text-color":"#409EFF","unique-opened":"",collapse:e.isCollapse,"collapse-transition":!1,router:"","default-active":e.activePath}},[t("el-submenu",{attrs:{index:"3"}},[t("template",{slot:"title"},[t("span",[e._v("资料管理")])]),t("el-menu-item-group",[t("el-menu-item",{attrs:{index:"reward"}},[e._v("获奖")]),t("el-menu-item",{attrs:{index:"homePageArticle"}},[e._v("门户网站文章")]),t("el-menu-item",{attrs:{index:"homePagePicture"}},[e._v("门户网站轮播图")]),t("el-menu-item",{attrs:{index:"homePageDownload"}},[e._v("门户网站下载专区")]),t("el-menu-item",{attrs:{index:"fileDataGainArt"}},[e._v("统战成果新闻展示")]),t("el-menu-item",{attrs:{index:"fileDataGainPic"}},[e._v("统战成果轮播图展示")])],1)],2)],1)],1),t("el-main",[t("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[t("el-breadcrumb-item",{attrs:{to:{path:"/fileWelcome"}}},[e._v("首页")]),t("el-breadcrumb-item",[e._v("资料管理")]),t("el-breadcrumb-item",[e._v(e._s(this.$route.meta.title))])],1),t("router-view")],1)],1)],1)},A=[],s=(i("14d9"),{name:"FileData",data(){return{isCollapse:!1,activePath:"",user:"超级管理员"}},methods:{logout(){this.$router.push("/appMainIndex")},toggleCollapse(){this.isCollapse=!this.isCollapse},saveNavState(e){window.sessionStorage.setItem("activePath",e),console.log(e)},getMenuList(){console.log(1)}},created(){this.getMenuList(),this.activePath=window.sessionStorage.getItem("activePath")}}),l=s,o=(i("4556"),i("2877")),r=Object(o["a"])(l,a,A,!1,null,null,null);t["default"]=r.exports},c50b:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFVSURBVEiJxVdRjoQwCIXNHkxP1ngyuidjP7YYxFLAmc28xExGH7wHtagAHwJmicy8AUAbfzdzuY8DEPF43dYQZGbiO8g5z8zc4sx5QRpVe/w2Dg2XvxJNCTqx2kCu+kdBcZ61cVPpVFQtgRyuubR4QtSuYbieKoYid6sKNMgaWcSRa67g/MLh6/J4sSfnSbWytjeOqmjeTrhX/e0RLRCxw5hOC6yuH/A38drJEzdZExpc2H63rkQ3xztEpzovCAvctTX8s7Nf6nwvip4VIuJeidVJyhVXWjzTkYp7RdTgp8jvWlgcbYUEOwDsY5uFUJ25CMtbQ7ptiNizopGjy2RJ8FM84br3kboYbg1OzGfDl/0+76iqOppAaWE9ZLIJI/FWEQ07UxEviD5773pwI5GKT8fqBGwMZJ7XAiqLmoSN5yD2X+hDwconjP58sYn7+D3eMlT+E79qrF5zjAsbigAAAABJRU5ErkJggg=="}}]);