<template>
    <div class="container">
        <div>
            <el-row :gutter="15">
                <el-col :span="5">
                    <div>
                        <img
                            src="@/assets/search.png"
                            alt=""
                            class="searchImg"
                        />
                    </div>
                </el-col>
                <el-col :span="19">
                    <div>
                        <span class="searchTitle">查找答案 提出问题</span>
                        <span class="desWorld">
                            这里不仅有专业的工程师，更有来自世界各地的技术大牛！
                        </span>
                        <div class="searchLeft">
                            <el-input
                                placeholder="请输入问题"
                                v-model="inputValue"
                                class="input-with-select"
                            >
                                <i
                                    slot="prefix"
                                    class="el-input__icon el-icon-search"
                                ></i>
                                <!-- <el-button slot="append">搜索答案</el-button> -->
                                <!-- <el-button>发表提问</el-button> -->
                            </el-input>
                        </div>
                        <div class="searchBtn">
                            <!-- <el-button @click="openSearch()"> -->
                            <el-button @click="search()">
                                搜索答案
                            </el-button>
                            <el-button type="primary" @click="openCreatePost()">
                                发表提问
                            </el-button>
                        </div>
                        <div class="hotKey">
                            热词：
                            <span
                                v-for="item in hotKey"
                                :key="item"
                                @click="search(item)"
                                >{{ item }}</span
                            >
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="post">
            <post :searchValue="searchValue" ref="child"></post>
        </div>
    </div>
</template>

<script>
import Post from "./post";

export default {
    name: "PostCenter",
    components: {
        Post
    },
    data() {
        return {
            inputValue: "",
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
            ],
            searchValue: "111"
        };
    },
    methods: {
        // openSearch() {
        //     this.$router.push({
        //         path: "/search"
        //     });
        // },
        search(hotKey) {
            if (hotKey) {
                this.inputValue = hotKey;
            }
            this.searchValue = this.inputValue;
            setTimeout(() => {
                this.$refs.child.getInitData(this.searchValue);
            }, 100);
        },
        openCreatePost() {
            this.$router.push({
                path: "/editPost"
            });
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.searchImg {
    width: 100%;
}
.searchTitle {
    font-size: 24px;
    margin-top: 20px;
    margin-bottom: 10px;
    display: block;
    color: #333;
    text-align: center;
}
.desWorld {
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
    display: block;
}
.searchLeft,
.searchBtn {
    display: inline-block;
}
.searchBtn {
    width: 215px;
    margin-right: 10px;
}
.searchLeft {
    width: calc(100% - 230px);
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
</style>
