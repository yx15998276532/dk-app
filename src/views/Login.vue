<template>
  <div class="login-container">
      <van-form @submit="onSubmit" class="form">
  <van-field
    v-model="loginId"
    name="用户名"
    label="用户名"
    placeholder="用户名"
    :rules="[{ required: true, message: '请填写用户名' }]"
  />
  <van-field
    v-model="loginPwd"
    type="password"
    name="密码"
    label="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">提交</van-button>
  </div>
</van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginId: '',
      loginPwd: '',
    };
  },
   methods: {
    async onSubmit(values) {
      let user = await  this.$store.dispatch('loginUser/login', {
        loginId: this.loginId,
        loginPwd: this.loginPwd
      });
      console.log('user', user);
      console.log('val', values);
      if(user) {
        console.log('submit', user);
        this.$router.push('/home')
        
      } else {
          alert("用户名或密码错误");
      }
    },
  },
}
</script>

<style>
.login-container{
  padding-top: 200px;
}

</style>