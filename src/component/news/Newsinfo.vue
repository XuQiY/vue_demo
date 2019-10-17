<template>
<div class="newsinfo">
<div v-html="msg" class="content"></div>  
<comment :id="1"></comment>
</div>
</template>

<script>
import commentVue from '../subcomponent/comment.vue';
export default {
    data(){
        return{
            msg:this.$route.params.url
        }
    },
    methods:{
        getnew() {
            this.$http.get(this.$route.params.url).then((res)=>{
                if(res.status===200||res.status===304) {this.msg=res.body;}
                else alert(res.status)
            })
        
    }
    },
    created(){
        this.getnew();
    },
    components:{
        'comment':commentVue
    }
}
</script>

<style lang="scss" scoped>
   .newsinfo{
    .content{
        font-size:14px !important;
    }
   }
</style>