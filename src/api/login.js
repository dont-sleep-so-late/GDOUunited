import request from '@/utils/request'

export function login(username, password) {
    return request({
        url: '/acl/admin/login',
        method: 'post',
        data: {
            username,
            password,
        },
    })
}

export function getInfo() {
    return request({
        url: '/acl/admin/info',
        method: 'get',
    })
}

export function logout() {
    return request({
        url: '/acl/admin/logout',
        method: 'post',
    })
}

export function fetchList(params) {
    return request({
        url: '/acl/admin/list',
        method: 'get',
        params: params,
    })
}

export function createAdmin(data) {
    return request({
        url: '/acl/admin/register',
        method: 'post',
        data: data,
    })
}

export function updateAdmin(id, data) {
    return request({
        url: '/acl/admin/update/' + id,
        method: 'post',
        data: data,
    })
}

export function updateStatus(id, params) {
    return request({
        url: '/acl/admin/updateStatus/' + id,
        method: 'post',
        params: params,
    })
}

export function deleteAdmin(id) {
    return request({
        url: '/acl/admin/delete/' + id,
        method: 'post',
    })
}

export function getRoleByAdmin(id) {
    return request({
        url: '/acl/admin/role/' + id,
        method: 'get',
    })
}

export function allocRole(data) {
    return request({
        url: '/acl/admin/role/update',
        method: 'post',
        data: data,
    })
}