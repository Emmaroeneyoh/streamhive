"use client";

import React, { useState } from "react";
import SheetTrigger from "./SheetTrigger";
import SheetContent from "./SheetContent";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";

const Sheet = () => {
  const Links = [
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

  const pathName = usePathname();
  const { isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const openSheet = () => {
    setIsOpen(true);
  };

  const closeSheet = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <SheetTrigger onClick={openSheet}>
        <CiMenuFries />
      </SheetTrigger>

      <SheetContent isOpen={isOpen} onClose={closeSheet}>
        <div className='flex flex-col justify-center items-center gap-8 capitalize'>
          {Links.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={`${item.path == pathName && "text-primary"}`}
              onClick={closeSheet}
            >
              {" "}
              {item.name}{" "}
            </Link>
          ))}
          <div className='flex max-md:justify-end gap-2'>
            {!isAuthenticated ? (
              <Link
                href='/Login'
                className=' bg-primary text-white py-2 px-8 rounded-xl'
                onClick={closeSheet}
              >
                Sign In
              </Link>
            ) : (
              <Link
                href='/Dashboard'
                className=' bg-primary text-white py-2 px-8 rounded-xl'
                onClick={closeSheet}
              >
                Profile
              </Link>
            )}
          </div>
        </div>
      </SheetContent>

      {/* Backdrop (optional) */}
      {isOpen && (
        <div
          onClick={closeSheet}
          className='fixed inset-0 -z-10 bg-black bg-opacity-50'
        />
      )}
    </div>
  );
};

export default Sheet;
