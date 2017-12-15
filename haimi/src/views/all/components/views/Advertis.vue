<template>
<div class="Advertis">
  <img :src="Advertispic">
</div>
</template>

<script>
export default{
  props: {
    Advertispic: {
      default: ''
    }
  }
}
</script>

<style>
.Advertis{
  width:100%;
}
img{
  width:100%;
}
</style>
