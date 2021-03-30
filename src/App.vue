<template>
<div class="application">
  <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
  <VueScrollProgressBar v-show="$route.path === '/'"></VueScrollProgressBar>
  <Slide v-show="$route.path === '/'"></Slide>
  <IntroSplash v-show="$route.path === '/'"></IntroSplash>
  <AboutMe v-show="$route.path === '/'"></AboutMe>
  <SkillsBar v-show="$route.path === '/'"></SkillsBar>
  <router-view></router-view>
  <Portfolio v-show="$route.path === '/'"></Portfolio>
  <ContactSection v-show="$route.path === '/'"></ContactSection>
  <MyFooter></MyFooter>
  <VueElevator></VueElevator>
   
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
  import VueElevator from '@/components/VueElevator.vue'
  import VueScrollProgressBar from '@/components/VueScrollProgressBar.vue'



  export default {
    mounted () {
      M.AutoInit()
    },
    components: {
      VueScrollProgressBar,
      Slide,
      IntroSplash,
      AboutMe,
      SkillsBar,
      Portfolio,
      ContactSection,
      VueElevator,
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

.collection .collection-item {
  background: #1b232e !important;
  color: #fff;
}


.application {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


.bm-burger-bars {
    background-color: #fff !important;
}

.elevator-button {
  color: #fff !important;
}

svg {
  color: #fff !important;
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
