<template>
  <div class="goods-info-content">
    <!-- <div v-html="msg"></div> -->
    <h3>产品参号{{id}}</h3>
  </div>
</template>

<script>
// 1.跨域，待解决
export default {
  data() {
    return {
      id: this.$route.params.id,
      msg: null
    };
  },
  methods: {
    getinfo() {
      //axios
      // axios
      //   .get("/api")
      //   .then(function(response) {
      //     // msgbody=response.data;
      //     console.log(response)
      //   })
      //   .catch(function(error) {
      //     console.log(error + "goodsInfo");
      //   });
      this.$http.get("/api").then((res)=>{
                if(res.status===200||res.status===304) {console.log(res),this.msg=res.body;}
                else console.log(res.status)
            })
     
 
    }
  },
  created() {
    // console.log("created");
    this.getinfo();
  }
};
</script>

<style>
.goods-info {
  width: 100%;
  height: 100%;
}
.goods-info-content {
  width: 375px;
}
</style>