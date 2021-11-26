<template>
  <div class="h-screen">
    <language-switcher />
    <notification-list />
    <transition mode="out-in" name="fade">
      <router-view />
    </transition>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { LanguageSwitcher } from "@/common/components";
import NotificationList from "./modules/ui/components/NotificationList.vue";

export default Vue.extend({
  name: "Login",
  components: {
    LanguageSwitcher,
    NotificationList,
  },
});
</script>
