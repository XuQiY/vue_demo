<template>
  <div>
    <ul class="img-container">
      <li v-for="(item, index) in imglist" :key="index">
        <img v-lazy="item.img_url" alt="图片XX"/>
      </li>
    </ul>
  </div>
</template>

<script>
import { Loading } from "element-ui";
export default {
  data() {
    return {
      imglist: [],
      totalList: [],
      loading: true
    };
  },
  mounted() {
    window.addEventListener("scroll", this.loadMore);
  },
  methods: {
    loadMore() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var scrollHeight = document.documentElement.scrollHeight;
      var clientHeight = window.innerHeight;
      console.log(scrollHeight - scrollTop);

      if (this.loading && scrollHeight - scrollTop < 700) {
        let loadingInstance1 = Loading.service({
          fullscreen: true,
          text: "Loading",
          background: "rgba(0, 0, 0, 0.7)"
        });
        setTimeout(() => {
          let last = this.imglist.length - 1;
          for (let i = 1; i <= 10; i++) {
            this.imglist.push(this.totalList[last + i]);
          }
          this.loading = true;
          loadingInstance1.close();
        }, 500);
        console.log("loadmore");
        this.loading = false;
      }
    }
  },
  created() {
    this.$http.get("/img_urls.json").then(res => {
      if (res.status === 200 || res.status === 304) {
        this.totalList = res.body;
        for (let i = 0; i < 10; i++) {
          this.imglist.push(this.totalList[i]);
        }
      } else console.log("err");
    });
    console.log(this);
  }
};
</script>

<style scoped lang="scss">
img[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
img[lazy="error"] {
  display:none;
}

.img-container {
  li {
    width: 350px;
    margin: 0 auto;
    margin-bottom: 10px;
    background-color: #ddd;
    list-style: none;
    img {
      width: 100%;
    }
  }
}
</style>