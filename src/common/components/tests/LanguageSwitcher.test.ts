import LanguageSwitcher from "@/common/components/LanguageSwitcher.vue";
import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import { createI18n } from 'vue-i18n'
const i18n =  createI18n({ locale: "en" });
const locales = [
  { code: "en", name: "English" },
  { code: "tr", name: "Turkish" },
];
const factory = (values = {}, other = {}) => {
  return shallowMount(LanguageSwitcher, {
    data() {
      return {
        locales,
        ...values,
      };
    },
    ...other,
  });
};
describe("LanguageSwitcher", () => {
  it("snapshot", () => {
    const wrapper = factory();
    expect(wrapper.element).toMatchSnapshot();
  });
  it("should render the correct number of languages", () => {
    const wrapper = factory();
    expect(wrapper.findAll('[data-test-id="locale"]').length).toBe(
      locales.length
    );
  });
  it("should change locale when select another option", () => {
    const wrapper = factory();
    wrapper.find('[data-test-id="localeSelect"]').setValue("tr");
    expect((i18n as any).locale).toBe("tr");
  });
});
