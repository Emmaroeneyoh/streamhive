"use client";

import React, { useState } from "react";
import SheetTrigger from "./SheetTrigger";
import SheetContent from "./SheetContent";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sheet = () => {
  const Links = [
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

  const pathName = usePathname();

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
        <div className='flex flex-col justify-center items-center gap-8'>
          {Links.map((item, index) => (
            <Link
              href={item.path}
              className={`${item.path == pathName && "text-primary"}`}
              onClick={closeSheet}
            >
              {" "}
              {item.name}{" "}
            </Link>
          ))}
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
