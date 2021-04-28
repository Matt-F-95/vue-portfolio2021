<template>
  <div class="easyGroceries" id="topEasyGroceries">
    
   <div class="container">
     
     <h2>Easy Groceries</h2>
     <a href="/#portfolio"><i class="fas fa-arrow-left backBtn"></i></a><br><br>
     <span>Case Study</span>
      
     <article>
      <p>The task for Easy Groceries was to create a grocery ecommerce store to house all of the products from the database and display it to the ender user in a elegant and user friendly way. This Easy Groceries site is a fully functional ecommerce website styled with Foundations and a combination of both front-end and back-end technologies.</p>
     </article>

    <span>Technologies</span>
    <ul style="display:flex;flex-direction:column;" class="collection">
      <li class="collection-item"><i class="fab fa-html5 fa-2x"></i><br> HTML5</li>
      <li class="collection-item"><i class="fab fa-css3-alt fa-2x"></i><br>  CSS3</li>
      <li class="collection-item"><i class="fab fa-js fa-2x"></i><br> JavaScript / Sammy JS</li>
      <li class="collection-item"><i class="fab fa-php fa-2x"></i><br>  PHP</li>
      <li class="collection-item"><i class="fas fa-database fa-2x"></i><br> MySQL</li>
       <li class="collection-item"><i class="fas fa-paint-brush fa-2x"></i><br> Adobe Photoshop &amp; Illustrator</li>
    </ul>



    <span>Designs</span>

     <VueSlickCarousel :arrows="true" :dots="true" v-bind="settings">
      <div><img src="@/assets/easy_groceries_sc_1.png" alt="Easy Groceries Home Page."></div>
      <div><img src="@/assets/easy_groceries_product_sc.png" alt="Easy Groceries Products Page."></div>
    </VueSlickCarousel>

    <a href="https://staging.mattfelton.com/easy-groceries" target="_blank" class="viewBtn btn-large black brand-color">VIEW LIVE SITE</a>
  
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

  .easyGroceries {
    margin-bottom: 20vh;
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



