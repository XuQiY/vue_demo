<template>
  <div>
    <div style="margin-bottom:50px;">
    <el-row class="shop-char-content" v-for="(item, index) in shopCar" :key="index">
      <el-col :span="2">
        <div :class="[item.select?'goods-select-active':'goods-select-noraml']" @click="item.select=!item.select"></div>
      </el-col>

      <el-col :span="6">
        <div class="imgbox">
          <img :src="item.img" alt />
        </div>
      </el-col>

      <el-col :span="16">
        <div class="info">
          <div>
            <div class="name">{{item.name}}</div>
            <span class="price">售价：{{item.price}}元</span>
          </div>
          <div class="num">
            <el-input-number
              v-model="item.num"
              @change="numChange"
              :min="1"
              :max="10"
              label="描述文字"
              size="medium"
            ></el-input-number>
            <div class="del" @click="delItem(item.id)"></div>
          </div>
        </div>
      </el-col>
    </el-row>
    </div>
    <div class="footer">
      <div class="sum">共计金额:<br><span>{{totalPrice}}</span></div>
      <router-link to="/home/goods"><div class="contiune-shop">继续购物</div></router-link>
      <router-link to="#"><div class="go-buy">去结算</div></router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0,
      shopCar: this.$store.state.shopCar,
      isActive:false
    };
  },
  methods: {
    numChange() {},
    delItem(id){
      this.$store.commit('delShopItem',id)
    }
  },
  computed: {
    totalPrice(){
      return this.$store.state.shopCar.reduce((x,y)=>{
        if(y.select){
        if(y.num>1) return x+(y.price*y.num)
        else return x+y.price}else return x;},0)
        
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.shop-char-content {
  height: 118.75px;
  padding: 12.5px;
  .goods-select-active {
    background: url("../../images/check_press.png") 50% 50% no-repeat;
    background-size: 20px 20px;
    height: 85px;
  }
  .goods-select-noraml {
    background: url("../../images/check_normal.png") 50% 50% no-repeat;
    background-size: 20px 20px;
    height: 85px;
  }
  .imgbox {
    background-color: cyan;
    height: 85px;
    margin-right: 10px;
    border: 1px solid #eee;
    border-radius: 2px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .info {
    text-align: left;
    .price {
      padding: 6px 0;
      font-size: 12px;
      color: #999;
      margin-bottom: 6px;
    }
    .name {
      font-size: 14px;
      line-height: 16px;
      color: #666;
      margin-bottom: 6px;
      margin-right: 15px;
      padding: 0;
    }
    .name::after {
      box-sizing: inherit;
    }
    .num {
      display: flex;
      justify-content: space-between;
      .del {
        display: inline-block;
        width: 30px;
        height: 30px;
        background-image: url("../../images/del.png");
        background-position: 50%;
        background-size: cover;
        background-color: transparent;
      }
    }
  }
}
.footer{
  width:100%;
  height:52px;
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  position: fixed;
  bottom:48px;
  left: 0;
  right: 0;
  z-index: 99;
  box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
  // overflow: hidden;
  .sum{
    font-size: 14px;
    color: #999;
    width: 100%;
    text-align: center;
    padding-top: 6px;
    background-color: #fff;
    span{
      font-size: 20px;
    color: #ff5722;
    margin-right: 10px;
    }
    
  }.contiune-shop{
    background: #f4f4f4;
    border: 1px solid #f4f4f4;
    color: #333;
    font-size: 14px;
    text-align: center;
    line-height: 50px;
  }
  .go-buy{
    background: #ff6700;
    color: #fff;
    font-size:14px;
    text-align: center;
    line-height: 50px;
  }
}
</style>