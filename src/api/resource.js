import request from '@/utils/request'

export function fetchList(params) {
    return request({
        url: '/acl/resource/list',
        method: 'get',
        params: params,
    })
}

export function createResource(data) {
    return request({
        url: '/acl/resource/create',
        method: 'post',
        data: data,
    })
}

export function updateResource(id, data) {
    return request({
        url: '/acl/resource/update/' + id,
        method: 'post',
        data: data,
    })
}

export function deleteResource(id) {
    return request({
        url: '/acl/resource/delete/' + id,
        method: 'post',
    })
}

export function fetchAllResourceList() {
    return request({
        url: '/acl/resource/listAll',
        method: 'get',
    })
}