<!--  -->
<template>
    <div class="category-template">
        <header-ft :config="headerProp"></header-ft>
        <div class="category-box">
            <div class="left">
                <ul>
                    <li v-for="(item,index) in categoryData"
                        :key="item.cat_id"
                        @click="tapLv1($event,index)"
                        :class="{active : item.on}"                        
                        class="text-ellipsis">
                        {{ item.cat_name }}
                    </li>
                </ul>
            </div>
            <div class="right">
                <div v-for="(item,index) in categoryData" class="box" v-show="item.on">
                    <dl v-for="(lv2,index) in item.lv2">
                        <dt>{{lv2.cat_name}}</dt>
                        <dd v-for="(lv3,index) in lv2.lv3">
                           <router-link :to="{ name: 'goodsList',params: { cat_id : lv3.cat_id, kw : lv2.cat_name }}" class="text-ellipsis">{{ lv3.cat_name }}</router-link>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import HeaderFt from "@/components/title/HeaderFt";
export default {
    data() {
        return {
            categoryData: {},
            headerProp: {
                title: "xxx",
                fixed: true,
                left: true,
                right: true
            },
            categoryParams: {
                x: "111",
                y: "222"
            }
        };
    },
    created () {
        console.log(this.$store.state.footer)
        //this.$store.commit('setFooter',true);
    },
    methods: {
        tapLv1: function (e,index) {
            for (let i = 0; i < this.categoryData.length; i++) {
                this.$set(this.categoryData[i],"on",false);
            } 
            this.$set(this.categoryData[index],"on",true);
        }
    },
    mounted() {
        this.GetData(API.category, res => {
            this.categoryData = res.categorys;
            res.categorys[0].on = "true";
        });
    },
    components: {
        HeaderFt
    }
};
</script>
<style>
.category-box {
    overflow: hidden;
    --top: 40px;
    & .left {
        position: fixed;
        left: 0;
        top: var(--top);
        width: 23%;
        height: 100%;
        padding-bottom: var(--footBarHeight);
        overflow-y: scroll;
        /* border-right: 1px solid var(--colddd); */
        & li {
            border-bottom: 1px solid var(--colddd);
            border-right: 1px solid var(--colddd);
            font-size: ;
            text-align: center;
            padding: 0.5em 0;
            line-height: 2;
            transition: padding .3s ease;
        }
        & .active{
            padding-left: 1em;
            border-right-color:transparent; 
            color: var(--theme);
        }
    }
    & .right {
        position: absolute;
        left: 23%;
        top: var(--top);
        width: 77%;
        padding-left: .8em;
        padding-right: .8em;
        padding-bottom: var(--footBarHeight);
        & dl{
            overflow: hidden;
        }
        & dt {
            padding: .5em 0;
            font-size: var(--fsX);
        }
        & dd{
            float: left;
            width: 33.33%;
            margin-bottom: .5em;
            text-align: center;
        }
    }
}
</style>