<template>
<div class="content">
  <h3 v-if="title">{{msg}}</h3>
  <slot></slot>
</div>
</template>

<script>
export default{
  props: {
    title: {
      default: false
    },
    msg: {
      default: ''
    }
  }
}
</script>

<style>
.content{
  width:100%; 
  margin-top:10px; 
}
.content h3{
  width:100%;
  text-align:center;
  background:#fff;  
  padding:0.25rem 0rem;
}
</style>
