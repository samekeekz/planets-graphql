import { gql } from "@urql/core";
import client from "../client/client";
import { graphql } from "../gql";

export const PlanetsQuery = graphql(`
  query Planets {
    planets {
      id
      name
      rotation
      temperature
    }
  }
`);

export function getPlanets() {
  return client.query(PlanetsQuery, {});
}
