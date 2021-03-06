import request from '@/request/index';
import { adminListRequestDto } from '@/types/admin';

const urls = {
    login: '/admin/list',
    register: '/admin/register'
};

// 管理员新增
export function addAdmin(data: adminListRequestDto) {
    return request({
        url: urls.register,
        method: 'post',
        data
    });
}

// 管理员列表
export function getAdminsList(data: adminListRequestDto) {
    return request({
        url: urls.login,
        method: 'post',
        data
    });
}
