<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" /> - mixin: {{num}}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

import {myMixin} from '@/mixin/module/mixinTest.js'
export default {
  mixins: [myMixin],
  name: "Home",
  components: {
    HelloWorld
  },
  mounted() {
    console.log('are you ok ????')
  }
};
</script>
