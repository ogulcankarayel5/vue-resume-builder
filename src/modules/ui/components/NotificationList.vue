<template>
  <div>
    <div v-for="notification in notifications" :key="notification.id">
      <notification-item :notification="notification" />
    </div>
  </div>
</template>

<script lang="ts">
import NotificationItem from "./NotificationItem.vue";
import { defineComponent } from "vue";
import { mapState } from "vuex";
import { UIState } from "../store/types";

export default defineComponent({
  name: "NotificationList",
  components: {
    NotificationItem,
  },
  computed: {
    ...mapState("ui", {
      notifications: (state) => (state as UIState).notifications,
    }),
  },
});
</script>

<style></style>
