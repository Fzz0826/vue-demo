<template>
<div class="title3">
      <dl v-for="(item,index) in titlePic" class="con-three">
        <dt><img :src="item.img"></dt>
        <dd>
          <p>{{item.con}}</p>
          <span>￥{{item.money}}</span>
        </dd>
      </dl>
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
.title3{
 width:100%;
 display:flex; 
 flex-wrap: wrap;
 box-sizing:border-box;
}
.con-three{
  width:50%;
  margin-bottom:0.2rem;
}
.con-three:nth-child(odd){
  padding-right:0.1rem;
}
.con-three:nth-child(even){
  padding-left:0.1rem;
}
.con-three dd{
  padding:0.2rem;
  background:#fff;
}


</style>
