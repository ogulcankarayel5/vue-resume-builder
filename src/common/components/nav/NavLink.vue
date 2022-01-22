<template>
  <router-link :to="to" class="md:ml-auto font-semibold  ml-12;">
    <slot />
  </router-link>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NavLink",
  props: {
      to: {
          type: String
      }
  }
});
</script>
<style lang="scss"></style>
