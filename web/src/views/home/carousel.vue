<template>
    <div class="carousel">
        <el-carousel trigger="click" height="280px">
            <el-carousel-item v-for="item in imgs" :key="item.id">
                <img :src="item.src" alt="" class="rakNewsItemImg" />
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
import { getCarousel } from "@/api/server";
export default {
    name: "Carousel",
    data() {
        return {
            activeIndex: "1",
            activeIndex2: "1",
            imgs: []
        };
    },
    created() {
        this.getListImg();
    },
    methods: {
        getListImg() {
            getCarousel()
                .then(res => {
                    if (res.data.status === 200) {
                        this.imgs = res.data.data;
                    }
                })
                .catch(err => {});
        }
    }
};
</script>

<style scoped>
.rakNewsItemImg {
    width: 100%;
    height: 100%;
}
</style>
