<template>
    <div class="keySectors">
        <el-col :span="12">
            <el-card shadow="hover" class="keySectorItem">
                <div
                    @click="
                        openLink(
                            'https://docs.rakwireless.com.cn/Knowledge-Hub/Learn/',
                            '_blank'
                        )
                    "
                >
                    <div class="keySectorsImg">
                        <img src="@/assets/qanda.png" alt="" />
                    </div>
                    <div class="keySectorItemTile">知识库</div>
                </div>
            </el-card>
        </el-col>
        <el-col :span="12">
            <el-card shadow="hover" class="keySectorItem">
                <div
                    @click="
                        openLink(
                            'https://docs.rakwireless.com.cn/Introduction/',
                            '_blank'
                        )
                    "
                >
                    <div class="keySectorsImg">
                        <img src="@/assets/article.png" alt="" />
                    </div>
                    <div class="keySectorItemTile">文档中心</div>
                </div>
            </el-card>
        </el-col>
        <el-col :span="12">
            <el-card shadow="hover" class="keySectorItem">
                <div
                    @click="
                        openLink(
                            'https://docs.rakwireless.com.cn/Knowledge-Hub/FAQs/General/',
                            '_blank'
                        )
                    "
                >
                    <div class="keySectorsImg">
                        <img src="@/assets/articlecnter.png" alt="" />
                    </div>
                    <div class="keySectorItemTile">技术文章</div>
                </div>
            </el-card>
        </el-col>
        <el-col :span="12">
            <el-card shadow="hover" class="keySectorItem">
                <div
                    @click="
                        openLink(
                            'https://docs.rakwireless.com.cn/Knowledge-Hub/FAQs/General/',
                            '_blank'
                        )
                    "
                >
                    <div class="keySectorsImg">
                        <img src="@/assets/knowledge.png" alt="" />
                    </div>
                    <div class="keySectorItemTile">
                        FAQ
                    </div>
                </div>
            </el-card>
        </el-col>
    </div>
</template>

<script>
export default {
    name: "KeySectors",
    data() {
        return {};
    },
    methods: {
        openLink(url, opt = "_self") {
            window.open(url, opt);
        }
    }
};
</script>

<style lang="less" scoped>
.keySectors {
    background: #fff;
    overflow: hidden;
}
.keySectorItem {
    height: 120px;
    margin-top: 10px;
    margin-bottom: 10px;
    cursor: pointer;
}
.keySectorsImg {
    text-align: center;
    height: 50px;
    line-height: 50px;
}
.keySectorsImg img {
    width: 40%;
}
.keySectorItem:hover {
    img {
        width: 60%;
    }
    color: #0c6bc4;
}
.keySectorItemTile {
    text-align: center;
    height: 40px;
    line-height: 40px;
}
</style>
