<template>
  <div class="madMovies" id="topMadMovies">
    
   <div class="container">
     
     <h2>Mad Movies</h2>
     <a href="/#portfolio"><i class="fas fa-arrow-left backBtn"></i></a><br><br>
     <span>Case Study</span>
      
     <article>
      
       <p>The task for Mad Movies was to create a movie app to store all of the 150+ movies and display it to the end user in an elegant and user friendly way. All while maintaining speed and responsiveness.</p>
      <p>Mad Movies was designed with Photoshop for the initial design comps. Then it was developed in three stages after that first being the box site layout, then the static site layout and finally the dynamic site layout.</p>
      <p>It was developed using a combination of both front-end and back-end technologies.</p>
     </article>

    <span>Technologies</span>
    <ul style="display:flex;flex-direction:column;" class="collection">
      <li class="collection-item"><i class="fab fa-html5 fa-2x"></i><br>  HTML5</li>
      <li class="collection-item"><i class="fab fa-css3-alt fa-2x"></i><br>  CSS3</li>
      <li class="collection-item"><i class="fab fa-js fa-2x"></i><br> JavaScript</li>
      <li class="collection-item"><i class="fab fa-php fa-2x"></i><br>  PHP</li>
      <li class="collection-item"><i class="fas fa-file-code fa-2x"></i><br>  Sammy JS Routing</li>
    </ul>
<!-- 
     <li class="collection-item"><i class="fab fa-html5"></i> HTML5</li>
      <li class="collection-item"><i class="fab fa-css3"></i> CSS3</li>
      <li class="collection-item"><i class="fab fa-js"></i> JavaScript</li>
      <li class="collection-item"><i class="fab fa-php"></i> PHP</li>
      <li class="collection-item"><i class="fab fa-wordpress"></i> WordPress</li> -->


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

  .madMovies {
    margin-bottom: 20vh;
  }


</style>



