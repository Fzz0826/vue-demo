<template>
<div class="both">
  <textList :arr="arr"></textList>
</div>
</template>

<script>
import textList from './Hviews/textList'
export default{
  data () {
    return {
      arr: [
        {
          img: '//img.haimi.com/FloxuBkDf7JLo-AtEqLGRRnhAxJn',
          arr: ['面膜', '面霜乳液', '眼霜', '精华', '爽肤水', '卸妆', '洁面', '隔离', '精油']
        },
        {
          img: '//img.haimi.com/FoXDKmO-JoZqbHyGfCcOQFeb0Jit',
          arr: ['毛巾', '摆件', '雨具', '收纳', '洗衣']
        },
        {
          img: '//img.haimi.com/FgHw-Qt_o8Dpt6Xj9Yq7TXuldwZ6',
          arr: ['杯壶', '锅具', '刀铲', '餐具', '其他']
        },
        {
          img: '//img.haimi.com/FqdLiXEI16k6T2WEivYT7NhZYgGD',
          arr: ['玩具', '奶粉', '尿裤', '喂养']
        },
        {
          img: '//img.haimi.com/FhJPFBPHwBExbG-O9o_Jb7KWjiMD',
          arr: ['手提包', '钱包', '拉杆箱', '收纳包', '双肩包']
        },
        {
          img: '//img.haimi.com/Frx1nTQbp06lG2ecUpC87lf5ii53',
          arr: ['吸尘器', '电饭煲', '电动牙刷', '剃须刀', '空气净化器']
        },
        {
          img: '//img.haimi.com/FosWyVnD1RkUsv0BqsRxTHY52qdN',
          arr: ['音箱', '耳机', '摄像机', '故事机']
        },
        {
          img: '//img.haimi.com/Fls0rowTnDdfI8b4lgoJ9qt7A7Vz',
          arr: ['手表', '项链', '手链', '围巾', '戒指']
        },
        {
          img: '//img.haimi.com/Fq1FZ9-wG_stf7Z-wjsXP23mJF02',
          arr: ['椅子', '柜子', '架子', '茶几', '桌子', '沙发', '木床']
        }
      ]
    }
  },
  components: {
    textList
  }
}
</script>

<style>
.both{
  width:100%;
}
</style>
