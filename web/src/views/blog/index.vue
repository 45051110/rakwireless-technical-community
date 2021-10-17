<template>
    <div class="container">
        <h2 class="title">{{ dataList.title }}</h2>
        <div class="author">
            <strong>
                <span>{{ dataList.author }}</span>
                •
                <span>{{ dataList.releaseTime }}</span>
            </strong>
        </div>
        <div class="editor-content" v-html="dataList.content" />
        <div>
            <comment :commentList="commentList"></comment>
        </div>
    </div>
</template>

<script>
import { getNewsDetail } from "@/api/server";
import comment from "hbl-comment";
export default {
    name: "Blog",
    data() {
        return {
            dataList: {},
            commentList: [
                {
                    id: "111",
                    commentUser: {
                        id: "1111",
                        nickName: "aaa",
                        avatar:
                            "https://bbs.sangfor.com.cn/uc_server/avatar.php?uid=159452&size=middle"
                    },
                    targetUser: {
                        id: "222",
                        nickName: "bbb",
                        avatar:
                            "https://bbs.sangfor.com.cn/uc_server/avatar.php?uid=133507&size=middle"
                    },
                    content: "好的",
                    createDate: "2021-03-03",
                    childrenList: [
                        {
                            id: "1231313",
                            commentUser: {
                                id: "432424",
                                nickName: "bbb",
                                avatar:
                                    "https://bbs.sangfor.com.cn/uc_server/avatar.php?uid=133507&size=middle"
                            },
                            targetUser: {
                                id: "12343245435",
                                nickName: "aaa",
                                avatar:
                                    "https://bbs.sangfor.com.cn/uc_server/avatar.php?uid=133507&size=middle"
                            },
                            content: "好的",
                            createDate: "2021-03-03"
                        }
                    ]
                },
                {
                    id: "111",
                    commentUser: {
                        id: "1111",
                        nickName: "aaa",
                        avatar:
                            "https://bbs.sangfor.com.cn/uc_server/avatar.php?uid=159452&size=middle"
                    },
                    targetUser: {
                        id: "222",
                        nickName: "bbb",
                        avatar:
                            "https://bbs.sangfor.com.cn/uc_server/avatar.php?uid=133507&size=middle"
                    },
                    content: "不错的文章",
                    createDate: "2021-03-03"
                }
            ]
        };
    },
    components: {
        comment
    },
    created() {
        this.getInitData();
    },
    methods: {
        getInitData() {
            let tempId = this.$route.params.id;
            getNewsDetail(tempId)
                .then(res => {
                    if (res.data.status === 200) {
                        console.log(res.data);
                        this.dataList = res.data.data;
                    }
                })
                .catch(err => {});
        }
    }
};
</script>

<style scoped>
.title,
.author {
    text-align: center;
}
.author {
    margin-bottom: 60px;
}
.editor-content {
    padding: 0 30px;
}
</style>
