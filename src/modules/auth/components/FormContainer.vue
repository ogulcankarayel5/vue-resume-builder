<template>
  <div class="flex h-full">
    <div class="flex-1 flex flex-col justify-between items-center p-12">
      <div />
      <form class="pl-0 md:p-14" @submit.prevent="onClick">
        <div class="mb-9">
          <i18n path="login.title" tag="span" class="form-text text-formColor">
            <span class="text-yellow-dark">ResumeBuilder</span>
          </i18n>
        </div>
        <p class="text-6xl tracking-tight text-formColor">
          {{ $t("login.subTitle") }}
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
            >{{ $t("login.buttonText") }}</v-button
          >
          <div class="mt-7">
            <span class="text-formColor text-xl tracking-tighter">{{
              $t("login.footerText")
            }}</span>
            <span class="ml-1 text-yellow-dark text-xl tracking-tighter">{{
              $t("login.footerText2")
            }}</span>
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

<script>
import Vue from "vue";
export default Vue.extend({

})
</script>

<style>

</style>