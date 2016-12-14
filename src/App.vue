<template>
  <div id="app">
    <h1>Route Alias</h1>
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
    <router-view>
    </router-view>
  
  </div>
</template>

<script>
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

  methods: {
     getParams() {
        console.log(this.$route.params)
     }
  }
}
</script>

<style>

</style>
