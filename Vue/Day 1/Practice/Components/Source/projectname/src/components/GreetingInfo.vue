<template lang="">
  <div>
    <h1>{{ message }}</h1>
    <p>Hello {{ message }}</p>
    <p>{{ new Date().toString() }}</p>
    <input type="text" :value="message" />
    <button @click="demo">click me</button>
    <div v-if="show">Hello everyone</div>

    <ul>
      <li v-for="item in numbers" :key="item.Name">
        {{ item }}
      </li>
    </ul>

    <table>
    <template v-for="item in numbers" :key="item.Name" >
      <tr v-if="Display(item)" class="green">
       <td>{{item.Name}}</td>
            <td>{{item.Value}}</td>
      </tr>
      <tr   v-else class="red">
        <td>{{item.Name}}</td>
            <td>{{item.Value}}</td>
      </tr>
    </template>
      
    </table>
  </div>
</template>
<script>
export default {
  name: "GreetingInfo",
  data() {
    return {
      message: "Greeting of the Day!!",
      show:false,
      numbers:[{"Name":"FourtyFive","Value":45},{"Name":"Fourty","Value":40}]
    }
  },
  methods: {
    demo() {
      console.log(this.message);
    },
    getNumber() {
      return 30;
    },
    Display(object)
    {
      if(object.Value>40)
      {
        return true;
      }
      else
    {
      return false
    }

    }
  },
  computed:{

  }
};
</script>
<style scoped>
.green
{
  background-color:green;
}
.red
{
  background-color:red;
}
</style>
