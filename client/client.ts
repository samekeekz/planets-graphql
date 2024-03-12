import { Client, fetchExchange } from "@urql/core";

const client = new Client({
  url: "http://localhost:8088/v1/graphql",
  fetchOptions: {
    headers: {
      "x-hasura-admin-secret": "adminsecret",
    },
  },
  exchanges: [fetchExchange],
});

export default client;
