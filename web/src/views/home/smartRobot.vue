<template>
    <div class="smartRobot">
        <div class="robotTitle">
            <span class="icon">图标</span>
            <span>选择产品进入智能服务</span>
        </div>
        <div>
            <el-col :span="12">
                <div shadow="hover" class="roboItem mr10">
                    AC/BA/SG
                </div>
            </el-col>
            <el-col :span="12">
                <div shadow="hover" class="roboItem">
                    aDesk/EDS
                </div>
            </el-col>
            <el-col :span="12">
                <div shadow="hover" class="roboItem mr10">
                    AF
                </div>
            </el-col>
            <el-col :span="12">
                <div shadow="hover" class="roboItem">
                    SSL VPN/EMM
                </div>
            </el-col>
            <el-col :span="12">
                <div shadow="hover" class="roboItem mr10">
                    HCI
                </div>
            </el-col>
            <el-col :span="12">
                <div shadow="hover" class="roboItem">
                    WOC/aBOS/MIG
                </div>
            </el-col>
            <el-col :span="12">
                <div shadow="hover" class="roboItem mr10">
                    DAS
                </div>
            </el-col>
            <el-col :span="12">
                <div shadow="hover" class="roboItem">
                    联合产品
                </div>
            </el-col>
            <el-col :span="24">
                <div shadow="hover" class="roboItem">
                    <a>点击进入售前咨询 >></a>
                </div>
            </el-col>
        </div>
    </div>
</template>

<script>
export default {
    name: "SmartRobot",
    data() {
        return {};
    },
    methods: {
        handleSelect() {}
    }
};
</script>

<style scoped>
.smartRobot {
    height: 280px;
    padding: 7px 10px 18px;
    border-top: 5px solid #0c6bc4;
    background: #fff;
}
.icon {
    background: #0c6bc4;
    color: #fff;
}
.robotTitle {
    text-align: center;
}
.roboItem {
    height: 35px;
    line-height: 35px;
    font-size: 14px;
    text-align: center;
    background: #f4f7ff;
    border-radius: 4px;
    border: 1px solid #ebf0f8;
    cursor: pointer;
    margin-top: 10px;
}
.roboItem:hover {
    border: 1px solid #83c3fd;
    background: #fff;
    color: #0887fb;
}
.roboItem > a {
    color: #0887fb;
}
</style>
