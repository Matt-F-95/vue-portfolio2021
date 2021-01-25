<template>
  <div>
      <h2 class="center-align">Let's Connect</h2>
      <div class="container">
          <div class="row">
              <div class="col s12 m12 l6 flexin">
          <FormulateInput type="text" placeholder="First Name" />
          <FormulateInput type="text" placeholder="Last Name" />
          <FormulateInput type="email" placeholder="youremail@yourprovider.com" name="email" validation="required|email" error-behavior="live"/>
          <FormulateInput type="textarea" validation="required|max:5000,length" validation-name="Message"/>
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
/* @import '../node_modules/@braid/vue-formulate/themes/snow/snow.scss'; */
/* .flexin {
    display: flex;
    flex-direction: row;
} */
</style>