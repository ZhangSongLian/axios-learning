<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <list v-make-red></list>
    <Author /> -->
    <!-- <contact-list /> -->
  <transition>
    <keep-alive>
      //显示的是当前路由地址所对应的内容
      <router-view></router-view>
    </keep-alive>
</transition>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import list from './components/list.vue'
// import Author from './components/authors.vue'
// import contactList from './components/ContactList1.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    // list,
    // Author,
    // contactList
  }
}
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 10px; */
  }
</style>
