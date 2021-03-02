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
      <li class="collection-item">HTML5</li>
      <li class="collection-item">CSS3</li>
      <li class="collection-item">JavaScript &amp; jQuery</li>
      <li class="collection-item">GreenSock Animation Platform (GSAP)</li>
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

  .foeapp {
    margin-bottom: 20em;
  }


</style>
