<template>
  <transition name="fade" mode="in-out">
    <div
      class="
        fixed
        left-2/4
        transform
        -translate-x-2/4
        top-8
        z-10
        shadow-sm
        flex
        items-center
        border-2 border-solid
        rounded
        w-96
        h-11
        px-1
      "
      :class="[containerType]"
    >
      <div class="flex min-w-0 flex-1 items-center">
        <v-icon :name="iconName" />
        <p
          class="
            ml-2
            flex-1
            font-bold
            whitespace-nowrap
            overflow-hidden overflow-ellipsis
          "
          :class="[color]"
        >
          {{ notification.message }}
        </p>
      </div>
      <icon-button @onClick="onClose" name="close" :color="color" />
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";
import {
  ActionTypes,
  INotification,
} from "@/modules/ui/store/types";
import VIcon from "@/common/components/VIcon.vue";
import IconButton from "@/common/components/IconButton.vue";

// const COLORS = {
//   success: 'text-toast-successText',
//   error: ''
// }
export default Vue.extend({
  components: { VIcon, IconButton },
  name: "Notification",
  props: {
    notification: {
      type: Object as () => INotification,
    },
  },
  data() {
    return {
      timeout: null as any,
    };
  },
  computed: {
    containerType() {
      switch (this.notification.type) {
        case "error":
          return "border-toast-errorColor bg-toast-errorBackground";
        case "success":
          return "border-toast-successColor bg-toast-successBackground";
        default:
          break;
      }
      return "";
    },
    color() {
      switch (this.notification.type) {
        case "error":
          return "text-toast-errorText";
        case "success":
          return "text-toast-successText";
        default:
          break;
      }
      return "";
    },
    iconName() {
      switch (this.notification.type) {
        case "success":
          return "tick";
      }
      return "";
    },
  },
  methods: {
    ...mapActions("ui", [ActionTypes.REMOVE_NOTIFICATION]),
    onClose() {
      this.removeNotication(this.notification.id);
    },
  },
  created() {
    this.timeout = setTimeout(() => {
      this.removeNotication(this.notification.id);
    }, 3000);
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
});
</script>

<style lang="scss" scoped>
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.4s ease-in;
}

.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  transition: opacity 0.4s ease-in;
}
</style>
