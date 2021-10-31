<template>
  <div class="h-screen">
    <language-switcher />
    <notification-list/>
    <transition mode="out-in" name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { LanguageSwitcher } from "@/common/components";
import firebase from "firebase";
import { auth } from "@/plugins";
import { mapMutations } from "vuex";
import { MutationTypes } from "./modules/auth/store/types";
import NotificationList from "./modules/ui/components/NotificationList.vue";

let unsubscribe: firebase.Unsubscribe;
export default Vue.extend({
  name: "Login",
  components: {
    LanguageSwitcher,
    NotificationList,
  },
  created() {
    
    unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        this.SET_USER(user);
      } else {
        this.SET_USER_LOGOUT();
      }
      console.log("user: ", user);
    });
  },
  methods: {
    ...mapMutations("auth", [
      MutationTypes.SET_USER,
      MutationTypes.SET_USER_LOGOUT,
    ]),
  },
  beforeDestroy() {
    unsubscribe();
  },
});
</script>
