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
    }
    
}
       

</script>

<style>
</style>