<template>
    <div class="log">
        <div class="log-one">
            <div class="log-two">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <!--用户名-->
                    <el-form-item label="用户名">
                        <el-input type="text" placeholder="请输入内容" v-model="ruleForm.input" clearable></el-input>
                    </el-form-item>
                    <!--密码-->
                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                    </el-form-item>

                    <el-form-item prop="verifycode" label="验证码">
                        <!-- 注意：prop与input绑定的值一定要一致，否则验证规则中的value会报undefined，因为value即为绑定的input输入值 -->
                            <el-input v-model="ruleForm.verifycode" placeholder="请输入验证码" class="identifyinput"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <div class="identifybox">
                            <div @click="refreshCode">
                                <s-identify :identifyCode="identifyCode"></s-identify>
                            </div>
                            <el-button @click="refreshCode" type='text' class="textbtn">看不清，换一张</el-button>
                        </div>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                        <router-link to="/register" style="float: right;color: #fff;">注册</router-link>
                    </el-form-item>
                </el-form>
            </div>
        </div>

    </div>
</template>

<script type="text/javascript">
    import SIdentify from './Text.vue';
    export default {
        data (){
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            // 验证码自定义验证规则
            const validateVerifycode = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入验证码'))
                } else if (value !== this.identifyCode) {
                    console.log('validateVerifycode:', value)
                    callback(new Error('验证码不正确!'))
                } else {
                    callback()
                }
            };

            return {
                ruleForm: {
                    input:'',
                    pass: '',
                    verifycode:''
                },
                identifyCodes: '1234567890',
                identifyCode: '',
                rules: {
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    verifycode: [
                        { required: true, trigger: 'blur', validator: validateVerifycode }
                    ]
                }
            };
        },
        components:{
            SIdentify
        },
        mounted() {
            // 验证码初始化
            this.identifyCode = '';
            this.makeCode(this.identifyCodes, 4)
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            // 生成随机数
            randomNum(min, max) {
                return Math.floor(Math.random() * (max - min) + min)
            },
            // 切换验证码
            refreshCode() {
                this.identifyCode = ''
                this.makeCode(this.identifyCodes, 4)
            },
            // 生成四位随机验证码
            makeCode(o, l) {
                for (let i = 0; i < l; i++) {
                    this.identifyCode += this.identifyCodes[
                        this.randomNum(0, this.identifyCodes.length)
                        ]
                }
//                console.log(this.identifyCode)
            }
        }

    }
</script>

<style>
    .el-form{
        margin-left:155px;
    }
    .el-form-item__content{
        width:300px;
    }
    .log-one{
        position: absolute;
        width:800px;
        height:500px;
        left:50%;
        top:50%;
        margin-left:-400px;
        margin-top:-250px;
        background-color: rgba(0,0,0,.5);
        border:1px solid red;
    }
    .log-two{
        margin-top:30px;
    }
    .log{
        width:100%;
        height:969px;
        background-image: url("../../public/img/timg.jpg");
    }
    .el-input__inner{
        width:300px;
    }
    .el-input{
        width:300px;
        margin-bottom:15px;
    }
    .el-form-item__label{
        color: #fff;
    }
</style>
