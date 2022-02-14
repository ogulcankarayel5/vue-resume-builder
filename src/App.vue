<template>
  <div class="min-h-screen ">
    <language-switcher />
    <notification-list />
    <the-navigation />
    <router-view class="root" :class="isNavOpen ? 'open' : ''" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { LanguageSwitcher } from "@/common/components";
import NotificationList from "./modules/ui/components/NotificationList.vue";
import TheNavigation from "@/common/components/TheNavigation.vue";
import { mapState } from "vuex";
import { UIState } from "./modules/ui/store/types";

export default Vue.extend({
  name: "Login",

  data() {
    return {
      showMenu: false,
    };
  },
  computed: {
    ...mapState("ui", {
      isNavOpen: (state) => (state as UIState).isNavOpen,
    }),
  },
  watch: {
    isNavOpen(val) {
      document.body.style.overflow = val ? "hidden" : "";
    },
  },
  components: {
    LanguageSwitcher,
    NotificationList,
    TheNavigation,
  },
});
</script>
<style scoped lang="scss">
.root {
  transition: 1s transform cubic-bezier(0, 0.12, 0.14, 1);
}
.open {
  transform: translateX(calc(100vw - 65vw));
}
</style>
