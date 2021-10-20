<template>
  <div class="h-screen">
    <language-switcher />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { LanguageSwitcher } from "@/common/components";

export default Vue.extend({
  name: "Login",
  components: {
    LanguageSwitcher,
  },
});
</script>
