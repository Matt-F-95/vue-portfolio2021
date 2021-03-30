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
      <li class="collection-item"><i class="fab fa-html5 fa-2x"></i> HTML5</li>
      <li class="collection-item"><i class="fab fa-css3-alt fa-2x"></i>  CSS3</li>
      <li class="collection-item"><i class="fab fa-js fa-2x"></i> JavaScript / Sammy JS</li>
      <li class="collection-item"><i class="fab fa-php fa-2x"></i>  PHP</li>
      <li class="collection-item"><i class="fas fa-database fa-2x"></i> MySQL</li>
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

  .easyGroceries {
    margin-bottom: 20vh;
  }


</style>



