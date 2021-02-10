<template>
<div>
<Slide>
<a href="#home">
  <span>Home</span>
  </a>
  <a href="#about">
    <span>About</span>
  </a>
  <a href="#portfolio">
    <span>Portfolio</span>
  </a>
  <a href="#contact">
    <span>Contact</span>
  </a>
</Slide>
</div>
</template>


<script>

import { Slide } from 'vue-burger-menu'
export default {
    components: {
        Slide
    }
}
        

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
  /* text-transform: uppercase;
  letter-spacing: 3.5px; */
}
a {
  color: #fff;
  
}

.navColor {
    background: #252934;
}
.bm-item-list>* {
  background: #3F3F41;
}

.bm-item-list>* span {
  letter-spacing: 2.5px;
}
.bm-item-list>* span:hover {
  color: #F50057;
  transition: .5s;
  background:
}

.bm-menu .bm-item-list {
  background: #252525 !important;

}

</style>
