<template>
<button @click="add()">Add record</button>
</template>

<script>

import axios from 'axios';
export default { 
  name: 'App',
  data(){
  return{
    user:{
        "name": "meghna",
        "mail": "meghna@gmail.com",
        "gender": "female",
        "status": "inactive"
        },
        token: "33036075d6f588e951c390d0f2a2941681ccbebc45e9e03ab2c8745e70ff37c9"
  }

},

  
async created()
{
 var result= await axios.get("https://gorest.co.in/public/v2/users",{headers:{'Content-Type':  'application/json',
        Authorization:`Bearer ${this.token}`}});
  console.log(result.data);
},
methods:{
async  add()
  {
     var result= await axios.post("https://gorest.co.in/public/v2/users",{
        "name": "meghna",
        "email": "meghna@gmail.com",
        "gender": "female",
        "status": "inactive"
        },{headers:{'Content-Type':  'application/json',
        Authorization:`Bearer ${this.token}`}})
  console.log(result.data);
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
