<template>
  <div class="foeapp" id="topFoe">
    
   <div class="container">
     
     <h2>Family of Eateries App</h2>
     <a href="/#portfolio"><i class="fas fa-arrow-left backBtn"></i></a><br><br>
     <span>Case Study</span>
      
     <article>
      
       <p>For the Family of Eateries, I was tasked with creating an App for housing three different restaurants. Ceviche, Heart &amp; Stone, and Crispys with each having there own design while still complying with the parent companies app design.</p>
       <p>This proved to be a daunting task as each restaurant had different menus and were appealing to different audiences. Crispys was a burger joint, while Heart &amp; Stone and Ceviche were a high-scale restaurant and bistro.</p>
       <p>The App was built using GSAP and jQuery to provide the animations and functionality of the Application.</p>
     </article>

    <span>Technologies</span>
    <ul style="display:flex;flex-direction:column;" class="collection">
      <li class="collection-item"><i class="fab fa-html5 fa-2x"></i><br> HTML5</li>
      <li class="collection-item"><i class="fab fa-css3-alt fa-2x"></i><br> CSS3</li>
      <li class="collection-item"><i class="fab fa-js fa-2x"></i><br> JavaScript</li>
      <li class="collection-item"><i class="fas fa-file-code fa-2x"></i><br> GreenSock Animation Platform (GSAP)</li>
       <li class="collection-item"><i class="fas fa-paint-brush fa-2x"></i><br> Adobe Photoshop &amp; Illustrator</li>
    </ul>
<!-- 
     <li class="collection-item"><i class="fab fa-html5"></i> HTML5</li>
      <li class="collection-item"><i class="fab fa-css3"></i> CSS3</li>
      <li class="collection-item"><i class="fab fa-js"></i> JavaScript</li>
      <li class="collection-item"><i class="fab fa-php"></i> PHP</li>
      <li class="collection-item"><i class="fab fa-wordpress"></i> WordPress</li> -->


    <span>Designs</span>

     <VueSlickCarousel :arrows="true" :dots="true" v-bind="settings">
      <!-- <div><img class="screenshotSlider"  src="@/assets/family-of-eateries-app-icon.png" alt="Family of Eateries App Icon"></div> -->
      <div><img class="screenshotSlider" src="@/assets/screenshot-foe-0.png" alt="Family Of Eateries App Screen Captures."></div>
      <div><img class="screenshotSlider" src="@/assets/screenshot-foe-1.png" alt="Family Of Eateries App Screen Captures."></div>
      <div><img class="screenshotSlider" src="@/assets/screenshot-foe-2.png" alt="Family Of Eateries App Screen Captures."></div>
      <div><img class="screenshotSlider" src="@/assets/screenshot-foe-3.png" alt="Family Of Eateries App Screen Captures."></div>
      <div><img class="screenshotSlider" src="@/assets/screenshot-foe-4.png" alt="Family Of Eateries App Screen Captures."></div>
      
    </VueSlickCarousel>

    <a href="https://staging.mattfelton.com/foe-app" target="_blank" class="viewBtn btn-large black brand-color">VIEW LIVE SITE</a>
  
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
          "speed": 500,
          "swipe": true,
          "adaptiveHeight": true,
             // *! Add responsiveness to slider.
          responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 2,
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

  .screenshotSlider {
    height: 80vh;
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

  .actionres {
    margin-bottom: 20vh;
  }

  .foeapp {
    margin-bottom: 20em;

  }

    .viewBtn {
      display: flex;
      justify-content: center;
      margin: 10rem auto;
  }

  .brand-color {
    background: #252A34 !important;
  }
  .brand-color:hover {
    background: #F50057 !important;
  } 

</style>
