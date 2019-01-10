import { Get, Post, Delete, Put } from '../axiosConfig'

// 获取用户信息
const getUser = p => Get('/api/user',p);
// 新建用户
const createUser = p => Post('/api/user',p);
// 更新用户
const updateUser = p => Put('/api/user',p);
// 删除用户
const deleteUser = p => Delete('/api/user',p);

export default {
    getUser,
    createUser,
    updateUser,
    deleteUser
}
