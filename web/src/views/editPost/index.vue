<template>
    <div class="container">
        <el-form ref="postForm" :model="postForm" :rules="rules">
            <el-row :gutter="10" style="margin-top:40px;">
                <el-col :span="12">
                    <el-form-item style="margin-bottom: 30px;" prop="title">
                        <el-input
                            v-model="postForm.title"
                            placeholder="标题(必填)"
                        >
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-input v-model="postForm.author" placeholder="作者">
                    </el-input>
                </el-col>
                <el-col :span="5" style="overflow:hidden">
                    <el-button
                        style="width:100px;float:right;marginLeft:10px"
                        v-loading="loading"
                        @click="draftForm"
                    >
                        保存草稿
                    </el-button>
                    <el-button
                        type="primary"
                        style="width:100px;float:right"
                        @click="submitForm"
                    >
                        发 帖
                    </el-button>
                </el-col>
                <el-col :span="24">
                    <el-form-item prop="content" style="margin-bottom: 30px;">
                        <Tinymce
                            ref="editor"
                            v-model="postForm.content"
                            :height="400"
                        />
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <!-- <div class="editor-content" v-html="content" /> -->
    </div>
</template>

<script>
import Tinymce from "@/components/Tinymce";
import { createPost } from "@/api/server";

export default {
    name: "EditPost",
    components: { Tinymce },
    data() {
        const validateRequire = (rule, value, callback) => {
            console.log(value);
            if (!value) {
                // this.$message({
                //     message: rule.field + "为必传项",
                //     type: "error"
                // });
                callback(new Error(rule.field + "为必传项"));
            } else {
                callback();
            }
        };
        return {
            content: "",
            postForm: {},
            loading: false,
            rules: {
                // image_uri: [{ validator: validateRequire }],
                title: [{ validator: validateRequire }],
                content: [{ validator: validateRequire }]
                // source_uri: [{ validator: validateSourceUri, trigger: "blur" }]
            }
        };
    },
    methods: {
        draftForm() {
            this.postForm.status = "draft";
            this.$refs.postForm.validate(valid => {
                if (valid) {
                    this.loading = true;
                    createPost(this.postForm)
                        .then(res => {
                            if (res.data.status === 200) {
                                console.log(res.data);
                                this.dataList = res.data.data;
                                this.$notify({
                                    title: "保存",
                                    message: "草稿已保存",
                                    type: "success",
                                    duration: 2000
                                });
                                this.loading = false;
                            }
                        })
                        .catch(err => {});
                }
            });
        },
        submitForm() {
            this.postForm.status = "published";
            this.$refs.postForm.validate(valid => {
                if (valid) {
                    this.loading = true;
                    createPost(this.postForm)
                        .then(res => {
                            if (res.data.status === 200) {
                                console.log(res.data);
                                this.dataList = res.data.data;
                                this.$notify({
                                    title: "成功",
                                    message: "发布文章成功",
                                    type: "success",
                                    duration: 2000
                                });
                                this.loading = false;
                            }
                        })
                        .catch(err => {});
                }
            });
        }
    }
};
</script>

<style scoped>
.container {
    width: calc(100vw - 100% + 1220px) !important;
    margin: 0 auto;
    margin-top: 15px;
    margin-bottom: 80px;
    height: calc(100% - 330px);
}
.editor-content {
    margin-top: 20px;
}
</style>
