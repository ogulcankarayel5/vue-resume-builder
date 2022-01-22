<template>
  <nav class="pt-5">
    <div @click="toggleNav" class="flex md:hidden ml-3">
      <button
        type="button"
        class="
          text-gray-800
          hover:text-gray-400
          focus:outline-none focus:text-gray-400
        "
        aria-label="toggle menu"
      >
        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
          <path
            fill-rule="evenodd"
            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
          ></path>
        </svg>
      </button>
    </div>
    <div
      :class="
        isNavOpen
          ? 'flex absolute -left-8 pt-5 z-10 h-full top-0 bg-home p-6'
          : 'hidden'
      "
      class="flex-col md:flex-row md:flex"
    >
      <div
        v-if="!isNavOpen"
        class="text-2xl font-medium text-gray-800 md:hidden"
      >
        CV BUILDER
      </div>
      <router-link to="/home" class="md:ml-auto link">Home </router-link>
      <router-link to="/home" class="link">About </router-link>
      <router-link to="/home" class="link">Pricing </router-link>
      <icon-button
        v-if="isNavOpen"
        name="close"
        class="absolute top-2 right-1 text-white"
        @onClick="toggleNav"
      />
    </div>
  </nav>
</template>

<script lang="ts">
import { ActionTypes, UIState } from "@/modules/ui/store/types";
import Vue from "vue";
import { mapActions, mapState } from "vuex";
import IconButton from "./IconButton.vue";

export default Vue.extend({
  components: {  IconButton },
  name: "TheNavigation",
  methods: {
    ...mapActions("ui", [ActionTypes.TOGGLE_NAV]),
  },
  computed: {
    ...mapState("ui", {
      isNavOpen: (state) => (state as UIState).isNavOpen,
    }),
  },
});
</script>
<style lang="scss">
.link {
  @apply text-lg 
  font-semibold 
text-white
  ml-12
  mt-8;
}

.mobile {
}
</style>
