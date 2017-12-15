<template>
  <div id="app"> 
    <router-view/>
    <div id="loading-box"></div>
  </div>
</template>

<script>
import './utils/http'
export default {
  name: 'app'
}
</script>

<style>
#app {
    width:100%;
    height:100%;
    background:#f7f7f7;
}
</style>
