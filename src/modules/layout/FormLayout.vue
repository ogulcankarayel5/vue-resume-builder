<template>
  <div class="flex h-full">
    <template v-if="windowWidth > 768">
      <div class="flex-1 flex flex-col items-center justify-center bg-primary">
        <img
          src="https://res.cloudinary.com/ogulcankarayel-digital/image/upload/c_scale,h_400,w_400/v1636202015/resume-builder/undraw_resume_re_hkth_2_1_uorxsm.png"
        />
        <i18n
          path="login.title"
          tag="span"
          class="text-white font-bold text-5xl tracking-tight mt-10 text-center"
        >
          <span>ResumeBuilder</span>
        </i18n>
      </div>
    </template>
    <div class="flex-1 flex flex-col items-center justify-center">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { windowSizeMixin } from "@/common";

export default defineComponent({
  name: "FormLayout",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  mixins: [windowSizeMixin],
});
</script>
