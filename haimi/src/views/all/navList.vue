<template>
<div class="nav1">
<ul>
 <li v-for="(item,index) in nav" :class="{active1 : ind==index}" @click="fn(index,item.id,item.con,item.type)">{{item.title}}</li>
</ul>
</div>
</template>

<script>
export default {
  props: {
    nav: {
      default: []
    }
  },
  data () {
    return {
      ind: 0
    }
  },
  methods: {
    fn (index, id, con, type) {
      this.ind = index
      this.$emit('parent', id, con, type)
    }
  }
}
</script>

<style>
.nav1{
  width:100%;
  height: 1rem;
  overflow-x:scroll;
  overflow-y:auto;
  background:#fff;
  z-index:9999;
  box-sizing:border-box;
}
.nav1 ul{
  width:550px;
  list-style:none;
}
.nav1 ul li{
  width:50px;
  height: 100%;
  text-align:center;
  line-height: 0.97rem;
  float:left;
}
.active1:after{
  content:"";
  display:block;
  width:100%;
  height: 3px;
  background:#000;
}
</style>
