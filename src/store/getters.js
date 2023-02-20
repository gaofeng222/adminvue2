const getters = {
  sidebar: (state) => state.app.sidebar,
  size: (state) => state.app.size,
  device: (state) => state.app.device, //systemName
  breadcrumeShow: (state) => state.app.breadcrumeShow,
  systemName: (state) => state.app.systemName,
  visitedViews: (state) => state.tagsViews.visitedViews,
  cachedViews: (state) => state.tagsView.cachedViews,
  roles: (state) => state.user.roles
}

export default getters
