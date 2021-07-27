<template>
  <div id="app">
    <div class="nav">
      <router-link to="/home"></router-link>
      <router-link to="/publication"></router-link>
      <router-link to="/details"></router-link>
      <router-link to="/"></router-link>
    </div>
    <router-view />
    </div>
    
</template>

<script>
import { mapState } from "vuex"
export default {
  computed: mapState('loginUser', ['data'])
}
</script>

<style>
#app {
 margin: 0;
 left: 0;
 height: 667px;
 background-color: #F5F5F5;
 z-index: 0;
}

</style>
