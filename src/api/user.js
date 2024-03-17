//引入axios（对axios进行二次封装）
import request from '@/utils/request'

// 对外暴露登录接口函数
// export function login(data) {
//     return request({
//         url: '/vue-admin-template/user/login',
//         method: 'post',
//         data
//     })
// }
export function login(username, password) {
    // debugger
    return request({
        url: 'http://localhost:8222/acl/admin/login',
        method: 'post',
        data: {
            username,
            password,
        },
    }).catch((error) => {
        console.error('登录错误', error)
        throw error
    })
}

//对外暴露获取用户信息的函数
export function getInfo() {
    return request({
        url: 'http://localhost:8222/acl/admin/info',
        method: 'get',
    })
}

//对外暴露退出登录函数
export function logout() {
    return request({
        url: 'http://localhost:8222/acl/admin/logout',
        method: 'post',
    })
}

//获取菜单权限数据
export function getMenu() {
    return new Promise((resolve, reject) => {
        request({
            url: 'http://localhost:8222/acl/menu/treeList',
            method: 'get',
        })
            .then((response) => {
                // 在这里处理响应数据
                // console.log('响应数据：', response.data)
                // 可以在这里进行进一步的操作，例如将数据存储到 Vuex store 或更新组件的数据
                // 将响应数据传递给调用方
                resolve(response.data)
            })
            .catch((error) => {
                // 处理错误情况
                console.error('请求错误：', error)
                // 将错误信息传递给调用方
                reject(error)
            })
    })
}