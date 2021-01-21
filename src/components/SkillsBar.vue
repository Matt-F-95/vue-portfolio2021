<template>
<div>
    <div class="container-fluid skillsBar">
        <h2>Skills</h2>
        <p>have a cup of <font-awesome-icon icon="coffee" /></p>
    </div>
</div>
</template>


<script>
export default {
  name: 'SkillsBar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  text-transform: uppercase;
}

.skillsBar {
    background:#252934;
}

</style>
