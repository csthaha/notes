<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul v-for="(item, index) in list" :key="index">
      <li>{{ item.index }}-{{ item.value }} mixin: {{ num }}</li>
    </ul>

    <div class="about-vuex">
      <h2>vuex 模块化使用 mapState, mapGetters, mapMutations</h2>
      <ul>
        <h3 @click="modifyName">{{moduleAName}}: {{moduleADesc}}</h3>
        <li v-for="(item, index) in moduleAList" :key="index">{{index}}--{{item}}</li>
        <h4>过滤: {{filterList}}</h4>
      </ul>
    </div>
  </div>
</template>

<script>
import { myMixin } from '@/mixin/module/mixinTest.js'

import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
  mixins: [myMixin],
  data() {
    return {}
  },

  // v-for 遍历避免使用 v-if ，v-for 的优先级 比 v-if 的高，所以每一次都会遍历整个数组
  // 有必要时使用  computed。
  computed: {
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
        }
      ].filter((item) => {
        return item.show
      })
    },

    ...mapState(
      // 获取 state 中的数据可以通过 mapState 辅助函数获取, 也可 直接获取 this.$store.state.moduleA
      {moduleAList: state => state.moduleA.moduleAList},
    ),
    // 多个module 数据需要 分开导入.
    ...mapState({
      moduleAName: state => state.moduleA.moduleAName
    }),
    ...mapState({
      moduleADesc: state => state.moduleA.moduleADesc
    }),

    ...mapGetters({
      filterList: 'filterList'
    })

  },
  created() {
    this.num++ // 混入对象 mixin 中的 数据

    this.func_self() // 组件中的方法
    this.func_mixin() // 混入对象 mixin 中的方法

    console.log('0000', this.$store)
    // 模块化 vuex 允许我们将 store 分割成模块 module ,每个模块拥有自己的 state...等. 我们需要带上模块名
    console.log('this is moduleA state: ', this.$store.state.moduleA)
  },
  methods: {
    func_self() {
      console.log('func from About')
    },

    // 获取 mutation 中的方法可以通过 mapMutation 辅助函数获取, 也可直接获取
    ...mapMutations({
      moduleAModifyName: 'modifyName'
    }),
    modifyName() {
      // this.moduleAModifyName('cst')
      console.log('------')
      // this.$store.commit('modifyName', {name: 'cst'})
      this.moduleAModifyName({name: 'ccc'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.about-vuex
  margin-top 100px
</style>
