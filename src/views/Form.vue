<template lang="pug">
  div
    app-navigation
    .container
      sign-in
</template>

<script lang="ts">
import Vue from "vue";
import AppNavigation from "@/components/AppNavigation.vue";
import SignIn from "@/components/SignIn.vue";

export default Vue.extend({
  name: 'Form',
  props: {
    msg: String,
  },
  components:{
    AppNavigation,
    SignIn
  }
});
</script>
