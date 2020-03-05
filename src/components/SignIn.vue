<template lang="pug">
form.form-signin
  h2.form-signin-heading Please sign in
  label.sr-only(for='inputEmail') Email address
  input#inputEmail.form-control(
    type        = 'email',
    placeholder = 'Email address',
    required    = '',
    autofocus   = '',
    v-model     = "mEmail"
  )
  label.sr-only(for='inputPassword') Password
  input#inputPassword.form-control(
    type        = 'password',
    placeholder = 'Password',
    required    = '',
    v-model     = "mPassword"
  )
  .checkbox
    label
      input(type='checkbox', value='remember-me')
      |  Remember me
  button.btn.btn-lg.btn-primary.btn-block(
    type = 'submit'
    @click = "onSubmit"
  ) Sign in
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: 'sign-in',
  data: function() {
    return {
      mEmail: "",
      mPassword: ""
    };
  },
  methods: {
    onSubmit: function() {
      alert(`email: ${this.mEmail}\npassword: ${this.mPassword}`);
    }
  }
});
</script>
