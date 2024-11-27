"use client";

import Image from "next/image";

const Photo = () => {
  return (
    <div className=' w-full h-full'>
      <div className=' w-[298px] h-[298px] xl:w-[600px] xl:h-[600px]'>
        <img
          src='/assets/hero.svg'
          quality={100}
          alt=''
          className='object-contain'
        />
      </div>
    </div>
  );
};

export default Photo;
