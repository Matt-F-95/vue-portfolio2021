<template>
<div>
    <div class="container aboutMe" id="about">
        
        <div class="row">
        <div class="col s12 m4 l4">
           <img class="selfImage" width="200" height="200" alt="Matt Felton" src="@/assets/mattfelton.jpeg">
        </div>
        <div class="col s12 m8 l8">
            <p>I'm Matt, a front-end developer and designer that aspires to make fast, user-friendly, and responsive digital experiences.</p>
            <p>I graduated from Seneca College's Web Development program in 2017, George Brown's Social Media Marketing in 2018, and from hackerYou's Advanced JavaScript program in 2018. I'm currently a second year student in Durham College's Contemporary Web Design program.</p>
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

.selfImage {
  width: 100%;
  height: auto;
  border-radius: 20%;
}

.aboutMe {
  margin-top: 50px;
  margin-bottom: 50px;
}



</style>
