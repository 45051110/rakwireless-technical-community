<template>
    <div>
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="全部内容" name="first"> </el-tab-pane>
            <el-tab-pane label="博客" name="second"></el-tab-pane>
            <el-tab-pane label="问答" name="third"></el-tab-pane>
            <el-tab-pane label="资料" name="fourth"></el-tab-pane>
            <el-tab-pane label="案例" name="fifth"></el-tab-pane>
            <el-tab-pane label="软件" name="sixth"></el-tab-pane>
            <el-tab-pane label="话题" name="seventh"></el-tab-pane>
            <el-tab-pane label="用户" name="eighth"></el-tab-pane>
        </el-tabs>
        <div v-for="item in listData" :key="item.id" class="itemBox">
            <div>
                <span v-if="item.keyWord !== ''"> 【{{ item.keyWord }}】</span>
                <span>{{ item.title }}</span>
            </div>
            <div>
                {{ item.text }}
            </div>
            <div>
                <i></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SearchList",
    data() {
        return {
            activeName: "first",
            listData: [
                {
                    id: "121212",
                    keyWord: "产品调研",
                    title: "你若有需求，我们来满足",
                    text:
                        "让IT更简单、更安全、更有价值！尊敬的社区设备用户： 您好！为改进对广大设备用户的工作支持和不断优化产品体验，产品专家小组特别设定了本“产品品牌”问卷调研，共8个在线问卷，分8个产品线，希..",
                    icon: "优秀",
                    img: "",
                    author: "xiaoming",
                    releaseTime: "2021-01-21",
                    reading: 20,
                    reply: 6
                },
                {
                    id: "ssvvv",
                    keyWord: "问卷调查",
                    title: "”EDR终端防护中心”设计改版调研",
                    text:
                        "让IT更简单、更安全、更有价值！尊敬的社区设备用户： 您好！为改进对广大设备用户的工作支持和不断优化产品体验，产品专家小组特别设定了本“产品品牌”问卷调研，共8个在线问卷，分8个产品线，希..",
                    icon: "优秀",
                    img: "",
                    author: "xiaoming",
                    releaseTime: "2021-01-21",
                    reading: 20,
                    reply: 6
                },
                {
                    id: "222",
                    keyWord: "提建议，拿奖励",
                    title: "你若有需求，我们来满足",
                    text:
                        "让IT更简单、更安全、更有价值！尊敬的社区设备用户： 您好！为改进对广大设备用户的工作支持和不断优化产品体验，产品专家小组特别设定了本“产品品牌”问卷调研，共8个在线问卷，分8个产品线，希..",
                    icon: "",
                    img: "",
                    author: "xiaoli",
                    releaseTime: "2021-01-21",
                    reading: 30,
                    reply: 12
                },
                {
                    id: "ssc",
                    keyWord: "",
                    title: "你若有需求，我们来满足",
                    text:
                        "让IT更简单、更安全、更有价值！尊敬的社区设备用户： 您好！为改进对广大设备用户的工作支持和不断优化产品体验，产品专家小组特别设定了本“产品品牌”问卷调研，共8个在线问卷，分8个产品线，希..",
                    icon: "",
                    img: "",
                    author: "xiaoli",
                    releaseTime: "2021-01-21",
                    reading: 30,
                    reply: 12
                }
            ]
        };
    },
    handleClick(tab, event) {
        console.log(tab, event);
    }
};
</script>

<style scoped>
.itemBox {
    padding: 32px 0 0 22px;
}
</style>
