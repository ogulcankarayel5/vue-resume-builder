<template>
  <div>
    <div v-for="notification in notifications" :key="notification.id">
      <notification :notification="notification" />
    </div>
  </div>
</template>

<script lang="ts">
import Notification from "./Notification.vue";
import Vue from "vue";
import { mapState } from "vuex";
import { ActionTypes, UIState } from "../store/types";

export default Vue.extend({
  name: "NotificationList",
  components: {
    Notification,
  },
  computed: {
    ...mapState("ui", {
      notifications: (state) => (state as UIState).notifications,
    }),
  },
});
</script>

<style></style>
