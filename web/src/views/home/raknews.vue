<template>
    <div class="rakNews">
        <el-row :gutter="40">
            <el-col :span="24">
                <div class="newsCenter">新闻中心</div>
            </el-col>
            <div class="itemList">
                <el-col :span="8" v-for="item in dataList" :key="item.id">
                    <el-card shadow="hover" class="rakNewsItem">
                        <img :src="item.img" alt="" class="rakNewsItemImg" />
                        <div class="rakNewsItemTile">
                            <a
                                href="https://news.rakwireless.com.cn/tag/helium-blockchain/"
                                class="articleNameBox"
                                >{{ item.author }}</a
                            >
                            <h3
                                class="m-article-card__title js-article-card-title"
                            >
                                {{ item.title }}
                            </h3>
                            <div class="timeBox">
                                <span>{{ item.releaseTime }}</span>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </div>
        </el-row>
    </div>
</template>

<script>
import { getNews } from "@/api/server";
export default {
    name: "Raknews",
    data() {
        return {
            dataList: []
        };
    },
    created() {
        this.getInitData();
    },
    methods: {
        getInitData() {
            getNews()
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
.itemList > .el-col {
    margin-top: 40px;
}
.rakNews {
    background: #fff;
    overflow: hidden;
    margin-top: 15px;
    cursor: pointer;
}
.keySectorItem {
    height: 140px;
}
.rakNewsItemImg {
    height: 220px;
    width: 100%;
}
.articleNameBox {
    color: #293951;
    letter-spacing: 0.2px;
    font-weight: 600;
    width: calc(100% - 40px);
    min-height: 20.2px;
    max-height: 20.2px;
    font-size: 14px;
    line-height: 1.3;
    white-space: nowrap;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
.timeBox {
    letter-spacing: 0.2px;
    font-size: 0.875rem;
}
.newsCenter {
    padding-left: 10px;
    line-height: 36px;
    padding-top: 10px;
    color: #00539e;
    border-bottom: solid 6px #00539e;
    width: 80px;
}
.marginBox {
    height: 20px;
}
</style>
