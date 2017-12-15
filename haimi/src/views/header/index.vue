<template>
<div class="search">
    <SearchBar></SearchBar>
    <navList :nav="arr" @parent='parent' v-pin="20"></navList>
    <template> <component :is="Page" :pageid="ind"></component></template>
    <Footers></Footers>
</div>
</template>

<<script>
import SearchBar from '@/components/SearchBar'
import Footers from '@/components/Footerbar'

import navList from '../all/navList'
import Hot from '../all/components/Hot'
import Two from '../all/components/Two'

export default {
  data () {
    return {
      arr: [],
      Page: 'Hot',
      ind: 0
    }
  },
  components: {
    SearchBar,
    navList,
    Hot,
    Two,
    Footers
  },
  methods: {
    parent (id, con, type) {
      switch (type) {
        case 1:
          this.Page = 'Hot'
          this.ind = id
          break
        case 2:
          this.Page = 'Two'
          this.ind = id
          break
      }
    }
  },
  created () {
    this.$http('/api/navlist').then(res => {
      this.arr = res.data
    })
  }
}
</script>

<style>

</style>

