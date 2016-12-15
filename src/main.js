import Vue from 'vue';
import VueRouter from "vue-router";
import VueResource from 'vue-resource';

import App from './App.vue'
import router from './router/router.js';


import store from './vuex/store';

// 开启 debug 模式
Vue.config.debug = true;

Vue.use(VueRouter)
Vue.use(VueResource)


// 创建一个App实例，并挂载到选择符 #app 匹配的元素上
new Vue({
  store, // 注入到所有子组件
  el: '#app',
  router,
  render: h => h(App),

  // route

  beforeRouteEnter (to, from, next) {
  	console.log()
  },

  beforeRouteLeave (to, from, next) {

  },

  // Lifecycle hooks 2.0

  beforeCreate: function() {
  	console.log('beforeCreate')
  },
  created: function() {
  	console.log('created')
  },
  beforeMount: function() {
  	console.log('beforeMount')
  },
  mounted: function() {
  	console.log('mounted')

  	// this.$http.get('/src/mock/config.json', {}, {
  	// 	headers: {
  	// 		"X-Requested-Width": "XMLHttpRequest"
  	// 	},
  	// 	emulateJSON: true
  	// }).then(function(res){
  	// 	console.log(res)
  	// 	var data = res.data;
  	// 	this.msg = data;
  	// })

  },
  beforeUpdate: function() {
  	console.log('beforeUpdate')
  },
  activated: function() {
  	console.log('activated')
  },
  deactivated: function() {
  	console.log('deactivated')
  },
  beforeDestory: function() {
  	console.log('beforeDestory')
  },
  destoryed: function() {
  	console.log('destoryed')
  }
})
// .$mount('#app')
