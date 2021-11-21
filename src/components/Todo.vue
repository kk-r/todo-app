<template>
  <div>
    <div class="add-todo flex mt-4 mb-4">
      <input
        class="
          shadow
          appearance-none
          border
          rounded
          w-full
          py-2
          px-3
          mr-4
          text-grey-darker
        "
        type="text"
        v-model="newTodo"
        placeholder="What needs to be done?"
      />
      <button
        class="
          p-2
          pl-5
          pr-5
          bg-transparent
          border-2 border-blue-500
          text-blue-500 text-lg
          rounded-lg
          hover:bg-blue-500 hover:text-gray-100
          focus:border-4 focus:border-blue-300
        "
        type="submit"
        @click="addTodo"
      >
        Add
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Todo",
  props: {},
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    addTodo() {
      this.$emit("add-todo", this.newTodo);
      this.newTodo = "";
    },
  },
};
</script>
