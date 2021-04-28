<template>
  <div class="signout" id="topSignOut">
    
   <div class="container">
     
     <h2>Signout</h2>
     <a href="/#portfolio"><i class="fas fa-arrow-left backBtn"></i></a><br><br>
     <span>Case Study</span>
      
     <article>
      <p>The task for Mad Movies was to create a movie app to store all of the 150+ movies and display it to the end user in an elegant and user friendly way. All while maintaining speed and responsiveness.</p>
      <p>Mad Movies was designed with Photoshop for the initial design comps. Then it was developed in three stages after that first being the box site layout, then the static site layout and finally the dynamic site layout.</p>
      <p>It was developed using a combination of both front-end and back-end technologies. </p>
     </article>

    <span>Technologies</span>
    <ul style="display:flex;flex-direction:column;" class="collection">
      <li class="collection-item">HTML5</li>
      <li class="collection-item">CSS3</li>
      <li class="collection-item">jQuery &amp; Sammy JS Routing</li>
      <li class="collection-item">PHP</li>
      <li class="collection-item">MySQL</li>
       <li class="collection-item"><i class="fas fa-paint-brush fa-2x"></i><br> Adobe Photoshop &amp; Illustrator</li>
    </ul>


    <span>Designs</span>

     <VueSlickCarousel :arrows="true" :dots="true" v-bind="settings">
      <div><img src="@/assets/coming-soon-mockup.jpg" alt=""></div>
      <div><img src="@/assets/coming-soon-mockup.jpg" alt=""></div>
      <div><img src="@/assets/coming-soon-mockup.jpg" alt=""></div>
      <div><img src="@/assets/coming-soon-mockup.jpg" alt=""></div>
      <div><img src="@/assets/coming-soon-mockup.jpg" alt=""></div>
      
    </VueSlickCarousel>


    <a href="mattfelton.com" target="_blank" class=" btn-large black brand-color">VIEW LIVE SITE</a>
  
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

  .madmovies {
    margin-bottom: 20em;

  }


</style>
