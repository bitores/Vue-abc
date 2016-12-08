# [Vue-abc](http://www.jb51.net/article/95798.htm)


## 创建项目

	1、安装vue-cli
	npm install -g vue-cli
	2、安装webpack
	npm install -g webpack
	3、创建项目模板
	vue init webpack vue-demo
	vue init vuxjs/webpack vue-demo
	4、进入项目目录
	cd vue-demo
	5、安装依赖包
	npm install
	6、启动服务
	npm run dev

***项目目录结构***
	
	components/ 文件夹用来存放我们的 Vue 组件
	vuex/ 文件夹存放的是和 Vuex store 相关的东西（state object，actions，mutators)
	build/ 文件是 webpack 的打包编译配置文件
	config/ 文件夹存放的是一些配置项，比如我们服务器访问的端口配置等
	dist/ 该文件夹一开始是不存在，在我们的项目经过 build 之后才会产出
	App.vue 根组件，所有的子组件都将在这里被引用
	index.html 整个项目的入口文件，将会引用我们的根组件 App.vue
	main.js 入口文件的 js 逻辑，在 webpack 打包之后将被注入到 index.html 中



	├── index.html
	├── main.js
	├── api
	│   └── ... # 抽取出API请求
	├── components
	│   ├── App.vue
	│   └── ...
	└── store
	    ├── index.js          # 我们组装模块并导出 store 的地方
	    ├── actions.js        # 根级别的 action
	    ├── mutations.js      # 根级别的 mutation
	    └── modules
	        ├── cart.js       # 购物车模块
	        └── products.js   # 产品模块

##[Vue.js 源码学习笔记](http://www.open-open.com/lib/view/open1439344021458.html)

##[vue 进行笔记](http://www.cnblogs.com/thyong/p/5274748.html)


## new Vue 与 Vue.extend 区别

	new vue 是新建 vue 对象，需要绑定元素的。 
	vue.extend 是新建 vue 组件，使用依赖于 vue 对象。


##[Vuex 笔记](http://zhenyong.site/2016/07/30/vuex-q-and-a/)



*VueX*

```
VueX 使用了大量的 es6 的语法，而这需要自己在处理时 在编译配置工具中添加 es6 处理配置 babel
```

[用 Vuex 构建一个笔记应用](http://www.tuicool.com/articles/qUzMN3Y)

	Vuex 把状态分成 组件内部状态 和 应用级别状态 ：

	组件内部状态：仅在一个组件内使用的状态(data 字段)

	应用级别状态：多个组件共用的状态
	


[vuex进阶目录](https://github.com/vuejs/vuex/blob/master/docs/zh-cn/SUMMARY.md)

[Vuex 教程](http://vuex.vuejs.org/zh-cn/)

[VueX Book案例](https://github.com/coligo-io/notes-app-vuejs-vuex)


***VueX 是一个专门为 Vue.js 应用设计的状态管理架构***

	原（无VueX）: 所有组件 各自 的状态，由自已处理
	现（有VueX）: 所有组件 所有 的状态，由VueX处理

	优点：方便了各组件状态的交互与传递

	格式：module 里定义 'store' 和 'mutations'。
		store : 是我们正常要维护的状态数据。
		mutations: 是操作和维护 store 的处理


	code

	new Vuex.Store({
		state:{},
		mutations:{}
	})

eg.

-  5  +

vue:

new Vue({
	method:{
		inc(){
			this.count++;
		},
		dec(){
			this.count--;
		}
	}
})


vueX:

new VueX.Store({
	state:{
		count:0
	},
	mutations:{
		inc: state=>state.count++,
		dec: state=>state.count--
	}
})

new Vue({
	method:{
		inc(){
			store.commit('inc')
		},
		dec(){
			store.commit('dec')
		}
	}
})


假设有这样一个场景：
	我们有一个父组件，同时包含两个子组件。父组件可以很容易的通过使用 props 属性来向子组件传递数据。

但是问题来了，
	当我们的两个子组件如何和对方互相通信的？ 或者子组件如何传递数据给他父组件的？在我们的项目很小的时候，这个两个问题都不会太难，因为我们可以通过事件派发和监听来完成父组件和子组件的通信。

然而，随着我们项目的增长：
1、保持对所有的事件追踪将变得很困难。到底哪个事件是哪个组件派发的，哪个组件该监听哪个事件？
2、项目逻辑分散在各个组件当中，很容易导致逻辑的混乱，不利于我们项目的维护。
3、父组件将变得和子组件耦合越来越严重，因为它需要明确的派发和监听子组件的某些事件。


##[基础](http://wiki.jikexueyuan.com/project/vue-js/system.html)

1. 指令、自定义指令    v-for... | v-自定义指定
	
	Vue.directive('自定义指令',{

		isLiteral: true | false, // this.expression

		twoway:true|false, // 支持双向绑定

		acceptStatement:true|false, // 支持行内表达式

		deep: true | false, // 属性变自动触发 update

		bind:function(){
			// 加载
		},
		update: function(value){
			// 更新
		},
		unbind: function(){
			// 卸载
		}
	})

	Vue.directive('自定义指令', function update);

2. 过滤器、自定义过滤器 | json... | 自定义过滤器

	Vue.filter('自定义过滤器', function(value){

	})

3. 自定义组件
	
	Vue.component('child', {
		
		<!-- 接收属性传参 -->
		props:['msg',myMessage],

		template: '<span>{{msg}}</span>',

		<!-- 初始数据 - 私有的状态 -->
		data: 

		
	})

	<!-- 重要：使用连字符分隔的名称！ -->

	<child my-message="hello!"></child>

3. 基本格式

	new Vue({

		el:"element-selector",
		
		// 完成一些复杂的逻辑计算
		computed: {
			// 页面引用方式 {{sum}}
			sum: function(){}
		},

		http:{

			headers:{

				'Content-Type': 'application/x-www-form-urlencoded'
			}
		},
		// 页面加载完成时 执行ready
		ready:function(){

			// npm install vue-resource --save 
			// var Vue = require('vue') || Vue.use(require('vue-resource'))
			this.$http.get(url, function(data) { 
				
			}).error(function(data, status, request) { 

				console.log('fail' + status + "," + request); 
			})

			this.$http.post(url, postdata, function callback
		},

		data:{
			obj1:{},
			array1:[],
			string1:""
		},

		methods:{
			doAction:function(){}
		}
	})




##注册组件(又称组件命名)

###简单注册一个组件

*外部定义并注册组件*
	Vue.component('my-component', {
		template: '<div>A custom component!</div>'
	})

*局部定义并注册（内部注册）*

	var Parent = Vue.extend({
	  components: {
	    'my-component': {
	      template: '<div>A custom component!</div>'
	    }
	  }
	})


###借组Vue.extend生成的组件来注册（定义与注册分开）

1、使用Vue.extend方法创建一个组件

	var MyComponent = Vue.extend({
	  // 选项...后面再介绍
	})

2、使用Vue.component方法注册组件，还得给组件命个名

	Vue.component('my-component', MyComponent)

命名以后就能在HTML标签中使用这个组件名称，像使用DOM元素一样。下面来看看一个完整的组件注册和使用例子。


####js代码：

*定义*

	var MyComponent = Vue.extend({
	  template: '<div>A custom component!</div>'
	})

*注册（命名）*

	Vue.component('my-component', MyComponent)

*创建根实例*

	new Vue({
	  el: '#example'
	})


####html代码：

*使用*

	<div id="example">
	  <my-component></my-component>
	</div>


####输出结果：

	<div id="example">
	  <div>A custom component!</div>
	</div

###嵌套组件

*子组件*

	var child = Vue.extend({
	  template: '<div>A custom component!</div>'
	});

*父组件嵌套子组件*

	var parent = Vue.extend({

	  template: '<div>Parent Component: <child-component></child-component></div>',
	  components: {
	  	// 子组件注册（命名）
	    'child-component': child
	  }
	});

*父组件注册（命名）*
Vue.component("parent-component", parent);



#### Vue 组件的几种写法


*第一种（内置html）*

```
Vue.component('app-header', {
    template: '<div>A custom component!</div>'
})
```	

*第二种（手动绑定外置html）*

```
<script type="text/x-template" id="head-template">
  <div class="head">
    <h1>{{ title }}</h1>
  </div>
</script>

Vue.component('app-header', {
    template: '#head-template',
    data: {
        title: '我是頭部',
        name:'zhang',
        city:'Beijing',
        content:'these are some desc about Blog'
    }
})
```	

*第三种（借助官方vue-cli编译自动绑定外置html）*

```
<template>
  <div class="header">
    <h1> {{ title }} </h1>
  </div>
</template>

<script>
  export defualt {
    data: function() {
      return {
        title: '我是頭部'
      }
    }
  }
</script>

<style>
  .header {
    color: red;
  }
</style>
```	

*子组件可以绑定时定义*

```
var Parent = Vue.extend({
    template: '<div>I\'m Parent, My children: <myComponent></myComponent><child></child></div>',
    components: {
        'myComponent': {
            template: '<div>child component!</div>',
        },
        'child': {
            template: '<div>child component!</div>',
        }
    }
});
```