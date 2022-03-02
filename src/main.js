import Vue from 'vue'
import App from './App.vue'
import router from './route'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/style.less'
import Icon from 'vue2-svg-icon/Icon'
import store from '@/store'
Vue.component('icon', Icon)
Vue.config.productionTip = false
ElementUI.TableColumn.props.showOverflowTooltip = {
  type: [Boolean],
  default: true
}
router.beforeEach((to, from, next) => {
  to, from, next;
  if (to.path == '/login') {
    next();
  } else {
    if (!localStorage.getItem("token"))
      next('/login');
    else
      next();
  }

})
Vue.use(ElementUI)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
