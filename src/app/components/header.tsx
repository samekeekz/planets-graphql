import Link from "next/link";
import { getPlanets } from "../../../graphql/planets";
import NavBar from "./nav-bar";

const Header = async () => {
  const { data } = await getPlanets();
  return (
    <header className="bg-[url('/background-stars.svg')] max-w-[1440px] w-full mx-auto pl-8 pr-10 pt-5 pb-7 border-b-[1px] border-white border-opacity-20">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/">
            <h2 className="text-[28px] leading-9 tracking-[-1.05px] uppercase text-white">
              THE PLANETS
            </h2>
          </Link>
        </div>
        <NavBar planets={data?.planets} />
      </div>
    </header>
  );
};

export default Header;
