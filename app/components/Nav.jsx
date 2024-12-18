"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "../context/AuthContext";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "about",
    path: "/#about",
  },
  {
    name: "documentation",
    path: "/#documentation",
  },
  {
    name: "features",
    path: "/#features",
  },
  {
    name: "pricing",
    path: "/#pricing",
  },
  {
    name: "contact",
    path: "/#contact",
  },
];

function Nav() {
  const pathName = usePathname();
  const { isAuthenticated } = useAuth(); // Get authentication status

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
        <div className='flex max-md:justify-end gap-2'>
          {!isAuthenticated ? (
            <Link
              href='/Login'
              className=' bg-primary text-white py-2 px-8 rounded-xl'
            >
              Sign In
            </Link>
          ) : (
            <Link
              href='/Dashboard'
              className=' bg-primary text-white py-2 px-8 rounded-xl'
            >
              Profile
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
