<template>
  <div id="container"></div>
  
</template>



<script>
module.exports = {
  data() {
    return {
      lng: 39,
      laf: 116,
      map:{}
    };
  },

  methods: {
    MP() {
      const p1 = new Promise(function(resolve, reject) {
        window.init = function() {
          resolve(AMap);
        };
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src =
          "//webapi.amap.com/maps?v=1.4.6&key=8b1b72aa61358b2578579bd4e548b0dd&callback=init";
        script.onerror = reject;
        document.head.appendChild(script);
      });
      const p2 = new Promise(function(resolve, reject) {
        let script2 = document.createElement("script");
        script2.type = "text/javascript";
        script2.src = "//webapi.amap.com/ui/1.0/main-async.js";
        script2.onerror = reject;
        script2.onload = function(su) {
          resolve("success");
        };
        document.head.appendChild(script2);
      });
      return Promise.all([p1, p2])
        .then(function(result) {
          return result[0];
        })
        .catch(e => {
          console.log(e);
        });
    },
    initMap() {
      this.map = new AMap.Map("container",{resizeEnable: true});
      this.map.plugin("AMap.Geolocation", ()=> {
        let geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, //是否使用高精度定位，默认:true
          timeout: 10000, //超过10秒后停止定位，默认：无穷大
          maximumAge: 0, //定位结果缓存0毫秒，默认：0
          convert: true, //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          showButton: true, //显示定位按钮，默认：true
          buttonPosition: "LB", //定位按钮停靠位置，默认：'LB'，左下角
          buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          showMarker: true, //定位成功后在定位到的位置显示点标记，默认：true
          showCircle: true, //定位成功后用圆圈表示定位精度范围，默认：true
          panToLocation: true, //定位成功后将定位到的位置作为地图中心点，默认：true
          zoomToAccuracy: true //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        });
        this.map.addControl(geolocation);
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, "complete", this.onComplete); //返回定位信息
        AMap.event.addListener(geolocation, "error", this.onError); //返回定位出错信息
      });
    },
    onError(data) {
      alert(JSON.stringify(data));
    },
    onComplete(data){
        console.log(data)
        this.$message({
            message: `定位成功,当前位置${data.formattedAddress}`,
            type: "success",
            center: true
          });
    },
    getPos() {
      console.log(data);
    }
  },
  async created() {
    // 已载入高德地图API，则直接初始化地图
    if(JSON.stringify(this.map)!='{}'){
      console.log(this.map)
    }else{
    await this.MP();
    this.initMap();
    }
}
}
</script>


<style lang="scss" scoped>
#container {
  width: 375px;
  height: 580px;
}
</style>