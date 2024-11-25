import Link from "next/link";
import React from "react";
import { IoMdClose } from "react-icons/io";

const SheetContent = ({ isOpen, children, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className=' flex justify-between items-center p-4 border-b border-gray-200'>
        <div>
          <Link href={"/"} className=' text-white font-bold py-2 px-3 '>
            <img src='/assets/logo.png' width={150} alt='' />
          </Link>
        </div>
        <button
          onClick={onClose}
          className='text-sm text-gray-500 hover:text-gray-700'
        >
          <IoMdClose />
        </button>
      </div>
      <div className='p-4'>{children}</div>
    </div>
  );
};

export default SheetContent;
