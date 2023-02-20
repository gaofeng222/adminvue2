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
            :loading="loading"
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
import { validUsername } from '@utils/validate'
import { mapActions } from 'vuex'
export default {
  name: 'Login',

  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('请输入正确的账户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码长度不能少于6位'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, trigger: 'blur', validator: validateUsername }
        ],
        password: [
          { required: true, trigger: 'blur', validator: validatePassword }
        ]
      },
      userList: [],
      loading: false,
      otherQuery: {},
      redirect: ''
    }
  },
  directives: { focus },
  watch: {
    $route: {
      handler: function (route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
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
    ...mapActions('user', {
      getLogin: 'login'
    }),
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true
          this.getLogin(this.ruleForm)
            .then((res) => {
              console.log(res, 'login')
              if (res.code == 200) {
                this.$message({
                  message: '恭喜你，登录成功!',
                  type: 'success'
                })
                this.$router.push({
                  path: this.redirect || '/',
                  query: this.otherQuery
                })
              } else {
                this.loading = false
                this.resetForm(formName)
              }
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
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
