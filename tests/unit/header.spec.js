import Header from "@/components/Header.vue";
import { shallowMount } from "@vue/test-utils";

describe("Header.vue", () => {
  it("Test Header props.title when passed", () => {
    const title = "test todo";
    const wrapper = shallowMount(Header, {
      props: { title },
    });
    expect(wrapper.text()).toMatch(title);
  });
});
