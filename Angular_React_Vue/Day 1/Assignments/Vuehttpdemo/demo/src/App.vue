<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios';
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data()
  {
    return{
      items:[],
      token:"33036075d6f588e951c390d0f2a2941681ccbebc45e9e03ab2c8745e70ff37c9"
    }
  },
  async created(){
    try {
      const res = await axios.get(`https://gorest.co.in/public/v2/users`,{headers:{'Content-Type':  'application/json',
        Authorization:`Bearer ${this.token}`}})
      this.items = res.data;
      console.log(this.items);
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
