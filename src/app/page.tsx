import { getPlanets } from "../../graphql/planets";
import { redirect } from "next/navigation";

export default async function Home() {
  const { data } = await getPlanets();

  redirect(`/${data?.planets.at(0)?.id}`);

  return <main className=""></main>;
}
