<template>
<div class="navlist">
<p v-for="item in navlist"><a href="#"><img :src="item.img"></a>{{item.text}}</p>
</div>
</template>

<script>
export default{
  props: {
    navlist: {
      default: []
    }
  }
}
</script>

<style>
.navlist{
  width:100%;
  padding:0rem 0 0.2rem 0;
  background:#fff;
  display:flex;
}
.navlist p{
  flex:1;
  text-align:center;
  font-size:0.28rem;
}
.navlist p a{
  display:block;
}
.navlist p a img{
  width:100%;
}

</style>
