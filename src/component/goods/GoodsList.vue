<template>
  <div class="goodlist">
    <el-row :gutter="10">
      <router-link v-for="(goods, index) in goodsList" :key="index" :to="'/goods/goodsinfo/'+goods.product_id">
        <el-col
          :span="12"
          :offset="index > 0 ? 0 : 0"
          class="goods-content"
        >
          <el-card :body-style="{ padding: '0px' }">
            <img :src="goods.img_url" class="image" />
            <div style="padding: 14px;" class="info-box">
              <span class="name">{{goods.product_name}}</span>
              <div class="bottom">
                <div class="info">{{goods.product_brief}}</div>
                <div class="price">
                  <i>￥</i>
                  {{goods.product_price}}
                  <span>起</span>
                  <del>
                    <i>￥</i>
                    <span>{{goods.product_org_price}}</span>
                  </del>
                </div>
                <el-button type="danger" class="button" round @click.prevent="buy(goods)">立即购买</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </router-link>
    </el-row>
  </div>
</template>

<style lang="scss">
html {
  font-size: 52.083px;
}
* {
  padding: 0;
  margin: 0;
}
.goodlist {
  margin: 0 5px;
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    line-height: 12px;
  }
  .goods-content {
    margin-bottom: 6px;
    max-height: 274.81px;
  }
  .image {
    width: 100%;
    display: block;
    min-height: 142.84px;
  }

  .name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0.28rem;
    color: rgba(0, 0, 0, 0.87);
  }
  .info {
    margin-top: 0.06rem;
    font-size: 0.22rem;
    line-height: 0.3rem;
    color: rgba(0, 0, 0, 0.54);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .price {
    font-size: 0.28rem;
    color: #ea625b;
    height: 1.5em;
    line-height: 1.5em;
    position: relative;
    display: inline-block;
    i {
      vertical-align: top;
      margin-right: -0.04rem;
      display: inline-block;
      font-size: 0.2rem;
      font-weight: lighter;
      font-style: normal;
    }
    del {
      display: inline-block;
      margin-left: 0.04rem;
      font-size: 0.2rem;
      color: #666;
      font-weight: lighter;
      vertical-align: baseline;
    }
  }
  .info-box {
    text-align: center;
    min-height: 129.97px;
  }
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>

<script>
export default {
  data() {
    return {
      goodsList: []
    };
  },
  methods: {
    buy(goods){
      goods.number=0;
      let tmp={
        num:1,
        price:parseInt(goods.product_price),
        img:goods.img_url,
        name:goods.product_name,
        id:goods.product_id,
        select:true
      }
      this.$store.commit("updateShopCar", tmp);
    }
  },
 
  created() {
    this.$http.get("../../goods.json").then(res => {
      if (res.status === 200) {
        this.goodsList = res.body.flat(1).filter(item => {
          if (item.product_name) return item;
        });
      }
      //   console.log(res);
      //   console.log(this.goodsList);
    });
    console.log(this.$store.state);
  },

  components: {}
};
</script>