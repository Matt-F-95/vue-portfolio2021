<template>
    <div>
       <div class="container" id="portfolio">
            <div class="row">
    <div class="col s12 m4 s1">
      <div class="card">
        <div class="card-image">
          <img class="responsive" src="@/assets/foe-mockup.jpg" alt="family of eateries app mockup">
          
        </div>
        <div class="card-content">
          <h6>Family Of Eateries</h6>
          <p>An App made and designed for Family of Eateries utilizing GSAP animations and jQuery.</p>
          <i class="fab fa-html5"></i>
          <i class="fab fa-css3"></i>
          <i class="fab fa-js"></i>
        </div>
        <div class="card-action">
           <router-link v-on:click="isHidden = !isHidden" to="/foeapp">Case Study</router-link>
          <a href="https://staging.mattfelton.com/foe-app/" target="_blank">View Live</a>
          <a href="https://github.com/Matt-F-95/foe-app" target="_blank"><i class="fab fa-github"></i></a>
        </div>
      </div>
    </div>
    <div class="col s12 m4 s1">
      <div class="card">
        <div class="card-image">
          <img  src="@/assets/madmovies-mockup.jpg" alt="Mad Movies App Mockup">
         
        </div>
        <div class="card-content">
          <h6>Mad Movies</h6>
          <p>A Dynamic Mad Movies database created with PHP and MySQL.</p>
          <i class="fab fa-html5"></i>
          <i class="fab fa-css3"></i>
          <i class="fab fa-js"></i>
          <i class="fab fa-php"></i>
        </div>
        <div class="card-action">
          
          <router-link v-on:click="isHidden = !isHidden" to="/madmovies">Case Study</router-link>
       
           <a href="https://staging.mattfelton.com/mmdb/#/splash/" target="_blank">View Live</a>
           <a href="https://github.com/Matt-F-95/dynamic-mmdb/" target="_blank"><i class="fab fa-github"></i></a>
           
          
        </div>
      </div>
    </div>
    <div class="col s12 m4 s1">
      <div class="card">
        <div class="card-image">
          <img src="@/assets/action-mockup.jpg" alt="Action Custom WordPress mockup.">
         
        </div>
        <div class="card-content">
          <h6>Action Ltd</h6>
          <p>A WordPress theme customized and optimized for Action Ltd.</p>
          <i class="fab fa-html5"></i>
          <i class="fab fa-css3"></i>
          <i class="fab fa-js"></i>
          <i class="fab fa-php"></i>
          <i class="fab fa-wordpress"></i>
        </div>
        <div class="card-action">
          <router-link v-on:click="isHidden = !isHidden" to="/actionltd">Case Study</router-link>
          <a href="https://staging.mattfelton.com/actionltd/" target="_blank">View Live</a>
          <a href="https://github.com/matt-f-95" target="_blank"><i class="fab fa-github"></i></a>
        </div>
      </div>
    </div>
  </div>
  <!-- end portfolio row 1 -->
            <div class="row">
    <div class="col s12 m4 s1">
      <div class="card">
        <div class="card-image">
          <img class="responsive" src="@/assets/vache-react-photobooth-sc.png" alt="Vache Photobooth">
          
        </div>
        <div class="card-content">
          <h6>Vache Photobooth</h6>
          <p>A Milk Photobooth promotional website utilizing React, Regex, Canvas, and Web Workers.</p>
          <i class="fab fa-html5"></i>
          <i class="fab fa-css3"></i>
          <i class="fab fa-react"></i>
          <i class="fab fa-js"></i>
        </div>
        <div class="card-action">
          <router-link v-on:click="isHidden = !isHidden" to="/vachephotobooth">Case Study</router-link>
          <a href="https://staging.mattfelton.com/vache-photobooth-react" target="_blank">View Live</a>
          <a href="https://github.com/Matt-F-95/vache-photobooth" target="_blank"><i class="fab fa-github"></i></a>
        </div>
      </div>
    </div>
    <div class="col s12 m4 s1">
      <div class="card">
        <div class="card-image">
          <img  src="@/assets/durhamone-mockup.jpg" alt="A mockup of Durham Ones WordPress website.">
        
        </div>
        <div class="card-content">
          <h6>Durham ONE</h6>
          <p>A collaborative WordPress project for Durham ONE made at Durham College.</p>
          <i class="fab fa-html5"></i>
          <i class="fab fa-css3"></i>
          <i class="fab fa-js"></i>
          <i class="fab fa-php"></i>
          <i class="fab fa-wordpress"></i>
        </div>
        <div class="card-action">
          <router-link v-on:click="isHidden = !isHidden" to="/durhamone">Case Study</router-link>
           <a href="https://durham1.ca" target="_blank">View Live</a>
           <a href="https://github.com/Matt-F-95/durhamone"><i class="fab fa-github"></i></a>
           
            
           
          
        </div>
      </div>
    </div>
    <div class="col s12 m4 s1">
      <div class="card">
        <div class="card-image">
          <img src="@/assets/honeycakes-mockup.jpg" alt="A mockup of Honey Cakes custom underscores WordPress theme.">
         
        </div>
        <div class="card-content">
         <h6>Honey Cakes</h6>
          <p>A custom WordPress Underscores theme with WooCommerce integrated.</p>
          <i class="fab fa-html5"></i>
          <i class="fab fa-css3"></i>
          <i class="fab fa-js"></i>
          <i class="fab fa-php"></i>
          <i class="fab fa-wordpress"></i>
        </div>
        <div class="card-action">
          <router-link v-on:click="isHidden = !isHidden" to="/honeycakes">Case Study</router-link>
          <a href="https://staging.mattfelton.com/honeycakes" target="_blank">View Live</a>
          <a href="https://github.com/Matt-F-95/cwd450001" target="_blank"><i class="fab fa-github"></i></a>
        </div>
      </div>
    </div>
  
    </div>
     
            <div class="row">
              <div class="col s12 m4 s1">
      <div class="card">
        <div class="card-image">
          <img src="@/assets/easy_groceries_sc_1.png" alt="Easy Groceries Project.">
         
        </div>
        <div class="card-content">
         <h6>Easy Groceries</h6>
          <p>An e-commerce website for ordering groceries online, utilizing Sammy JS, JavaScript, mySQL, and PHP.</p>
          <i class="fab fa-html5"></i>
          <i class="fab fa-css3"></i>
          <i class="fab fa-js"></i>
          <i class="fab fa-php"></i>
        </div>
        <div class="card-action">
          <router-link v-on:click="isHidden = !isHidden" to="/easygroceries">Case Study</router-link>
          <a href="https://staging.mattfelton.com/easy-groceries" target="_blank">View Live</a>
          <a href="https://github.com/matt-f-95/easy-groceries" target="_blank"><i class="fab fa-github"></i></a>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
</template>


<script>
    export default {
        name: 'Portfolio',
        props: {
            msg: String
        },
         data() {
            return {
                isHidden: true
            }
    }
    }

</script>


<style>
  .card-content {
    background: #252934;
    color: #fff;
  }

  .card-action {
    background: #1B232E !important;
    color: #fff;
    font-size: 1.15em;
    text-align: center;
  
  }



  .card-content i {
    font-size: 22px;
    margin: 5px;
    margin-top: 20px;
  
  }

  .card-title {
    background: #252525;
    width: 100%;
    text-align: right;
   
  }

  .responsive {
    width: 100%;
    height: auto;
  }

  .card .card-action a:not(.btn):not(.btn-large):not(.btn-small):not(.btn-large):not(.btn-floating) {
    color: #fff !important;
    
  }
  .card .card-action a:not(.btn):not(.btn-large):not(.btn-small):not(.btn-large):not(.btn-floating):hover {
    color: #F50057 !important;
    transition: .5s;
    
  }

  .card-content {
    height: 14em;
  }

  .card-content h6 {
    font-weight: bold;
  }

  



</style>