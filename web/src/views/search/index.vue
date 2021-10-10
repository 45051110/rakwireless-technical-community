<template>
    <div class="container">
        <div class="searchDiv">
            <el-input
                placeholder="请输入内容"
                v-model="input3"
                class="input-with-select"
            >
                <el-button slot="append" icon="el-icon-search">搜索</el-button>
            </el-input>
            <div class="hotKey">
                热词：
                <span v-for="item in hotKey" :key="item">{{ item }}</span>
            </div>
        </div>
        <div class="searchList">
            <search-list></search-list>
        </div>
    </div>
</template>

<script>
import SearchList from "./searchList";

export default {
    name: "Search",
    components: {
        SearchList
    },
    data() {
        return {
            hotKey: [
                "零信任",
                "产品调研",
                "全网行为管理",
                "策略路由",
                "数据库",
                "上网策略",
                "测试",
                "规则库",
                "aCMP"
            ]
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.searchDiv {
    background: #fff;
    padding: 30px;
}
.hotKey {
    font-weight: 600;
    padding: 12px 0;
    font-size: 12px;
}
.hotKey span {
    margin-right: 15px;
    cursor: pointer;
    font-weight: 400;
    color: #6f6f6f;
}
.hotKey span:hover {
    color: #00539f;
}
.searchList {
    margin-top: 15px;
    background: #fff;
}
</style>
