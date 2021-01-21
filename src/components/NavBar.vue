<template>
<div class="navbar-fixed">
   <nav>
    <div class="nav-wrapper navColor">
      <a href="#" class="brand-logo">Matt Felton</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
         <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
         <li><router-link to="/">Portfolio</router-link></li>
        <li><router-link to="/about">Contact</router-link></li>
      </ul>
    </div>
  </nav>
  </div>
</template>


<script>
export default {
  name: 'NavBar',
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
  text-transform: uppercase;
  letter-spacing: 3.5px;
}
a {
  color: #fff;
  
}

.navColor {
    background: #252934;
}
</style>
