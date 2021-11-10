<template>
  <button
    class="py-4 flex justify-center items-center"
    :class="[getVariant, disabled, getSize, getElevation]"
    @click="onClick"
  >
    <pulse-loader v-if="loading" color="#ffffff" />
    <slot v-else />
  </button>
</template>

<script lang="ts">
import Vue from "vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
type Variants = "primary";
type Size = "block";

export default Vue.extend({
  name: "VButton",
  props: {
    variant: {
      type: String as () => Variants,
      required:false
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
  },
  components: {
    PulseLoader,
  },
  computed: {
    getSize(): any {
      switch (this.size) {
        case "block":
          return "w-full";
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
  },
  methods: {
    onClick(event: Event) {
      this.$emit("onClick", event);
    },
  },
});
</script>

<style></style>
