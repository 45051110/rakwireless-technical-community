<template>
    <div class="navBox">
        <div class="navbar">
            <router-link to="/home">
                <img src="@/assets/logo.png" class="logoImg" />
            </router-link>
            <el-menu
                :default-active="activeIndex2"
                class="elNav"
                mode="horizontal"
                @select="handleSelect"
                background-color="#006ac6"
                text-color="#fff"
                active-text-color="#fff"
            >
                <el-submenu index="1">
                    <template slot="title">知识库</template>
                    <el-menu-item
                        index="2-1"
                        @click="
                            openLink(
                                'https://docs.rakwireless.com.cn',
                                '_blank'
                            )
                        "
                        >文档中心</el-menu-item
                    >
                    <el-menu-item
                        index="2-2"
                        @click="
                            openLink(
                                'https://docs.rakwireless.com.cn/Knowledge-Hub/Learn',
                                '_blank'
                            )
                        "
                        >知识学习</el-menu-item
                    >
                    <el-menu-item
                        index="2-3"
                        @click="
                            openLink(
                                'https://docs.rakwireless.com.cn/Application-Note',
                                '_blank'
                            )
                        "
                        >应用笔记</el-menu-item
                    >
                    <el-menu-item
                        index="2-4"
                        @click="
                            openLink(
                                'https://docs.rakwireless.com.cn/Product-Terms-and-Abbreviations',
                                '_blank'
                            )
                        "
                        >产品术语/缩略语</el-menu-item
                    >
                    <!-- <el-submenu index="2-4">
              <template slot="title">选项4</template>A
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu> -->
                </el-submenu>
                <el-menu-item index="2">
                    <router-link to="/postCenter">
                        问答
                    </router-link>
                </el-menu-item>
                <el-menu-item index="3">
                    <router-link to="/download"
                        >下载中心</router-link
                    ></el-menu-item
                >
                <el-menu-item
                    index="4"
                    @click="
                        openLink(
                            'https://docs.rakwireless.com.cn/RUI',
                            '_blank'
                        )
                    "
                    >RAK服务</el-menu-item
                >
            </el-menu>
            <div class="loginBox">
                <span to="/login" @click="logInOrOut()">
                    {{ loginWords }}
                </span>
                <span class="ml10">
                    <router-link to="/register">注册</router-link>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import { getToken, removeToken } from "@/utils/auth";
export default {
    name: "Nav",
    data() {
        return {
            activeIndex: "1",
            activeIndex2: "1",
            loginWords: "登录"
        };
    },
    methods: {
        init() {
            if (getToken()) {
                this.loginWords = "退出";
            } else {
                this.loginWords = "登录";
            }
        },
        handleSelect(key, keyPath) {},
        openLink(url, opt = "_self") {
            window.open(url, opt);
        },
        logInOrOut() {
            if (this.loginWords === "退出") {
                removeToken();
                this.$router.push({
                    path: "/home"
                });
            } else {
                this.$router.push({
                    path: "/login"
                });
            }
        }
    },
    created() {
        this.init();
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navBox {
    background: #006ac6;
}
.navbar {
    width: calc(100vw - 100% + 1220px) !important;
    margin: 0 auto;
    position: relative;
}
.logoImg {
    height: 60px;
    width: 130px;
    position: absolute;
}
.elNav {
    width: calc(100% - 130px);
    margin-left: 130px;
}
.loginBox {
    color: #fff;
    width: 80px;
    position: absolute;
    right: 0;
    top: 0;
    line-height: 60px;
    text-align: center;
}
.loginBox span {
    cursor: pointer;
}
.el-menu-item,
.el-submenu > div,
.is-active,
.is-active > div {
    border-bottom: none !important;
}
.is-active {
    background-color: #0a569d !important;
}
.is-active > div {
    background-color: #0a569d !important;
}
</style>
<style>
.el-menu--popup-bottom-start {
    background: #fff !important;
    border-radius: 10px !important;
    color: #424242 !important;
}
.el-menu--popup > .el-menu-item {
    background: #fff !important;
    color: #000 !important;
}
.el-menu--popup > .el-menu-item:hover {
    color: #3498db !important;
}
</style>
