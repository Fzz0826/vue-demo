<template>
<div class="loading" v-show="idLoading">
  <div class="disc">
    <p></p>
    <span>正在加载…</span>
  </div>
</div>
</template>

<script>
  export default {
    data: function () {
      return {
        idLoading: false
      }
    },
    methods: {
      show: function () {
        this.idLoading = true
      },
      hide: function () {
        this.idLoading = false
      }
    }
  }
</script>

<style>
.loading{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index:99999;
}
.disc{
  margin:75% auto;
  width:100%;
  height:25%;
  text-align:center;
  color:#fff;
}
.disc p{
  width:50px;
  height:50px;
  background:#ccc;
  margin:20px auto;
  animation: rotateP 2s linear infinite;
}
@-webkit-keyframes rotateP {
  0%{
    transform: rotate(0deg)
  }
  100%{
    transform: rotate(360deg)
  }
}
</style>