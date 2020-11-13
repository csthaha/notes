<template>
  <div id="app">
    <span id="nav" v-for="(item, index) in routesPage" :key="index">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/masonry">Masonry</router-link> -->
      <router-link :to="item.path">{{ item.name }}</router-link> |
    </span>
    <keep-alive>
      <!-- keep-alive 缓存 -->
      <router-view v-if="$route.meta.keepAlive" :key="$route.fullPath" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" :key="$route.fullPath" />
  </div>
</template>

<script>
import routes from "./router";
export default {
  data() {
    return {
      routesPage: routes
    }
  },

}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
