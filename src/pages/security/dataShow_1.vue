<template>
    <div>
        <div class="dailyData">
            <h3>日志数据</h3>
            <div class="largebox">
                <div class="smallbox">登录数
                    <span class="number">{{ loginNum }}</span>
                </div>
                <div class="smallbox">操作日志数
                    <span class="number">{{ useNum }}</span>
                </div>
                <div class="smallbox">批量操作日志数
                    <span class="number">{{ lotNum }}</span>
                </div>
            </div>
        </div>

        <div class="loginDaily">
            <span class="titleName">登录日志</span>
            <span class="secTitle">登录日志总数</span>
            <span class="thirdNum">{{ allDiary }}</span>
            <div class="loginPie" ref="chart"></div>
            <div class="centerWord">
                <span class="word loginCenter">
                    登录成功日志数
                </span>
                <span class="count loginCount">
                    {{ allSuccess }}
                </span>
                <span class="percent loginPercent">占比{{ precent }}</span>
            </div>
        </div>

        <div class="useDaily">
            <span class="titleName">操作日志</span>
            <span class="secTitle">操作日志总数</span>
            <span class="thirdNum">{{ allDiary }}</span>
            <div class="usePie" ref="usePie"></div>
            <div class="centerWord">
                <span class="word useCenter">
                    敏感行为日志数
                </span>
                <span class="count useCount">
                    {{ allDanger }}
                </span>
                <span class="percent usePercent">占比{{ usePrecent }}</span>
            </div>
        </div>

        <div class="bigbox">
            <div class="loginTrend">
                <span class="titleName">登录趋势</span>
                <span class="loginSym"></span>
                <span class="trendTitle secTitle">登录数</span>
                <div class="trend" ref="trend"></div>
            </div>
            <div class="usersBehavior">
                <span class="titleName">用户操作行为类型</span>
                <div class="legend">
                    <div class="color uploadBall"></div>
                    <p class="ballName upload">上传</p>
                    <div class="color downloadBall"></div>
                    <p class="ballName download">删除</p>
                    <div class="color changeBall"></div>
                    <p class="ballName change">修改</p>
                    <div class="color deleteBall"></div>
                    <p class="ballName delete">删除</p>
                    <div class="color addBall"></div>
                    <p class="ballName add">增加</p>
                    <div class="color checkBall"></div>
                    <p class="ballName check">查看</p>
                </div>
                <div class="behavior" ref="behavior"></div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "dataShow",
    data() {
        return {
            loginNum: '',
            useNum: '',
            lotNum: '',
            allSuccess: '',
            allDiary: '',
            precent: '',
            allDiary: '',
            allDanger: '',
            usePrecent: ''
        }
    },
    props: ['value'],
    mounted() {
        this.initChart();
        this.initUsepie();
        this.initTrend();
        this.initBehavior();
        this.inData();
    },

    methods: {
        inData() {
            axios.get(`http://localhost:9113/service/servicelog/logReport/getLogDetailByTime?dateType=0`).then((res) => {
                this.loginNum = res.data.data[0].登录数
                this.useNum = res.data.data[1].操作日志数
                this.lotNum = res.data.data[2].批量操作日志数
            })
        },
        initChart() {
            axios.get(`http://localhost:9113/service/servicelog/logReport/getLoginLogByTime?dateType=0`).then((res) => {
                const loginSuccess = res.data.data.登录成功日志总数
                const loginDiary = res.data.data.登录日志总数
                const logPrecent = res.data.data.占比
                this.allDiary = loginDiary
                this.allSuccess = loginSuccess
                this.precent = logPrecent
                const chart = echarts.init(this.$refs.chart);
                const option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)',
                    },
                    color: ['#1f78b4', '#fe7f0e'],
                    series: [
                        {
                            name: "登录日志",
                            type: 'pie',
                            radius: ['60%', '80%'],
                            avoidLabelOverlap: false,
                            label: {
                                show: false,
                                position: 'center',
                            },
                            data: [
                                { value: loginSuccess, name: '登录成功日志总数' },
                                { value: loginDiary, name: '登录日志总数' }
                            ]
                        },
                    ],
                };
                chart.setOption(option);
            })
        },
        initUsepie() {
            axios.get(`http://localhost:9113/service/servicelog/logReport/getOperationLogByTime?dateType=0`).then((res) => {
                const useNumber = res.data.data.操作日志总数
                const dangerNumber = res.data.data.敏感行为日志总数
                const usePrecent = res.data.data.占比
                this.allUse = useNumber
                this.allDanger = dangerNumber
                this.usePrecent = usePrecent
                const chart = echarts.init(this.$refs.usePie);
                const option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)',
                    },
                    color: ['#1f78b4', '#fe7f0e'],
                    series: [
                        {
                            name: "敏感操作日志",
                            type: 'pie',
                            radius: ['60%', '80%'],
                            avoidLabelOverlap: false,
                            label: {
                                show: false,
                                position: 'center',
                            },
                            data: [
                                { value: useNumber, name: '操作日志总数' },
                                { value: dangerNumber, name: '敏感行为日志总数' }
                            ]
                        },
                    ],
                };
                chart.setOption(option);
            })
        },
        initTrend() {
            axios.get(`http://localhost:9113/service/servicelog/logReport/getTendencyOfLoginByTime?dateType=7`).then((res) => {
                const chart = echarts.init(this.$refs.trend);
                const option = {
                    grid: {
                        width: '80%',
                        height: '80%',
                        top: '10px'
                    },
                    xAxis: {
                        type: 'category',
                        data: [res.data.data[0].time , res.data.data[1].time , res.data.data[2].time , res.data.data[3].time , res.data.data[4].time , res.data.data[5].time , res.data.data[6].time , res.data.data[7].time],
                        axisLabel: {
                            fontSize: 8, // 修改x轴标签的字体大小
                        },
                        axisTick: {
                            length: 2, // 修改x轴刻度线的长度
                        },
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            fontSize: 14,
                        },
                        axisTick: {
                            length: 2,
                        },
                    },
                    series: [
                        {
                            data: [res.data.data[0].count , res.data.data[1].count , res.data.data[2].count , res.data.data[3].count , res.data.data[4].count , res.data.data[5].count , res.data.data[6].count , res.data.data[7].count],
                            type: 'line',
                            smooth: true,
                            lineStyle: {
                                color: '#64aedf'
                            },
                            symbol: 'none',
                            areaStyle: {
                                color: 'rgba(210,228,240,0.7)'
                            }
                        }
                    ]
                };
                chart.setOption(option);
            })
        },
        initBehavior() {
            axios.post(`http://localhost:9113/service/servicelog/logReport/getOperationTypeByTime?dateType=0`).then((res)=>{
                const chart = echarts.init(this.$refs.behavior)
            const option = {
                color: ['#e8c1a0', '#f47660', '#f2e25b', '#e7a837', '#61cebb', '#97e3d6'],
                legend: {},
                grid: {
                    right: '12%',
                    bottom: '100%',
                },
                xAxis: {
                    type: 'value',
                    show: 'false',
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                },
                yAxis: {
                    type: 'category',
                    show: 'false',
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                },
                series: [
                    {
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: false
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [res.data.data.上传]
                    },
                    {
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: false
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [res.data.data.下载]
                    },
                    {
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: false
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [res.data.data.修改]
                    },
                    {
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: false
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [res.data.data.删除]
                    },
                    {
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: false
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [res.data.data.增加]
                    },
                    {
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: false
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [res.data.data.查看]
                    }
                ]
            }
            chart.setOption(option);
            })
        }
    },
}
</script>

<style>
/* 功能框 */
.dailyData {
    position: relative;
    width: 100%;
    height: 16vh;
    margin-top: 10px;
    background-color: white;
}

.loginDaily {
    position: relative;
    display: inline-block;
    width: 23%;
    height: 430px;
    margin-top: 15px;
    background-color: white;
}

.useDaily {
    position: relative;
    display: inline-block;
    width: 23%;
    height: 430px;
    margin-top: 15px;
    margin-left: 20px;
    background-color: white;
}

.bigbox {
    display: inline-block;
    width: 650px;
    height: 430px;
    margin-top: 10px;
    margin-left: 20px;
    background-color: #f3f3f3;
}

.bigbox .loginTrend {
    position: relative;
    width: 100%;
    height: 290px;
    background-color: white;
}

.bigbox .usersBehavior {
    position: relative;
    width: 100%;
    height: 120px;
    margin-top: 20px;
    background-color: white;
}

/* 内容 */
.dailyData h3 {
    position: absolute;
    color: black;
    margin-left: 62px;
    margin-top: 20px;
}

.largebox {
    position: absolute;
    width: 100%;
    margin-top: 50px;
    margin-left: -10px;
}

.smallbox {
    display: inline-block;
    width: 120px;
    margin-left: 225px;
    text-align: center;
}

.number {
    position: relative;
    display: block;
    color: black;
    font-size: 30px;
    font-weight: bold;
    margin: 0 auto;
    top: 10px;
}

.titleName {
    position: absolute;
    font-size: 18px;
    color: black;
    font-weight: bold;
    margin-left: 20px;
    margin-top: 20px;
}

.secTitle {
    position: absolute;
    margin-top: 50px;
    margin-left: 20px;
}

.trendTitle {
    font-size: 15px;
    color: black;
    font-weight: bold;
    margin-left: 50px;
}

.loginSym {
    position: absolute;
    display: inline-block;
    width: 20px;
    height: 20px;
    top: 47px;
    left: 20px;
    background-color: rgba(210, 228, 240, 0.7);
}

.thirdNum {
    position: absolute;
    color: gray;
    font-size: 30px;
    font-weight: bold;
    margin-top: 80px;
    margin-left: 20px;
}

.loginPie {
    position: absolute;
    width: 270px;
    height: 300px;
    margin-top: 118px;
    margin-left: 11px;
}

.centerWord {
    position: absolute;
    top: 230px;
    left: 97px;
}

.word {
    font-size: 14px;
    font-weight: bold;
}

.count {
    display: block;
    font-size: 30px;
    font-weight: bold;
    margin-top: 10px;
    margin-left: 37px;
}

.percent {
    display: block;
    font-size: 14px;
    margin-top: 10px;
    margin-left: 20px;
}

.usePie {
    position: absolute;
    width: 270px;
    height: 300px;
    margin-top: 118px;
    margin-left: 11px;
}

.trend {
    position: absolute;
    width: 100%;
    height: 200px;
    top: 80px;
}

.usersBehavior .behavior {
    position: absolute;
    width: 92%;
    height: 45px;
    margin-top: 55px;
    margin-left: 27px;
}

.color{
    display: inline-block;
    position: absolute;
    width: 12px;
    height: 12px;
    margin-top: 20px;
    border-radius: 50%;
}
.uploadBall{
    left: 300px;
    background-color: #e8c1a0;
}
.downloadBall{
    left: 350px;
    background-color: #f47660;
}
.changeBall{
    left: 400px;
    background-color: #f2e25b;
}
.deleteBall{
    left: 450px;
    background-color: #e7a837;
}
.addBall{
    left: 500px;
    background-color: #61cebb;
}
.checkBall{
    left: 550px;
    background-color: #97e3d6;
}
.ballName{
    display: inline-block;
    position: absolute;
    font-size: 14px;
    margin-top: 20px;
}
.upload{
    left: 315px;
}
.download{
    left: 365px;
}
.change{
    left: 415px;
}
.delete{
    left: 465px;
}
.add{
    left: 515px;
}
.check{
    left: 565px;
}
</style>