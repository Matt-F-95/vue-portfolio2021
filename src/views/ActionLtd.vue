<template>
  <div class="actionLtd" id="topAction">
    
   <div class="container">
     
     <h2>Action Ltd</h2>
     <a href="/#portfolio"><i class="fas fa-arrow-left backBtn"></i></a><br><br>
     <span>Case Study</span>
      
     <article>
       <p>For Action Restaurant Equipment Services Ltd, I was tasked with creating a new WordPress website that was customized and optimized to suit their particular needs. This also included creating it with best practices in mind with child theming, semantic markup, and Search Engine Optimization.</p>
       <p>The design started with rough mockups on paper later moving to Adobe XD and finally bringing the design to life with WordPress. </p>
     </article>

    <span>Technologies</span>
    <ul style="display:flex;flex-direction:column;" class="collection">
      <li class="collection-item"><i class="fab fa-html5 fa-2x"></i><br> HTML5</li>
      <li class="collection-item"><i class="fab fa-css3-alt fa-2x"></i><br> CSS3</li>
      <li class="collection-item"><i class="fab fa-js fa-2x"></i><br> JavaScript</li>
      <li class="collection-item"><i class="fab fa-php fa-2x"></i><br> PHP</li>
      <li class="collection-item"><i class="fab fa-wordpress fa-2x"></i><br> WordPress</li>
       <li class="collection-item"><i class="fas fa-paint-brush fa-2x"></i><br> Adobe Photoshop</li>
    </ul>
<!-- 
     <li class="collection-item"><i class="fab fa-html5"></i> HTML5</li>
      <li class="collection-item"><i class="fab fa-css3"></i> CSS3</li>
      <li class="collection-item"><i class="fab fa-js"></i> JavaScript</li>
      <li class="collection-item"><i class="fab fa-php"></i> PHP</li>
      <li class="collection-item"><i class="fab fa-wordpress"></i> WordPress</li> -->


    <span>Designs</span>

     <VueSlickCarousel :arrows="true" :dots="true" v-bind="settings">
      <div><img src="@/assets/action-mockup.jpg" alt="Action Restaurant Equipment Services Mockup."></div>
      <div><img src="@/assets/action-about-page.jpg" alt="Action Restaurant Equipment Services Mockup."></div>
      <div><img src="@/assets/action-blog-page.jpg" alt="Action Restaurant Equipment Services Mockup."></div>
      <div><img src="@/assets/action-contact-page.jpg" alt="Action Restaurant Equipment Services Mockup."></div>
      <div><img src="@/assets/action-preventive-main-program.jpg" alt="Action Restaurant Equipment Services Mockup."></div>
      <div><img src="@/assets/action-resources-page.jpg" alt="Action Restaurant Equipment Services Mockup."></div>
    </VueSlickCarousel>

  <a href="https://staging.mattfelton.com/actionltd" target="_blank" class=" btn-large black brand-color">VIEW LIVE SITE</a>
  
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

  .actionLtd {
    margin-bottom: 20vh;
  }

  /* .actionLtd {
    margin-bottom: 20em;

  } */

  .brand-color {
  background: #252A34 !important;
}
  .brand-color:hover {
  background: #F50057 !important;
}


</style>
