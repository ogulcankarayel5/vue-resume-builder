<template>
  <div class="flex h-full">
    <div class="flex-1 flex flex-col items-center justify-center bg-primary">
      <img
        src="https://res.cloudinary.com/ogulcankarayel-digital/image/upload/c_scale,h_400,w_400/v1636202015/resume-builder/undraw_resume_re_hkth_2_1_uorxsm.png"
      />
      <i18n
        path="login.title"
        tag="span"
        class="text-white font-bold text-5xl tracking-tight mt-10"
      >
        <span>ResumeBuilder</span>
      </i18n>
    </div>
    <div class="flex-1 flex flex-col items-center justify-center">
      <h1 class="text-3xl font-semibold">{{ $t("register.subTitle") }}</h1>
      <div class="mt-16">
        <v-input
          v-model="email"
          label="Email"
          type="email"
          placeholder="Email"
          enterkeyhint="next"
          @blur="$v.email.$touch()"
        />
        <template v-if="$v.email.$error">
          <v-error
            v-if="!$v.email.required"
            :error="$t('error.email.required')"
          />
          <v-error v-if="!$v.email.email" :error="$t('error.email.proper')" />
        </template>
        <v-input
          label="Password"
          containerClassName="mt-8"
          v-model="password"
          type="password"
          placeholder="Password"
          enterkeyhint="done"
          @blur="$v.password.$touch()"
          show-hide-icon
        />
        <template v-if="$v.password.$error">
          <v-error
            v-if="!$v.password.required"
            :error="$t('error.password.required')"
          />
          <v-error
            v-if="!$v.password.minLength"
            :error="
              $t('error.password.minLength', {
                length: this.$v.password.$params.minLength.min,
              })
            "
          />
        </template>
        <v-button
          class="mt-5"
          variant="primary"
          size="block"
          :loading="loading"
          @onClick="onClick"
        >
          {{ $t("register.buttonText") }}
        </v-button>
        <p class="text-gray-600 mt-5">
          {{ $t("register.footerText") }}
          <router-link class="text-primary font-bold" to="/login">{{
            $t("register.footerText2")
          }}</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { VInput, VButton, VError } from "@/common";
import { required, email, minLength } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
import { ActionTypes } from "../store/types";

export default Vue.extend({
  name: "Register",
  components: {
    VInput,
    VButton,
    VError,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions("auth", [ActionTypes.REGISTER]),
    async onClick() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      this.register({ email: this.email, password: this.password });
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
