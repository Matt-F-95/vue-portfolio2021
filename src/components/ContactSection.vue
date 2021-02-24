<template>
    <div class="contactArea">
      <div class="container" id="contact">
          <div class="row">
              <div class="col s12 m12 l12">
                   <h2 class="center-align">Let's Connect</h2>
          <FormulateInput type="text" placeholder="First Name" />
          <FormulateInput type="text" placeholder="Last Name" />
          <FormulateInput type="email" placeholder="youremail@yourprovider.com" name="email" validation="required|email" error-behavior="live"/>
          <FormulateInput type="textarea" validation="required|max:1000,length" validation-name="Message"/>
          <FormulateForm @submit="showAlert">
          <FormulateInput type="submit" name="Send message"/>
          </FormulateForm>
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

button {
    background: #f2f2f2;
    border: none;
    padding: 1em;
    border-radius: .25em;
}


</style>