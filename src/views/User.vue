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
      <template #content>
        <div class="content">
          这是我封装的 dialog
        </div>
        <div class="img">
          <img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt="" srcset="" />
        </div>
      </template>
    </Mydialog>

    <van-field
      v-debounce="search"
      v-model="inputValue"
      class="field"
      label="文本"
      placeholder="请输入用户名"
    />
    <!-- <span v-clipboard="options">粘贴而来的文本：</span> -->
    <!-- 自定义复制指令没理解 -->
    <div class="wrapper">
      <p id="text">我把你当兄弟你却想着复制我？</p>
      <textarea id="input">这是幕后黑手</textarea>
      <button @click="copyText">copy</button>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Lazyload, Button, Field } from 'vant'
import Vue from 'vue'
Vue.use(Lazyload)

export default {
  data() {
    return {
      images: ['https://img.yzcdn.cn/vant/apple-1.jpg', 'https://img.yzcdn.cn/vant/apple-2.jpg'],
      show: false,
      inputValue: '',
      options: {
        value: '自定义指令',
        success: () => {
          console.log('自定义')
        }
      },
      count: 1
    }
  },
  computed: {},
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Button.name]: Button,
    [Field.name]: Field
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
    },

    search() {
      // 实际要进行的操作 axios.get('')之类的
      this.count++
      console.log('count is:' + this.count)
    },

    copyText() {
      var text = document.getElementById('text').innerText
      var input = document.getElementById('input')
      input.value = text // 修改文本框的内容
      input.select() // 选中文本
      document.execCommand('copy') // 执行浏览器复制命令
      alert('复制成功')
      // 复制功能利用的是 浏览器对 input 框的功能所实现
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

.field
  margin-top 100px

.wrapper
  margin-top 100px
  position relative

  #input
    position absolute
    top 0
    left 0
    opacity 0
    z-index -10
</style>