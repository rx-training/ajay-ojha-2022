<template lang="">
  <div>
    <input type="text" v-model="name" />
    <h1>{{ name }}</h1>
    <button @click="demo()">click me</button>
  </div>
</template>
<script>
export default {
  name: "DemoBinding",
  data() {
    return {
      name: "varsha",
    };
  },
  methods: {
      demo()
      {
          console.log(this.name);
      }
  },
};
</script>
<style lang=""></style>
