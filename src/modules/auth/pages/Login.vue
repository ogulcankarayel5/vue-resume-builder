<template>
  <form-layout>
    <h1 class="text-3xl font-semibold">{{ $t("login.subTitle") }}</h1>
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
        {{ $t("login.buttonText") }}
      </v-button>
      <div class="text-center mt-6 border-t-2 border-gray-400 border-solid">
        <span class="relative -top-3 bg-white px-2">OR</span>
      </div>
      <v-button class="mt-6" elevation size="block" @onClick="loginWithGoogle">
        <v-icon name="google" />
        <span class="ml-2">Sign with Google </span>
      </v-button>
      <p class="text-gray-600 mt-5">
        {{ $t("login.footerText") }}
        <router-link class="text-primary font-bold" to="/register">{{
          $t("login.footerText2")
        }}</router-link>
      </p>
    </div>
  </form-layout>
</template>

<script lang="ts">
import Vue from "vue";
import { VInput, VButton, VError, windowSizeMixin } from "@/common";
import { required, email, minLength } from "vuelidate/lib/validators";
import { mapActions, mapState } from "vuex";
import { ActionTypes, AuthState } from "../store/types";
import VIcon from "@/common/components/VIcon.vue";
import FormLayout from "@/modules/layout/FormLayout.vue";

export default Vue.extend({
  name: "Login2",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  mixins: [windowSizeMixin],
  components: {
    VInput,
    VButton,
    VIcon,
    VError,
    FormLayout,
  },
  methods: {
    ...mapActions("auth", [
      ActionTypes.LOGIN,
      ActionTypes.LOGOUT,
      ActionTypes.LOGIN_WITH_GOOGLE,
    ]),
    async onClick() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      this.login({ email: this.email, password: this.password });
    },
    logoutClick() {
      this.logout();
    },
  },
  computed: {
    ...mapState("auth", {
      loading: (state) => (state as AuthState).loading,
    }),
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
