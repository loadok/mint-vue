<template>
    <mt-tabbar :fixed="true">
      <mt-tab-item id="首页">
        <router-link to="/">
        <i class="iconfont icon-shouye"></i>
        <p>外卖</p>
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="分类">
        <router-link to="/category">
        <i class="iconfont icon-fenlei"></i>
        <p>分类</p>
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="购物车">
        <i class="iconfont icon-gouwuche"></i>
        <p>购物车</p>
      </mt-tab-item>
      <mt-tab-item id="我的">
        <i class="iconfont icon-wodexian"></i>
        <p>我的</p>
      </mt-tab-item>
    </mt-tabbar>
</template>

<script>
import { Tabbar, TabItem } from "mint-ui";
export default {
  data () {
    return {
    };
  },
  methods: {

  },
  components: {}
}

</script>
<style scoped>
    .mint-tabbar {
        & .mint-tab-item-label{
            font-size: 1em;
        }
        & .iconfont{
            font-size: 2em;
        }
        & p{
            margin-top: .5em;
        }
        & .router-link-exact-active{
          color: var(--theme);
        }
    }
</style>