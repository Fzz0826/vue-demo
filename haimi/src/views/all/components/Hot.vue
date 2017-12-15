<template>
<div class="main">

 <Banner :banlist="banlist"></Banner>

 <CommentBox>
  <Navpic :navlist="navlist"></Navpic>
 </CommentBox>

 <CommentBox>
  <Advertis :Advertispic="Advertispic[0].img"></Advertis>
 </CommentBox>

 <CommentBox>
  <Advertis :Advertispic="Advertispic[1].img"></Advertis>
 </CommentBox>

<CommentBox title='true' msg="严选品牌">
 <titleOne :titlePic="title1.img"></titleOne>
</CommentBox>

<CommentBox title='true' msg="推荐好物">
 <titleTwo :titlePic="title2"></titleTwo>
</CommentBox>

<CommentBox title='true' msg="大家都在买">
 <titleThree :titlePic="title3"></titleThree>
</CommentBox>


</div>
</template>

<script>
import Banner from './views/banner'
import Navpic from './views/Navpic'
import Advertis from './views/Advertis'
import titleOne from './views/titleOne'
import titleTwo from './views/titleTwo'
import titleThree from './views/titleThree'

export default {
  data () {
    return {
      banlist: [],
      navlist: [
        {
          img: '//img.haimi.com/FuPMz-_M6cc-EKholObO_ec5niTe',
          text: '新人礼包'
        },
        {
          img: '//img.haimi.com/Fvxjun-u3MAa7vGJnbSiCXlFtepB',
          text: '领取积分'
        },
        {
          img: '//img.haimi.com/Fi2HlhU6SOQ0GqagPJ1whoJAzg57',
          text: '邀请有礼'
        },
        {
          img: '//img.haimi.com/Ft0Vx786oXJADIPEamFGp5vew5KY',
          text: '每周新品'
        }
      ],
      Advertispic: [
        {
          img: '//img.haimi.com/Fpt1eouzu2Tmc5C3JMoeN49-4CLe'
        },
        {
          img: '//img.haimi.com/FsSof6YcsmmFomdszaRVSy8eqDNO'
        }
      ],
      title1: {
        title: '严选品牌',
        img: [
          '//img.haimi.com/FgDc_2t_n2s_5y6sJXq_HC52toxk',
          '//img.haimi.com/Fl1dPmAViO5wHlnVKCeX44aqK25X',
          '//img.haimi.com/Fo6aIswHZTuLTpc1zuFQGT59wfOv'
        ]
      },
      title2: [],
      title3: []
    }
  },
  components: {
    Banner,
    Navpic,
    Advertis,
    titleOne,
    titleTwo,
    titleThree
  },
  created () {
    this.$http('/api/banlist').then(res => {
      this.banlist = res.data
    })

    this.$http('/api/tjlist').then(res => {
      this.title2 = res.data
    })

    this.$http('/api/togelist', {
      params: {
        page: 0,
        size: 14
      }
    }).then(res => {
      this.title3 = res.data
    })
  }
}
</script>

<style>
.main{
  width:100%;
  padding-bottom:1rem;
  background:#f7f7f7;
  box-sizing:border-box;
}
</style>
