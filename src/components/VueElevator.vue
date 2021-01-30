<template>
  <div id="app">
    <VueElevator :word="word" :duration="duration" :mainAudio="mainAudio" :endAudio="endAudio"></VueElevator>
  </div>
</template>


<script>


import { VueElevator } from 'vue-elevator'
export default {
    components: {
        VueElevator
    },
     data () {
    return {
      // Replace word, duration, mainAudio and endAudio setting as you want.
      // If default is what you like, just don't use related key-value pair and ignore it.
      word: "BACK TO TOP",
      duration: 4000,
      mainAudio: "http://tholman.com/elevator.js/music/elevator.mp3",
      endAudio: "http://tholman.com/elevator.js/music/ding.mp3",
    }
  }
    
}
       

</script>

<style>
</style>