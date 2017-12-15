<template>
<div class="title2">
    <a href="#" v-for="item in titlePic"><img :src="item.img"></a>
</div>
</template>

<script>
export default{
  props: {
    titlePic: {
      default: {}
    }
  }
}
</script>

<style>
.title2{
  width:100%;
}
.title2 img{
  width:50%;
}

</style>
