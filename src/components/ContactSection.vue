<template>
    <div class="contactArea">
      <div class="container" id="contact">
          <div class="row">
              <div class="col s12 m12 l12">
                   <h2 class="center-align contactHeader">Let's Connect</h2>
    
        
          <form
  action="https://formspree.io/f/xgerwjol"
  method="POST"
>

  <label>Name:
    <input type="text" name="name" id="full-name" required="">
    </label>
    <label>Email:
    <input type="email" name="_replyto" required="">
    </label>
  <label>
    Message:
    <textarea rows="15" name="message"></textarea>
  </label>

  <button class="brand-color-2" type="submit">Send</button>
</form>
          </div>
          </div>
          </div>
  </div>
</template>

<script>
export default {
    name: 'ContactSection',
    props: {

    }
}
</script>

<style>
@import '/@/node_modules/@braid/vue-formulate/themes/snow/snow.scss';
.contactArea {
    background: #252934;
    margin-bottom:0;
    padding: 100px 0px 100px 0px;
    color: #fff;
    
}

.contactArea input {
    color: #f2f2f2;
}

.contactArea textarea {
    padding: 10px;
    color: #fff;
    margin-bottom: 1em;
    
}
.contactArea textarea {
    padding: 10px;
    color: #fff;
    margin-bottom: 1em;
    
}

.contactHeader {
  margin-bottom: 6rem;
}

button {
    background: #f2f2f2;
    border: none;
    padding: 1em;
    border-radius: .25em;
}


</style>