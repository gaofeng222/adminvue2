import storage from '@utils/storage'
const state = {}
const mutations = {}
const actions = {
  logout() {
    storage.remove('token')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
