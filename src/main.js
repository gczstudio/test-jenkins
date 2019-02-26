import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
{{#if_eq library "element"}}
console.log('element')
{{/if_eq}}
new Vue({
  render: h => h(App)
}).$mount('#app')
