"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Resume",
    path: "#resume",
  },
  {
    name: "Portfolio",
    path: "#portfolio",
  },
  {
    name: "Job",
    path: "#job",
  },
  {
    name: "Contact",
    path: "#contact",
  },
];

function Nav() {
  const pathName = usePathname();
  function test() {
    console.log(pathName);
  }
  return (
    <nav>
      <div className=' flex gap-6 justify-center items-center'>
        {navLinks.map((item, index) => (
          <Link
            href={item.path}
            key={index}
            className={`${
              pathName === item.path && "  border-b-2 border-primary"
            } capitalize font-medium hover:text-accent transition-all duration-150`}
            onClick={test}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
