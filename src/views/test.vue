<!--  -->
<template>
  <div>
      <li v-for="item in list">
          <img v-lazy="item" />
      </li>
  </div>
</template>

<script>
import { Lazyload } from 'mint-ui';

export default {
  data () {
    return {
        list:["../../static/img/1.jpg","../../static/img/2.jpg","../../static/img/3.jpg",
        "../../static/img/1.jpg","../../static/img/5.jpg","../../static/img/4.jpg"
        ]
    };
  },

  methods: {},
  components: {}
}

</script>
<style>
imge[lazy=loading] {
  width: 30px;
  height: 30px;
  background: #000;
  margin: auto;
}
</style>