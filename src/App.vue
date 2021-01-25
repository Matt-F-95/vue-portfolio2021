<template>
<div>
  <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
  <Slide></Slide>
  <IntroSplash></IntroSplash>
  <AboutMe></AboutMe>
  <SkillsBar></SkillsBar>
  <Portfolio></Portfolio>
  <ContactSection></ContactSection>
  <MyFooter></MyFooter>
</div>
</template>

<script>
  import M from 'materialize-css'
  import Slide from '@/components/Slide.vue'
  import IntroSplash from '@/components/IntroSplash.vue'
  import AboutMe from '@/components/AboutMe.vue'
  import SkillsBar from '@/components/SkillsBar.vue'
  import Portfolio from '@/components/Portfolio.vue'
  import MyFooter from '@/components/MyFooter.vue'
  import ContactSection from '@/components/ContactSection.vue'

  export default {
    mounted () {
      M.AutoInit()
    },
    components: {
      Slide,
      IntroSplash,
      AboutMe,
      SkillsBar,
      Portfolio,
      ContactSection,
      MyFooter
    }
  }
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Poppins:wght@400;500;700&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #1b232e;
}


.bm-burger-bars {
    background-color: #fff;
}


#nav {
  padding: 30px;
}
#nav-mobile>li{
  display: inline-block;
}
#nav-mobile>li:last-child{
  padding-left: 2px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
