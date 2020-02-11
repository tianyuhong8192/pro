<template>

    <div class="Onw">
        <!--登录注册开始-->
        <div class="login">
            <div class="login-onw">
                <span>欢迎来到某某奶粉商城有限公司</span>
                <ul class="login-two">
                    <li>
                        <router-link to="/register">注册</router-link>
                    </li>
                    <li>|</li>
                    <li>
                        <router-link to="/login">登录</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <!--登录注册结束-->
        <!--log图标和电话开始-->
        <div class="header">
            <div class="header-onw">
                <router-link to="">
                    <img src="../../public/img/LOG.png" alt="">
                </router-link>
                <div class="header-two">
                    <s class="ico"></s>
                    <span style="color: #999999;
                    font-size: 14px;
                    line-height: 16px;
                    display: block;
                    margin: 15px;">热线电话:</span>
                    <span style="font-weight: normal;
                            display: block;
                            white-space: nowrap;
                            font-size: 42px;
                            color: #67b306;">020-88888888</span>
                </div>

            </div>
        </div>
        <!--log图标和电话结束-->
        <!--导航列表开始-->
        <div class="main">
            <div class="main-onw">
                <div class="line"></div>
                <el-menu
                        :default-active="activeIndex"
                        class="el-menu-demo"
                        mode="horizontal"
                        @select="handleSelect"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                    <el-menu-item index="1" class="font">网站首页</el-menu-item>
                    <el-menu-item index="2" class="font">关于我们</el-menu-item>
                    <el-submenu index="3" class="font">
                        <template slot="title">奶粉商城</template>
                        <el-menu-item index="3-1">高钙奶粉</el-menu-item>
                        <el-menu-item index="3-2">全脂奶粉</el-menu-item>
                        <el-menu-item index="3-3">高铁奶粉</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4" class="font">
                        <template slot="title">新闻资讯</template>
                        <el-menu-item index="4-1">公司资讯</el-menu-item>
                        <el-menu-item index="4-2">行业动态</el-menu-item>
                    </el-submenu>
                    <el-submenu index="5" class="font">
                        <template slot="title">婴儿案例</template>
                        <el-menu-item index="4-1">2岁案例</el-menu-item>
                        <el-menu-item index="4-2">3岁案例</el-menu-item>
                    </el-submenu>
                    <el-submenu index="6" class="font">
                        <template slot="title">售后服务</template>
                        <el-menu-item index="4-1">退货换货原则</el-menu-item>
                        <el-menu-item index="4-2">售后服务保证</el-menu-item>
                        <el-menu-item index="4-3">换货流程</el-menu-item>
                        <el-menu-item index="4-4">退款说明</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="7" class="font">在线留言</el-menu-item>
                    <el-menu-item index="8" class="font">联系我们</el-menu-item>
                    <!--<el-menu-item index="9"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
                </el-menu>
            </div>

        </div>
        <!--导航列表结束-->
        <!--轮播开始-->
        <div id="container">
            <ul class="pic">
                <li><a href="javascript:;"><img src="../../public/img/1.jpg" alt="pic1"></a></li>
                <li><a href="javascript:;"><img src="../../public/img/2.jpg" alt="pic2"></a></li>
                <li><a href="javascript:;"><img src="../../public/img/3.jpg" alt="pic3"></a></li>
                <li><a href="javascript:;"><img src="../../public/img/4.jpg" alt="pic4"></a></li>
            </ul>
            <ul id="position">
                <li class="cur"></li>
                <li class=""></li>
                <li class=""></li>
                <li class=""></li>
            </ul>
            <a href="javascript:;" id="prev" class="arrow"><</a>
            <a href="javascript:;" id="next" class="arrow">></a>

        </div>
        <!--轮播结束-->
        <!--搜索框开始-->
        <div class="sou" style="width: 100%;margin: 20px 0 20px 0;">
            <!--<div class="sou-onw" style="width: 1200px;"></div>-->
            <el-row class="demo-autocomplete">
                <el-col :span="4" style="float: right">
                    <el-autocomplete
                            class="inline-input"
                            v-model="state"
                            :fetch-suggestions="querySearch"
                            placeholder="请输入内容"
                            @select="handleSelect"
                    ></el-autocomplete>
                    <el-button type="primary" icon="el-icon-search">搜索</el-button>
                </el-col>
            </el-row>
        </div>
        <!--搜索框结束-->
        <!--高钙、全脂、高铁奶粉开始-->
        <div class="louti1" style="margin: 10px 0 50px 0;opacity: 0;">
            <el-row type="flex" class="row-bg" justify="space-around">
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <router-link to="">
                            <img src="../../public/img/高钙奶粉.png" alt="">
                            <h3>高钙奶粉</h3>
                            <span>高钙高铁奶粉是以优质鲜牛奶为原料精制而成。</span>
                        </router-link>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple-light">
                        <router-link to="">
                            <img src="../../public/img/全脂奶粉.png" alt="">
                            <h3>全脂奶粉</h3>
                            <span>全脂奶粉用纯乳生产的，基本保持了乳中的原有营养成分。</span>
                        </router-link>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <router-link to="">
                            <img src="../../public/img/高铁奶粉.png" alt="">
                            <h3>高铁奶粉</h3>
                            <span>以科技方法调配的“配方奶粉”，即以牛奶为原料。</span>
                        </router-link>
                    </div>
                </el-col>
            </el-row>
        </div>
        <!--高钙、全脂、高铁奶粉结束-->
        <!--楼层滚动开始-->

        <!--楼层1-->
            <div class="louti2" style="width: 1220px; margin: 0 auto;">
                <div class="title">
                    <span style="color: #67b306;">多年婴儿奶粉行业经验，成长一个个健康的婴儿</span>
                </div>
                <div class="title-onw" style="width: 300px;margin: 0 auto;">
                    <router-link to="">2岁案例</router-link>
                    <router-link to="">3岁案例</router-link>
                </div>
                <!--成功案例开始-->
                <div class="two">
                    <div class="gridlist" style="width: 110%;" >
                        <div class="bb">
                            <router-link to="/login">
                                <img src="../../public/img/b1.jpg" alt="">

                            <div  class="bg">
                                <span class="plus"></span>
                                <h3>宝宝案例1</h3>
                            </div>
                            </router-link>
                        </div>
                        <div class="bb">
                            <router-link to="">
                                <img src="../../public/img/b2.jpg" alt="">
                            </router-link>
                            <div  class="bg">
                                <span class="plus"></span>
                                <h3>宝宝案例2</h3>
                            </div>
                        </div>
                        <div class="bb">
                            <router-link to="">
                                <img src="../../public/img/b3.jpg" alt="">
                            </router-link>
                            <div  class="bg">
                                <span class="plus"></span>
                                <h3>宝宝案例3</h3>
                            </div>
                        </div>
                        <div class="bb">
                            <router-link to="">
                                <img src="../../public/img/b4.jpg" alt="">
                            </router-link>
                            <div  class="bg">
                                <span class="plus"></span>
                                <h3>宝宝案例4</h3>
                            </div>
                        </div>
                        <div class="bb">
                            <router-link to="">
                                <img src="../../public/img/b5.jpg" alt="">
                            </router-link>
                            <div  class="bg">
                                <span class="plus"></span>
                                <h3>宝宝案例5</h3>
                            </div>
                        </div>
                        <div class="bb">
                            <router-link to="">
                                <img src="../../public/img/b6.jpg" alt="">
                            </router-link>
                            <div  class="bg">
                                <span class="plus"></span>
                                <h3>宝宝案例6</h3>
                            </div>
                        </div>
                        <div class="bb">
                            <router-link to="">
                                <img src="../../public/img/b7.jpg" alt="">
                            </router-link>
                            <div  class="bg">
                                <span class="plus"></span>
                                <h3>宝宝案例7</h3>
                            </div>
                        </div>
                        <div class="bb">
                            <router-link to="">
                                <img src="../../public/img/b8.jpg" alt="">
                            </router-link>
                            <div  class="bg">
                                <span class="plus"></span>
                                <h3>宝宝案例8</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <!--成功案例结束-->


        <!--楼层部分-->
        <!--楼层滚动结束-->
    </div>
</template>

<script type="text/javascript">
    import "../../public/js/lunbo";
    import "../../public/js/banner"

    export default {
        data() {
            return {
                activeIndex: '1',
                state: ''
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            querySearch(queryString, cb) {
                var restaurants = this.restaurants;
                var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                // 调用 callback 返回建议列表的数据
                cb(results);
            },
            createFilter(queryString) {
                return (restaurant) => {
                    return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },
            loadAll(){
                return [
                    { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
                    { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
                    { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
                    { "value": "泷千家(天山西路店)", "address": "天山西路438号" }
                ]
            },
            handleSelect(item) {
                console.log(item);
            }
        },
        mounted() {
            this.restaurants = this.loadAll();
        }
    }
</script>

<style>
    @import "../../public/font-awesome.css"
    *{
        padding: 0;
        margin:0;
    }

    li{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    .login-onw{
        width: 100%;
        height:100%;
    }
    /*登录注册开始*/
    .login{
        width: 100%;
        height:30px;
        line-height: 30px;
        background-color: #fbeed5;
        color: #999999;
        position: relative;
        font-size:12px;
    }
    .login-onw{
        width:1200px;
        margin:0 auto;
    }
    .login-two{
        margin-top:-30px;
    }
    .login-two li{
        list-style: none;
        float: right;
        margin-left:8px;
        cursor: pointer;
    }
    /*登录注册结束*/

    /*log图标和电话开始*/
    .header{
        width: 100%;
        height:110px;
        padding-top:20px;
    }
    .header-onw{
        width:1200px;
        margin:0 auto;
    }
    .header-two{
        width: 350px;
        float: right;
        line-height: 44px;
        margin-top: 15px;
        font-family: impact;
        font-size: 32px;
        color: #67b306;
    }
    .ico{
        width: 85px;
        height: 65px;
        float: left;
        /*background-position: 0 3px;*/
        margin-right: 12px;
        background: url(../../public/img/ico.png) no-repeat;
        display: inline-block;
        vertical-align: middle;
        margin-top: 25px;
    }
    /*log图标和电话结束*/

    /*导航列表开始*/
    .main{
        width:100%;
        height:61px;
        background-color: rgb(84, 92, 100);
    }
    .main-onw{
        width:1200px;
        margin:0 auto;
    }
    .font{
        font-size: 16px !important;
    }
    /*导航列表结束*/

    /*轮播开始*/
    #container{
        width:100%;
        height:600px;
        position: relative;
        overflow: hidden;

    }
    .pic li {
        position: absolute;
        top: 0;
        left: 0;
        display: none;
    }
    .pic li img {
        width: 1920px;
        height: 600px;
    }
    #position{
        position: absolute;
        bottom: 0;
        right:0;
        margin: 0;
        background: #000;
        opacity: 0.4;
        width: 400px;
        text-align: center;
    }
    #position li{
        width: 10px;
        height: 10px;
        margin:0 2px;
        display: inline-block;
        -webkit-border-radius: 5px;
        border-radius: 5px;
        background-color: #afafaf;
    }
    #position .cur{
        background-color: #ff0000;
    }

    .arrow {
        cursor: pointer;
        display: none;
        line-height: 39px;
        text-align: center;
        font-size: 36px;
        font-weight: bold;
        width: 40px;
        height: 40px;
        position: absolute;
        z-index: 2;
        top: 50%;
        margin-top: -20px; /*width的一半*/
        background-color: RGBA(0,0,0,.3);
        color: #fff;
    }
    .arrow:hover {
        background-color: RGBA(0,0,0,.7);
    }
    #container:hover .arrow {
        display: block;
    }
    #prev {
        left: 20px;
    }
    #next {
        right: 20px;
    }
    /*轮播结束*/


    /*楼层滚动开始*/

    #loutinav ul li {
        width: 35px;
        height: 32px;
        border-bottom: 1px dotted #DDDDDD;
        list-style: none;
        font-size: 12px;
        text-align: center;
        position: relative;
        cursor: pointer;
        padding: 10px 0;
        background: #918888;
        color: #fff;
    }

    #loutinav ul li span {
        width: 35px;
        height: 32px;
        padding: 10px 0;
        position: absolute;
        top: 0;
        left: 0;
    }



    #loutinav ul li.last {
        background: #5e4a4a;
        color: #fff;
        border-bottom: 1px solid #ddd;
    }

    #loutinav ul li.active span {
        background: #c00;
        color: #fff;
        display: block;
    }

    #loutinav ul li:hover span {
        background: #c00;
        color: #fff;
        display: block;
    }

    /*高铁、高钙、全脂*/
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .grid-content:hover{
        margin-top:-5px;
    }
    .grid-content img{
        width: 120px;
        height: 120px;
        display: block;
        float: left;
        margin-right: 15px;
        border-radius: 50%;
        -webkit-border-radius: 50%;
    }
    .grid-content h3{
        color: #67b306;
        font-size: 24px;
        padding: 28px 0 8px;
        color: #67b308;
        font-weight: bold;
    }
    .grid-content span{
        display: block;
        color: #999999;
        font-size: 17px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    /*楼层1*/
    .title{
        padding: 45px 0 45px;
        text-align: center;
        font-weight: bold;
        color: #000;
        font-size: 36px;
    }
    .title-onw a{
        padding: 0 16px;
        height: 40px;
        line-height: 40px;
        background: #67b306;
        font-size: 18px;
        display: inline-block;
        margin: 0 20px;
        color: #fff;
        -webkit-transition: all ease 300ms;
        -moz-transition: all ease 300ms;
        -ms-transition: all ease 300ms;
        -o-transition: all ease 300ms;
        transition: all ease 300ms;
    }
    .title-onw a:hover{
        background: rgba(0,0,0,0.8);
        transition:0.5s;
    }
    .gridlist .bb{
        width: 280px;
        margin: 30px 26px 0 0;
        float: left;
        position: relative;
        overflow: hidden;
    }
    .gridlist .bb img{
        width: 280px;
        height: 210px;
        display: block;
    }
    .gridlist .bb .bg{
        width: 280px;
        height: 210px;
        background: rgba(0,0,0,0.7);
        position: absolute;
        top:100%;
    }
    .gridlist .bb .bg .plus{
        width: 280px;
        height: 210px;
        display: block;
        transition: all ease .4s;
        background: url(../../public/img/ipro_hover.png) no-repeat center center;
        position: absolute;
        left:0;
        top: 0;
    }
    .gridlist .bb .con1{
        width: 280px;
        height: 210px;
        background: rgba(0,0,0,0.7);
        position: absolute;
        top:0;
        left:0;
        transition: all .5s linear;
    }
    /*楼层滚动结束*/

</style>
