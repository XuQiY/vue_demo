<template>
  <div>
    <mt-swipe :auto="4000" class="home-swipe">
      <mt-swipe-item ><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3763de40d1beeeff4863800e09eca148.jpg"></mt-swipe-item>
      <mt-swipe-item><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/91d9d07c4401691782cbe578a6641bea.jpg"></mt-swipe-item>
      <mt-swipe-item><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d7296e37091887574eb3dedb2e4cca07.jpg" alt=""></mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <routerLink to="/home/news">
          <img src="/src/images/menu1.png" />

          <div class="mui-media-body">新闻资讯</div>
        </routerLink>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <routerLink to="/home/order">
          <img src="/src/images/menu2.png" />
          <div class="mui-media-body">点餐系统</div>
        </routerLink>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <routerLink to="/home/goods">
          <img src="/src/images/menu3.png" />
          <div class="mui-media-body">商品购买</div>
        </routerLink>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <routerLink to="#">
          <img src="/src/images/menu4.png" />
          <div class="mui-media-body">图片墙</div>
        </routerLink>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <routerLink to="#">
          <img src="/src/images/menu5.png" />
          <div class="mui-media-body">影音专区</div>
        </routerLink>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <routerLink to="#">
          <img src="/src/images/menu6.png" />
          <div class="mui-media-body">联系我们</div>
        </routerLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.home-swipe {
  height: 200px;
  .mint-swipe-item {
    img{
      width: 100%;
    }
  }
}
.mui-table-view {
  background-color: #fff;
  .mui-table-view-cell {
    border-right: none;
    border-bottom: none;
  }
  img {
    width: 60px;
    height: 60px;
  }
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
  font-size: 14px;
}
</style>