import { shallowMount } from "@vue/test-utils";
import TodoItem from "@/components/TodoItem.vue";

describe("TodoItem.vue", () => {
  it("check todo item props passed", async () => {
    const title = "todo item";
    const wrapper = shallowMount(TodoItem, {
      props: { title },
    });
    expect(wrapper.text()).toMatch(title);
  });
});
