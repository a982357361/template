import axios from 'axios'
import { Message } from 'element-ui'
let service = axios.create({
    baseURL: process.env.VUE_APP_URL,
    timeout: 60000
})

//请求拦截器
service.interceptors.request.use(
    config => {
        //此处添加请求token
        let token = localStorage.getItem("token");
        if (token) config.headers['X-Token'] = token;
        return config
    },
    error => {
        console.log('服务器错误信息：', error)
        return Promise.reject(error)
    }
)

//响应拦截器
service.interceptors.response.use(
    response => {
        //处理不同状态码
        if (response.data.code === 0) {
            Message.error(response.data.message);
            return;
        }
        return response.data;
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

export default service
