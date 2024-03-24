import { appStore } from "@/stores/App";
import { intersection } from "lodash";
const permissionChecker = (permissions) => {
  // get user permissions and roles from store.user
  const store = appStore();

  console.log(permissions);
  // roles section for Super Admin why? because Super Admin has no permissions just only role
  return !!(intersection(store.user.roles,['root']).length > 0 || intersection(store.user.permissions,permissions).length > 0)
}
export default {
  install: (app, options) => {
    app.config.globalProperties.$can = (permissions=[]) => {
      // $can use on template
      return permissionChecker(permissions);
    }
    app.provide("can", (permissions = []) => {
      // can use on inject with <script setup>
      return permissionChecker(permissions);
    })
  },
  middleware: (to, from, next, permissions=[]) => {
    // middleware use on vue-router
    if (permissionChecker(permissions)){
      next(); // if everything is ok. you go to what you want
    }else{
      next({'name': 'error403'}) // if you don't have permission you go to error 403 page
    }
  }
}
