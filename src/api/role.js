import request from '@/utils/request'

export function fetchList(params) {
    return request({
        url: '/acl/role/list',
        method: 'get',
        params: params,
    })
}

export function createRole(data) {
    return request({
        url: '/acl/role/create',
        method: 'post',
        data: data,
    })
}

export function updateRole(id, data) {
    return request({
        url: '/acl/role/update/' + id,
        method: 'post',
        data: data,
    })
}

export function updateStatus(id, params) {
    return request({
        url: '/acl/role/updateStatus/' + id,
        method: 'post',
        params: params,
    })
}

export function deleteRole(data) {
    return request({
        url: '/acl/role/delete',
        method: 'post',
        data: data,
    })
}

export function fetchAllRoleList() {
    return request({
        url: '/acl/role/listAll',
        method: 'get',
    })
}

export function listMenuByRole(roleId) {
    return request({
        url: '/acl/role/listMenu/' + roleId,
        method: 'get',
    })
}

export function listResourceByRole(roleId) {
    return request({
        url: '/acl/role/listResource/' + roleId,
        method: 'get',
    })
}

export function allocMenu(data) {
    return request({
        url: '/acl/role/allocMenu',
        method: 'post',
        data: data,
    })
}

export function allocResource(data) {
    return request({
        url: '/acl/role/allocResource',
        method: 'post',
        data: data,
    })
}