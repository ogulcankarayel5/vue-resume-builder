<template>
  <button
    data-test-id="button"
    class="py-4 flex justify-center items-center"
    :class="[getVariant, disabled, getSize, getElevation, getRounded]"
    @click="onClick"
  >
    <pulse-loader data-test-id="loading" v-if="loading" color="#ffffff" />
    <slot v-else data-test-id="slot" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
type Variants = "primary";
type Size = "block" | "medium";

export default defineComponent({
  name: "VButton",
  props: {
    variant: {
      type: String as () => Variants,
      required: false,
    },
    size: {
      type: String as () => Size,
      default: "block",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    elevation: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    getSize(): any {
      switch (this.size) {
        case "block":
          return "w-full";
        case "medium":
          return "w-36";
        default:
          break;
      }
      return "w-100";
    },

    getVariant(): string {
      switch (this.variant) {
        case "primary":
          return "bg-primary text-white font-semibold ";
        default:
          break;
      }

      return "";
    },
    disabled() {
      return {
        "bg-opacity-50 cursor-default": this.$attrs.disabled,
      };
    },
    getElevation() {
      return {
        "shadow-2xl": this.elevation,
      };
    },
    getRounded() {
      return {
        "rounded-lg": this.rounded,
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
