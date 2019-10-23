<template>
  <div class="app-container">
    <mt-header fixed :title="barTitle" style="z-index:99">
      <div slot="left" @click="back" v-show="barTitle!='首页'">
        <span class="el-icon-arrow-left">返回</span>
      </div>
    </mt-header>
    
      <transition>
		  <keep-alive>
        <router-view ></router-view>
		 </keep-alive>
      </transition>
   
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home" >
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/vip">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-bars">
          <span class="mui-badge">{{shopCount}}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
	  // getTotal:this.$store.getters.getTotal
	  barTitle:'首页'
    };
  },
  computed: {
    // getBartitle() {
    //   return this.$store.state.barTitle;
    // },
    shopCount() {
      return this.$store.getters.getTotal;
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  },
   watch:{
    '$route.path':function name(newValue) {
       switch(newValue){
		   case '/home': this.barTitle="首页";break
		   case '/vip': this.barTitle="会员";break
		   case '/search': this.barTitle="搜索";break
		   case '/shopcar': this.barTitle="购物车";break
		   case '/home/goods': this.barTitle="小米商城";break
		   case '/home/order': this.barTitle="点餐系统";break
       case '/home/news': this.barTitle="新闻资讯";break
        case '/home/imgwall': this.barTitle="图片墙";break

	   }
	   console.log(newValue)
    }
  }
};
</script>


<style lang="scss" scoped>
html {
  font-size: 52px;
}
.app-container {
  padding-top: 40px;
  overflow-x: hidden;

  padding-bottom: 50px;
}
.v-enter {
  opacity: 0;
  transform: translat3D(100%);
  position: absolute;
}
.v-leave-to {
  opacity: 0;
  // transform: translateX(-100%);
  transform: translate3D(-100%);
  position: absolute;
}
.v-enter-active {
  transition: all 0.3s linear;
}
.v-leave-active {
  transition: all 0.3s linear;
}
</style>
