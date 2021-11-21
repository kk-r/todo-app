import axios from "axios";

class TodoRequests {
  static createHeaders() {
    return {
      Accept: "application/json",
    };
  }

  static getTodos(baseUrl) {
    return axios.get(`${baseUrl}/todos`, {
      headers: this.createHeaders(),
      validateStatus: function (status) {
        return status < 500; // Reject only if the status code is greater than or equal to 500
      },
    });
  }

  static addTodo(baseUrl, todo) {
    if (!todo) {
      // return Promise.reject("Todo is required");
    }
    let reqBody = { title: todo };
    return axios.post(`${baseUrl}/todos`, reqBody, {
      headers: this.createHeaders(),
    });
  }
}

export default TodoRequests;
