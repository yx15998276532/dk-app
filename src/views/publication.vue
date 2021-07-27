<template>
  <div class="pub-container">
    <div class="pub-header">
       <p>订阅刊物信息</p>
    </div>
    <van-form  class="row" @submit="onSubmit">
    <div class="public-row">
       <van-field v-model="value" label="订阅刊物" 
       placeholder="请选择订阅刊物(必填)" :rules="[{ required: true, message:'' }]" required/>
    </div>
    <div class="public-row">
       <van-field v-model="digit" type="digit" label="订阅数量"
        placeholder="请填写整数(必填)" :rules="[{ required: true, message:'' }]" required/>
    </div>
    <div class="public-row">
      <van-field v-model="number" type="number" label="金额" placeholder="输入框只读" readonly />
    </div>
    <div class="public-row">
       <van-field v-model="text" label="投送地址" 
       placeholder="请填写订单单位详细地址(必填)" :rules="[{ required: true, message:'' }]" required/>
    </div>
    <div class="public-row">
       <van-field v-model="name"  label="联系人" type="text"
        placeholder="请填写具体联系人姓名(必填)" :rules="[{ required: true, message:'' }]" required/>
    </div>
    <div class="public-row">
       <van-field v-model="tel" label="联系电话" 
       type="tel" placeholder="请输入手机号(必填)" :rules="[{ required: true, message:'' }]" required/>
    </div>
        <div class="van-btn">
        <van-button  type="info" size="normal"  native-type="submit">继续订刊</van-button>
      <van-button  type="info" size="normal" native-type="button" @click="handleNext">订刊提交</van-button>
  </div>
    </van-form>
   
    <ul v-if="showChecked">
        <li v-for="list in formList" :key="list.id">
          <Card :list="list" />
    </li>
    </ul>
  </div>
</template>

<script>
import Card from '../components/card'
export default {
  components: {
    Card,
  },
  data () {
   return {
     isShow: false,
     showChecked: false,
     value: '',
     text: '',
     tel: '',
     name: '',
     digit: '',
     number: 102.0,
     formList: [],
     }
 },
 methods: { 
   onSubmit () {
    const {value, text, tel, name, digit, number} = this;
      this.formList.push({
      value,
      text,
      tel,
      name,
      digit,
      number,
      id: +new Date(),
     });
    this.showChecked = true;
    this.value ="",this.text="",this.tel="",this.digit="",this.name="";
    localStorage.setItem('list',JSON.stringify(this.formList));
    
    
   },
     handleNext(){
      if(this.formList.length > 0) {
        this.$router.push('/details')
    }
      
     }
  },
  
}
</script>

<style scoped>
@import '../assets/index.css';
@import '../assets/publication.css';
</style>