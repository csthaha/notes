<template>
  <div class="user-page">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
        <!-- <img :src="image" alt="" srcset=""> -->
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Lazyload } from 'vant'
import Vue from 'vue'
Vue.use(Lazyload)

export default {
  data() {
    return {
      images: ['https://img.yzcdn.cn/vant/apple-1.jpg', 'https://img.yzcdn.cn/vant/apple-2.jpg']
    }
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
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
</style>