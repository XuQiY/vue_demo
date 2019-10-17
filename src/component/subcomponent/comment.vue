<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要评论的内容（最多120字）" maxlength="120" v-model="msg"></textarea>

    <el-button type="primary"  @click="postComment" class="btn">发表评论</el-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, i) in comments" :key="item.key">
        <div class="cmt-title">
          第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | dateFormat}}
        </div>
        <div class="cmt-body">
          {{ item.content == undefined ? '此用户很懒，嘛都没说': item.content }}
        </div>
      </div>

    </div>

    <el-button type="primary"   :loading="true" class="btn" v-if="getmore">加载中</el-button>
    <el-button type="primary"   @click="getMore"  class="btn" v-else>加载更多</el-button>

  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      pageIndex: 1, // 默认展示第一页数据
      comments: [{add_time:new Date(),user_name:'哈哈',key:11111,content:undefined},
      {add_time:new Date(),user_name:'哈哈',key:11112,content:undefined},
      {add_time:new Date(),user_name:'哈哈',key:11113,content:undefined}] ,// 所有的评论数据
      msg:"",
      getmore:false
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
        Toast('hah')
    
    },
    getMore() {
      // 加载更多
      this.pageIndex++;
      this.getComments();
      this.getmore=true;
    },
    postComment(){
        if(this.msg.trim().length===0) {Toast('评论不能为空'); return;}
        let tmp={add_time:new Date(),user_name:"哈哈",key:88888*Math.random(),content:this.msg}
        this.comments.push(tmp)
        Toast('发表评论成功')
        this.msg=''
    }
  },
  props: ["id"],

};
</script>

<style lang="scss" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }

  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
  .btn{
    display: block;
    width: 100%;
  }
}
</style>
