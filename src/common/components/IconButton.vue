<template>
  <div @click="onClick" class="cursor-pointer flex items-center justify-center">
    <v-icon v-bind="$props" />
    <slot/>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VIcon from "./VIcon.vue";

export default Vue.extend({
  components: { VIcon },
  name: "IconButton",
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
  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
});
</script>
