<template>
  <div>
    <header-ft :config="headerProp"></header-ft>
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="20"
      class="goods-list-ul wm"
    >
      <router-link
        :to="{ name:'goodsDetails',params:{item_id:item.item_id}}"
        v-for="(item,index) in goodList.list"
        tag="li"
        class="fx1"
        :key="index"
        exact
      >
        <img
          v-lazy.container="item.image_default_id ? item.image_default_id : '../../../static/img/1.jpg' "
          class="max-img"
        />
        <p
          class="text-ellipsis"
          data-line="2"
        >{{ item.title }}</p>
      </router-link>
    </ul>
    <load-ing :config="loadProp"></load-ing>

  </div>
</template>

<script>
import LoadIng from "@/components/Loading";
import HeaderFt from "@/components/title/HeaderFt";
export default {
  data() {
    return {
      listParams: {
        cat_id: this.$route.params.cat_id,
        page_no: 1,
        page_size: 4
      },
      goodList: {},
      loadProp: {
        types: 3,
        tip: "加载中...",
        isShow: true
      },
      headerProp: {
        title: "休闲鞋",
        left: true,
        right: false
      },
      loading: false
    };
  },
  created() {
    console.log(this.$route.params.kw);
    this.$store.commit("setFooter", false);
    this.GetData(
      API.goodList,
      res => {
        console.log(res);
        this.goodList = res;
        this.listParams.page_no++;
      },
      this.listParams
    );
  },
  methods: {
    loadMore: function() {
      this.loading = true;
      setTimeout(() => {
        this.GetData(
          API.goodList,
          res => {
            if (this.goodList.list.length < res.pagers.total) {
              res.list.forEach(value => {
                this.goodList.list.push(value);
              });
              this.listParams.page_no++;
              this.loading = false;
            } else {
              this.loadEnd();
            }
          },
          this.listParams
        );
      }, 1000);
    },
    loadEnd: function() {
      this.loadProp.tip = "-- 别扯了 --";
      this.loading = true;
      this.loadProp.isShow = false;
      return;
    }
  },
  components: {
    LoadIng,
    HeaderFt
  }
};
</script>
<style>
img[lazy="loading"] {
  display: block;
  width: 80%;
  margin: 0 auto;
  background: var(--col999);
}
img[lazy="error"] {
  display: none;
}
.goods-list-ul {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.goods-list-ul li {
  width: 49%;
  margin-bottom: 1em;
  font-size: var(--fsL);
}
.goods-list-ul li:nth-child(2n) {
  margin-left: 2%;
}
</style>