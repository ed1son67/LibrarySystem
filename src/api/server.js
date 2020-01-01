import axios from 'axios';
import {  message } from 'antd';
let axioxInstance = axios.create();

const statusCodeMessage = {


}
axioxInstance.interceptors.request.use(

)

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