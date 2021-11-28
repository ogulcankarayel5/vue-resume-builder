<template>
  <div class="fixed right-3 top-2">
    <select v-model="$i18n.locale" class="bg-gray-300">
      <option :value="locale.code" v-for="locale in locales" :key="locale.code">
        {{ locale.name }}
      </option>
    </select>
  </div>
</template>
<script>
import Vue from "vue";
import { getSupportedLocales } from "@/plugins/i18n/utils";

export default Vue.extend({
  name: "LanguageSwitcher",
  data: () => ({ locales: getSupportedLocales() }),
});
</script>

<style></style>
