<template>
<div>
    <div class="bgIntro">
        <h1 class="center">This is my intro</h1>
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
    background: #252525;
    height: 100vh;
    width: 100vw;
}

.center {
  margin: auto;
  width: 50%;
  padding: 10px;
}
</style>
