<template>
  <div class="myDialog">
    <van-dialog
      v-model="show"
      :title="title"
      :show-cancel-button="showCancelButton"
      :cancel-button-text="cancelButtonText"
      :cancel-button-color="cancelButtonColor"
      :show-confirm-button="showConfirmButton"
      :confirm-button-text="confirmButtonText"
      :confirm-button-color="confirmButtonColor"
      @confirm="btnConfirm"
      @cancel="btnCancel"
      :beforeClose="onBeforeClose"
    >
      <div class="dialog-content">
        <slot name="content"></slot>
      </div>
    </van-dialog>
  </div>
</template>

<script>
import { Dialog } from 'vant'

export default {
  name: 'Dialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '标题'
    },
    showCancelButton: {
      type: Boolean,
      default: false
    },
    cancelButtonText: {
      type: String,
      default: '取消'
    },
    cancelButtonColor: {
      type: String,
      default: '#ee0a24'
    },
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    confirmButtonText: {
      type: String,
      default: '确定'
    },
    confirmButtonColor: {
      type: String,
      default: 'black'
    }
  },
  data() {
    return {}
  },
  components: {
    [Dialog.Component.name]: Dialog.Component
  },
  methods: {
    btnConfirm() {
      this.$emit('btnConfirm', '确定')
    },
    btnCancel() {
        console.log('取消')
      this.$emit('btnCancel', '取消')
    },
    onBeforeClose(action, done) {
      if (action === 'confirm') {
        if (!this.onBeforeClose) {
          // 为true不关闭 ，false关闭
          done(true)
        } else {
          done(false)
        }
      } else {
        if (!this.onBeforeClose) {
          // 为true不关闭 ，false关闭
          done(true)
        } else {
          done(false)
        }
      }
    }
  }
}
</script>

<style lang="stylus">
.van-dialog__header
  padding 0
  height 60px
  display flex
  justify-content center
  align-items center
  font-size 16px
  font-weight 500
  color #333
  background #F7F7F7

.dialog-content
  max-height 250px
  overflow-y auto

// .van-dialog__footer
//   height 52px
</style>