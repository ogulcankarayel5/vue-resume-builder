<template>
  <nav class="pt-5">
    <div
      @click="toggleNav(true)"
      class="flex text-gray-800 md:hidden ml-3 cursor-pointer"
    >
      <v-icon name="nav" />
    </div>
    <div
      :class="
        isNavOpen
          ? 'flex absolute -left-8 pt-5 z-10 h-full top-0 bg-home p-6'
          : 'hidden'
      "
      class="flex-col md:flex-row md:flex"
    >
      <router-link
        to="/home"
        class="md:ml-auto link"
        :class="{ 'text-white mt-8': isNavOpen }"
        >Home
      </router-link>
      <router-link
        to="/home"
        class="link"
        :class="{ 'text-white mt-8': isNavOpen }"
        >About
      </router-link>
      <router-link
        to="/home"
        class="link"
        :class="{ 'text-white mt-8': isNavOpen }"
        >Pricing
      </router-link>
      <icon-button
        v-if="isNavOpen"
        name="close"
        class="absolute top-2 right-1 text-white"
        @onClick="toggleNav(false)"
      />
    </div>
  </nav>
</template>

<script lang="ts">
import { ActionTypes, UIState } from "@/modules/ui/store/types";
import Vue from "vue";
import { mapActions, mapState } from "vuex";
import IconButton from "./IconButton.vue";
import VIcon from "./VIcon.vue";

export default Vue.extend({
  components: { IconButton, VIcon },
  name: "TheNavigation",
  data() {
    return {
      mobileView: false,
    };
  },
  methods: {
    ...mapActions("ui", [ActionTypes.TOGGLE_NAV]),
    handleView() {
      this.mobileView = window.innerWidth <= 768;
    },
  },
  computed: {
    ...mapState("ui", {
      isNavOpen: (state) => (state as UIState).isNavOpen,
    }),
  },
  watch: {
    mobileView(value) {
      value ? null : this.toggleNav(false);
    },
  },
  created() {
    window.addEventListener("resize", this.handleView);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleView);
  },
});
</script>
<style lang="scss">
.link {
  @apply text-lg 
  font-semibold 
  ml-12;
}
</style>
