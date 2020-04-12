import axios from 'axios';
import {  message } from 'antd';
let axioxInstance = axios.create({
    withCredentials: true
});

// 响应拦截器
axioxInstance.interceptors.response.use(
    res => {
        return res.data;
    },
    err => {
        console.log('Error', err.message);
        message.error('网络错误，请检查网络后重试！');
        return Promise.reject();
    }
)
export default axioxInstance;