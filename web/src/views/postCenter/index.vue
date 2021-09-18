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
                                v-model="input3"
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
                            <el-button>搜索答案</el-button>
                            <el-button type="primary">发表提问</el-button>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="post">
            <post></post>
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
        return {};
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    width: calc(100vw - 100% + 1220px) !important;
    margin: 0 auto;
    margin-top: 15px;
    background: #fff;
}
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
.post {
    padding: 20px;
}
</style>
