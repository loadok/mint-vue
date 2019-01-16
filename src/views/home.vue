<!--  -->
<template>
    <div>
        <!-- 轮播图 -->
        <div class="index-banner">
            <mt-swipe :auto="4000" v-if="silder.length !== 0">
                <mt-swipe-item v-for="(item,index) in silder.params.pic" :key="item.index">
                    <img :src="item.imagesrc" />
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <!-- 图标导航 -->
        <flex-icon-nav :iconNav="iconNav.params.pic" v-if="iconNav.length !== 0" class="wm"></flex-icon-nav>
        <mt-button type="primary" @click="v">primary</mt-button>

    </div>
</template>

<script>
import FlexIconNav from "@/components/FlexIconNav.vue";
import { Swipe, SwipeItem } from "mint-ui";
export default {
    data() {
        return {
            indexParams: {
                tmpl: "index"
            },
            indexData: {},
            silder: [],
            iconNav: []
        };
    },

    components: {
        FlexIconNav
    },
    created() {
        this.$store.commit("setFooter", true);
        let t =  this.$toast({
            message:"123"
        })


        if (Object.keys(this.indexData).length == 0) {
            this.GetData(
                API.index,
                res => {
                    this.indexData = res;
                    this.indexData.modules.map((val, index) => {
                        if (val.widget == "slider" && val.order_sort == 1) {
                            this.silder = val;
                            console.log(res);
                        }
                        if (val.widget == "icons_navf") {
                            this.iconNav = val;
                        }
                    });
                },
                this.indexParams
            );
        }
    },
    methods: {
        v() {
            this.$store.commit("show", "xxx");
        }
    },
    computed: {}
};
</script>
<style>
.index-banner {
    height: calc(4em + 20vh);
}
</style>