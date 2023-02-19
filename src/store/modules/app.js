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
  size: storage.get('size') || 'medium',
  breadcrumeShow: true,
  systemName: storage.get('systemName') || '我的'
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
  },
  TOGGLE_BREADCRUME(state) {
    state.breadcrumeShow = !state.breadcrumeShow
  },
  CHANGE_SYSTEMNAME(state, value) {
    storage.set('systemName', value)
    state.systemName = value
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
