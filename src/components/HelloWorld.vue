<template>
  <div class="hello">
     <img alt="Vue logo" src="../assets/logo.png">
    <h1 v-make-red>{{ msg }}</h1>

     <router-link to="/ContactList1" tag="h3" v-make-red>联系人列表</router-link>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.use(axios)
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
  // 箭头函数的形式
  // mounted(){
  //     axios.get('/user').then(val => {
  //       window.console.log(val);
  //       if(val.data){
  //          window.console.log(val.data.user)
  //       }
  //     })
  // }

  //   async mounted () {
  //     let { data: { user } } = await axios.get('/user')
  //     console.log(user)
  //   }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
