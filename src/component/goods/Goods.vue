<template>
  <keep-alive><goods-list></goods-list></keep-alive>
</template>

<script>
import GoodsList from './GoodsList.vue'
export default {
    components:{
        'goods-list':GoodsList
    }
}
</script>

<style>

</style>