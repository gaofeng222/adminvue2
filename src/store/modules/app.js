import storage from '@utils/storage'
const state = {
  sidebar: {
    opened:
      storage.get('sidebarStatus') == 0
        ? !!+storage.get('sidebarStatus')
        : true,
    withoutAnimation: false
  },
  device: 'desktop',
  size: storage.get('size') || 'medium'
}

const mutations = {
  TOGGLE_SIDEBAR: (state) => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      storage.set('sidebarStatus', 1)
    } else {
      storage.set('sidebarStatus', 0)
    }
  }
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
