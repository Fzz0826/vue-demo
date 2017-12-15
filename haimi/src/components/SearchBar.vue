<template>
 <div :class='[backa]'>
     <p>
       <input type="text" placeholder="搜索宝贝" v-model='searchVal'>
       <span class="fa fa-search"></span>
     </p>
     <router-link 
      :to="{name:'search',params:{'searchVal':searchVal}}"
    ><span class="sea">搜索</span></router-link>
 </div>
</template>

<<script>
export default {
  name: 'SearchBar',
  props: {
    backa: {
      default: 'black'
    },
    defaultVal: {
      default: ''
    }
  },
  data () {
    return {
      searchVal: this.defaultVal
    }
  }
}
</script>

<style>
@import '/static/css/font-awesome.min.css';
.black,.white{
  width:100%;
  height: 1rem;
  border-bottom:1px solid #eee;
}
a{
  text-decoration: none;
}
.black,.white{
  width:100%;
  height:100%;
  padding:0.2rem 0.3rem; 
  display:flex;
}
.black{
  background:#242424;
}
.white{
   background:#fff;
}
.black p:first-child,.white p:first-child{
  flex:6;
  width:100%;
  height:100%;
  text-align:center;
  position: relative;
  
}
.black p:first-child{
    background:#1a1a1a;
}
.white p:first-child{
  background:#f7f7f7;
}
.black p:first-child span,.white p:first-child span{
    display: block;
    width: .5rem;
    height: .5rem;
    position: absolute;
    left: 0.2rem;
    top:50%;
    margin-top:-.25rem;
    text-align:center;
    line-height: 0.5rem;
}
.black p:first-child span{
  color:#fff;
}
.white p:first-child span{
  color:#666;
}
.black input,.white input{
  width:100%;
  height:100%;
  outline:none;
  background: none;
  border:none;
  padding-left:0.8rem;
}
.black input{
   color:#fff;
}
.white input{
   color:#666;
}
.black p:last-child,.white p:last-child{
  flex:1;  
  text-align:center;
  line-height: 0.6rem;
}
.black p:last-child{
  color:#fff;
}
.white p:last-child a{
   color:#666;
}
.sea{
  color:#fff;
}

</style>

