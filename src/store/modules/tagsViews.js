const state = {
  visitedViews: [],
  cachedViews: []
}
const mutations = {
  ADD_VISITED_VIEW: (state, view) => {
    console.log(view, 'test-views')
    if (state.visitedViews.some((v) => v.path === view.path)) return
    state.visitedViews.push(
      Object.assign({}, view, {
        title: view.meta.title || 'no-name'
      })
    )
  },
  DEL_VISITED_VIEW: (state, view) => {
    for (const [i, v] of state.visitedViews.entries()) {
      if (v.path === view.path) {
        state.visitedViews.splice(i, 1)
        break
      }
    }
  }
}
const actions = {
  addView({ dispatch }, view) {
    console.log('addViews')
    dispatch('addVisitedView', view)
  },
  addVisitedView({ commit }, view) {
    commit('ADD_VISITED_VIEW', view)
  },
  delView({ dispatch, state }, view) {
    return new Promise((resolve) => {
      dispatch('delVisitedView', view)
      //   dispatch('delCachedView', view)
      resolve({
        visitedViews: [...state.visitedViews]
        // cachedViews: [...state.cachedViews]
      })
    })
  },
  delVisitedView({ commit, state }, view) {
    return new Promise((resolve) => {
      commit('DEL_VISITED_VIEW', view)
      resolve([...state.visitedViews])
    })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
