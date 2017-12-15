<template>
<div class="listone">
<dl v-for="item in arr">
  <dt><img :src="item.img"></dt>
  <dd>
    <span v-for="i in item.arr">{{i}}</span>
  </dd>
</dl>
</div>  
</template>

<script>
export default{
  props: {
    arr: {
      default: []
    }
  }
}
</script>

<style>
.listone{
  padding:0 0.1rem;
  height:2050px;
}
.listone dl{
  background:#fff;
  display:flex;
  flex-direction: column;
  margin-top:5px; 
}
.listone img{
  width:100%;
}
.listone dl dd{
  flex:1;
  padding-bottom:0.2rem;
}
.listone dl dd span{
  display:inline-block;
  height:0.6rem;
  padding:0rem 0.2rem;
  border:1px solid #e5e5e5;
  margin-left:0.2rem;
  margin-top:0.2rem;
  line-height:0.6rem;
}
</style>
