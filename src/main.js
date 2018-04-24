import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './assets/js/rem'
import './assets/style/common.css'

// Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})