import { shallowMount } from "@vue/test-utils";
import Footer from "@/components/Footer.vue";

describe("Footer.vue", () => {
  it("check footer", async () => {
    const footerText = "foo";
    const wrapper = shallowMount(Footer, {
      props: { footerText },
    });
    expect(wrapper.text()).toMatch(footerText);
  });
});
