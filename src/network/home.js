import {
    Axios
} from './axios'

export function getHomeMultidata() {
    return Axios({
        url: '/home/multidata'
    })
}
export function getHomeGoods(type, page) {
    return Axios({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}