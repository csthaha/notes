<template>
  <div class="js-masonry">
    <div class="masonry-img" id="box">
      <div class="item" v-for="(item, index) in imgList" :key="index">
        <img :src="item.url" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>

<script>
var gap = 10 // 定义列之间的间隙大小
import imgList from './imgList'
export default {
  data() {
    return {
      imgList: [...imgList, ...imgList, ...imgList, ...imgList, ...imgList, ...imgList]
    }
  },
  methods: {
    getItems() {
      var box = document.getElementById('box')
      var items = box.children
      return items
    },
    waterFall() {
      // 确定列数 = 页面宽度 / 图片宽度
      var items = this.getItems()
      var pageWidth = this.getClient().width
      var itemWidth = items[0].offsetWidth
      var cloumns = Math.floor(pageWidth / (itemWidth + gap))

      var arr = []
      for (var i = 0; i < items.length; i++) {
        // 确定第一行
        if (i < cloumns) {
          items[i].style.top = 0
          items[i].style.left = i * (itemWidth + gap) + 'px'
          // 将第一行高度存入数组
          arr.push(items[i].offsetHeight)
        } else {
          //   其他行
          // 找出数组中最小高度 和 它的索引
          var minHeight = arr[0]
          var index = 0
          for (var j = 0; j < arr.length; j++) {
            if (minHeight > arr[j]) {
              minHeight = arr[j]
              index = j
            }
          }
          // 设置下一行的第一个盒子位置
          //   top 值就是最小列的高度 + gap
          items[i].style.top = arr[index] + gap + 'px'
          //left 就是最小列距离左边的距离
          items[i].style.left = items[index].offsetLeft + 'px'

          //   修改最小列的高度
          // 最小列的高度 = 当前自己的高度 + 拼接过来的高度 + 间隙高度
          arr[index] = arr[index] + items[i].offsetHeight + gap
        }
      }
    },

    getClient() {
        return {
            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        }
    }
  },
  mounted() {
    //   this.$nextTick(() => {
    //       this.getItems();
    //   })
    // this.getItems()
    this.waterFall()
  }
}
</script>

<style lang="stylus" scoped>
*
  margin 0
  padding 0
  position relative

img
  width 220px
  display block

.item
  box-shadow 2px 2px 2px #999
  position absolute
</style>