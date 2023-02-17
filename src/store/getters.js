const getters = {
  sidebar: (state) => state.app.sidebar,
  size: (state) => state.app.size,
  device: (state) => state.app.device,
  visitedViews: (state) => state.tagsViews.visitedViews,
  cachedViews: (state) => state.tagsView.cachedViews
}

export default getters