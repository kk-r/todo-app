<template>
  <div
    class="
      todo-item-wrapper
      p-4
      hover:bg-gray-50
      cursor-pointer
      border border-gray-200
      rounded
      mb-2
    "
  >
    <span class="todo-item-text">{{ title }}</span>
  </div>
</template>
<script>
export default {
  name: "TodoItem",
  props: {
    title: String,
  },
};
</script>
