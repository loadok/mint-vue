<template>
    <div class="load-ing">
        <mt-spinner :type="config.types" :size="config.sizes" v-show="config.isShow"></mt-spinner>
        <span class="load-tip">{{ config.tip }}</span>
    </div>
</template>

<script>
export default {
    props: {
        config: {
            types: {
                type: Number,
                default: 3
            },
            sizes: {
                type: Number,
                default: 20
            },
            tip: {
                type: String,
                default: "加载中..."
            },
            isShow: {
                type: Boolean,
                default: false
            }
        }
    },
    data() {
        return {};
    },

    methods: {},
    components: {}
};
</script>
<style>
.load-tip,
.load-ing > span > div {
    display: inline-block;
    vertical-align: middle;
}
.load-ing {
    width: 100%;
    text-align: center;
    padding: 1em 0;
    font-size: 12px;
}
.load-tip {
    color: var(--col999);
}
.load-ing > span > div {
    margin-right: 1em;
}
</style>