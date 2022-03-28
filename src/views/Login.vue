<template>
  <div class="login">
    <header>
      <van-nav-bar title="登录站酷网" left-arrow @click-left="onClickLeft" />
    </header>
    <el-form class="form">
      <el-form-item class="input">
        <el-input v-model="input" placeholder="手机号/邮箱"></el-input>
      </el-form-item>
      <el-form-item class="input">
        <el-input v-model="input" placeholder="密码长度8-20位"></el-input>
      </el-form-item>
    </el-form>
    <div class="danxuan">
      <input type="checkbox" />
      <p class="p">我已阅读并同意站酷的</p>
      <p>《用户协议》</p>
      <p class="p">与</p>
      <p>《隐私政策》</p>
    </div>
    <div class="button">
      <button>登录</button>
    </div>
    <div class="footer">
      <p>短信登录</p>
      <p>找回密码</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
     return {
        input:''
     }
  },
  methods: {
    onClickLeft() {
      this.$router.push({path:'/'})
    },
  },
};
</script>
<style scoped>
.van-nav-bar {
  background-color: #ffd100;
}
.login >>> .van-nav-bar__content {
  height: 1.2rem;
}
.login >>> header .van-icon {
  color: #fff;
  font-size: 0.5rem;
}
.login >>> .van-nav-bar__title {
  font-size: 0.38rem;
  font-weight: 400;
  height: 100%;
  line-height: 1.2rem;
}
.login-a p {
  text-align: center;
  line-height: 1rem;
  font-size: 16px;
}
.form {
  padding: 0.8rem 0.8rem 0;
}
.login >>> .el-input__inner {
  height: 1.2rem;
  border-color: #dddddd;
  font-size: 0.35rem;
}
.login >>> .standard-input-size {
  color: #757475;
}
.danxuan {
  display: flex;
  padding: 0 0.8rem;
}
.danxuan input {
  width: 0.3rem;
  margin-right: 0.1rem;
}
.p {
  color: #cfcfcf;
}
.button {
  padding: 0.5rem 0.8rem 0 0.8rem;
}
.button button {
  width: 100%;
  height: 1.2rem;
  border: none;
  color: #999999;
  font-size: 0.45rem;
  border-radius: 0.15rem;
}
.footer {
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 0.8rem 0 0.8rem;
}
.footer p {
  font-size: 0.35rem;
}
.footer p:nth-child(2) {
  color: #999999;
}
</style>