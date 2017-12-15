<template>
 <swiper :options="swiperOption">
    <swiper-slide v-for='(item,index) in banlist' :key='index'><img :src='item.img' /></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
</swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default{
  props: {
    banlist: {
      default: []
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 2000,
        autoplayDisableOnInteraction: false,
        loop: true
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }

}
</script>

<style>
.swiper-container img{ 
  display:block;
  width:100%;
  height:100%;
}
.swiper-pagination span{
  background:#000;
}
</style>
