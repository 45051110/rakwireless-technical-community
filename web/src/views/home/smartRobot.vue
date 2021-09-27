<template>
    <div class="smartRobot">
        <div class="robotTitle">
            <span class="icon">图标</span>
            <span>选择产品进入智能服务</span>
        </div>
        <div>
            <el-col :span="12">
                <div class="roboItem mr10">
                    <div shadow="hover">
                        LPWAN 网关 Wisgate
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="roboItem mr10">
                    <div shadow="hover">
                        LPWAN 终端 WisNode
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="roboItem mr10">
                    <div shadow="hover">
                        LPWAN 模块化产品 Wisblock
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="roboItem">
                    <div shadow="hover">
                        LPWAN节点模块 WisDuo
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="roboItem mr10">
                    <div shadow="hover">
                        LPWAN IoT传感终端 Wistrio
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="roboItem">
                    <div shadow="hover">
                        LPWAN 网关模块
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="roboItem mr10">
                    <div shadow="hover">
                        LPWAN 树莓派扩展板
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="roboItem">
                    <div shadow="hover">
                        LPWAN 节点扩展板
                    </div>
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
    border-radius: 4px;
    background: #f4f7ff;
    border: 1px solid #ebf0f8;
    width: 100%;
    text-align: center;
    margin-top: 10px;
}
.roboItem > div {
    height: 35px;
    width: 150px;
    font-size: 12px;
    text-align: center;
    cursor: pointer;
    display: table-cell;
    vertical-align: middle;
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
