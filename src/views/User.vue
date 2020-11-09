<template>
  <div class="user-page">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
        <!-- <img :src="image" alt="" srcset=""> -->
      </van-swipe-item>
    </van-swipe>

    <van-button class="btn" type="primary" @click="myButton">弹窗按钮</van-button>
    <Mydialog 
        :show="show" 
        :showCancelButton="true" 
        :showConfirmButton="true" 
        @btnConfirm="btnConfirm"
        @btnCancel="btnCancel"
    >
        <template #content >
            <div class="content">
                这是我封装的 dialog
            </div>
            <div class="img">
                <img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt="" srcset="">
            </div>
        </template>
    </Mydialog>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Lazyload, Button } from 'vant'
import Vue from 'vue'
Vue.use(Lazyload)

export default {
  data() {
    return {
      images: ['https://img.yzcdn.cn/vant/apple-1.jpg', 'https://img.yzcdn.cn/vant/apple-2.jpg'],
      show: false
    }
  },
  computed: {
      
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Button.name]: Button
  },
  methods: {
      myButton() {
          this.show = !this.show
      },

      btnConfirm() {
          console.log('关闭弹窗')
          this.show = !this.show
      },
      btnCancel() {
          console.log('取消')
          this.show = !this.show
      }
  }
}
</script>

<style lang="stylus" scoped>
    .user-page
        /deep/ .van-swipe-item
            width 100%
            height 350px
            img 
                width 100%
                max-height 350px
        .btn
            // position absolute
            margin-top 100px
        .img
            width 100%
            height 100px
            img 
                width 100%
                max-height 100%

</style>