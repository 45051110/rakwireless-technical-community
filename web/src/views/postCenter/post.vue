<template>
    <div>
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="新提问(12332)" name="first"></el-tab-pane>
            <el-tab-pane label="已解决(213123)" name="second"></el-tab-pane>
            <el-tab-pane label="典型疑问(21213)" name="third"></el-tab-pane>
            <el-tab-pane label="热门疑问(213123)" name="fourth"></el-tab-pane>
        </el-tabs>
        <el-card class="box-card" shadow="hover">
            <div v-for="o in 4" :key="o" class="text item">
                {{ "列表内容 " + o }}
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    name: "Post",
    data() {
        return { activeName: "first" };
    },
    handleClick(tab, event) {
        console.log(tab, event);
    }
};
</script>

<style scoped></style>
