<template>
    <div>
       <div class="container" id="portfolio">
            <div class="row">
    <div class="col s12 m4 s1">
      <div class="card">
        <div class="card-image">
          <img src="@/assets/foe-app-cs.png">
          <span class="card-title">Family of Eateries</span>
        </div>
        <div class="card-content">
          <p>An App made and designed for Family of Eateries.</p>
          <i class="fab fa-html5"></i>
          <i class="fab fa-css3"></i>
          <i class="fab fa-js"></i>
        </div>
        <div class="card-action">
          <a href="#">Case Study</a>
          <a href="#"><i class="fab fa-github"></i></a>
        </div>
      </div>
    </div>
    <div class="col s12 m4 s1">
      <div class="card">
        <div class="card-image">
          <img src="http://placekitten.com/g/200/200">
          <span class="card-title">Falcon Snowboards</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
           <a href="#">Case Study</a>
          <a href="#"><i class="fab fa-github"></i></a>
        </div>
      </div>
    </div>
    <div class="col s12 m4 s1">
      <div class="card">
        <div class="card-image">
          <img src="http://placekitten.com/g/200/200">
          <span class="card-title">MMDB</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">Case Study</a>
          <a href="#"><i class="fab fa-github"></i></a>
        </div>
      </div>
    </div>
  </div>
            <div class="row">
    <div class="col s12 m4 s1">
      <div class="card">
        <div class="card-image">
          <img src="http://placekitten.com/g/200/200">
          <span class="card-title">Another Project</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
           <a href="#">Case Study</a>
          <a href="#"><i class="fab fa-github"></i></a>
        </div>
      </div>
    </div>
    <div class="col s12 m4 s1">
      <div class="card">
        <div class="card-image">
          <img src="http://placekitten.com/g/200/200">
          <span class="card-title">Another Project</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
           <a href="#">Case Study</a>
          <a href="#"><i class="fab fa-github"></i></a>
        </div>
      </div>
    </div>
    <div class="col s12 m4 s1">
      <div class="card">
        <div class="card-image">
          <img src="http://placekitten.com/g/200/200">
          <span class="card-title">Another Project</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">Case Study</a>
          <a href="#"><i class="fab fa-github"></i></a>
        </div>
      </div>
    </div>
  </div>
            <div class="row">
    <div class="col s12 m4 s1">
      <div class="card">
        <div class="card-image">
          <img src="http://placekitten.com/g/200/200">
          <span class="card-title">Another Project</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
           <a href="#">Case Study</a>
          <a href="#"><i class="fab fa-github"></i></a>
        </div>
      </div>
    </div>
    <!-- <div class="col s12 m4 s1">
      <div class="card">
        <div class="card-image">
          <img src="http://placekitten.com/g/200/200">
          <span class="card-title">Card Title</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div> -->
  </div>
 
       </div>
    </div>
</template>


<script>
    export default {
        name: 'Portfolio',
        props: {
            msg: String
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
    font-size: 1.25rem;
    text-align: center;
    
  }

  .card-content i {
    font-size: 22px;
    margin: 2px 2px 2px 2px;
  }

  .card-title {
    background: #252525;
    width: 100%;
    text-align: center;
    height: 10vh;
  }



</style>