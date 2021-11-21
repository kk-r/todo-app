<template>
  <div
    class="
      h-100
      w-full
      flex
      items-center
      justify-center
      bg-teal-lightest
      font-sans
    "
  >
    <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
      <Header title="Todo List" />
      <todo-app @addTodo="addTodo" />
      <div class="item-wrapper">
        <todo-item
          v-for="(item, index) in todoItems"
          :key="index"
          :title="item.title"
        />
      </div>
    </div>
  </div>

  <div class="bg-white-100 justify-center" v-if="todoItems.length < 1">
    <div class="mt-23 m-auto">
      <div class="tracking-widest mt-2">
        <span class="text-gray-400 text-xl"> Nothing here! </span>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import TodoApp from "./components/Todo.vue";
import TodoItem from "./components/TodoItem.vue";
import Footer from "./components/Footer.vue";
import TodoRequests from "./requests/TodoRequests.js";

let apiURL = process.env.VUE_APP_API_BASE_URL + "/api";
export default {
  name: "App",
  components: {
    Header,
    TodoApp,
    TodoItem,
    Footer,
  },

  data() {
    return {
      todoItems: [],
    };
  },
  methods: {
    async fetchTodoItems() {
      try {
        const response = await TodoRequests.getTodos(apiURL);
        if (response.status === 200) {
          this.todoItems = response.data;
        }
      } catch (error) {
        console.log(error.response ? error.response.status : error);
      }
    },
    async addTodo(todo) {
      //check todo is not null and undefined
      if (null == todo) {
        return false;
      }
      try {
        const response = await TodoRequests.addTodo(apiURL, todo);

        if (response.status === 201) {
          this.todoItems = response.data;
        }
      } catch (error) {
        console.log(error.response ? error.response.status : error);
      }
    },
  },
  mounted() {
    this.fetchTodoItems();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
