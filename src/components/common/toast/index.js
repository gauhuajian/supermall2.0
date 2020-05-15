import Toast from './Toast.vue'

let obj = {}

obj.install = function (Vue) {
    const toastContristor = Vue.extend(Toast)
    let toast = new toastContristor
    toast.$mount(document.createElement('div'))
    document.body.appendChild(toast.$el)
    Vue.prototype.$toast = toast
}

export default obj