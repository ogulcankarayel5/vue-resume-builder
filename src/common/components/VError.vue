<template>
  <p class="text-red-700 font-bold">{{ error }}</p>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "VError",
  props: {
    error: {
      type: String,
      required: true,
    },
  },
});
</script>
