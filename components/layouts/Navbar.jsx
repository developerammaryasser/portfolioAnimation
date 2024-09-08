import { socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" h-[5rem] w-full">
      <div className="container h-full flex items-center justify-between">
        <div className="font-bold text-4xl">
            Kr
        </div>
        <ul className="flex gap-4">
          {socials.map(({ id, icon, url }) => (
            <li key={id}>
              <Link href={url}>{icon}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
