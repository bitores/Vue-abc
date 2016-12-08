
#### 用户基本诉求


*保存模块初始数据*

*要定义处理数据的函数*

*数据请求处理*

*模块交互*

##### code
```
var _a = 1, _b = 2, _c = 3;

function handleA() {
	
	return _a+1;
}

ajax({
	method: 'GET'
	...
})


其它交互
```


> Vue/VueX 中要满足用户的基本诉求，定义了 getters / actions / state / mutations 字段

##### [无痛学会各种 2 的 Vue2+Vuex2+Webpack2 前后端同构渲染](https://segmentfault.com/a/1190000007244289)

>相对于 vue2和vue 较大改动，vue的状态管理工具 vuex的改动不是很大，底层改动由于时间关系还没有来得及细究，但是在使用方面多了几个 Helper，利用ES6的展开函数可以更加方便的使用state,getters,mutations,actions。下面简单介绍下vuex各个部分的概念

* state是一个全局的状态存储，数据会存储在其中，vue组件可以直接访问其中的值，但是只可以读，不可以进行写操作
* getter,有些时候我们需要对获取的数据进行加工，而不是直接获取state中的数据，这时候可以通过getter定义函数，返回对应的数据
* mutations是vuex中唯一一个可以修改数据的地方，mutations可以定义事件函数，在vue组件中可以通过commit发射事件，调用函数。需要注意的是，mutations中的操作必须是同步的，不可以存在异步操作的情况。
* actions和 mutation比较相似，不同的是actions中不直接修改state，而是通过commit调用mutations修改数据，而且actions中可以存在异步处理逻辑

#### 常见2.0问题

> [1.x 与 2.x 区别](https://segmentfault.com/a/1190000006988584)

* 2.x actions可以直接在store中定义了

* 1.x 写法就是触发action和mutation都叫dispatch

* 2.x dispatch --> Action

* 2.x commit --> Mutation

* 2.x Action中已经返回了promise

* 新版vuex提供了几个封装方法 mapState, mapMutations, mapGetters,mapActions, 利用映射，可以外部定义

* Silent 默认false, 在commit一个mutation的时候 是否触发订阅的插件

* store.middlewares -> store.plugins 这个就是换个名字
    
* store.watch 这货貌似干掉又被还原了

* store.subscribe((mutation, state) => { ... }) 使用subscribe 监听vuex的变化

* registerModule 注册模块

* unregisterModule 注销模块

> mutations 代码类似

```
const mutations = {
  ADD_NOTE (state) {
    const newNote = {
      text: 'New Note',
      favorite: false
    }
    state.notes.push(newNote)
    state.activeNote = newNote
  }
}
```

> actions 代码类似

```
export const addNote = ({ dispatch }) => {
  dispatch('ADD_NOTE')
}
```

> getters 代码类似(简单对状态进行处理或直接返回状态)

```
vuex: {
  getters: {
    notes: state => state.notes,
    activeNote: state => state.activeNote==1
  }
}
```


> 为了方便 devtools 追踪状态变化，vuex 要求把异步操作封装在action，把同步操作放在mutations

```
actions 只是一个架构性的概念， 并不是必须的，说到底只是一个函数，你在里面想干嘛都可以，只要最后触发 mutation 就行。异步竞态怎么处理是用户自己的事情。vuex真正限制你的是只有 mutation 必须是同步的这一点

所以为了方便 devtools 追踪状态变化，vuex 要求把异步操作封装在action，把同步操作放在mutations
```


> vuex2.0 可以直接去store拿state了, 那getters还有什么用?

```
1. getters 可以对State进行计算操作
如：export const filtedItems = state => state.items.filter(item => item.beFilted === 1)

2. 虽然上一条在组件内也可以做，但是getters 可以在多组件之间复用

3. 如果一个状态只在一个组件内使用，是可以不用getters
```



> 新增的 mapGetters 和 mapActions 方法，webpack编译报错

```
解决方法很简单了，可以安装整个stage2的预置器或者安装 Object Rest Operator 的babel插件 babel-plugin-transform-object-rest-spread 。

修改babel的配置文件 .babelrc
{
	"presets": [
		["es2015", { "modules": false }]
	],
	"plugins": ["transform-object-rest-spread"]
}
```

>[构建对象时，让一变量作为一对象值时，其键值为些变量名]()

```
var ss = {
	mode,
	"a": 1,
	"b": 2
}


其实

mode = {} or mode = [] or mode = ...

var ss = {
	mode,
	"a" : 1,
	"b" : 2
}

等价于
var ss = {
	"mode" : {},
	"a" : 1,
	"b" : 2
}

or

var ss = {
	"mode" : [],
	"a" : 1,
	"b" : 2
}

or 

var ss = {
	"mode" : ...,
	"a" : 1,
	"b" : 2
}

```





#### Modules 单一的状态树 ——> 模块化的状态树

```
*模块的 mutations 和 getters方法第一个接收参数是模块的本地状态*

const moduleA = {
	state: {
		count: 0
	},
	mutations: {
		increment: (state) {
			state.count++
		}
	},
	actions: {},
	getters: {
		doubleCount(state){
			return state.count * 2
		}
	}
}

*在模块的 actions 中，context.state 暴露的是本地状态， context.rootState暴露的才是根状态*
const moduleB = {
	state: {},
	mutations: {},
	actions: {
		incrementIfOdd ({state, commit}) {
			commit('increment')
		}
	}
}

const store = new Vuex.Store({
	modules: {
		a: moduleA,
		b: moduleB
	}
})


store.state.a  ---> moduleA's state
store.state.b  ---> moduleB's state
```