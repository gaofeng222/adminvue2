import storage from '@utils/storage'
import { loginIn, logout, getInfo } from '@api/users'
import router, { resetRouter } from '@router'
import { reject } from 'lodash'
const state = { token: storage.get('token'), roles: [], introduction: '' }
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}
const actions = {
  login({ commit }, userInfo) {
    const { username, password } = userInfo

    return new Promise((resolve, reject) => {
      loginIn({ username: username.trim(), password: password })
        .then((res) => {
          console.log(res, 'response')
          const { data } = res
          commit('SET_TOKEN', data.token)
          storage.set('token', data.token)
          resolve(res)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  getInfo({ commit }, state) {
    return new Promise((resolve, reject) => {
      getInfo(state.token)
        .then((response) => {
          const { data } = response
          if (!data) {
            reject('验证失败，请重新登录')
          }
          const { roles, introduction } = data
          // 用户角色不能为空
          if (!roles || roles.length == 0) {
            reject('用户角色不能为空')
          }

          commit('SET_ROLES', roles)
          commit('SET_INTRODUCTION', introduction)
          resolve(data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      logout().then((res) => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', '')
        storage.remove('systemName')
        storage.remove('token')
        resetRouter()
        resolve(res)
      })
    }).catch((error) => {
      reject(error)
    })
  },
  resetToken({ commit }) {
    return new Promise((resolve) => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      storage.remove('token')
      resetRouter()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
