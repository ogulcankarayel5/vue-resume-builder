import VError from "@/common/components/VError.vue";
import { shallowMount } from "@vue/test-utils";
import Vue from "vue";

describe("VError", () => {
    it("snapshot",() => {
        const wrapper = shallowMount(VError, {
            propsData: {
                error: "error"
            }
        });
        expect(wrapper.element).toMatchSnapshot();
    });
    it("should render the right message", () => {
      const wrapper = shallowMount(VError, {
        propsData: {
          error: "test",
        },
      });
      expect(wrapper.find("p").text()).toBe("test");
    });
});
