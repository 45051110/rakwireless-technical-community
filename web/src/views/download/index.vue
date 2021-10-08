<template>
    <div class="container">
        <div class="titleBox">
            <div class="active">常用工具</div>
            <div
                @click="
                    openLink(
                        ' https://downloads.rakwireless.com.cn/LoRa%E8%8A%82%E7%82%B9/',
                        '_blank'
                    )
                "
            >
                固件
            </div>
        </div>
        <el-row :gutter="15">
            <el-col :span="8" v-for="item in listData" :key="item.id">
                <div class="downloadDiv">
                    <div class="doenloadTitle">{{ item.title }}</div>
                    <div class="doenloadTime">
                        更新时间: {{ item.updateTime }}
                    </div>
                    <div class="doenloadSize">大小: {{ item.size }}</div>
                    <a :href="item.link">
                        <el-button type="success">下载</el-button>
                    </a>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: "Download",
    components: {},
    data() {
        return {
            activeName: "first",
            listData: [
                {
                    id: "01",
                    title: "CP210x_Windows_Drivers.zip",
                    updateTime: "2019-10-12 15:51",
                    size: "7.2 MB",
                    link:
                        "https://downloads.rakwireless.com.cn/LoRa%E8%8A%82%E7%82%B9/%E5%B7%A5%E5%85%B7/CP210x_Windows_Drivers.zip"
                },
                {
                    id: "02",
                    title: "JLink_Windows_V647c.zip",
                    updateTime: "2019-11-18 18:05",
                    size: "35.9 MB",
                    link:
                        "https://downloads.rakwireless.com.cn/LoRa%E8%8A%82%E7%82%B9/%E5%B7%A5%E5%85%B7/JLink_Windows_V647c.zip"
                },
                {
                    id: "03",
                    title: "RAK DFU工具使用说明 v1.3.pdf",
                    updateTime: "2020-08-28 17:25",
                    size: "705KB",
                    link:
                        "https://downloads.rakwireless.com.cn/LoRa%E8%8A%82%E7%82%B9/%E5%B7%A5%E5%85%B7/RAK%20DFU%E5%B7%A5%E5%85%B7%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E%20v1.3.pdf"
                },
                {
                    id: "04",
                    title: "RAK_Device_Firmware_Upgrade_Tool_v1.4.zip",
                    updateTime: "2020-08-28 17:25",
                    size: "24.4MB",
                    link:
                        "https://downloads.rakwireless.com.cn/LoRa%E8%8A%82%E7%82%B9/%E5%B7%A5%E5%85%B7/RAK_Device_Firmware_Upgrade_Tool_v1.4.zip"
                },
                {
                    id: "05",
                    title: "RAK_Device_Firmware_Upgrade_Tool_v1.4_MacOS.zip",
                    updateTime: "2020-08-28 17:25",
                    size: "11.0MB",
                    link:
                        "https://downloads.rakwireless.com.cn/LoRa%E8%8A%82%E7%82%B9/%E5%B7%A5%E5%85%B7/RAK_Device_Firmware_Upgrade_Tool_v1.4_MacOS.zip"
                },
                {
                    id: "06",
                    title: "RAK_SERIAL_PORT_TOOL_V1.2.1.zip",
                    updateTime: "2019-08-26 18:14",
                    size: "187KB",
                    link:
                        "https://downloads.rakwireless.com.cn/LoRa%E8%8A%82%E7%82%B9/%E5%B7%A5%E5%85%B7/RAK_Device_Firmware_Upgrade_Tool_v1.4_Ubuntu.zip"
                },
                {
                    id: "07",
                    title: "RAK_SERIAL_PORT_TOOL_V1.2.1.zip",
                    updateTime: "2019-08-26 18:14",
                    size: "187KB",
                    link:
                        "https://downloads.rakwireless.com.cn/LoRa%E8%8A%82%E7%82%B9/%E5%B7%A5%E5%85%B7/RAK_SERIAL_PORT_TOOL_V1.2.1.zip"
                },
                {
                    id: "08",
                    title: "WisNode_Windows_Drivers_CH341SER.rar",
                    updateTime: "2019-12-23 14:40",
                    size: "231KB",
                    link:
                        "https://downloads.rakwireless.com.cn/LoRa%E8%8A%82%E7%82%B9/%E5%B7%A5%E5%85%B7/WisNode_Windows_Drivers_CH341SER.rar"
                },
                {
                    id: "09",
                    title: "XCOM21.zip",
                    updateTime: "2019-11-27 16:59",
                    size: "425KB",
                    link:
                        "https://downloads.rakwireless.com.cn/LoRa%E8%8A%82%E7%82%B9/%E5%B7%A5%E5%85%B7/XCOM21.zip"
                }
            ]
        };
    },
    methods: {
        openLink(url, opt = "_self") {
            window.open(url, opt);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.container {
    width: calc(100vw - 100% + 1220px) !important;
    height: calc(100vh - 225px);
    margin: 0 auto;
    margin-top: 15px;
    background: #fff;
    .el-row {
        padding: 0 40px;
    }
}
.titleBox {
    border-bottom: 2px solid #f2f2f2;
    padding-left: 5px;
    margin-bottom: 0;
    div {
        margin: 0 27px;
        height: 40px;
        line-height: 40px;
        display: inline-block;
        cursor: pointer;
    }
    div:hover {
        color: #006ac6;
    }
    .active {
        border-bottom: 6px solid #006ac6;
        color: #006ac6;
    }
}
.downloadDiv {
    padding: 40px 20px;
    margin-bottom: 20px;
    a {
        float: right;
    }
    button {
        width: 100px;
    }
}
.doenloadTitle {
    color: #006ac6;
    font-size: 14px;
    margin-bottom: 10px;
    text-align: center;
}
.doenloadTime,
.doenloadSize {
    font-size: 12px;
    line-height: 20px;
    color: #666;
    margin: 0;
}
.doenloadSize {
    margin-bottom: 20px;
}
</style>
