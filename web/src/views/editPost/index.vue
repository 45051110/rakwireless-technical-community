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
            debugger;
            if (!value) {
                this.$message({
                    message: rule.field + "为必传项",
                    type: "error"
                });
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
            if (
                this.postForm.content.length === 0 ||
                this.postForm.title.length === 0
            ) {
                this.$message({
                    message: "请填写必要的标题和内容",
                    type: "warning"
                });
                return;
            }
            this.$message({
                message: "保存成功",
                type: "success",
                showClose: true,
                duration: 1000
            });
            this.postForm.status = "draft";
        },
        submitForm() {
            this.$refs.postForm.validate(valid => {
                createPost(this.postForm)
                    .then(res => {
                        if (res.data.status === 200) {
                            console.log(res.data);
                            this.dataList = res.data.data;
                        }
                    })
                    .catch(err => {});
                if (valid) {
                    this.loading = true;
                    this.$notify({
                        title: "成功",
                        message: "发布文章成功",
                        type: "success",
                        duration: 2000
                    });
                    this.postForm.status = "published";
                    this.loading = false;
                } else {
                    console.log("error submit!!");
                    return false;
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
    height: calc(100% - 305px);
}
.editor-content {
    margin-top: 20px;
}
</style>
