<template>
  <div class="actionres">
    
   <div class="container">
     
     <h2>Action Restaurant Equipment Service</h2>
     <span>Case Study</span>
     <p>Actions WordPress website was developed with a child theme originating from Sinatra. Designed with the companies branding from initial design to functioning reality. </p>


    <span>Designs</span>

     <VueSlickCarousel :arrows="true" :dots="true" v-bind="settings">
      <div><img src="@/assets/coming-soon-mockup.jpg" alt=""></div>
      <div><img src="@/assets/coming-soon-mockup.jpg" alt=""></div>
      <div><img src="@/assets/coming-soon-mockup.jpg" alt=""></div>
      <div><img src="@/assets/coming-soon-mockup.jpg" alt=""></div>
      <div><img src="@/assets/coming-soon-mockup.jpg" alt=""></div>
      
    </VueSlickCarousel>
   </div>
   
  </div>
</template>

<script>

  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'SlickSlider',
  components: { VueSlickCarousel },
    data() {
      return {
        settings: {
          "centerMode": true,
          "centerPadding": "25px",
          "focusOnSelect": true,
          "infinite": true,
          "slidesToShow": 1,
          "speed": 500
        }
      }
    },
  }
</script>




<style scoped>
  h2 {
    text-align: center;
  }

  span {
    font-size: 1.75em;
    font-weight: 600;
  }

  .actionres {
    margin-bottom: 20vh;
  }
</style>
