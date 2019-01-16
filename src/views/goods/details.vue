<template>
  <div
    class="details"
    v-if="isData"
  >
    <div class="banner">
      <mt-swipe
        :auto="4000"
        v-if="banner.length !== 0"
      >
        <mt-swipe-item
          v-for="(item,index) in banner"
          :key="item.index"
        >
          <img :src="item" />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="info-box pd-center">
      <div class="flex-box">
        <div class="tt fx1">
          <p class="fsL">{{details.item.title}}</p>
        </div>
        <div class="inco">收藏</div>
      </div>
      <div class="price-box">
        <p><span class="icon">¥</span><span class="price">{{details.item.price}}</span></p>
      </div>
    </div>
    <!--  店铺 -->
    <div class="shop-inof pd-center bgeee">
      <div class="flex-box">
        <div class="img-box"><img :src="details.shop.shop_logo" /></div>
        <div class="txt-box fx1 cell-clear-border">
          <mt-cell
            :title="details.shop.shopname"
            is-link
          ></mt-cell>

        </div>
      </div>
    </div>
    <!-- tool -->
    <div class="car-tool">
      <div class="flex-box">
        <ul class="icon-box flex-box">
          <li>
            <i class="icon icon-arrow-top"></i>
            <p>客服</p>
          </li>
          <li>
            <i class="icon icon-arrow-top"></i>
            <p>购物车</p>
          </li>          
        </ul>
        <div class="btn-box">
          <mt-button>加入购物车</mt-button>
          <mt-button>立即购买</mt-button>
        </div>
      </div>
    </div>
    <!--  ge -->
    <div class="more-wrap">
      <ul class="tab-nav flex-box">
        <li
          class="fx1"
          v-for="(item,index) in nav"
          @click="changeAct(index)"
          :class="active== item.id ? 'act' :''"
        >{{item.txt}}</li>
      </ul>
      <mt-tab-container
        v-if="desc!==''"      
        v-model="active"
        swipeable
      >
        <mt-tab-container-item id="tab-container1">
          <div v-html="desc.wap_desc"></div>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          <mt-cell
            v-for="(item,index) in desc.natureProps"
            :title="item.prop_name"
            :value="item.prop_value"
          ></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
          <mt-cell
            v-for="(item,index) in desc.remark"
            :title="item"
          ></mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nav: [
        {
          txt: "图文详情",
          id: "tab-container1"
        },
        {
          txt: "详细参数",
          id: "tab-container2"
        },
        {
          txt: "备注信息",
          id: "tab-container3"
        }
      ],
      active: "tab-container1",
      isData: false,
      details: {},
      desc: {},
      banner: [],
      params: {
        item_id: this.$route.params.item_id
      }
    };
  },
  created() {
    console.log(this);
    this.GetData(
      API.goodDetail,
      res => {
        this.details = res;
        this.banner = res.item.images;
        this.isData = true;
      },
      this.params
    );
    this.getDesc()

    // console.log(this.$route.params.item_id);
  },
  mounted() {},
  computed: {},
  methods: {
    changeAct: function(index) {
      this.active = this.nav[index].id;
    },
    getDesc: function() {
      this.GetData(
        API.goodDesc,
        res => {
          this.desc = res;
        

        },
        this.params
      );
    }
  }
};
</script>

<style>
.banner {
  height: 320px;
}
.info-box {
  padding-top: 10px;
  padding-bottom: 10px;
}
.price-box {
  color: var(--theme);
}
.price-box .icon {
  font-size: var(--fsx);
}
.price-box .price {
  font-size: var(--fsXl);
}
.shop-inof {
  background: #fff;
  padding-top: 10px;
  padding-bottom: 10px;
}
.shop-inof .img-box {
}
.shop-inof .img-box img {
  display: block;
  width: 100%;
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.tab-nav {
  text-align: center;
}
.tab-nav li {
  font-size: var(--fsX);
  line-height: 2;
  border-bottom: 2px solid transparent;
}
.tab-nav .act {
  border-color: var(--theme);
}
</style>



