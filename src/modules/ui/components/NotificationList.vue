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
import { ActionTypes, NotificationState } from "../store/notification/types";

export default Vue.extend({
  name: "NotificationList",
  components: {
    Notification,
  },
  computed: {
    ...mapState("ui/notification", {
      notifications: (state) => (state as NotificationState).notifications,
    }),
  },
});
</script>

<style></style>
