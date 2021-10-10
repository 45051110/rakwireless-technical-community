<template>
    <div class="container">
        <div class="btnBox" v-if="!registerSuccess">
            <el-input
                v-model="username"
                clearable
                placeholder="请输入用户名"
            ></el-input>
            <el-input
                placeholder="请输入密码"
                v-model="password"
                clearable
                show-password
            ></el-input>
            <el-button type="success" v-on:click="registerMethod">
                注 册
            </el-button>

            <p>
                <router-link to="/login">已有账号？马上登录</router-link>
            </p>
        </div>
        <div v-if="registerSuccess">
            <el-result
                :icon="registerIcon"
                :title="registerResult"
                :subTitle="
                    registerIcon === 'success'
                        ? '请点击按钮重新登录'
                        : '请点击按钮重新注册'
                "
            >
                <template slot="extra">
                    <router-link
                        to="/login"
                        v-if="registerIcon === 'success' ? true : false"
                    >
                        <el-button type="primary" size="medium">
                            登录
                        </el-button>
                    </router-link>
                    <el-button
                        v-if="registerIcon === 'success' ? false : true"
                        type="primary"
                        size="medium"
                        @click="changeRegisterResult()"
                    >
                        返回
                    </el-button>
                </template>
            </el-result>
        </div>
    </div>
</template>
<script>
import { register } from "@/api/server";
export default {
    name: "Register",
    data() {
        return {
            username: "",
            password: "",
            registerSuccess: false,
            registerResult: "",
            registerIcon: ""
        };
    },
    methods: {
        registerMethod() {
            let param = {};
            param.username = this.username;
            param.password = this.password;

            register(param)
                .then(res => {
                    if (res.data.status === 200) {
                        if (res.data.message === "success") {
                            this.registerSuccess = true;
                            this.registerResult = "注册成功!";
                            this.registerIcon = "success";
                        } else {
                            this.registerSuccess = true;
                            this.registerResult = "注册失败!";
                            this.registerIcon = "error";
                        }
                    }
                })
                .catch(err => {});
        },
        changeRegisterResult() {
            this.registerSuccess = false;
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
