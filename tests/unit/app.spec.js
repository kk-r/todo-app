import { shallowMount } from "@vue/test-utils";
import flushPromises from "flush-promises";
import App from "../../src/App.vue";
import TodoItem from "@/components/TodoItem.vue";

import axios from "axios";

jest.mock("axios");

describe("getTodos", () => {
  it("mocking the axios call to get todos should work", async () => {
    axios.get.mockImplementation(() =>
      Promise.resolve({ status: 200, data: [{ title: "test" }] })
    );
    var wrapper = shallowMount(App);
    await flushPromises();
    expect(wrapper.vm.todoItems.length).toBe(1);
  });

  it("Show empty when api requst on failure", async () => {
    // override behaviour for this one call
    axios.get.mockImplementation(() =>
      Promise.reject({ status: 500, data: {} })
    );
    // verify your failure test
    var wrapper = shallowMount(App);
    await flushPromises();
    expect(wrapper.vm.todoItems.length).toBe(0);
  });
});
