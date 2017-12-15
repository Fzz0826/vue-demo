<template>
<div class="two">
<Banner :banlist="banlist"></Banner>
<CommentBox title='true' msg="居家">
 <titleThree :titlePic="title3"></titleThree>
</CommentBox>
</div>
</template>

<script>
import titleThree from './views/titleThree'
import Banner from './views/banner'

export default {
  props: ['pageid'],
  data () {
    return {
      banlist: [
        {
          img: '//img.haimi.com/FsGUYUCWZvDNBZHBEKSfUsDgVKQ2'
        }
      ],
      title3: []
    }
  },
  components: {
    titleThree,
    Banner
  },
  watch: {
    'pageid': function () {
      this.fn()
    }
  },
  created () {
    this.fn()
  },
  methods: {
    fn () {
      this.$http('/api/togelist', {
        params: {
          page: this.pageid,
          size: 14
        }
      }).then(res => {
        this.title3 = res.data
      })
    }
  }
}
</script>

<style>
.two{
  padding-bottom:1rem;
}
</style>