<template lang="pug">
  div
    app-navigation
    .container
      sign-in
    .container
      sign-in-2
</template>

<script lang="ts">
import Vue from "vue";
import AppNavigation from "@/components/AppNavigation.vue";
import SignIn from "@/components/SignIn.vue";
import SignIn2 from "@/components/SignIn2.vue";

export default Vue.extend({
  name: 'Form',
  props: {
    msg: String,
  },
  components:{
    AppNavigation,
    SignIn,
    "sign-in-2": SignIn2
  }
});
</script>
