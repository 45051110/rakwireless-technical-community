<template>
    <div class="carousel">
        <el-carousel trigger="click" height="280px">
            <el-carousel-item v-for="item in imgs" :key="item.key">
                <img :src="item.src" alt="" class="rakNewsItemImg" />
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    name: "Carousel",
    data() {
        return {
            activeIndex: "1",
            activeIndex2: "1",
            imgs: [
                {
                    src:
                        "https://bbs.sangfor.com.cn/data/attachment/plugin/114555to6ko9m3o6klkko1.png",
                    key: "1111"
                },
                {
                    src:
                        "https://bbs.sangfor.com.cn/data/attachment/plugin/192141vytce6l0h0lwchdl.png",
                    key: "2222"
                },
                {
                    src:
                        "https://bbs.sangfor.com.cn/data/attachment/plugin/112935by1kd5i2mkerzk9g.png",
                    key: "333"
                }
            ]
        };
    },
    methods: {
        handleSelect() {}
    }
};
</script>

<style scoped>
.rakNewsItemImg {
    width: 100%;
    height: 100%;
}
</style>
