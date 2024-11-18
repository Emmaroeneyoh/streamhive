"use client";

import Image from "next/image";

const Photo = () => {
  return (
    <div className=' w-full h-full'>
      <div className=' w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]'>
        <img
          src='/assets/profile-photo.png'
          quality={100}
          alt=''
          className='object-contain'
        />
      </div>
    </div>
  );
};

export default Photo;
