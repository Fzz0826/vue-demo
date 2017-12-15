<template>
<div class="list-two">
  <div class="list2" v-for="item in arr">
    <dl v-for="i in item">
      <dt><img :src="i.img"></dt>
      <dd>
         <p>{{i.title}}</p>
         <p>{{i.con}}</p>
      </dd>
    </dl>
  </div>
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
.list-two{
  width:100%;
  height:1000px;
}
.list2{
  display:flex;
}
.list2 dl{
  flex:1;
  background:#fff;
}
.list2 dl img{
  width:100%;
}
.list2 dl dd p{
  text-align:center;
  font-size:0.28rem;
}
.list2 dl dd p:last-child{
  font-size:0.25rem;
  color:#999;
}
.list2 dl dd {
  padding-bottom:0.2rem;
}
</style>
