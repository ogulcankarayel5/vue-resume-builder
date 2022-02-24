<template>
  <p class="text-red-700 font-bold">{{ error }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VError",
  props: {
    error: {
      type: String,
      required: false,
    },
  },
});
</script>
