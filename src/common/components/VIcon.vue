<template>
  <component :is="iconComponent" :color="color" role="img" />
</template>

<script lang="ts">
import Vue, { defineComponent } from "vue";

const icons: any = {
  reveal: require("@/common/icons/RevealIcon.vue").default,
  revealHide: require("@/common/icons/RevealHideIcon.vue").default,
  resume: require("@/common/icons/ResumeIcon.vue").default,
  tick: require("@/common/icons/TickIcon.vue").default,
  close: require("@/common/icons/CloseIcon.vue").default,
  google: require("@/common/icons/GoogleIcon.vue").default,
  nav: require("@/common/icons/NavIcon.vue").default,
};

export default defineComponent({
  name: "VIcon",
  props: {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: false,
    },
  },
  computed: {
    iconComponent() {
      return icons[this.name as any];
    },
  },
});
</script>
