<template>
  <div class="honeyCakes" id="topHoneyCakes">
    
   <div class="container">
     
     <h2>Honey Cakes</h2>
     <a href="/#portfolio"><i class="fas fa-arrow-left backBtn"></i></a><br><br>
     <span>Case Study</span>
      
     <article>
       <p>Honey Cakes is a custom Underscores theme for WordPress. The initial designs were done in Adobe XD and the WordPress theme was designed from scratch with TailWind CSS and custom PHP. All aspects of the theme had to be styled and positioned correctly before adding in WooCommerce to make it a fully functioning ecommerce theme. It has custom widget areas, menu-types, and post-types throughout the theme to optimize it to suit your needs.</p>
     </article>

    <span>Technologies</span>
    <ul style="display:flex;flex-direction:column;" class="collection">
      <li class="collection-item"><i class="fab fa-html5 fa-2x"></i><br> HTML5</li>
      <li class="collection-item"><i class="fab fa-css3-alt fa-2x"></i><br> CSS3</li>
      <li class="collection-item"><i class="fab fa-js fa-2x"></i><br> JavaScript</li>
      <li class="collection-item"><i class="fab fa-wordpress fa-2x"></i><br> WordPress</li>
      <li class="collection-item"><i class="fas fa-database fa-2x"></i><br> MySQL</li>
      <li class="collection-item"><i class="fas fa-paint-brush fa-2x"></i><br> Adobe XD</li>
    </ul>

    <span>Designs</span>

     <VueSlickCarousel :arrows="true" :dots="true" v-bind="settings">
      <div><img src="@/assets/honeycakes_sc_500_1.png" alt="Honey Cakes Screenshot"></div>
      <div><img src="@/assets/honeycakes-mockup.jpg" alt="Honey Cakes Screenshot"></div>
      <div><img src="@/assets/honeycakes_sc_500.png" alt="Honey Cakes Screenshot"></div>
    </VueSlickCarousel>

  <a href="https://staging.mattfelton.com/honeycakes/" target="_blank" class=" btn-large black brand-color">VIEW LIVE SITE</a>
  
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

  .honeyCakes {
    margin-bottom: 20vh;
  }




</style>
