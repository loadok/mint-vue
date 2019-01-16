<template>
  <div id="app">
    <router-view/>
    <div class="foot-fixed-bar" v-show="this.$store.state.footer">
      <tabber-footer></tabber-footer>
    </div>
  </div>
</template>

<script>
import TabberFooter from '@/components/TabberFooter'
export default {
    name: "App",
    data () {
      return {
        footer: ""
      }
    },
    created () {
    },
    components: {
      TabberFooter
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
}
.foot-fixed-bar{
  height: var(--footBarHeight);
}
</style>
