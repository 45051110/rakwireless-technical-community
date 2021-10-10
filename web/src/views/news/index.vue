<template>
    <div class="container">
        <h2 class="title">{{ dataList.title }}</h2>
        <div class="author">
            <strong>
                <span>{{ dataList.author }}</span>
                •
                <span>{{ dataList.releaseTime }}</span>
            </strong>
        </div>
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

<style scoped>
.title,
.author {
    text-align: center;
}
.author {
    margin-bottom: 60px;
}
.editor-content {
    padding: 0 30px;
}
</style>
