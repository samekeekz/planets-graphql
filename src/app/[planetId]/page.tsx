"use server";

import { getPlanet } from "../../../graphql/planet";
import "../globals.css";
import Content from "../components/content";

type Props = {
  params: { planetId: string };
};

const PlanetPage = async ({ params }: Props) => {
  const planetId = Number(params.planetId!);
  const { data } = await getPlanet(planetId);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Content {...data.planets_by_pk} />
    </>
  );
};

export default PlanetPage;
