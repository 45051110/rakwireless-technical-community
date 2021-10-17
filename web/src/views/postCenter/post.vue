<template>
    <div>
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="全部" name="all"></el-tab-pane>
            <el-tab-pane label="新提问" name="new"></el-tab-pane>
            <el-tab-pane label="已解决" name="solved"></el-tab-pane>
            <el-tab-pane label="典型疑问" name="typical"></el-tab-pane>
            <el-tab-pane label="热门疑问" name="hot"></el-tab-pane>
        </el-tabs>
        <el-card
            class="box-card"
            shadow="hover"
            v-for="item in dataList"
            :key="item.id"
        >
            <div class="textItem">
                <div class="contentTitle" @click="showDetail(item.id)">
                    {{ item.title }}
                    <span class="tag" v-show="item.hasPic"></span>
                </div>
                <div class="contentBody" @click="showDetail(item.id)">
                    {{ item.content }}
                </div>
                <div class="otherInfo">
                    <span class="authorBox" :title="item.author">
                        <i class="el-icon-user-solid"></i>
                        {{ item.author }}
                    </span>
                    <span style="margin: 0 10px">|</span>
                    <span>
                        <i class="el-icon-time"></i>
                        {{ item.createTime }}
                    </span>
                </div>
            </div>
        </el-card>
        <div class="paginationBox">
            <el-pagination
                background
                layout="prev, pager, next"
                :total="total"
                @current-change="handleCurrentChange"
            >
            </el-pagination>
        </div>
    </div>
</template>

<script>
import { getAnswerList } from "@/api/server";
export default {
    name: "Post",
    data() {
        return {
            activeName: "first",
            dataList: [],
            total: 0,
            currentPage: 1,
            pageSize: 10,
            type: "all"
        };
    },
    created() {
        this.getInitData();
    },
    methods: {
        handleClick(tab, event) {
            this.type = tab.name;
            this.getInitData();
        },
        getInitData() {
            let param = {};
            param.currentPage = this.currentPage;
            param.pageSize = this.pageSize;
            param.type = this.type;
            getAnswerList(param)
                .then(res => {
                    if (res.data.status === 200) {
                        console.log(res.data);
                        this.dataList = res.data.data;
                        this.total = res.data.total;
                    }
                })
                .catch(err => {});
        },
        handleCurrentChange(val) {
            this.currentPage = val;
            this.getInitData();
        },
        showDetail(id) {
            this.$router.push({
                path: "/blog/" + id
            });
        }
    }
};
</script>

<style scoped>
.box-card {
    margin-bottom: 5px;
}
.textItem {
    cursor: pointer;
}
.contentTitle {
    display: inline-block;
    vertical-align: middle;
    color: #005aa2;
    font-size: 16px;
}
.contentBody {
    color: #333;
    word-break: break-all;
    font-size: 14px;
}
.otherInfo {
    line-height: 20px;
    font-size: 13px;
    color: #999;
    margin-bottom: 5px;
}
.tag {
    background-position: -350px 0px;
    width: 20px;
    height: 19px;
    display: inline-block;
    padding: 2px 4px;
    border-radius: 2px;
    font-size: 12px;
    vertical-align: middle;
    background-image: url(../../assets/icons-bbs-new.png?v=1631631814000);
}
.otherInfo span {
    overflow: hidden;
    display: inline-block;
    margin-top: 10px;
}
.authorBox {
    width: 130px;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.paginationBox {
    margin-top: 20px;
}
</style>
