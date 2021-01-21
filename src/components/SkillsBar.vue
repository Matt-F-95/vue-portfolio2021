<template>
<div>
    <div class="container-fluid skillsBar">
        <div class="skillHolder">
            <div class="row">
                <div class="col l12 m12 s12">
       <i class="fab fa-html5"></i>
        <i class="fab fa-css3"></i>
       <i class="fab fa-js"></i>
       <i class="fab fa-vuejs"></i>
       <i class="fab fa-react"></i>
       <i class="fab fa-node"></i>
       <i class="fab fa-php"></i>
        <i class="fab fa-git"></i>
       <!-- <i class="fab fa-shopify"></i> -->
       <i class="fab fa-wordpress"></i>
       <i class="fab fa-gulp"></i>
       <i class="fab fa-less"></i>
      
       <i class="fab fa-sass"></i>
       </div>
       </div>
       </div>
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

.skillHolder {
    display: flex;
    justify-content: center;
    flex-direction: row;
}

.skillHolder i {
    margin:0.613rem;
}
.fa-vuejs {
    color: #fff;
    font-size: 5em;
}

.fa-js {
    color: #fff;
    font-size:5em;
}

.fa-npm {
    color: #fff;
    font-size: 5em;
}

.fa-html5 {
    color: #fff;
    font-size:5em;
}

.fa-css3 {
    color: #fff;
    font-size: 5em;
}

.fa-git {
    color: #fff;
    font-size:5em;
}

.fa-github {
    color: #fff;
    font-size: 5em;
}

.fa-node {
    color: #fff;
    font-size: 5em;
}

.fa-php {
    color: #fff;
    font-size: 5em;
}

.fa-wordpress {
    color: #fff;
    font-size: 5em;
}

.fa-gulp {
    color: #fff;
    font-size: 5em;
}

.fa-sass {
    color: #fff;
    font-size: 5em;
}

.fa-less {
    color: #fff;
    font-size: 5em;
}

.fa-react {
    color: #fff;
    font-size: 5em;
}
.fa-shopify {
    color: #fff;
    font-size: 5em;
}
</style>
