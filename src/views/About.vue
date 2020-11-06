<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul v-for="(item, index) in list" :key="index">
      <li>
        {{item.index}}-{{item.value}}
        mixin: {{num}}
      </li>
    </ul>
  </div>
</template>

<script>

import {myMixin} from '@/mixin/module/mixinTest.js'

export default {
  mixins: [myMixin],
  data() {
    return {
    }
  },

  // v-for 遍历避免使用 v-if ，v-for 的优先级 比 v-if 的高，所以每一次都会遍历整个数组
  // 有必要时使用  computed。
  computed:{
    list() {
      return [
        {
          index: 1,
          value: 'cst',
          show: true
        },
        {
          index: 2,
          value: 'cgf',
          show: false
        },
      ].filter((item) => {
        return item.show
      })
    }
  },
  created() {
    this.num++          // 混入对象 mixin 中的 数据

    this.func_self()    // 组件中的方法
    this.func_mixin()   // 混入对象 mixin 中的方法
  },
  methods: {
    func_self() {
      console.log("func from About")
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
