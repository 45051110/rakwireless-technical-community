<template>
    <div class="container">
        <el-row :gutter="15">
            <el-col :span="12">
                <div class="grid-content bg-purple-dark">
                    <Carousel></Carousel>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple-dark">
                    <KeySectors></KeySectors>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple-dark">
                    <SmartRobot></SmartRobot>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <Raknews></Raknews>
                </div>
            </el-col>
        </el-row>
        <div></div>
    </div>
</template>

<script>
import Carousel from "./carousel";
import KeySectors from "./keySectors";
import SmartRobot from "./smartRobot";
import Raknews from "./raknews";

export default {
    name: "Home",
    components: {
        Carousel,
        KeySectors,
        SmartRobot,
        Raknews
    },
    data() {
        return {};
    },
    //方法
    methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    background-color: #fff;
}
</style>
