const getters = {
  sidebar: (state) => state.app.sidebar,
  size: (state) => state.app.size,
  device: (state) => state.app.device, //systemName showTagsView
  breadcrumeShow: (state) => state.app.breadcrumeShow,
  showTagsView: (state) => state.app.showTagsView,
  systemName: (state) => state.app.systemName,
  visitedViews: (state) => state.tagsViews.visitedViews,
  cachedViews: (state) => state.tagsViews.cachedViews,
  roles: (state) => state.user.roles,
  permission_routes: (state) => state.permission.routes
}

export default getters
