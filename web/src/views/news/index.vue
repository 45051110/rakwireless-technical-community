<template>
    <div class="carousel">
        <div>{{ dataList.title }}</div>
        <div>{{ dataList.author }}</div>
        <div class="editor-content" v-html="dataList.content" />
    </div>
</template>

<script>
import { getNewsDetail } from "@/api/server";
export default {
    name: "News",
    data() {
        return {
            dataList: {}
        };
    },
    created() {
        this.getInitData();
    },
    methods: {
        getInitData() {
            let tempId = this.$route.params.id;
            getNewsDetail(tempId)
                .then(res => {
                    if (res.data.status === 200) {
                        console.log(res.data);
                        this.dataList = res.data.data;
                    }
                })
                .catch(err => {});
        }
    }
};
</script>

<style scoped></style>
