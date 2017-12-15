<template>
 <div class="search">
    <SearchBar backa="white" :defaultVal="$route.params.searchVal"></SearchBar>
    {{$route.params}}
 </div>
</template>

<<script>
import SearchBar from '@/components/SearchBar'

export default {
  data () {
    return {}
  },
  components: {
    SearchBar
  }
}
</script>

<style>

</style>
