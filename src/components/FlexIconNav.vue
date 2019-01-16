<template>
    <ul class="flex-icon-nav">
        <li v-for="(item,index) in iconNav">
            <img :src="item.imagesrc" />
            <p class="text-ellipsis">{{ item.tag }}</p>
        </li>
    </ul>
</template>

<script>
export default {
    props: ["iconNav"],
    data() {
        return {};
    },
    components: {},
    methods: {}
};
</script>
<style scoped>
.flex-icon-nav {
    display: flex;
    padding: 1em 0;
    & li {
        flex: 1;
        text-align: center;
        margin-right: 1em;
    }
    & li:last-child {
        margin-right: 0;
    }
    & img {
        display: inline-block;
        max-width: 90%;
    }
}
p {
    font-size: 1.2em;
    margin-top: .2em;
}
</style>