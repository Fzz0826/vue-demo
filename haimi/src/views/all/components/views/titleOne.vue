<template>
<div class="title1">
    <a href="#" v-for="item in titlePic"><img :src="item"></a>
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
.title1{
  width:100%;
  position:relative;
}
.title1 a:first-child{
 position: absolute;
 left: 0;
 top:0;
}
.title1 a:nth-child(2){
 position: absolute;
 left: 0;
 bottom:0;
}
.title1 a:last-child{
 margin-left:50%;
}
.title1 img{
  width:50%;
}

</style>
