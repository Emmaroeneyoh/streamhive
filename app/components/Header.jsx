import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

function Header() {
  return (
    <header className='  fixed top-0 w-full z-50 bg-white'>
      <div className='p-4 mx-auto flex justify-between items-center'>
        <div className=' bg-primary text-white font-bold py-2 px-3 '>
          <Link href={"/"}>Gleeful.</Link>
        </div>

        <div className=' hidden sm:flex'>
          <Nav />
        </div>

        <div className=' flex sm:hidden'>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
