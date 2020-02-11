<template>
    <div class="log">
        <div class="log-one">
            <div class="log-two">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <!--用户名-->
                    <el-form-item label="用户名" prop="account">
                        <el-input type="text"  v-model="ruleForm.account" clearable></el-input>
                    </el-form-item>
                    <!--密码、确认密码-->
                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="证件号" prop="age">
                    <el-input v-model.number="ruleForm.age"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
                        <router-link to="/login" style="float: right;color: #fff;">返回登录</router-link>
                    </el-form-item>
                </el-form>
            </div>
        </div>

    </div>
</template>

<script type="text/javascript">
    export default {
        data (){
            var checkAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('证件号不能为空'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数字值'));
                    } else {
                        if (value < 18) {
                            callback(new Error('必须年满18岁'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
            };
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
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            var validateAccunt = (rule, value, callback) =>{
                if (!value) {
                    return callback(new Error('用户名不能为空'));
                }else if(value.length <6){
                    return callback(new Error('用户名不能小于6位'));
                }else if(value.length >12){
                    return callback(new Error('用户名不能大于16位'));
                }else{
                    callback()
                }
            };
            return {
                ruleForm: {
                    pass: '',
                    checkPass: '',
                    age: '',
                    account:''
                },
                rules: {
                    input:'',
                    pasword:'',
                    account: [
                        { validator: validateAccunt, trigger: 'blur' }
                    ],
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                    age: [
                        { validator: checkAge, trigger: 'blur' }
                    ]
                }
            };
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
