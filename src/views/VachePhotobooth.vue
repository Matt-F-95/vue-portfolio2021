<template>
  <div class="vachephotobooth" id="topVache">
    
   <div class="container">
     
     <h2>Vache Milk Photobooth</h2>
     <a href="/#portfolio"><i class="fas fa-arrow-left backBtn"></i></a><br><br>
     <span>Case Study</span>
      
     <article>
     <p>This project is an experiential user driven marketing campaign to enable users to create images centered around milk and milk products while enjoying an active lifestyle.  Our client is seeking a marketing platform for enabling the send of marketing materials to our target market of young adults ages 19-25. Winners of the marketing contest will be featured in stores, theatres, and television spots to help promote the purchasing of Canadian dairy and milk products.</p>
     <p>Our goal is to create a marketing platform to allow our client to advertise milk and milk products to young adults to help promote an active lifestyle and offer client created memes and virtual sticker enhanced photos.</p>
     <p>We’re marketing this project towards young adults ages from 19-25 years old. With imagery that helps promote a healthy lifestyle and consumption of milk and other dairy products.</p>
    
     </article>
     <span>Our Project Team</span>
     <ul style="display:flex;flex-direction:column;" class="collection">
       <li class="collection-item">Project Manager - Tyler Beckstead</li>
       <li class="collection-item"> Developer - Matt Felton</li>
       <li class="collection-item">Writer - Lovish Sekhri</li>
       <li class="collection-item">Designer - Varun Malhotra</li>
     </ul>

    <span>Technologies</span>
    <ul style="display:flex;flex-direction:column;" class="collection">
      <li class="collection-item"><i class="fab fa-html5 fa-2x"></i><br> HTML5</li>
      <li class="collection-item"><i class="fab fa-css3-alt fa-2x"></i><br> CSS3</li>
      <li class="collection-item"><i class="fab fa-js fa-2x"></i><br> JavaScript &amp; Regex</li>
      <li class="collection-item"><i class="fab fa-react fa-2x"></i><br> React</li>
      <li class="collection-item"><i class="fab fa-php fa-2x"></i><br> PHP</li>
      <li class="collection-item"><i class="fas fa-database fa-2x"></i><br> MySQL</li>
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

  .vachephotobooth {
    margin-bottom: 20em;

  }


</style>
