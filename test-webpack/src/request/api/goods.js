import axios from '../axiosConfig'
import Qs from 'querystring'
// 获取用户信息
const getGoods = params => axios.get('/api/goods',{
    params
});
// 新建用户
const createGoods = params => axios.post('/api/goods', Qs.stringify(params));
// 更新用户
const updateGoods = params => axios.put('/api/goods', Qs.stringify(params));
// 删除用户
const deleteGoods = params => axios.delete('/api/goods',Qs.stringify(params));

export default {
    getGoods,
    createGoods,
    updateGoods,
    deleteGoods
}
