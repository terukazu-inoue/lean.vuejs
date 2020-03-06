<template lang="pug">
form.form-signin
  h2.form-signin-heading Please sign in
  label.sr-only(for='inputEmail') Email address
  input#inputEmail.form-control(
    type        = 'email',
    placeholder = 'Email address',
    required    = '',
    autofocus   = '',
    v-model     = "form.email"
  )
  label.sr-only(for='inputPassword') Password
  input#inputPassword.form-control(
    type        = 'password',
    placeholder = 'Password',
    required    = '',
    v-model     = "form.password"
  )
  .checkbox
    label
      input(type='checkbox', value='remember-me')
      |  Remember me
  button.btn.btn-lg.btn-primary.btn-block(
    type = 'submit'
    @click = "onSubmit"
    :disabled = "!isValid"
  ) Sign in
</template>

<script lang="ts">
import Vue from "vue";

type TForm = {
  email: string;
  password: string;
};

export default Vue.extend({
  name: 'sign-in',
  data: function() {
    return {
      form:{
        email: "",
        password: ""
      } as TForm
    };
  },
  computed: {
    isValid: function() {
      const form = this.form as TForm;
      return ((form.email.length > 0) && (form.password.length > 0));
    }
  },
  methods: {
    onSubmit: function() {
      alert(`email: ${this.form.email}\npassword: ${this.form.password}`);
    }
  }
});
</script>
