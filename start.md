# start Vue

[vue-2.0-vue-router-2.0-vuex-2.0-](https://github.com/navyxie/vue-2.0-vue-router-2.0-vuex-2.0-)

#### install

* nrm ls (taobao)

* npm install -g cnpm --registry=https://registry.taobao.org

* [vue2.0](http://cn.vuejs.org/v2/guide)

* cnpm install -g webpack

* cnpm install -g vue-cli

* vue init [模板名称<有5种>](https://github.com/vuejs-templates) 工程名称<不能有中文>

* cd 工程名称 进入目录

* npm install 安装依赖

* npm run dev 开始运行

> 目前官方提供的模板

* webpack
* webpack-simaple
* browserify
* browserify-simple
* simple

> 路由模块 [vue-router] & 网络请求模块 vue-resource

* cnpm install vue-router vue-resource --save
* Vue.use(VueRouter)
* Vue.use(VueResource)

* [vue-router2.0 子路由](http://blog.csdn.net/qq_24122593/article/details/53126611)

* [vue-resource & vue-async-data](http://www.mamicode.com/info-detail-1190324.html)

* [其它使用方法](http://www.jianshu.com/p/5ba253651c3b)



#### vue2.0 填坑

* npm update -g 更新最新

* npm update vue-cli

* 入口文件（ main.js ） Vue.js 初始化的时要加上 render: (h) => h(App) 方法。
* url 配置。 vue-router 2 的路由定义不一样了，仿照文档修改就好。
* 不支持 v-link ，需要改用 <router-link :to="">。注意这里是 :to，而原来 v-link 不需要 :。
* ready 事件改为 mounted 。生命周期 hook 变化可以参考这里： http://vuefe.cn/guide/migration.html#生命周期钩子
* 不支持 prop: defaultValue 写法了，得改成 prop: {type: YourType, default: defaultValue}。
* 不建议修改 props ， Vue 2.0 中将修改 props 标记为不规范行为，会产生 warning 。
* $destroy 无法删除子组件，作者表示不建议这样做，应当在父组件中删除。我这里改起来比较麻烦，就手动删除了 DOM ，然后 $destroy 。



#### [Vue-router 2.0](https://segmentfault.com/a/1190000006623100) 
#### [2.0](http://router.vuejs.org/zh-cn/index.html)

> 1.0版本不用new Vue，一直都是像下面这样启动

```
import app from 'app.vue';
router.start(app, '#app');
```

> 2.0官方给的例子全是模版写在template里的

```
import Vue from 'vue';
import App from './app.vue';
import router from './router';

var app = new Vue({
    <!-- el: '#app', -->
    router,
    render: h => h(App)
}).$mount('#app');
```

> 传参

```
<router-link :to="{path:‘details‘,query: {id:el.tog_line_id}}"></router-link>

this.$route.query.id;
```

#### 组件

> 标准组件写法

```
<template>
	<div id="firstcomponent">
		<h1></h1>
		<a href=""></a>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				author: ''
			}
		},

		components:{
			子组件
		},

		method: {

		},

		...
	}
</script>
<style>
	
</style>
```

*注意点*

* template 中只有一个 div 根节点
* 数据要写在 return 里面而不是像其它文档那样子

```

错误的写法：

data: {
	msg: ''
}

```