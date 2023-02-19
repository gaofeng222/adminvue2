<template>
  <div class="login-content">
    <div class="form-content">
      <h2>登录</h2>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        class="demo-ruleForm"
      >
        <el-form-item label="" prop="username">
          <el-input
            prefix-icon="el-icon-user"
            placeholder="请输入账户"
            v-model="ruleForm.username"
            autofocus
            v-focus
          ></el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input
            prefix-icon="el-icon-lock"
            show-password
            placeholder="请输入密码"
            v-model="ruleForm.password"
            v-focus
            @keyup.enter.native="submitForm('ruleForm')"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            style="width: 100%"
            type="primary"
            @click="submitForm('ruleForm')"
            >登 录</el-button
          >
        </el-form-item>
      </el-form>
      <div class="login-tips">
        <span>测试账号:admin</span><span>测试密码:123456</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserLists, loginIn } from '@/api/users'
import { focus } from '@/directives'
import storage from '@utils/storage'
export default {
  name: 'Adminvue2Index',

  data() {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 8, message: '长度在 6 到 8 个字符', trigger: 'blur' }
        ]
      },
      userList: []
    }
  },
  directives: { focus },
  mounted() {
    getUserLists().then((res) => {
      console.log(res)
      this.userList = res.data.data.rows
    })
    this.$notify({
      title: '提示',
      message: '欢迎试用安德玛管理系统!!!有问题请联系管理员QQ:596642721',
      position: 'bottom-right',
      type: 'success',
      duration: 0
    })
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          loginIn(this.ruleForm).then((res) => {
            console.log(res, 'login')
            if (res.code == 200) {
              this.$message({
                message: '恭喜你，登录成功!',
                type: 'success'
              })
              storage.set('token', '123456')
              this.$router.push('/home')
            } else {
              this.resetForm(formName)
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
@bgColor: #5377db;
.login-content {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: @bgColor url('https://s1.ax1x.com/2023/02/17/pSbqGkT.jpg')
    no-repeat center;
  background-size: cover;
  display: flex;
  place-items: center;
  justify-content: center;
  .form-content {
    background: #fff;
    width: 440px;
    height: 350px;
    border-radius: 10px;
    box-shadow: 2px 2px 10px 4px lightblue;
    padding: 30px 60px;
    // user-select: all;
    // transform: rotate(-3deg);
    // appearance: none;
    h2 {
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      color: #333;
      margin-bottom: 20px;
      // color: @red;
    }
  }
  .login-tips {
    font-size: 12px;
    color: #999;
    span:first-child {
      margin-right: 10px;
    }
  }
}
</style>
