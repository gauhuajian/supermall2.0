import {
    Axios
} from './axios'

export function getdetail(iid) {
    return Axios({
        url: '/detail',
        params: {
            iid
        }
    })
}

export function getRecommend() {

    return Axios({
        url: '/recommend'
    })
}