<template>
  <button :class="[variants, disabled]" @click="onClick">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from "vue";

type Variants = "secondary";

export default Vue.extend({
  name: "VButton",
  props: {
    variant: {
      type: String as () => Variants,
    },
  },
  computed: {
    variants(): string {
      switch (this.variant) {
        case "secondary":
          return "bg-formColor";
        default:
          break;
      }

      return "bg-formColor";
    },
    disabled() {
      return {
        "bg-opacity-50 cursor-default": this.$attrs.disabled,
      };
    },
  },
  methods: {
    onClick(event: Event) {
      this.$emit("onClick", event);
    },
  },
});
</script>

<style></style>
