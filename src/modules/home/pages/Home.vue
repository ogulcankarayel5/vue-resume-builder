<template>
  <div class="h-full trans">
    <div
      class="flex flex-col lg:flex-row justify-center items-center h-full  px-3"
    >
      <div class="flex flex-col flex-1 ">
        <h1 class="text-5xl text-home font-semibold leading-normal">
          Online CV Builder With Creative Templates
        </h1>
        <p class="text-gray-500 text-lg mt-4 leading-8">
          Our Perfect resume builder takes the hassle out of resume writing.
          Choose from several templates and follow easy prompts to create the
          perfect job-ready resume.
        </p>
        <div>
          <v-button class="mt-2" rounded size="medium" variant="primary">Choose Template</v-button>
        </div>
      </div>

      <div class="flex-1">
        <img
          src="https://res.cloudinary.com/ogulcankarayel-digital/image/upload/v1642338624/resume-builder/banner_i4necg.png"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { VButton} from "@/common";
export default Vue.extend({
  name: "Home",
  components: {
    VButton
  }
});
</script>

<style scoped lang="scss">
</style>
