<template>
<div class="news-list" >
<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="(item,index) in newsList" :key="index">
					<routerLink :to="'/home/news/newsinfo/'+encodeURIComponent(item.url)">
						<img class="mui-media-object mui-pull-left" :src="item.thumbnail_pic_s">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>					
						</div>
                        <div class="subtitle">
                                <span>{{item.date}}</span>
                                <span>{{item.author_name}}</span>
                            </div>
					</routerLink>
				</li>

			</ul>  
            </div>
</template>

<script>
export default {
    data() {
        return{
            newsList:[],
            tagY:0
        }
    },
    methods:{
        getlist() {
            this.$http.get('/src/news.json').then((res)=>{
                if(res.status===200||res.status===304) {this.newsList=this.newsList.concat(res.body); console.log(this.newsList)}
                else alert(res.status)
            })
    },
    onScroll(){
        if(scrollY-this.tagY >1000){
            console.log(scrollY);
            this.tagY=scrollY;
            this.getlist();
        }
    }
    },
    created(){
        // if(localStorage.getItem('newsList')){
        // this.newsList=JSON.parse(localStorage.getItem('newsList'))
        // }
        this.getlist();

        // window.onscroll=this.onScroll;
    },
    beforeDestroy() {
        localStorage.setItem('newsList',JSON.stringify(this.newsList));
        console.log("hah")
    },

}
</script>

<style lang="scss">
.news-list{
    .mui-table-view{
        li{
            a{
                padding-bottom: 5px;
            }
            h1{
            font-size: 14px;
            margin:0;
            overflow: hidden;
            word-break: break-all;
            text-overflow: ellipsis;
            max-height: 28px;
            line-height: 14px;
            }
            .subtitle{
                font-size: 8px;
                display: flex;
                justify-content: space-between;
            }
            img{
                width:100%;
                height: 100%;
            }
         }
    }
}
</style>