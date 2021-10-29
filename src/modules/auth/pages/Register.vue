<template>
  <div class="flex h-full">
    <div class="flex-1 flex flex-col justify-between items-center p-12">
      <div />
      <form class="pl-0 md:p-14" @submit.prevent="onClick">
        <div class="mb-9">
          <i18n
            path="register.title"
            tag="span"
            class="form-text text-formColor"
          >
            <span class="text-yellow-dark">ResumeBuilder</span>
          </i18n>
        </div>
        <p class="text-6xl tracking-tight text-formColor">
          {{ $t("register.subTitle") }}
        </p>
        <div class="w-80">
          <v-input
            type="email"
            className="form-input"
            v-model="email"
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
            type="password"
            className="form-input"
            v-model="password"
            placeholder="Password"
            show-hide-icon
            enterkeyhint="done"
            @blur="$v.password.$touch()"
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
            >{{ $t("register.buttonText") }}</v-button
          >
          <div class="mt-7">
            <span class="text-formColor text-xl tracking-tighter">{{
              $t("register.footerText")
            }}</span>
            <router-link
              to="/login"
              class="ml-1 text-yellow-dark text-xl tracking-tighter"
              >{{ $t("register.footerText2") }}</router-link
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
import { VInput, VButton, VError } from "@/common";
import VIcon from "@/common/components/VIcon.vue";
import { required, email, minLength } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
import { ActionTypes } from "../store/types";

export default Vue.extend({
  name: "Register",
  components: {
    VInput,
    VButton,
    VIcon,
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

<style></style>
