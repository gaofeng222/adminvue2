import instance from '@/utils/request'

export const getUserLists = () => {
  return instance({
    url: '/getUserList',
    method: 'get'
  })
}

export const loginIn = (data) => {
  return instance({
    url: '/login',
    data,
    method: 'post'
  })
}

export const logout = (data) => {
  return instance({
    url: '/logout',
    data,
    method: 'post'
  })
}

export const getInfo = (token) => {
  return instance({
    url: '/getInfo',
    data: { token }
  })
}
