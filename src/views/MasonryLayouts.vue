<template>
  <div class="MasonryLayout">
    <div class="masonry" >
      <div class="item" v-for="(item, index) in imgList" :key="index">
        <img class="itemImg" :src="item.url" alt="">
        <div class="userInfo">
            <img :src="item.avatar" alt="" class="avatar">
            <span class="userName">{{item.userName}}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import imgList from './imgList'
export default {
  data() {
    return {
        imgList: [
            ...imgList,
            ...imgList,
            ...imgList,
            ...imgList,
            ...imgList,
            ...imgList
        ]
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
// column-count 设置列数
// column-gap 设置列与列之间的距离
// column-width 设置每列的的宽度
// break-inside 
//     auto  指定既不强制也不禁止元素内的页/列中断。
//     avoid  指定避免元素内的分页符。
//     avoid-page  指定避免元素内的分页符。    
//     avoid-column 指定避免元素内的列中断。   
//     avoid-region  指定避免元素内的区域中断。

    @media screen and (min-width: 400px) 
        .masonry
            column-count 3
    @media screen and (min-width: 800px) 
        .masonry
            column-count 5
    @media screen and (min-width: 1200px) 
        .masonry
            column-count 7

.MasonryLayout
    background #e5e5e5
    .masonry
        // column-count 5
        column-width calc(100% / 5)
        width 100%
        margin 0 auto
        column-gap 20px
        .item
            margin-bottom 10px
            break-inside avoid
            background #fff
            .itemImg
                width 100%
                vertical-align middle
            .userInfo
                padding 5px 10px
                display flex
                justify-content center
                align-items center
                .avatar
                    vertical-align middle
                    width 30px
                    height 30px
                    border-radius 50%
                .userName
                    margin-left 5px
                    flex 1
                    display inline-block
                    font-size 10px
                    overflow hidden
                    white-space nowrap
                    text-overflow ellipsis
                    
</style>