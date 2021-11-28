import VInput from "@/common/components/VInput.vue";
import { shallowMount } from "@vue/test-utils";
import VIcon from "@/common/components/VIcon.vue";


const factory = (values = {}, other = {}) => {
  return shallowMount(VInput, {
    data() {
      return {
        ...values,
      };
    },
    ...other,
    components:{
      VIcon,
    },
  });
};

describe("VInput", () => {

  it("snapshot", () => {
    const wrapper = factory();
    expect(wrapper.element).toMatchSnapshot();
  });

  it("should render password icon if showHideIcon is true", () => {
    const wrapper = factory({},{ propsData: {showHideIcon: true} });
    expect(wrapper.find('[data-test-id="password"]').exists()).toBe(true);
  });


  it("should change icon according to showPassword state",async () => {
    const wrapper = factory({showPassword: false},{ propsData: {showHideIcon: true} });

    expect(wrapper.find('[data-test-id="reveal"]').exists()).toBe(false);
    expect(wrapper.find('[data-test-id="revealHide"]').exists()).toBe(true);

    await wrapper.find('[data-test-id="password"]').trigger("click");
    
    expect(wrapper.find('[data-test-id="reveal"]').exists()).toBe(true);
    expect(wrapper.find('[data-test-id="revealHide"]').exists()).toBe(false);
  });


});
