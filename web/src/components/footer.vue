<template>
    <div class="footer">
        <div>瑞科慧联(RAK)新闻中心 © 2021</div>
        <div>Published with Ghost</div>
    </div>
</template>

<script>
export default {
    name: "Footer",
    data() {
        return {};
    },
    methods: {
        handleSelect() {}
    }
};
</script>
<style lang="less" scope>
.footer {
    width: calc(100vw - 100% + 1220px) !important;
    text-align: center;
    border-top: 1px solid #ddd;
    padding: 40px;
    background: #e5e5e5;
    margin: 0 auto;
}
.footer > div {
    margin-top: 15px;
}
// @media screen and (max-width: 720px) and (min-width: 320px) {
//     .footer {
//         background-color: #000;
//     }
// }
</style>
