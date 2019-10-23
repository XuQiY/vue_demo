import VueRouter from 'vue-router'
import home from './component/tabbar/Home.vue'
import vip from './component/tabbar/Vip.vue'
import search from './component/tabbar/Search.vue'
import shopcar from './component/tabbar/ShopCar.vue'
import news from './component/news/News.vue'
import newsinfo from './component/news/Newsinfo.vue'
import order from './component/order/order.vue'
import goods from './component/goods/Goods.vue'
import goodsinfo from './component/goods/GoodsInfo.vue'
import imgwall from './component/image_wall/iamge_wall.vue'
// 3. 创建路由对象
var router = new VueRouter({
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: home,
        },
        {
            path: '/vip',
            component: vip,
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/shopcar',
            component: shopcar
        },
        {
            path: '/search',
            component: search
        }, {
            path: '/home/news',
            component: news
        }, {
            path: '/home/news/newsinfo/:url',
            component: newsinfo
        }, {
            path: '/home/order',
            component: order,
            meta: { keepAlive: true }
        },
        {
            path: '/home/goods',
            component: goods,
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/goods/goodsinfo/:id',
            component: goodsinfo
        },
        {
            path: '/home/imgwall',
            component: imgwall
        }
    ],
    linkActiveClass: 'mui-active'
})

// 把路由对象暴露出去
export default router