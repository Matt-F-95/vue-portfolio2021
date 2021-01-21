<template>
<div>
    <div class="container">
        <h2 class="center">A little about me</h2>
        <div class="row">
        <div class="col s4">
            <img src="#" alt="">
            <p>hihihihihihi <font-awesome-icon icon="coffee" /> <font-awesome-icon icon="coffee" /> </p>
        </div>
        <div class="col s8">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quam ratione esse rem itaque deserunt, cum unde, voluptatem consequuntur quasi maxime iusto laudantium omnis libero magni minus? Consequatur, nesciunt ipsam!</p>
        </div>
    </div>
    </div>
   </div>
</template>


<script>
export default {
  name: 'AboutMe',
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
    height: 80vh;
    width: 100vw;
}

.center {
  margin: auto;
  width: 50%;
  padding: 10px;
}
</style>
