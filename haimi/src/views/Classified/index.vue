<template>
<div class="Classified">
  <navlistTwo :nav="arr" @parent='parent'></navlistTwo>
  <component :is="Page"></component>
  <Footers></Footers>
</div>
</template>

<script>
import Footers from '@/components/Footerbar'
import navlistTwo from '../all/navlistTwo'
import Home from '../all/components/Home'
import Brand from '../all/components/brand'

export default{
  data () {
    return {
      arr: [
        {
          title: '分类',
          con: '分类',
          id: 0,
          type: 1
        },
        {
          title: '品牌',
          con: '品牌',
          id: 1,
          type: 2
        }
      ],
      Page: 'Home'
    }
  },
  methods: {
    parent (id, con, type) {
      switch (type) {
        case 1:
          this.Page = 'Home'
          break
        case 2:
          this.Page = 'brand'
          break
      }
    }
  },
  components: {
    Footers,
    navlistTwo,
    Home,
    Brand
  }
}
</script>

<style>
.Classified{
  width:100%;
  background: #f7f7f7;
  padding-top:1rem;

}
</style>
