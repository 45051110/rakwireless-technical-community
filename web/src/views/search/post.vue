<template>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="新提问(12332)" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="已解决(213123)" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="典型疑问(21213)" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="热门疑问(213123)" name="fourth"
            >定时任务补偿</el-tab-pane
        >
    </el-tabs>
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
