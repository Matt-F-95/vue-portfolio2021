<template>
  <div id="app">
    <vue-scroll-progress-bar @complete="handleComplete" height="2rem" background-color='linear-gradient(to right, #38C172, #51D88A)' />
  </div>
</template>


<script>

import VueScrollProgressBar from '@guillaumebriday/vue-scroll-progress-bar'

export default {
    components: {
        VueScrollProgressBar
    }
    
}
       

</script>

<style>

.progress-bar-container--container {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
}
</style>