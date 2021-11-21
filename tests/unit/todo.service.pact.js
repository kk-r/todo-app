"use strict";

import TodoRequests from "../../src/requests/TodoRequests.js";

const url = "http://localhost:" + port + "/api";

jest.setTimeout(30000);

describe("Todo service", () => {
  const EXPECTED_BODY = {};

  describe("When doing a call to fetch todos", () => {
    beforeEach(() => {
      const interaction = {
        state: "I have a list of todos",
        uponReceiving: "A request to retrieve all todos",
        withRequest: {
          method: "GET",
          path: "/api/todos",
        },
        willRespondWith: {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
          body: EXPECTED_BODY,
        },
      };
      return provider.addInteraction(interaction);
    });

    it("should fetch the list of todos", () => {
      return TodoRequests.getTodos(url).then((response) => {
        expect(response.headers["content-type"]).toEqual("application/json");
        expect(response.data).toEqual(EXPECTED_BODY);
        expect(response.status).toEqual(200);
      });
    });
  });

  describe("Adding todo item", () => {
    beforeEach(() => {
      const interaction = {
        state: "a todo item is added",
        uponReceiving: "a request to add a todo item",
        withRequest: {
          method: "POST",
          path: "/api/todos",
          headers: {
            "Content-Type": "application/json",
          },
          body: { title: "Test Pact add" },
        },
        willRespondWith: {
          status: 201,
          headers: {
            "Content-Type": "application/json",
          },
          body: { 0: { title: "Test Pact add" } },
        },
      };
      return provider.addInteraction(interaction);
    });

    it("should add a todo item", async () => {
      const expectedResponse = {
        0: {
          title: "Test Pact add",
        },
      };

      const response = await TodoRequests.addTodo(url, "Test Pact add");
      expect(response.headers["content-type"]).toEqual("application/json");
      expect(response.data).toEqual(expectedResponse);
      expect(response.status).toEqual(201);
    });
  });
});
