import router from "./router";
import storage from "@utils/storage";
const whiteList = ["/login", "/auth-redirect"]; // no redirect whitelist
router.beforeEach((to, from, next) => {
  console.log(to, "to111");
  console.log(from, "from111");
  let token = storage.get("token");
  if (token) {
    if (to.path === "/login") {
      // if is logged in, redirect to the home page
      next({ path: "/" });
    } else {
      next();
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next();
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`);
    }
  }
});
