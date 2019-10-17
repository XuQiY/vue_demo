<template>
  <el-container >
    <el-main v-if="register">
      <el-form
        :model="ruleForm2"
        status-icon
        :rules="rules2"
        ref="ruleForm2"
        label-width="100px"
        class="demo-ruleForm"
        label-position="top"
      >
        <el-form-item label="用户名" prop="age">
          <el-input v-model="ruleForm2.age" placeholder="4-16位(字母，数字，下划线)"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
          <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-main>
    <div v-else>欢迎你{{name}}
       <el-button type="primary" @click="register=true">退出登录</el-button>
    </div>
  </el-container>
</template>


<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      let isTrue = /^[a-zA-Z0-9_-]{4,16}$/;
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      setTimeout(() => {
        if (!isTrue.test(value)) {
          callback(new Error("请输入正确的用户名"));
        } else {
          callback();
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        pass: "",
        checkPass: "",
        age: ""
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }]
      },
      Users: [],
      register:true,
      name:""
    };
  },
  methods: {
    submitForm(formName) {
      if (this.Users.find(o => o == this.ruleForm2.age)) {
        this.$message({
          message: "用户名已存在",
          type: "warning",
          center:true
        });
        return;
      }
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$emit("showBar", this.ruleForm2.age.toString());
          this.$message({
            message: `恭喜你${this.ruleForm2.age},注册成功`,
            type: "success",
            center: true
          });
          this.saveUser({ name: this.ruleForm2.age, pwd: this.ruleForm2.pass });
        } else {
          this.$message.error("请填写完毕再提交");

          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    saveUser(data) {
      let ls = window.localStorage;
      if (ls.Users) {
        var users = JSON.parse(ls.getItem("Users"));
      } else {
        var users = [];
      }
      users.push(data);
      ls.setItem("Users", JSON.stringify(users));
      this.register=false;
      
      sessionStorage.setItem('loginState', this.ruleForm2.age);
      this.name=this.ruleForm2.age;
    },

    loadUser(item) {
      if (localStorage[item]) {
        var userList = JSON.parse(localStorage.getItem("Users"));
        var userName = userList.map(o => o.name);
        this.Users = userName;
        
      }
    }
  },
  //生命周期函数
  created() {
    this.loadUser("Users");
    let loginState=sessionStorage.getItem('loginState');
    if(loginState){
      this.register=false;
      this.name=loginState;
    }

  }
};
</script>

<style>
</style>