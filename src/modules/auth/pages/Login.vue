<template>
  <div class="flex h-full">
    <div class="flex-1 flex flex-col justify-between items-center p-12">
      <div />
      <form class="pl-0 md:p-14" @submit.prevent="onClick">
        <div class="mb-9">
          <span class="form-text text-formColor">Welcome back to </span>
          <span class="form-text text-yellow-dark">ResumeBuilder</span>
        </div>
        <p class="text-6xl tracking-tight text-formColor">Login</p>
        <div class="w-80">
          <v-input
            className="form-input"
            v-model="email"
            placeholder="Email"
            @blur="$v.email.$touch()"
          />
          <template v-if="$v.email.$error">
            <p v-if="!$v.email.required">Email is required</p>
            <p v-if="!$v.email.email">Email must be proper</p>
          </template>
          <v-input
            type="password"
            className="form-input"
            v-model="password"
            placeholder="Password"
            show-hide-icon
            @blur="$v.password.$touch()"
          />
          <template v-if="$v.password.$error">
            <p v-if="!$v.password.required">Password is required</p>
            <p v-if="!$v.password.minLength">
              Password must be at least 5 characters
            </p>
          </template>
          <v-button
            variant="secondary"
            class="
              py-4
              mt-16
              w-full
              text-white
              font-semibold
              text-xl
              tracking-tighter
            "
            :disabled="$v.$invalid"
            >Login</v-button
          >
          <div class="mt-7">
            <span class="text-formColor text-xl tracking-tighter"
              >Don't have an account?</span
            >
            <span class="ml-1 text-yellow-dark text-xl tracking-tighter"
              >Get Started</span
            >
          </div>
        </div>
      </form>
      <p class="self-start justify-self-end">Copyright @2021</p>
    </div>
    <div class="flex-1">
      <v-icon name="resume" class="h-full max-w-full" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { VInput, VButton } from "@/common";
import VIcon from "@/common/components/VIcon.vue";
import { required, email, minLength } from "vuelidate/lib/validators";

export default Vue.extend({
  name: "Login",
  components: {
    VInput,
    VButton,
    VIcon,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    onClick() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        console.log(this.$v);
        return;
      }
    },
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(5),
    },
  },
});
</script>

<style></style>
