<template>
  <div class="flex flex-col items-start gap-24 container mx-auto">
    <main
      class="flex flex-col lg:flex-row justify-center items-center main px-3"
    >
      <div class="flex flex-col flex-1">
        <h1 class="text-5xl text-home font-semibold leading-normal">
          Online CV Builder With Creative Templates
        </h1>
        <p class="text-gray-500 text-lg mt-4 leading-8">
          Our Perfect resume builder takes the hassle out of resume writing.
          Choose from several templates and follow easy prompts to create the
          perfect job-ready resume.
        </p>
        <div>
          <v-button class="mt-2" rounded size="medium" variant="primary"
            >Choose Template</v-button
          >
        </div>
      </div>

      <div class="flex-1">
        <img
          src="https://res.cloudinary.com/ogulcankarayel-digital/image/upload/v1642338624/resume-builder/banner_i4necg.png"
        />
      </div>
    </main>
    <section class="bg-no-repeat bg-center w-full">
      <div class="container">
        <div class="flex p-6 shadow bg-white mb-5">
          <img src="https://geeko.netlify.app/img/icons/d1.png" class="img" />
          <div class="flex flex-col flex-1 pl-3">
            <h3 class="text-lg font-semibold text-home">
              Easy Online Resume Builder
            </h3>
            <p class="text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium modi assumenda.
            </p>
          </div>
        </div>
        <div class="flex p-6 shadow bg-white mb-5">
          <img src="https://geeko.netlify.app/img/icons/d2.png" class="img" />
          <div class="flex flex-col flex-1 pl-3">
            <h3 class="text-lg font-semibold text-home">
              Step By Step Expert Tips
            </h3>
            <p class="text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium modi assumenda.
            </p>
          </div>
        </div>
        <div class="flex p-6 shadow bg-white">
          <img src="https://geeko.netlify.app/img/icons/d3.png" class="img" />
          <div class="flex flex-col flex-1 pl-3">
            <h3 class="text-lg font-semibold text-home">
              Recruiter Approved Phrases
            </h3>
            <p class="text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium modi assumenda.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="w-full flex flex-col lg:flex-row lg:items-center">
      <div class="">
        <h1 class="text-5xl text-home font-semibold leading-normal">
          We Deliver The Best
        </h1>
        <ul>
          <list-item text="Proven CV Templates to increase Hiring Chance" />
          <list-item text="Creative and Clean Templates Design" />
          <list-item text=" Easy and Intuitive Online CV Builder" />
          <list-item text="Free to use. Developed by hiring professionals." />
        </ul>
      </div>
      <img
        src="https://geeko.netlify.app/img/core-img/cv.png"
        class="mx-auto mt-6"
      />
    </section>
    <section>
      <h1 class="text-5xl text-home font-semibold leading-normal">
        Our Pricing
      </h1>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VButton } from "@/common";
import ListItem from "@/modules/home/components/ListItem.vue";
export default defineComponent({
  name: "HomePage",
  components: {
    VButton,
    ListItem,
  },
});
</script>

<style scoped lang="scss">
.shadow {
  box-shadow: 2px 4px 15px 2px rgba(0, 0, 0, 0.13);
}

.main {
  height: 70vh;
}
.img {
  height: 64px;
  width: 64px;
}
</style>
