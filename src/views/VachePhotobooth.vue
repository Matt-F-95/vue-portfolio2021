<template>
  <div class="vachephotobooth" id="topVache">
    
   <div class="container">
     
     <h2>Vache Milk Photobooth</h2>
     <a href="/#portfolio"><i class="fas fa-arrow-left backBtn"></i></a><br><br>
     <span>Case Study</span>
      
     <article>
     <p>Action Restaurant case study.</p>
     </article>

    <span>Technologies</span>
    <ul style="display:flex;flex-direction:column;" class="collection">
      <li class="collection-item">HTML5</li>
      <li class="collection-item">CSS3</li>
      <li class="collection-item">jQuery &amp; Sammy JS Routing</li>
      <li class="collection-item">PHP</li>
      <li class="collection-item">MySQL</li>
    </ul>


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

  function scrollWin() {
  window.scrollTo(500, 0);
}

scrollWin();

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

  .backBtn {
    font-size: 32px;
    color: #0d0d0d;
   
  }
  .backBtn:hover {
    color: #F50057;
   
  }
  span {
    font-size: 1.75em;
    font-weight: 600;
  }

  .actionres {
    margin-bottom: 20vh;
  }

  .vachephotobooth {
    margin-bottom: 20em;

  }


</style>
