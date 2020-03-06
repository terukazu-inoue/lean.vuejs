<template lang="pug">
form.form-signin
  h2.form-signin-heading Please sign in
  label.sr-only(for='inputEmail2') Email address
  input#inputEmail2.form-control(
    type        = 'email',
    placeholder = 'Email address',
    required    = '',
    autofocus   = '',
    v-model     = "form.email"
  )
  label.sr-only(for='inputPassword2') Password
  input#inputPassword2.form-control(
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
import { defineComponent, computed, reactive, watch } from "@vue/composition-api";

const form = reactive({
  email: "",
  password: ""
});

const onSubmit = (e: Event) => {
  alert(`email: ${form.email}\npassword: ${form.password}`);
}

const isValid = computed(()=>{
  return ((form.email.length > 0) && (form.password.length > 0));
});

// -> use setup()
// function onBeforeCreate(){
//   console.log("onBeforeCreate()");
// }

// -> use setup()
// function onCreated(){
//   console.log("onCreated()");
// }

function onBeforeMount(){
  console.log("onBeforeMount()");
}

function onMounted(){
  console.log("onMounted()");
}

function onBeforeUpdate(){
  console.log("onBeforeUpdate()");
}

function onUpdated(){
  console.log("onUpdated()");
}

function onBeforeDestroy(){
  console.log("onBeforeDestroy()");
}

function onDestroyed(){
  console.log("onDestroyed()");
}

function onRenderTracked(e: Event){
  console.log("onRenderTracked()");
}

function onRenderTriggered(e: Event){
  console.log("onRenderTriggered()");
}

type Props = {
  emailInitial?: string;
  passwordInitial?: string;
};

export default defineComponent({
  props: {
    emailInitial: String,
    passwordInitial: String
  },
  setup(props: Props) {
    console.log("setup()");
    form.email = props.emailInitial ?? "";
    form.password = props.passwordInitial ?? "";
   return { form, onSubmit, isValid };
  },
  // beforeCreate: onBeforeCreate,  // -> use setup()
  // created:      onCreated,       // -> use setup()
  beforeMount:  onBeforeMount,
  mounted:      onMounted,
  beforeUpdate: onBeforeUpdate,
  updated:      onUpdated,
  beforeDestroy:onBeforeDestroy,
  destroyed:    onDestroyed,
});

watch(()=> form.email, (curr, prev)=>{
  console.log(`watch(email): "${prev}" -> "${curr}"`);
});

watch(()=> form.password, (curr, prev)=>{
  console.log(`watch(password): "${prev}" -> "${curr}"`);
});

</script>
