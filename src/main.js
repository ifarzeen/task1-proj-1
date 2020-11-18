import Vue from 'vue'
import App from './App.vue'
import 'jquery'
import 'datatables.net'
import 'datatables.net-dt'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router'
import dtable from './components/DataTable.vue'

Vue.use(VueRouter);


const routes=[{path:'/data-table', component: dtable}];

const router=new VueRouter({
  routes
})

Vue.config.productionTip = false
new Vue({
  el:'#app',
  router,
  render: h => h(App),
}).$mount('#app')


