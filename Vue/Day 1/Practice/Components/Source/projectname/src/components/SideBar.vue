<template lang="">
  <div class="sidebar">
    <nav>
      <img src="imager/mich.jpg" alt="home" width="70%" />
      <ul>
        <li>
          <a href="#personal"><em class="fa fa-user"></em> Personal Details</a>
        </li>
        <li>
          <a href="#Education"
            ><em class="fa fa-graduation-cap"></em> Education</a
          >
        </li>
        <li>
          <a href="#Skill"><em class="fa fa-laptop"></em> Skills</a>
        </li>
        <li>
          <a href="#Projects"><em class="fa fa-clipboard"></em> Projects</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: "TodoItem"
};
</script>
<style scoped>
  .sidebar {
            background-color: rgb(134, 17, 125);
            width: 250px;
            position: fixed;
            height: 100%;
            overflow: auto;
        }
        
        .sidebar a {
            color: azure;
            padding: 15px;
            text-decoration: none;
            display: block;
        }
         .sidebar ul,
        li {
            list-style-type: none;
        }
</style>
