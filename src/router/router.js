import VueRouter from "vue-router";
// import App from '../App.vue'

const Home = {
  template: `<div>
				<h1>Home</h1>
				<router-view></router-view>
				<p>Current route name: {{ $route.name }}</p>
  			</div>`
}

const Foo = {
  template: `<div>
				<h3>Foo</h3>
  			</div>`
}

const Bar = {
  template: `<div><h3>Bar</h3></div>`
}

const Baz = {
  template: `<div><h3>Baz</h3></div>`
}

// 创建一个路由实例
export default new VueRouter({
	mode: 'history', // url 去 #
	base: __dirname,
	routes:[
		{
			path: '/home',
			component: Home,
			beforeEnter:(to, from, next) =>{
				console.log('home')
				next()
			},
			children: [

				{
					path: 'foo/:id/:sd',
					component: Foo,
					// alias: 'foo'
					beforeEnter:(to, from, next) =>{
						console.log('foo')
						next()
					}
				},{
					path: 'bar',
					component: Bar,
					// alias: 'bar'
					beforeEnter:(to, from, next) =>{
						console.log('bar')
						next()

					}
				},{
					path: 'baz',
					component: Baz,
					// alias: 'baz'
					beforeEnter:(to, from, next) =>{
						console.log('baz')
						next()
					}
				}
			]
		},{
			path: 'default',
			component: Home,
			beforeEnter:(to, from, next) =>{
				console.log('to, from, next')
			}
		},{
			path: '*',
			// component: Home,
			beforeEnter:(to, from, next) =>{
				// console.log('to, from, next')
				// next()
				console.log(to)
				// console.log(from)
			},
		}
		
	]
})