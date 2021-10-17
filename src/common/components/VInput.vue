<template>
  <div class="relative flex items-center mt-3">
    <input
      class="flex-1 p-2"
      :class="className"
      v-bind="$attrs"
      v-on="$listeners"
      :value="value"
      @input="update"
      :type="showPassword ? 'text' : type"
    />
    <div
      v-if="showHideIcon"
      class="absolute top-2/4 transform -translate-y-2/4 right-2 cursor-pointer"
      @click="togglePassword"
    >
      <v-icon v-if="showPassword" name="reveal" />
      <v-icon v-else name="revealHide" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  inheritAttrs: false,
  name: "VInput",
  data() {
    return {
      showPassword: false,
    };
  },
  props: {
    value: {
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    className: {
      type: [String, Array, Object],
    },
    showHideIcon: {
      type: Boolean,
      default: false,
    },
  },

  model: {
    prop: "value",
    event: "update",
  },
  methods: {
    update(event: Event): void {
      this.$emit("update", (event.target as HTMLInputElement).value);
    },
    togglePassword(): void {
      this.showPassword = !this.showPassword;
    },
  },
});
</script>

<style></style>
