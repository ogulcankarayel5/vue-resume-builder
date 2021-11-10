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
import firebase from "firebase";
import { auth } from "@/plugins";
import { mapActions, mapMutations } from "vuex";
import { ActionTypes, MutationTypes } from "./modules/auth/store/types";
import NotificationList from "./modules/ui/components/NotificationList.vue";

let unsubscribe: firebase.Unsubscribe;
export default Vue.extend({
  name: "Login",
  components: {
    LanguageSwitcher,
    NotificationList,
  },
  created() {
    this.AUTH_START();
    unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("user: ",user)
        this.init(user);
      } else {
        // this.logout();
      }
      console.log("user: ", user);
    });
  },
  methods: {
    ...mapActions("auth", [ActionTypes.LOGOUT, ActionTypes.INIT]),
    ...mapMutations("auth", [
      MutationTypes.AUTH_START,
    ]),
  },
  beforeDestroy() {
    unsubscribe();
  },
});
</script>
