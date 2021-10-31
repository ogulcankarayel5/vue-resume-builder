<template>
  <component :is="iconComponent" :color="color" role="img" />
</template>

<script lang="ts">
import Vue from "vue";

const icons: any = {
  reveal: require("@/common/icons/Reveal.vue").default,
  revealHide: require("@/common/icons/RevealHide.vue").default,
  resume: require("@/common/icons/Resume.vue").default,
  tick: require("@/common/icons/Tick.vue").default,
  close: require("@/common/icons/Close.vue").default,
};

export default Vue.extend({
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
