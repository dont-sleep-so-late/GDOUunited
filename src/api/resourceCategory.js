import request from '@/utils/request'

export function listAllCate() {
    return request({
        url: '/acl/resourceCategory/listAll',
        method: 'get',
    })
}

export function createResourceCategory(data) {
    return request({
        url: '/acl/resourceCategory/create',
        method: 'post',
        data: data,
    })
}

export function updateResourceCategory(id, data) {
    return request({
        url: '/acl/resourceCategory/update/' + id,
        method: 'post',
        data: data,
    })
}

export function deleteResourceCategory(id) {
    return request({
        url: '/acl/resourceCategory/delete/' + id,
        method: 'post',
    })
}