import storage from '@utils/storage'
import { loginIn, logout } from '@api/users'
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
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      logout().then((res) => {
        commit('SET_TOKEN', '')
        storage.remove('systemName')
        storage.remove('token')
        resetRouter()
        resolve(res)
      })
    }).catch((error) => {
      reject(error)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
