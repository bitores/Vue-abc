<template>
  <div id="app">
    <h1 @click="getParams">Route Alias</h1>
    <ul>
      <li>
        <router-link to="/home/foo/1/44">Foo</router-link>
      </li>
      <li>
        <router-link to="/home">Home</router-link>
      </li>
      <li>
        <router-link to="/home/baz">Baz</router-link>
      </li>
    </ul>
    <h4>{{classObject}}</h4>
    <child></child>
    <!-- <mychild></mychild> -->
    <inner></inner>
    <child2></child2>
    <child3></child3>
    <child4></child4>
    <child5></child5>
    <!-- <child6></child6>
    <myChild></myChild> -->
    <router-view>
    </router-view>
  
  </div>
</template>

<script type="text/x-template" id="child-template"></script>

<script>
import Vue from 'vue';
import Inner from './components/Inner.vue';

var Child = { // 外定义， 内注册
  template: '<div>A custom component! —— child</div>'
} 

var mychild = new Vue({ // 这样定义是！！！！错误的！！，new Vue只能通过 el来绑定元素
  template: '<div>A custom component!</div>'
  // el:"#child-template"
})

// Vue.component('child6', myChild)

var myChild = Vue.extend({
  template: '<div>A custom component!___child4/5</div>'
})

var child5 = Vue.component('child4', myChild)


Vue.component('child2', { // 外定义，外注册
  template: '<div>A custom component! - -child2</div>'
})


export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  created() {
    console.log('created App')
  },

  watch: {
    '$route':'getParams'
  },

  computed: {
    classObject: function() {
      return 'classObject'
    }
  },

  methods: {
     getParams() {
        console.log(this.$route.params)
     }
  },

  components: {
    Child,
    Inner,
    "child3": { // 内定义内注册
      template: '<div>A custom component! ^^ child3</div>'
    },
    child5,
    // child6,
    // myChild
  }
}
</script>

<style>

</style>
