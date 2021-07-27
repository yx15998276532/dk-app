<template>
  <div class="container">
    <div class="header">
       <p>订阅确认</p>
    </div>
     <van-form  class="row" >
 <van-cell title="订刊单位" :value="this.formData.unit" />
 <van-cell title="税号" :value="this.formData.invoice" />
 <van-cell title="发行地区" :value="this.formData.city" />
 <van-cell title="订阅日期" :value="this.formData.date" />  
 <ul>
     <li v-for="item in this.formList" :key="item.id">
         <Card :list="item" />
     </li>
 </ul>
    <van-field name="radio" >
  <template #input>
    <van-radio-group v-model="form.radio" direction="horizontal">
      <van-radio name="1">电子发票 邮箱</van-radio>
      <van-radio name="2">纸质发票 邮件地址</van-radio>
    </van-radio-group>
  </template>
</van-field>
  <van-field label="发票邮寄"  type="text" v-model="form.only" placeholder="请输入邮箱或者邮件地址" required/>
  <van-field v-model="name"  label="联系人" type="text"
   <van-field v-model="form.people"  label="联系人" type="text"
        placeholder="请填写具体联系人姓名(必填)" :rules="[{ required: true, message:'' }]" required/>
  <van-field v-model="form.hone" label="联系电话" 
       type="tel" placeholder="请输入手机号(必填)" :rules="[{ required: true, message:'' }]" required/>
    <div class="van-btn">
        <van-button  type="info" size="normal" native-type="button" @click="handleUp" >返回修改</van-button>
      <van-button  type="info" size="normal"  @click="handleNext" native-type="submit">确认订阅</van-button>
    </div>
    </van-form>
  </div>
</template>

<script>
import Card from '../components/card'
export default {
  components: {
    Card,
  },
  data() {
    return {
      form: {
        only: '',
        radio: '1',
        hone: '',
        people: '',
      },
      formData: '',
      formList: [],
    }
  },
   methods: {
    handleNext(){
      
    },
    handleUp() {
     this.formList = this.formList;
     this.formList =  JSON.parse(localStorage.getItem("list"));
    history.go(-1)
    }
  },
  mounted() {
    const str = JSON.parse(localStorage.getItem("list"));
    const arr = JSON.parse(localStorage.getItem("item"));
    this.formList = str;
    this.formData = arr;
    

    // console.log("formList", this.li)
  }
}
</script>

<style scoped>
.container{
 width: 100%;
   height: 100%;
   box-sizing: border-box;
}
.header{
  width: 100%;
  height: 72px;
  line-height: 92px;
  background-color: #dcdcdc;
  text-align: center;
}
.van-btn{
   display: flex;
   justify-content: space-around;
   margin: 16px;  
}
</style>
 