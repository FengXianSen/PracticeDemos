/**
 * Created by fengzicheng on 2017/7/24.
 */
var myChart_day,myChart_week,myChart_month;
var currentDayItem, currentWeekItem, currentMonthItem;

$(function () {

});

var intelligentMonitoringApp = angular.module("intelligentMonitoringApp", []);
intelligentMonitoringApp.controller("intelligentMonitoringCtrl", ["$scope", "$http", function ($scope, $http) {

    $scope.messageConfig = {

        /**智能监控页的变量**/
        intelligentMonitoringList: [],
        intelligentMonitoringTotal: -1,
        cleaningTotal:0,
        validTotal:0,
        rectifyTotal:0,
        matterTotal:0,
        currentDayData:[],
        currentWeekData:[],
        currentMonthData:[]

    };

    myChart_day = echarts.init(document.getElementById('map_dayData'));
    myChart_week = echarts.init(document.getElementById('map_weekData'));
    myChart_month = echarts.init(document.getElementById('map_monthData'));

    /**
     *  获取智能监控列表的数据
     */
    $scope.fatchData = function () {

        /**获取智能监控列表**/
        $scope.getIntelligentMonitoringList();
    };

    /**
     * 获取智能监控列表
     * @param i 分页标识
     */
    $scope.getIntelligentMonitoringList = function () {
        $scope.getIntelligentMonitoringData = {
            "data" : {
                "data" : [ {
                    "id" : 680004,
                    "department" : "省民政局",
                    "gross" : "76547"
                }, {
                    "id" : 680003,
                    "department" : "省民政局",
                    "gross" : "76547"
                }, {
                    "id" : 680001,
                    "department" : "省民政局",
                    "gross" : "76547"
                }, {
                    "id" : 680000,
                    "department" : "省民政局",
                    "gross" : "76547"
                }, {
                    "id" : 679928,
                    "department" : "省民政局",
                    "gross" : "76547"
                }, {
                    "id" : 679856,
                    "department" : "省民政局",
                    "gross" : "76547"
                }, {
                    "id" : 679833,
                    "department" : "省民政局",
                    "gross" : "76547"
                }, {
                    "id" : 679832,
                    "department" : "省民政局",
                    "gross" : "76547"
                },{
                    "id" : 679832,
                    "department" : "省民政局",
                    "gross" : "76547"
                },{
                    "id" : 679832,
                    "department" : "省民政局",
                    "gross" : "76547"
                },{
                    "id" : 679832,
                    "department" : "省民政局",
                    "gross" : "76547"
                },{
                    "id" : 679832,
                    "department" : "省民政局",
                    "gross" : "76547"
                },{
                    "id" : 679832,
                    "department" : "省民政局",
                    "gross" : "76547"
                },{
                    "id" : 679832,
                    "department" : "省民政局",
                    "gross" : "76547"
                },{
                    "id" : 679832,
                    "department" : "省民政局",
                    "gross" : "76547"
                } ],
                "dayInfoList": [ {
                    "valid": 54322,
                    "rectify": 12342,
                    "matter": 1234
                }, {
                    "valid": 54545,
                    "rectify": 1442,
                    "matter": 1454
                }, {
                    "valid": 54872,
                    "rectify": 3342,
                    "matter": 3254
                }, {
                    "valid": 44122,
                    "rectify": 22342,
                    "matter": 12164
                }, {
                    "valid": 59342,
                    "rectify": 19642,
                    "matter": 13619
                },{
                    "valid": 54322,
                    "rectify": 13342,
                    "matter": 18165
                },{
                    "valid": 54322,
                    "rectify": 12342,
                    "matter": 14516
                }, {
                    "valid": 54322,
                    "rectify": 23342,
                    "matter": 1353
                }, {
                    "valid": 54322,
                    "rectify": 12342,
                    "matter": 14385
                }, {
                    "valid": 54322,
                    "rectify": 12642,
                    "matter": 1963
                }, {
                    "valid": 54322,
                    "rectify": 12342,
                    "matter": 1339
                }, {
                    "valid": 54322,
                    "rectify": 9642,
                    "matter": 18617
                }, {
                    "valid": 54322,
                    "rectify": 9342,
                    "matter": 1364
                }, {
                    "valid": 54322,
                    "rectify": 22342,
                    "matter": 1461
                }, {
                    "valid": 54322,
                    "rectify": 3342,
                    "matter": 12651
                } ],
                "weekInfoList": [ {
                    "valid": [220, 182, 191, 234, 290, 330, 310],
                    "rectify": [150, 232, 201, 154, 190, 330, 410],
                    "matter": [500, 532, 501, 534, 390, 430, 610]
                }, {
                    "valid": [220, 182, 191, 234, 290, 330, 310],
                    "rectify": [150, 232, 201, 134, 190, 130, 410],
                    "matter": [550, 432, 501, 534, 390, 430, 610]
                }, {
                    "valid": [280, 182, 191, 254, 290, 330, 310],
                    "rectify": [150, 232, 201, 154, 190, 330, 410],
                    "matter": [500, 332, 501, 534, 390, 430, 610]
                }, {
                    "valid": [120, 182, 191, 234, 290, 130, 310],
                    "rectify": [150, 232, 201, 104, 190, 330, 410],
                    "matter": [500, 532, 501, 534, 390, 430, 610]
                }, {
                    "valid": [220, 182, 191, 234, 290, 330, 310],
                    "rectify": [150, 432, 201, 154, 190, 330, 410],
                    "matter": [300, 532, 501, 534, 390, 430, 610]
                }, {
                    "valid": [220, 182, 191, 234, 290, 330, 310],
                    "rectify": [150, 232, 201, 154, 110, 330, 410],
                    "matter": [360, 532, 301, 534, 390, 230, 610]
                }, {
                    "valid": [320, 182, 191, 234, 290, 330, 310],
                    "rectify": [150, 232, 201, 154, 190, 330, 410],
                    "matter": [500, 532, 501, 534, 390, 430, 610]
                }, {
                    "valid": [220, 182, 191, 234, 290, 330, 310],
                    "rectify": [150, 232, 201, 354, 190, 330, 410],
                    "matter": [500, 532, 301, 534, 190, 430, 610]
                }, {
                    "valid": [260, 182, 191, 234, 290, 330, 310],
                    "rectify": [150, 232, 201, 254, 190, 330, 410],
                    "matter": [500, 532, 501, 534, 390, 430, 610]
                }, {
                    "valid": [220, 182, 191, 234, 290, 330, 310],
                    "rectify": [150, 632, 201, 154, 190, 330, 410],
                    "matter": [500, 532, 501, 534, 390, 430, 610]
                }, {
                    "valid": [220, 182, 191, 234, 290, 430, 310],
                    "rectify": [150, 232, 281, 254, 190, 330, 410],
                    "matter": [500, 332, 501, 534, 390, 430, 610]
                }, {
                    "valid": [280, 182, 191, 234, 290, 330, 310],
                    "rectify": [150, 232, 201, 154, 190, 330, 410],
                    "matter": [500, 532, 501, 534, 390, 430, 510]
                }, {
                    "valid": [220, 182, 191, 294, 290, 330, 310],
                    "rectify": [150, 232, 201, 154, 190, 330, 410],
                    "matter": [500, 532, 501, 534, 390, 430, 610]
                }, {
                    "valid": [320, 182, 291, 234, 290, 330, 210],
                    "rectify": [150, 232, 201, 254, 250, 330, 310],
                    "matter": [500, 532, 501, 534, 390, 430, 610]
                }, {
                    "valid": [220, 182, 200, 234, 290, 330, 360],
                    "rectify": [150, 232, 101, 154, 190, 230, 410],
                    "matter": [610, 532, 501, 534, 390, 430, 310]
                } ],
                "monthInfoList": [ {
                    "valid": [30,80,50,60,50,90,20,50,60,30,40,30,80,60,30,50,60,30,40,20,10,50,30,60,50,40,60,80,20,50],
                    "rectify": [30,10,50,60,50,90,70,50,60,30,60,30,20,60,50,50,60,10,40,20,50,50,30,60,50,40,60,30,20,50],
                    "matter": [30,60,50,60,50,50,20,50,60,30,40,30,60,60,30,50,60,30,40,20,10,50,30,60,50,40,60,80,60,50]
                }, {
                    "valid": [30,20,50,60,50,90,20,50,60,30,40,30,80,60,30,50,60,30,40,20,10,50,30,60,50,40,60,80,20,50],
                    "rectify": [30,80,50,60,50,20,70,50,60,30,60,30,20,60,50,50,60,10,40,20,50,50,30,60,50,40,60,30,20,50],
                    "matter": [30,60,50,60,10,50,60,50,60,30,40,30,60,60,30,50,60,30,80,20,10,50,30,60,50,40,60,80,60,50]
                }, {
                    "valid": [30,80,50,20,50,90,20,10,60,30,40,30,80,60,30,50,60,30,40,20,10,50,30,60,50,40,60,80,20,50],
                    "rectify": [30,10,50,60,50,90,70,50,60,30,60,30,20,60,50,50,60,10,40,20,50,50,30,60,50,40,60,30,20,50],
                    "matter": [30,60,50,60,50,50,20,50,10,30,40,30,60,10,30,50,60,90,40,20,10,50,30,60,50,40,20,80,60,50]
                }, {
                    "valid": [30,30,50,60,50,90,20,30,60,30,40,30,80,60,30,50,60,30,40,20,10,50,30,60,50,40,60,80,20,50],
                    "rectify": [30,10,50,10,50,90,70,50,60,30,60,30,20,60,50,50,60,10,40,20,50,50,30,60,50,40,60,30,20,50],
                    "matter": [30,60,50,10,50,50,20,50,10,30,40,30,60,60,30,50,60,30,40,20,10,50,30,60,50,40,60,20,60,50]
                }, {
                    "valid": [20,90,50,60,50,20,20,50,60,30,40,30,80,60,30,50,60,30,40,20,10,50,30,60,50,40,60,80,20,50],
                    "rectify": [30,10,50,60,50,90,70,50,60,30,60,30,20,60,50,50,60,10,40,20,50,50,30,60,50,40,60,30,20,50],
                    "matter": [30,60,50,20,50,50,20,50,60,30,40,10,30,60,30,50,60,30,40,20,10,50,30,60,50,40,60,80,60,50]
                }, {
                    "valid": [30,50,50,60,50,60,20,50,60,30,40,30,20,60,30,50,60,30,40,20,10,50,30,60,50,40,60,80,20,50],
                    "rectify": [30,10,50,60,50,90,70,50,60,30,60,30,20,60,50,50,60,10,40,20,50,50,30,60,50,40,60,30,20,50],
                    "matter": [30,60,50,60,10,50,20,50,60,30,40,30,60,60,30,50,30,30,40,20,10,50,30,60,50,40,60,80,60,50]
                }, {
                    "valid": [30,60,50,60,50,20,20,50,60,30,40,30,30,60,30,50,60,30,40,20,10,50,30,60,50,40,60,80,20,50],
                    "rectify": [30,10,50,60,50,20,70,50,10,30,60,30,20,60,50,50,20,10,40,20,50,80,30,60,50,40,60,30,20,50],
                    "matter": [30,60,50,60,50,50,20,50,60,30,20,30,90,60,30,50,60,30,40,20,10,50,30,60,50,40,60,20,60,50]
                }, {
                    "valid": [30,20,50,60,50,90,20,50,60,30,40,30,50,60,30,50,60,30,40,20,10,50,30,60,50,40,60,80,20,50],
                    "rectify": [30,10,50,60,50,90,70,50,60,30,60,30,20,60,50,50,60,10,40,20,50,50,30,60,50,40,60,30,20,50],
                    "matter": [30,60,50,20,50,50,20,50,60,30,40,30,30,60,30,50,60,30,40,20,10,50,30,60,50,40,60,80,60,50]
                }, {
                    "valid": [30,90,50,60,50,90,20,50,60,30,40,30,20,60,30,50,60,30,40,20,10,50,30,60,50,40,60,80,20,50],
                    "rectify": [30,10,50,60,50,90,70,50,60,30,60,30,20,80,50,50,60,10,40,20,50,50,30,60,50,40,60,30,20,50],
                    "matter": [30,60,50,20,50,50,20,20,60,30,40,30,60,60,30,50,60,30,40,20,10,50,30,60,50,40,60,80,60,50]
                }, {
                    "valid": [30,80,50,60,50,90,20,50,60,30,40,30,80,60,30,50,60,30,40,20,10,50,30,60,50,40,60,80,20,50],
                    "rectify": [30,10,50,60,50,90,70,50,60,30,60,30,20,60,50,50,60,10,40,20,50,50,30,60,50,40,60,30,20,50],
                    "matter": [30,60,50,60,50,50,20,50,60,30,40,30,60,60,30,50,60,30,40,20,10,50,30,60,50,40,60,80,60,50]
                }, {
                    "valid": [30,80,50,60,50,90,20,50,60,30,40,30,80,60,30,50,60,30,40,20,10,50,30,60,50,40,60,80,20,50],
                    "rectify": [30,10,50,60,50,90,70,50,60,30,60,30,20,60,50,50,60,10,40,20,50,50,30,60,50,40,60,30,20,50],
                    "matter": [30,60,50,60,50,50,20,50,60,30,40,30,60,60,30,50,60,30,40,20,10,50,30,60,50,40,60,80,60,50]
                }, {
                    "valid": [30,80,50,60,50,90,20,50,60,30,40,30,80,60,30,50,60,30,40,20,10,50,30,60,50,40,60,80,20,50],
                    "rectify": [30,10,50,60,50,90,70,50,60,30,60,30,20,60,50,50,60,10,40,20,50,50,30,60,50,40,60,30,20,50],
                    "matter": [30,60,50,60,50,50,20,50,60,30,40,30,60,60,30,50,80,30,40,20,10,50,30,60,50,40,60,80,60,50]
                }, {
                    "valid": [30,80,50,60,50,90,20,50,60,30,40,30,80,60,30,50,60,30,40,20,10,50,30,60,50,40,60,80,20,50],
                    "rectify": [30,10,50,60,50,90,70,50,60,30,60,30,20,60,50,50,60,10,40,20,50,50,30,80,50,40,60,30,20,50],
                    "matter": [30,60,50,60,50,50,20,50,30,30,40,30,60,20,30,50,60,30,40,20,10,50,30,60,50,40,60,80,60,50]
                }, {
                    "valid": [30,80,50,60,50,90,20,50,60,30,40,30,80,60,30,50,60,30,40,20,10,50,30,60,50,40,60,80,20,50],
                    "rectify": [30,10,50,60,50,90,70,50,60,30,60,30,20,60,50,50,60,10,40,20,50,50,30,60,50,40,60,30,20,50],
                    "matter": [30,60,50,60,50,50,20,30,60,30,40,30,60,60,30,50,20,30,40,20,10,50,30,60,50,40,60,20,60,50]
                }, {
                    "valid": [30,80,50,60,50,90,20,50,60,30,40,30,80,60,30,50,60,30,40,20,10,50,30,60,50,40,60,80,20,50],
                    "rectify": [30,10,50,60,50,90,70,50,60,30,60,30,20,60,50,50,60,10,30,20,50,50,30,60,50,40,60,30,20,50],
                    "matter": [30,60,50,60,50,50,20,50,30,30,40,30,60,60,30,50,60,30,40,20,10,50,30,60,50,40,60,80,60,50]
                } ],
                "cleaningData": 52365461233,
                "validData": 4521461233,
                "rectifyData": 14461233,
                "matterData": 24352354
            }
        };
        $scope.messageConfig.cleaningTotal = $scope.getIntelligentMonitoringData.data.cleaningData || 0;
        $scope.messageConfig.validTotal = $scope.getIntelligentMonitoringData.data.validData || 0;
        $scope.messageConfig.rectifyTotal = $scope.getIntelligentMonitoringData.data.rectifyData || 0;
        $scope.messageConfig.matterTotal = $scope.getIntelligentMonitoringData.data.matterData || 0;
        $scope.messageConfig.intelligentMonitoringTotal = $scope.getIntelligentMonitoringData.data.data.length || 0;
        $scope.messageConfig.intelligentMonitoringList = $scope.getIntelligentMonitoringData.data.data || [];
        $scope.messageConfig.currentDayData = $scope.getIntelligentMonitoringData.data.dayInfoList || [];
        $scope.messageConfig.currentWeekData = $scope.getIntelligentMonitoringData.data.weekInfoList || [];
        $scope.messageConfig.currentMonthData = $scope.getIntelligentMonitoringData.data.monthInfoList || [];

        currentDayItem = $scope.messageConfig.currentDayData[0];
        currentWeekItem = $scope.messageConfig.currentWeekData[0];
        currentMonthItem = $scope.messageConfig.currentMonthData[0];
        $scope.messageConfig.intelligentMonitoringList[0].isChecked = true;
    };

    /**
     *  第一次进来获取智能监控列表的数据
     */
    $scope.fatchData();

    /**
     *  本日部门数据图表实例化
     */
    $scope.initConfigDayChart = function (chart) {
        // 指定图表的配置项和数据
        // $.ajax({
        //     type: "get",
        //     url: "http://www.baidu.com",
        //     data : {},
        //     success : function(data) {
        //         if (!data.success ) return;
        //     }
        // });

        option = {
            title : {
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                top: '2%',
                right: '3%',
                data: ['有效数据量','整改数据量','问题数据量']
            },
            series : [
                {
                    name: '本日部门数据',
                    type: 'pie',
                    radius : '50%',
                    center: ['45%', '50%'],
                    color: ['#3C588D', '#DFA54F', '#583522'],
                    data:[
                        {name:'有效数据量', value:currentDayItem.valid},
                        {name:'整改数据量', value:currentDayItem.rectify},
                        {name:'问题数据量', value:currentDayItem.matter}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        chart.setOption(option);
    };

    /**
     *  本周部门数据图表实例化
     */
    $scope.initConfigWeekChart = function (chart) {
        option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                top: '2%',
                data:['问题数据量','整改数据量','有效数据量']
            },
            grid: {
                top: '13%',
                right: '3%',
                bottom: '3%',
                left: '3%',
                containLabel: true,
                backgroundColor: '#2D424F',
                show: 'true'
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['周一','周二','周三','周四','周五','周六','周日']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'问题数据量',
                    type:'bar',
                    stack: '数据量',
                    smooth:true,
                    barWidth: 12,
                    itemStyle: {normal: {areaStyle: {type: 'default'}, color: '#FF8572', borderColor: '#FF8572', borderType: 'solid', borderWidth: 1}},
                    data:currentWeekItem.valid
                }, {
                    name:'整改数据量',
                    type:'bar',
                    stack: '数据量',
                    smooth:true,
                    barWidth: 12,
                    itemStyle: {normal: {areaStyle: {type: 'default'}, color: '#00B7AF', borderColor: '#00B7AF', borderType: 'solid', borderWidth: 1}},
                    data:currentWeekItem.rectify
                }, {
                    name:'有效数据量',
                    type:'line',
                    stack: '数据量',
                    smooth:true,
                    itemStyle: {normal: {areaStyle: {type: 'default'}, color: '#FFFF03', borderColor: '#FFFF03', borderType: 'solid', borderWidth: 1}},
                    lineStyle: {normal: {width: 2, type: 'solid',color:'#FFFF66'}},
                    areaStyle: {normal: {color: '#2D424F', opacity: 0}},
                    data:currentWeekItem.matter
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        chart.setOption(option);
    };

    /**
     *  本月部门数据图表实例化
     */
    $scope.initConfigMonthChart = function (chart) {
        var timeData = [
            '2017/7/01 8:00', '2017/7/02 8:00','2017/7/03 8:00','2017/7/04 8:00','2017/7/05 8:00','2017/7/06 8:00',
            '2017/7/07 8:00','2017/7/08 8:00','2017/7/09 8:00','2017/7/10 8:00','2017/7/11 8:00','2017/7/12 8:00',
            '2017/7/13 8:00','2017/7/14 8:00','2017/7/15 8:00','2017/7/16 8:00','2017/7/17 8:00','2017/7/18 8:00',
            '2017/7/19 8:00','2017/7/20 8:00','2017/7/21 8:00','2017/7/22 8:00','2017/7/23 8:00','2017/7/24 8:00',
            '2017/7/25 8:00','2017/7/26 8:00','2017/7/27 8:00','2017/7/28 8:00','2017/7/29 8:00','2017/7/30 8:00'
        ];

        timeData = timeData.map(function (str) {
            return str.replace('2017/', '');
        });

        option = {
            title: {
                // text: '本月部门数据',
                // subtext: '',
                x: 'center'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    animation: false
                }
            },
            legend: {
                orient: 'vertical',
                right: 'right',
                y: 'center',
                data:['有效数据量','整改数据量','问题数据量']
            },
            axisPointer: {
                link: {xAxisIndex: 'all'}
            },
            grid: [{
                top: 20,
                left: 80,
                right: 120,
                height: 80
            }, {
                left: 80,
                right: 120,
                top: 100,
                height: 80
            }, {
                left: 80,
                right: 120,
                top: 180,
                height: 80
            }],
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    axisLine: {onZero: true},
                    data: timeData,
                    show:false
                    // splitLine: {
                    //     lineStyle: {
                    //         type: 'dashed'
                    //     }
                    // },
                },
                {
                    gridIndex: 1,
                    type : 'category',
                    boundaryGap : false,
                    axisLine: {onZero: true},
                    data: timeData,
                    show:false
                },
                {
                    gridIndex: 2,
                    type : 'category',
                    boundaryGap : false,
                    axisLine: {onZero: true},
                    data: timeData,
                    show: false
                }
            ],
            yAxis : [
                {
                    type: 'category',
                    name: '有效数据量',
                    nameLocation: 'middle',
                    data:[''],
                    max:100
                },
                {
                    gridIndex: 1,
                    type: 'category',
                    name: '整改数据量',
                    nameLocation: 'middle',
                    data:[''],
                    max:100

                },
                {
                    gridIndex: 2,
                    type: 'category',
                    name: '问题数据量',
                    nameLocation: 'middle',
                    data:[''],
                    max:100
                }
            ],
            series : [
                {
                    name:'有效数据量',
                    type:'line',
                    symbolSize: 0,
                    itemStyle: {normal: {areaStyle: {type: 'default'}, color: '#58a7ff', borderColor: '#58a7ff', borderType: 'solid', borderWidth: 1}},
                    lineStyle: {normal: {width: 2, type: 'solid',color:'#58a7ff'}},
                    areaStyle: {normal: {color: '#58a7ff', opacity: 0}},
                    hoverAnimation: true,
                    data: currentMonthItem.valid
                },
                {
                    name:'整改数据量',
                    type:'line',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    symbolSize: 0,
                    itemStyle: {normal: {areaStyle: {type: 'default'}, color: '#87d312', borderColor: '#87d312', borderType: 'solid', borderWidth: 1}},
                    lineStyle: {normal: {width: 2, type: 'solid',color:'#87d312'}},
                    areaStyle: {normal: {color: '#87d312', opacity: 0}},
                    hoverAnimation: true,
                    data: currentMonthItem.rectify
                },
                {
                    name:'问题数据量',
                    type:'line',
                    xAxisIndex: 2,
                    yAxisIndex: 2,
                    symbolSize: 0,
                    itemStyle: {normal: {areaStyle: {type: 'default'}, color: '#f29a04', borderColor: '#f29a04', borderType: 'solid', borderWidth: 1}},
                    lineStyle: {normal: {width: 2, type: 'solid',color:'#f29a04'}},
                    areaStyle: {normal: {color: '#f29a04', opacity: 0}},
                    hoverAnimation: true,
                    data: currentMonthItem.matter
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        chart.setOption(option);
    };

    /**
     *  第一次进来进行图表配置项
     */
    $scope.initConfigDayChart(myChart_day);
    $scope.initConfigWeekChart(myChart_week);
    $scope.initConfigMonthChart(myChart_month);

    /**
     * 换一批按钮点击事件
     */
    $scope.clickSwitchBtn = function () {
        $scope.messageConfig.intelligentMonitoringList.splice(3,10);
    };

    /**
     * 智能监控的表格点击事件
     */
    $scope.clickSelectRow = function (index, itemID) {

        for (var i=0; i<$scope.messageConfig.intelligentMonitoringList.length; i++) {
            if (i == index) {
                $scope.messageConfig.intelligentMonitoringList[i].isChecked = true;
                currentDayItem = $scope.messageConfig.currentDayData[i];
                currentWeekItem = $scope.messageConfig.currentWeekData[i];
                currentMonthItem = $scope.messageConfig.currentMonthData[i];
                $scope.initConfigDayChart(myChart_day);
                $scope.initConfigWeekChart(myChart_week);
                $scope.initConfigMonthChart(myChart_month);
            } else {
                $scope.messageConfig.intelligentMonitoringList[i].isChecked = false;
            }
        }
    };


}]).filter('trustHtml', function ($sce) {
    return function (input) {
        return $sce.trustAsHtml(input);
    }
});