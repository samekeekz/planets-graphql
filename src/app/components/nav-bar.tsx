"use client";
import { type } from "os";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  planets: Planet[] | undefined;
};

type Planet = {
  id: string;
  name: string;
};

const NavBar = ({ planets }: Props) => {
  const pathname = usePathname();

  return (
    <div className="text-['Spartan'] font-bold leading-6 tracking-[1px] ">
      <ul className="list-none m-0 flex gap-8 p-0">
        {planets?.map((planet) => (
          <li key={planet.id}>
            <Link
              className={`link ${pathname === `/${planet.id}` ? "text-blue-500" : "text-white"}`}
              href={`/${planet.id}`}
            >
              {planet.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
