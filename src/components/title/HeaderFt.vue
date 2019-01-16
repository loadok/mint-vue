<!--  -->
<template>
  <div class="header-fixed">
      <mt-header :fixed="config.fixed" :title="config.title">
        <div slot="left" v-if="config.left">
            <mt-button icon="back"></mt-button>
        </div>
        <mt-button icon="more" slot="right" v-if="config.right"></mt-button>
      </mt-header>
  </div>
</template>

<script>
import { Header } from 'mint-ui'
export default {
  props:['config'],
  data () {
    return {
    };
  },
  methods: {},
  components: {
      
  }

}

</script>
<style>

</style>