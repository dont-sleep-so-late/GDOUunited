import { getMenu } from '@/api/user'
import { routes } from '@/router/index'
import { asyncRouterMap } from '@/router/index'
// import Layout from '@/views/layout/Layout'

//定时器
const debounce = (() => {
  let timer = null //接受定时器
  return (callback, time) => {
    timer && clearTimeout(timer);
    timer = setTimeout(callback, time);
  };
})();

//请求获取菜单列表
function getMenuList() {
  var menuList = window.sessionStorage.getItem('menuList')
  if (menuList == null) {
    getMenu().then((res) => {
      menuList = res
      window.sessionStorage.setItem('menuList', menuList)
      return menuList
    });
  }
  return menuList
}

//判断是否有权限访问该菜单
function hasPermission(menu, route) {
  if (route.name) {
    let currMenu = {}
    //防抖
    debounce(() => {
      currMenu = getMenuList()
    }, 1000);
    if (currMenu != null) {
      //设置菜单的标题、图标和可见性
      if (currMenu.title != null && currMenu.title !== '') {
        route.meta.title = currMenu.title
      }
      if (currMenu.icon != null && currMenu.title !== '') {
        route.meta.icon = currMenu.icon
      }
      if (currMenu.hidden != null) {
        route.hidden = currMenu.hidden !== 0
      }
      if (currMenu.sort != null && currMenu.sort !== '') {
        route.sort = currMenu.sort
      }
      return true
    } else {
      route.sort = 0
      if (route.hidden !== undefined && route.hidden === true) {
        route.sort = -1
        return true
      } else {
        return false
      }
    }
  } else {
    return true
  }
}

function filterAsyncRouter(asyncRouterMap) {
  // 遍历后台传来的路由字符串component，转换为组件对象 动态路由生成器permission.js
  try {
    const accessedRouters = asyncRouterMap.filter((route) => {
      if (route.icon) {
        if (route.icon === 'Layout') {
          // Layout组件特殊处理
          //route.component = Layout
        } else {
          const component = route.icon
          route.icon = (resolve) => {
            require(['@/views' + component + '.vue'], resolve)
          }
        }
      }
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children)
      }
      return true
    })
    return accessedRouters
  } catch (e) {
    console.log(e)
  }
}


const state = {
  routes: [
    {
      path: '/login',
      component: () => import('@/pages/workplace/menu/list'),
      hidden: true,
    },
    {
      path: '/404',
      component: () => import('@/pages/workplace/menu/list'),
      hidden: true,
    },
    {
      path: '',
      redirect: '/home',
      meta: { title: '首页', icon: 'home' },
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/pages/workplace/menu/list'),
          meta: { title: '仪表盘', icon: 'dashboard' },
        },
        {
          name: 'document',
          path: 'https://www.macrozheng.com',
          meta: { title: '学习教程', icon: 'document' },
        },
        {
          name: 'video',
          path: 'https://www.macrozheng.com/mall/catalog/mall_video.html',
          meta: { title: '视频教程', icon: 'video' },
        },
      ],
    },
  ],
  addRoutes: [],
}
const mutations = {
  SET_ROUTES: (state, routes) => {
    // console.log('add', routes)
    state.addRoutes = routes

    // state.routes = constantRoutes.concat(routes)
  },
  SET_ROUTERS: (state, routers) => {
    // console.log(routes)
    // console.log(state.routers)
    state.routes = routers
  },
  // //清空菜单权限
  // clearRoutes: () => {
  //   console.log("清除");
  //   commit('SET_ROUTES', [])
  // }
}

const actions = {
  async generateRoutes({ commit }, roles) {
    //整合后的
    const { menus } = roles
    // console.log(menus)
    const accessedRouters = asyncRouterMap.filter((v) => {
      //admin帐号直接返回所有菜单
      // if(username==='admin') return true;
      if (hasPermission(menus, v)) {
        if (v.children && v.children.length > 0) {
          v.children = v.children.filter((child) => {
            if (hasPermission(menus, child)) {
              return child
            }
            return false
          })
          return v
        } else {
          return v
        }
      }
      return false
    })
    //对菜单进行排序
    // sortRouters(accessedRouters)
    commit('SET_ROUTERS', accessedRouters)

    // 原本的
    const asyncRouter = await getMenu()
    // console.log('asyncRouter', asyncRouter)
    return new Promise((resolve) => {
      // const tmp = asyncRouter.data.permissionList
      const accessedRoutes = filterAsyncRouter(asyncRouter)
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  },

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
