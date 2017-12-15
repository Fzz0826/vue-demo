<template>
<div class="foot">
  <ul>
    <li v-for="(item,index) in arr" @click="fn(index)">
        <router-link :to="item.router" active-class="Active"><p>{{item.con}}</p><i :class="item.cla"></i></router-link>
    </li>
  </ul> 
</div>
</template>

<script>
export default {
  data () {
    return {
      arr: [
        {
          con: '首页',
          cla: 'fa fa-home',
          router: '/header'
        },
        {
          con: '分类',
          cla: 'fa fa-bars',
          router: '/Classified'
        },
        {
          con: '购物车',
          cla: 'fa fa-shopping-cart',
          router: '/shopping',
          meta: {
            isAuth: true
          }
        },
        {
          con: '我的',
          cla: 'fa fa-user',
          router: '/myuser',
          meta: {
            isAuth: true
          }
        }
      ]
    }
  },
  methods: {
    fn (ind) {
      this.ind = ind
    }
  }
}
</script>

<style>
@import '/static/css/font-awesome.min.css';
a{
  text-decoration: none;
  color:#000;
}
.foot{
  width:100%;
  height: 1rem;
  border-top:1px solid #eee;
  position: fixed;
  left: 0;
  bottom:0;
  background:#fff;
  z-index:9999;
}
.foot ul{
  display:flex;
  text-align:center;
  line-height:1.4rem;
  list-style:none;
}
.foot ul li{
  flex:1;
  position: relative;
}
.foot ul li i{
  display:block;
  width:0.5rem;
  height:0.5rem;
  position: absolute;
  left:50%;
  margin-left:-0.25rem;
  top:0.1rem;
}
.Active{
  color:#801a2a;
}
</style>
