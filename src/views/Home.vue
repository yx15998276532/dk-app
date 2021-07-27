<template>
  <div class="container">
     <div class="header">
         <p>订阅用户基本信息</p>
     </div>
      <van-form @submit="onSubmit" >
    <div class="content">
    <div class="name">       
  <van-field v-model="form.unit" label="名称" placeholder="单位名称(必填)" 
  :rules="[{ required: true, message:'' }]" required/>
    </div>
     <div class="name">   
  <van-field v-model="form.invoice" label=" 税号" placeholder="税号人识别号" />
    </div>
     <div class="name">
    <van-field
  v-model="fieldValue"
  is-link
  readonly
  label="地区"
  placeholder="请选择所在地区(必填)"
  :rules="[{ required: true, message:'' }]"
  @click="show = true"
  required
/>
 <van-popup v-model="show" round position="bottom">
  <van-cascader
    v-model="cascaderValue"
    title="请选择所在地区"
    :options="options"
    @close="show = false"
    @finish="onFinish"
  />
</van-popup>
     </div>
     <div class="name">
         <van-cell is-link @click="showPopup">订阅时间 <span class="date">{{ date }}</span> </van-cell>
<van-popup v-model="judge"  position="bottom" :style="{ height: '30%' }"  >
<van-datetime-picker
  v-model="currentDate"
  type="date"
  title="选择年月日"
  :min-date="minDate"
  :max-date="maxDate"
  @confirm ="confirm"
  @cancel="cancel"
  cancel-button-text
/>
</van-popup>
    </div>
    <div>
    <van-button type="info"  class="info"  >下一步</van-button>  
    </div>
    </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      show: false,
      judge : false,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(2021, 0, 17),
      date: '',
      form: {
        date: '',
        invoice: '',
        city: '',
        unit: '',
      },
      fieldValue: '',
       cascaderValue: '',
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [
        {
          text: '浙江省',
          value: '330000',
          children: [{ text: '杭州市', value: '330100' }],
        },
        {
          text: '江苏省',
          value: '320000',
          children: [{ text: '南京市', value: '320100' }],
        },
      ],
    };
  },
  watch: {
    date: function (val) {
      if(val) {
        this.form.date = val;
      }
    },
    fieldValue: function (val){
         if(val) {
        this.form.city = val;
      }
    }
  },
  methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish({ selectedOptions }) {
      this.show = false;
      this.fieldValue = selectedOptions.map((option) => option.text).join('/');
    },
    showPopup() {
      this.judge = true;
    },
    confirm(e) {
        const month = e.getMonth()+ 1
        this.date = e.getFullYear() + '年' + month + '月' + e.getDate() + '日';
        this.judge = false;
    },
    cancel(){
      this.judge = false;
    },
    
    onSubmit() {
      localStorage.setItem('item',JSON.stringify(this.form)); 
      this.$router.push('/publication');
    },
  },
}
</script>

<style scoped>
@import '../assets/index.css';
@import '../assets/home.css';
</style>