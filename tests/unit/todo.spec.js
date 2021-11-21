import { shallowMount } from "@vue/test-utils";
import Todo from "@/components/Todo.vue";

describe("App.vue", () => {
  it("Test Todo component test", () => {
    const wrapper = shallowMount(Todo, {});
    const button = wrapper.find(".add-todo button");
    expect(button.text()).toMatch("Add");
  });

  it("calls the addTodo method", async () => {
    const title = "test todo";

    const testFunctionSpy = jest.spyOn(Todo.methods, "addTodo");

    const wrapper = shallowMount(Todo, {
      propsData: {
        props: { title },
      },
    });
    await wrapper.vm.$forceUpdate();

    const box = wrapper.find(".add-todo button");
    await box.trigger("click");
    expect(wrapper.emitted()).toHaveProperty("add-todo");
    expect(testFunctionSpy).toHaveBeenCalled();
  });
});
