<template>
  <div>
  <h1>Greeting of the Day !!! Mr. /Ms{{name}}</h1>
   <HelloWorld @notifyinfo="display($event)" ></HelloWorld>

   <DemoBinding></DemoBinding>
  </div>
</template>
<script>

import HelloWorld from "./components/HelloWorld.vue";
import DemoBinding from "./components/DemoBinding.vue";
export default {
  name: "App",
  data() {
    return {
    name: ""
    };
  },
  components: {

    HelloWorld,DemoBinding
  },
  methods:{
    display(message)
    {
      this.name=message;
    }
  }
};
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
body {
  margin: 0;
}

img {
  margin: 10px;
  padding: 10px;
}

.main {
  background-color: rgb(161, 115, 161);
  height: 100%;
  padding: 30px;
  margin-left: 250px;
  color: rgb(7, 6, 6);
}

#personal h2 {
  text-align: center;
  padding: 10px;
}
/* .pr tr,td{
           padding: 10px;
           margin: 10px;
           font-size: 20px;

        } */

#Education h2 {
  text-align: center;
  padding: 10px;
}

.edu {
  text-align: center;
}
/* .edu tr,td{
           padding: 10px;
           margin: 10px;
           font-size: 20px;
        } */

#Skill h2 {
  text-align: center;
  padding: 10px;
}

#Skill h3 {
  font-size: 20px;
  padding: 10px;
  margin: 10px;
}

#Skill ul,
li {
  font-size: 16px;
  margin: 10px;
}

#Projects h2 {
  text-align: center;
  padding: 10px;
}

#Projects h3 {
  font-size: 20px;
  padding: 10px;
  margin: 10px;
}

#Projects ul,
li {
  font-size: 20px;
  margin: 10px;
}

@media screen and (max-width: 600px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {
    float: left;
  }
  div.main {
    margin-left: 0;
  }
}

@media screen and (max-width: 300px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
  .edu {
    width: 50%;
  }
}
</style>
