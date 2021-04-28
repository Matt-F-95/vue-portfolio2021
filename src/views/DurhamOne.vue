<template>
  <div class="durhamOne" id="topDurham">
    
   <div class="container">
     
     <h2>Durham One</h2>
     <a href="/#portfolio"><i class="fas fa-arrow-left backBtn"></i></a><br><br>
     <span>Case Study</span>
      
     <article>
       <p>In 2020, DurhamONE became an official non-profit organization under the leadership of its current Executive Director and Co-founder Pita-Garth Case and President Stephen Linton. DurhamONE staff and Board of Directors believe in the need to amplify the voice of the residents as a method to building a cohesive and collaborative community for families and businesses to thrive.</p>
       <p>To help DurhamONE succeed in their goals we had a group collaborative project to build DurhamONE a beautiful and well thought out website that suited their needs. The interactive media design students handled the design guidelines and assets, while the web students handled bringing the design to life.</p>
     </article>

    <span>Technologies</span>
    <ul style="display:flex;flex-direction:column;" class="collection">
      <li class="collection-item"><i class="fab fa-html5 fa-2x"></i><br> HTML5</li>
      <li class="collection-item"><i class="fab fa-css3-alt fa-2x"></i><br> CSS3</li>
      <li class="collection-item"><i class="fab fa-js fa-2x"></i><br> JavaScript</li>
      <li class="collection-item"><i class="fab fa-wordpress fa-2x"></i><br> WordPress</li>
      <li class="collection-item"><i class="fas fa-database fa-2x"></i><br> MySQL</li>
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
      <div><img src="@/assets/coming-soon-mockup.jpg" alt="DurhamONE Website Screen Shot."></div>
      <div><img src="@/assets/coming-soon-mockup.jpg" alt="DurhamONE Website Screen Shot."></div>
      <div><img src="@/assets/coming-soon-mockup.jpg" alt="DurhamONE Website Screen Shot."></div>
      <div><img src="@/assets/coming-soon-mockup.jpg" alt="DurhamONE Website Screen Shot."></div>
      <div><img src="@/assets/coming-soon-mockup.jpg" alt="DurhamONE Website Screen Shot."></div>
      <div><img src="@/assets/coming-soon-mockup.jpg" alt="DurhamONE Website Screen Shot."></div>
      
    </VueSlickCarousel>

  <a href="https://durham1.ca" target="_blank" class="viewBtn btn-large black brand-color">VIEW LIVE SITE</a>
  
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

  .actionres {
    margin-bottom: 20vh;
  }

  .durhamOne {
    margin-bottom: 20em;

  }

  .brand-color {
  background: #252A34 !important;
}
  .brand-color:hover {
  background: #F50057 !important;
}

  .viewBtn {
      display: flex;
      justify-content: center;
      margin: 10rem auto;
  }



</style>
