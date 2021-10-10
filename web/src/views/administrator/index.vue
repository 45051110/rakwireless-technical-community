<template>
    <div class="container">
        <div class="btnBox">
            <el-input v-model="username" placeholder="请输入用户名"></el-input>
            <el-input
                placeholder="请输入密码"
                v-model="password"
                show-password
            ></el-input>
            <el-button type="success" v-on:click="loginMethod">登 录</el-button>

            <p>
                <router-link to="/register">没有账号？马上注册</router-link>
            </p>
        </div>
    </div>
</template>
<script>
import { login } from "@/api/server";
export default {
    name: "Administrator",
    data() {
        return {
            username: "",
            password: ""
        };
    },
    methods: {
        loginMethod() {
            let param = {};
            param.username = this.username;
            param.password = this.password;

            login(param)
                .then(res => {
                    if (res.data.status === 200) {
                        // if (res.data.message === "success") {
                        //     this.registerSuccess = true;
                        //     this.registerResult = "注册成功!";
                        //     this.registerIcon = "success";
                        // } else {
                        //     this.registerSuccess = true;
                        //     this.registerResult = "注册失败!";
                        //     this.registerIcon = "error";
                        // }
                    }
                })
                .catch(err => {});
        }
    }
};
</script>
<style lang="less" scoped>
.container {
    background: transparent;
}
.btnBox {
    padding: 60px 0;
    width: 400px;
    margin: 0 auto;
    text-align: center;
    .el-input {
        margin-bottom: 20px;
    }
    button {
        width: 400px;
        font-size: 18px;
    }
}

p {
    color: red;
    text-align: center;
}
</style>
