<template>
  <div class="both2">
   <Brand :arr="arr"></Brand>
  </div>
</template>

<script>
import Brand from './Hviews/textlistTwo'
export default {
  data () {
    return {
      arr: [
        [
          {
            img: '//img.haimi.com/Ft2BQcB9zAZHygf4zu2mdKziH0lN',
            title: '日默瓦',
            con: '复古之名万箱朝拜'
          },
          {
            img: '//img.haimi.com/Fo_3KRGu8XdoqcQ6DbPIJ33aYN3I',
            title: '膳魔师',
            con: '百年品牌源自德国'
          },
          {
            img: '//img.haimi.com/Fi35P_akILkjZbVQPEv9EV2IIiZm',
            title: '猫王',
            con: '胆机之父匠心之作'
          }
        ],
        [
          {
            img: '//img.haimi.com/FofqVnbyUfMblFYalgoLBGfmFasN',
            title: 'Boogie Board',
            con: '一天5次可用30年'
          },
          {
            img: '//img.haimi.com/Fuqtzw_4g62P_RqlbPzKrSH9ZNZ1',
            title: '质造',
            con: '马云也在用的杯子'
          },
          {
            img: '//img.haimi.com/FscqPdPEAwBojaXc36dx2ps7HD2c',
            title: '轻生活',
            con: '只用美国海岛棉'
          }
        ],
        [
          {
            img: '//img.haimi.com/FgL9AMUlqLrQSbSJuUnzq8wyq4BE',
            title: '飞利浦',
            con: '全球小家电典范'
          },
          {
            img: '//img.haimi.com/FtMK_7-no5zjla20D1zwPNqxzK57',
            title: '芳新',
            con: '美国高端洗衣品牌'
          },
          {
            img: '//img.haimi.com/FuBzTD9I1pQR6AiW6fVBL77DNaxQ',
            title: 'imblu',
            con: '家庭必备收纳神器'
          }
        ],
        [
          {
            img: '//img.haimi.com/FuBzTD9I1pQR6AiW6fVBL77DNaxQ',
            title: 'S’well保温杯',
            con: '星巴克也有在卖'
          },
          {
            img: '//img.haimi.com/Fvz0rLJIVjZ1R5yjJ3jJ07vGi5V5',
            title: '北鼎',
            con: '一人一壶一养生'
          },
          {
            img: '//img.haimi.com/FpEmfhbCjbsSVpI9CTFQRYQ8OvqN',
            title: '微热山丘',
            con: '台湾最好吃凤梨酥'
          }
        ],
        [
          {
            img: '//img.haimi.com/FsF_qKgiTsknAcYzlQVhQ5tMD1_5',
            title: '小甘菊',
            con: '德国百年护肤品牌'
          },
          {
            img: '//img.haimi.com/Fp4W1Cj_AGfcTRJZsUuhjAffradC',
            title: '欧莱德',
            con: '改变世界的洗发水'
          },
          {
            img: '//img.haimi.com/FimEm6cu0d7iEI5drrfkcSxd8tkf',
            title: '西昊',
            con: '性价比最高的椅子'
          }
        ]
      ]
    }
  },
  components: {
    Brand
  }
}
</script>

<style>
.both2{
  width:100%;
}
</style>

