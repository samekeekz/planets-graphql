import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: [
    {
      "http://localhost:8088/v1/graphql": {
        headers: {
          "x-hasura-admin-secret": "adminsecret",
        },
      },
    },
  ],
  documents: ["graphql/**/*.ts"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
