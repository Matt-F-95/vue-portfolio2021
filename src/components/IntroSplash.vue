<template>
<div class="bgIntro" id="home">
  <div class="container">
    <div class="child">
  <vue-typed-js :showCursor="true" :loop="true" :typeSpeed="250" :strings="['Matt Felton.', 'a front-end developer.']">
    <h1 class="typeHeading">Hi, I'm <span class="typing"></span></h1>
  </vue-typed-js>

  </div>
  </div>
  <div class="container">
  <div class="child" id="downArrow">
  <a href="#aboutMe"><i class="fas fa-arrow-down"></i></a>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'IntroSplash',
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
}

.navColor {
    background: #252934;
}

.bgIntro {
    background: #252A34;
    height: 100vh;
    width: 100vw;
    
}

.container .child {
  display: flex;
  justify-content: center;
  align-items: center;
}

.typeHeading {
  margin-bottom: -10em;
  color: #fff;
}

span {
  color: #F50057;
}




#downArrow {
  margin-top: 80vh;
}

#downArrow i {
  color: white;
  border: 5px solid white;
  background: black;
  padding: 15px;
  font-size: 32px;
  border-radius: 100%;
}






.center {
  margin: auto;
  width: 50%;
  padding: 10px;
}

.typeHeading {
  text-align: center;
}
</style>
