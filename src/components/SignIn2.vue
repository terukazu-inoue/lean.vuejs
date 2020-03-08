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
      input(
        type    = 'checkbox',
        v-model = "form.bRememberMe"
      )
      |  Remember me
  button.btn.btn-lg.btn-primary.btn-block(
    type = 'submit'
    @click = "onSubmit"
    :disabled = "!isValid"
  ) Sign in
</template>

<script lang="ts">
import { defineComponent, computed, reactive, watch } from "@vue/composition-api";
import { GlobalObservables } from "@/code/GlobalObservables";
import { Subscription } from "rxjs";
import { map, take } from "rxjs/operators";

const form = reactive({
  email: "",
  password: "",
  bRememberMe: false
});

let subscription: Subscription | undefined = undefined;


const onSubmit = () => {
  alert(`email: ${form.email}\npassword: ${form.password}`);
}

const isValid = computed(()=>{
  return ((form.email.length > 0) && (form.password.length > 0));
});

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
  subscription?.unsubscribe();
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
    subscription = GlobalObservables.Instance.oRemenberMe()
    .pipe(map((b)=>{
      form.bRememberMe = b;
      return void 0;
    }))
    .subscribe();
    return { form, onSubmit, isValid };
  },
  beforeMount:  onBeforeMount,
  mounted:      onMounted,
  beforeUpdate: onBeforeUpdate,
  updated:      onUpdated,
  beforeDestroy:onBeforeDestroy,
  destroyed:    onDestroyed
});

watch(()=> form.bRememberMe, (curr, prev)=>{
  console.log(`watch(form.bRememberme): "${prev}" -> "${curr}"`);
  GlobalObservables.Instance.setRememberMe(curr);
});

</script>
