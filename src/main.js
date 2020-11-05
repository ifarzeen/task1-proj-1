import Vue from 'vue'
import App from './App.vue'
import 'jquery'
import 'datatables.net'
import 'datatables.net-dt'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// var $       = require( 'jquery' );

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
