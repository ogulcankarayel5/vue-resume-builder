import VButton from "@/common/components/VButton.vue";
import { shallowMount } from "@vue/test-utils";

const factory = (values = {}, other = {}) => {
  return shallowMount(VButton, {
    data() {
      return {
        ...values,
      };
    },
    ...other,
  });
};

describe("VButton", () => {
  it("snapshot", () => {
    const wrapper = factory();
    expect(wrapper.element).toMatchSnapshot();
  });

  it("button click", () => {
    const wrapper = factory();
    wrapper.find('[data-test-id="button"]').trigger("click");
    expect(wrapper.emitted().onClick).toBeTruthy();
  });
  it("display loading if loading is true", () => {
    const wrapper = factory(
      {},
      {
        propsData: {
          loading: true,
        },
        slots: {
          default: "<span>test</span>",
        },
      }
    );
    expect(wrapper.find('[data-test-id="loading"]').exists()).toBe(true);
    expect(wrapper.find("span").exists()).toBe(false);
  });
  it("display slot if loading is false", () => {
    const wrapper = factory(
      {},
      {
        propsData: {
          loading: false,
        },
        slots: {
          default: "<span>test</span>",
        },
      }
    );
    expect(wrapper.find('[data-test-id="loading"]').exists()).toBe(false);
    expect(wrapper.find("span").text()).toBe("test");
  });

  describe("variant", () => {
    const variants = ["primary"];
    variants.forEach((item) => {
      it(`should render ${item} variant class`, () => {
        const wrapper = factory(
          {},
          {
            propsData: {
              variant: item,
            },
          }
        );
        expect(wrapper.find('[data-test-id="button"]').classes()).toContain(
          `bg-${item}`
        );
      });
    });
  });
});
