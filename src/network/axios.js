import axios from 'axios'

export function Axios(config) {
    // 创建新的axios 
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:8000/api/n3',
        timeout: 5000
    })

    //拦截器
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        console.log(err);
        return err
    })

    //响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err);
        return err
    })
    return instance(config)
}