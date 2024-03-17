<template>
    <div class="app-container">
        <div class="outbox">
            <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
        <div class="block">
            <el-date-picker v-model="value1" type="daterange" :picker-options="pickerOptions" range-separator="至" start-placeholder="开始日期"
                end-placeholder="结束日期">
            </el-date-picker>
        </div>
        <div class="iconGroup">
            <i class="el-icon-s-tools"></i>
            <i class="el-icon-download"></i>
            <i class="el-icon-refresh-right"></i>
        </div>

        <el-table :data="tableData" border style=" margin-top: 20px;">
            <el-table-column fixed prop="username" label="用户名" width="185px">
            </el-table-column>
            <el-table-column fixed prop="module" label="操作位置" width="185px">
            </el-table-column>
            <el-table-column prop="detail" label="状态" width="185px">
            </el-table-column>
            <el-table-column prop="operation" label="详细使用" width="185px">
            </el-table-column>
            <el-table-column prop="terminal" label="IP" width="185px">
            </el-table-column>
            <el-table-column prop="time" label="时间" width="185px">
            </el-table-column>
            <el-table-column prop="type" label="操作方式" width="185px">
            </el-table-column>
        </el-table>

        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
            :current-page.sync="currentPage" :page-size="8" layout="prev, pager, next, jumper" :total="5"
            style="position: relative; margin-top: 8px; left: 38%;">
        </el-pagination>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            input: '',
            pickerOptions: {
                shortcuts: [
                    {
                      text: '本月',
                      onClick(picker) {
                        const start = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
                        const end = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
                        picker.$emit('pick', [start, end]);
                      }
                    }, {
                    text: '今年至今',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date(new Date().getFullYear(), 0);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近六个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setMonth(start.getMonth() - 6);
                        picker.$emit('pick', [start, end]);
                    }
                }]
            },
            value1: '',
            value2: '',
            tableData: [],
            currentPage: 1
        };
    },
    mounted() {
        this.inputData();
    },
    methods: {
        handleClick(row) {
            console.log(row);
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        inputData() {
            axios.post(`http://localhost:9113/service/servicelog/logReport/getUserBehavior?conditions=登录&startTime=2024-02-28&endTime=2024-02-28&pageNum=8&pageSize=10`).then((res) => {
                this.tableData = res.data.data
            })
        }
    },
};
</script>

<style>
.outbox {
    display: inline-block;
}

.input-with-select {
    width: 300px;
}

.block {
    display: inline-block;
    margin-left: 20px;
}

.iconGroup {
    position: relative;
    display: inline-block;
    float: right;
    margin-top: 14px;
}

i {
    padding-left: 10px;
    padding-right: 10px;
}
</style>