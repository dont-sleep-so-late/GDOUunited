<template>
    <div class="app-container">
        <div class="changeBtn">
            <div :class="todaybtn" @click="today">今天</div>
            <div :class="sevenbtn" @click="sevenday">近7天</div>
            <div :class="monthbtn" @click="month">近30天</div>
        </div>

        <template v-if="num == '7'">
            <show></show>
        </template>
        <template v-else-if="num == 0">
            <show_1></show_1>
        </template>
        <template v-else-if="num == 30">
            <show_2></show_2>
        </template>
        
    </div>
</template>

<script>
import dataShow from './dataShow.vue'
import dataShow_1 from './dataShow_1.vue'
import dataShow_2 from './dataShow_2.vue'
export default {
    name: "dailyRecord",
    data() {
        return {
            todaybtn: 'btn',
            sevenbtn: 'clickbtn',
            monthbtn: 'btn',
            num: '7'
        }
    },
    components: {
        "show": dataShow,
        "show_1": dataShow_1,
        "show_2": dataShow_2
    },
    methods: {
        today() {
            this.todaybtn = 'clickbtn',
                this.sevenbtn = 'btn',
                this.monthbtn = 'btn',
                this.num = '0'
        },
        sevenday() {
            this.todaybtn = 'btn',
                this.sevenbtn = 'clickbtn',
                this.monthbtn = 'btn'
            this.num = '7'
        },
        month() {
            this.todaybtn = 'btn',
                this.sevenbtn = 'btn',
                this.monthbtn = 'clickbtn',
                this.num = '30'
        },
    }
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

.el-main[data-v-09d4384a] {
    background-color: #f3f3f3;
}

.changeBtn {
    width: 200px;
    height: 40px;
    background-color: rgb(183, 177, 177);
    border-radius: 4px;
}

.changeBtn .btn {
    display: inline-block;
    width: 60px;
    height: 30px;
    margin-left: 5px;
    margin-top: 5px;
    text-align: center;
    line-height: 30px;
    background-color: rgb(183, 177, 177);
    color: rgb(244, 241, 234);
}

.clickbtn {
    display: inline-block;
    width: 60px;
    height: 30px;
    margin-left: 5px;
    margin-top: 5px;
    text-align: center;
    line-height: 30px;
    border-radius: 4px;
    background-color: white;
    color: rgb(69, 162, 243);
    font-weight: bold;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
</style>