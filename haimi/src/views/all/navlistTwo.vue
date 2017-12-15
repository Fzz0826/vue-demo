<template>
<div class="nav">
<ul>
 <li v-for="(item,index) in nav" :class="{active : ind==index}" @click="fn(index,item.id,item.con,item.type)">{{item.title}}</li>
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
.nav{
  width:100%;
  height: 1rem;
  background:#fff;
  z-index:9999;
  position:fixed;
  top:0;
  left:0;
}
.nav ul{
  width:100%;
  list-style:none;
  display:flex;
  padding:0 2rem;
}
.nav ul li{
  flex:1;
  height: 100%;
  text-align:center;
  line-height: 0.97rem;;
  float:left;
}
.active:after{
  content:"";
  display:block;
  width:100%;
  height: 3px;
  background:#000;
}
</style>
