<template>
  <div class="card">
        <van-card 
     :num="list.digit"    
     :price="list.number"
     :desc="list.name"
     :title="list.value"
     thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
>
    <template #tags>
    <van-tag  plain type="danger" >{{ list.tel }}</van-tag>
  </template>
  <template #footer>
    <van-tag   plain type="danger" >{{ list.text }}</van-tag>
  </template>
   </van-card>
  </div>
</template>

<script>
export default {
  props: ['list']
}
</script>

<style>

</style>