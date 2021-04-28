<template>
  <div class="sourceParts" id="topSource">
    
   <div class="container">
     
     <h2>SOURCE Commercial Appliance Parts</h2>
     <a href="/#portfolio"><i class="fas fa-arrow-left backBtn"></i></a><br><br>
     <span>Case Study</span>
      
     <article>
         <p>Coming soon - project is still in progress.</p>
     </article>

    <span>Technologies</span>
    <ul style="display:flex;flex-direction:column;" class="collection">
      <li class="collection-item"><i class="fab fa-html5 fa-2x"></i><br> HTML5</li>
      <li class="collection-item"><i class="fab fa-css3-alt fa-2x"></i><br> CSS3</li>
      <li class="collection-item"><i class="fab fa-js fa-2x"></i><br> JavaScript</li>
      <li class="collection-item"><i class="fas fa-file-code fa-2x"></i><br> Liquid Template Language</li>
       <li class="collection-item"><i class="fas fa-paint-brush fa-2x"></i><br> Adobe Photoshop</li>
      
    </ul>



    <span>Designs</span>

     <VueSlickCarousel :arrows="true" :dots="true" v-bind="settings">
      <div><img src="@/assets/coming-soon-mockup.jpg" alt="Source Coming Soon Mockup."></div>
      <div><img src="@/assets/coming-soon-mockup.jpg" alt="Source Coming Soon Mockup."></div>
      <div><img src="@/assets/coming-soon-mockup.jpg" alt="Source Coming Soon Mockup."></div>
      <div><img src="@/assets/coming-soon-mockup.jpg" alt="Source Coming Soon Mockup."></div>
      <div><img src="@/assets/coming-soon-mockup.jpg" alt="Source Coming Soon Mockup."></div>
      <div><img src="@/assets/coming-soon-mockup.jpg" alt="Source Coming Soon Mockup."></div>
    </VueSlickCarousel>

        <a href="https://sourcecaps.ca" target="_blank" class=" btn-large black brand-color">VIEW LIVE SITE</a>
  
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
          "lazyLoad": "ondemand",
          "arrows": true,
          // "centerMode": true,
          "autoplay": true,
          "focusOnSelect": true,
          "infinite": true,
          "slidesToShow": 1,
          "speed": 1000,
          "swipe": true,
          "adaptiveHeight": true,
             // *! Add responsiveness to slider.
          responsive: [
                    {
                      breakpoint: 2024,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true
                        
                      }
                    },
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true
                        
                      }
                    },
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    }
                    
                  ]
        }
      }
    },
  }
</script>




<style scoped>

.brand-color {
  background: #252A34 !important;
}
.brand-color:hover {
  background: #F50057 !important;
}

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

  .sourceParts {
    margin-bottom: 20vh;
  }

  /* .actionLtd {
    margin-bottom: 20em;

  } */


</style>
