import { gql } from "@urql/core";
import client from "../client/client";
import { graphql } from "../gql";

const PlanetQuery = graphql(`
  query Planet($planetId: Int!) {
    planets_by_pk(id: $planetId) {
      id
      name
      radius
      revolution
      rotation
      overview_content
      overview_source
      structure_content
      structure_source
      temperature
      geology_source
      geology_content
    }
  }
`);
``;
export function getPlanet(planetId: number) {
  return client.query(PlanetQuery, { planetId });
}
