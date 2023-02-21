import Mock from 'mockjs'
const userList = Mock.mock({
  code: 200,
  message: 'success',
  data: {
    total: 100,
    'rows|10': [
      {
        id: '@guid',
        name: '@cname',
        'age|20-30': 23,
        'job|1': ['前端工程师22', '后端工程师', 'UI工程师', '需求工程师']
      }
    ]
  }
})
const loginAdminOk = {
  code: 200,
  message: '登录成功',
  data: {
    result: true,
    token:
      'adminjiuiwqewqepkpqwepwpekpwqkepwqkepqkpekwpqekpqwkepqkwp132321312pkpkp12k3p1kpk12p3kp21k3p21k3p'
  }
}
const loginEditorOk = {
  code: 200,
  message: '登录成功',
  data: {
    result: true,
    token:
      'jiuiwqewqepkpqwepwpekpwqkepwqkepqkpekwpqekpqwkepqkwp132321312pkpkp12k3p1kpk12p3kp21k3p21k3p'
  }
}
const loginError = {
  code: 500,
  message: '账号或密码错误',
  data: {
    result: false
  }
}
const loginout = {
  code: 200,
  message: '退出成功',
  data: {
    result: true
  }
}
export default {
  'get|/getUserList': (options) => {
    console.log(options, 'options')
    return userList
  },
  'post|/login': (options) => {
    console.log(options, 'options222')
    let parmas = JSON.parse(options.body)
    if (parmas.username == 'admin' && parmas.password == 123456) {
      return loginAdminOk
    } else if (parmas.username == 'editor' && parmas.password == 123456) {
      return loginEditorOk
    } else {
      return loginError
    }
  },
  'post|/logout': (options) => {
    console.log(options, 'options')
    return loginout
  },
  'get|/getInfo': (options) => {
    console.log(options, 'options-getInfo')
    const opt = JSON.parse(options.body)
    if (!opt.token) {
      return {
        code: 500,
        message: 'token不能为空',
        data: {
          result: false
        }
      }
    }
    let isAdmin = localStorage.getItem('token').startsWith('admin')
    console.log(isAdmin, 'isAdmin')
    return {
      code: 200,
      message: 'success',
      data: {
        result: true,
        roles: isAdmin ? ['admin'] : ['editor'],
        // roles: ['admin', 'editor'],
        introduction: '我是管理员'
      }
    }
  }
}
