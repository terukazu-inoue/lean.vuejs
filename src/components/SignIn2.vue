<template lang="pug">
form.form-signin
  h2.form-signin-heading Please sign in
  label.sr-only(for='inputEmail2') Email address
  input#inputEmail2.form-control(
    type        = 'email',
    placeholder = 'Email address',
    required    = '',
    autofocus   = '',
    v-model     = "email"
  )
  label.sr-only(for='inputPassword2') Password
  input#inputPassword2.form-control(
    type        = 'password',
    placeholder = 'Password',
    required    = '',
    v-model     = "password"
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
import { defineComponent, ref, computed } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const email = ref("");
    const password = ref("");

    const onSubmit = (e: Event) => {
      alert(`email: ${email.value}\npassword: ${email.value}`);
    }

    const isValid = computed(()=>{
      return ((email.value.length > 0) && (password.value.length > 0));
    });

    return { email, password, onSubmit, isValid };
  }
});
</script>
