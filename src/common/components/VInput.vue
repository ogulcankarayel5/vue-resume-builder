<template>
  <div class="w-80 flex flex-col" :class="containerClassName">
    <label data-test-id="label" v-if="label">{{ label }}</label>
    <div
      class="relative flex items-center"
      :class="{ 'mt-3': label !== undefined }"
    >
      <input
        class="flex-1 p-3 shadow-2xl rounded-lg focus:outline-none"
        :class="className"
        v-bind="$attrs"
        :value="value"
        @input="update"
        :type="showPassword ? 'text' : type"
        data-test-id="input"
      />
      <div
        v-if="showHideIcon"
        class="absolute top-2/4 transform -translate-y-2/4 right-2 cursor-pointer"
        @click="togglePassword"
        data-test-id="password"
      >
        <v-icon data-test-id="reveal" v-if="showPassword" name="reveal" />
        <v-icon data-test-id="revealHide" v-else name="revealHide" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  inheritAttrs: false,
  name: "VInput",
  data() {
    return {
      showPassword: false,
    };
  },
  props: {
    value: {
      required: false,
    },
    type: {
      type: String,
      default: "text",
    },
    className: {
      type: [String, Array, Object],
      required: false,
    },
    containerClassName: {
      type: [String, Array, Object],
      required: false,
    },
    showHideIcon: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      required: false,
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
