// 入口文件
import Vue from 'vue'

import app from './App.vue'
import {
    Header,
    Swipe,
    SwipeItem,
    Lazyload,

} from 'mint-ui';

import './lib/mui/css/icons-extra.css'
import './lib/mui/css/mui.min.css'
import router from './router.js'
import Router from 'vue-router'
import Resourece from 'vue-resource'
import comment from './component/subcomponent/comment.vue'
import orderMap from './component/order/map.vue'
/*element-ui*/
import {
    Form,
    FormItem,
    Input,
    Main,
    Container,
    Message,
    Card,
    Row,
    Col,
    Button,
    InputNumber,
    Radio
} from 'element-ui'
Vue.prototype.$message = Message

import Vuex from 'vuex'



Vue.use(Vuex)
Vue.use(Router)
Vue.use(Resourece)


Vue.http.options.emulateJSON = true;

Vue.use(Lazyload);

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);


Vue.component('comment', comment);
Vue.component('orderMap', orderMap)

/*element-ui*/
Vue.component(FormItem.name, FormItem);
Vue.component(Form.name, Form);
Vue.component(Input.name, Input);
Vue.component(Main.name, Main);
Vue.component(Container.name, Container);
Vue.component(Card.name, Card);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(InputNumber.name, InputNumber)
Vue.component(Radio.name, Radio)

// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
})

// Vue.filter('dateFormat',function (date) {
//     return date.to
// })

const store = new Vuex.Store({
    state: {
        shopCar: []
    },
    mutations: {
        updateShopCar(state, data) {
            if (state.shopCar.find(
                    item => {
                        if (item.id == data.id) {
                            item.num++;
                            return true
                        }
                    }))
                console.log(data.id)
            else
                state.shopCar.push(data)
            console.log(data.id)
        },
        delShopItem(state, data) {
            const index = state.shopCar.findIndex(item => item.id == data)
            state.shopCar.splice(index, 1)
            console.log(index)

        }
    },
    getters: {
        getTotal: state => {
            console.log('getTotal')
            return state.shopCar.reduce((x, y) => x + y.num, 0)
        }
    }
})

var vue = new Vue({
    data: {},
    render: h => h(app),
    router,
    store
}).$mount('#app')