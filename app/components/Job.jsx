import React from "react";
import { FaHeart } from "react-icons/fa";

function Job() {
  return (
    <div>
      <div className=' flex gap-4 justify-between items-center bg-white rounded-lg p-4'>
        <div>
          <img
            className=' size-12'
            src='/assets/thumbnail.png'
            alt='company-profile'
          />
        </div>
        <div className=' grow'>
          <p className=' text-slate-600'>Jiji</p>
          <h3 className=' font-bold'>Social Media Marketer</h3>
          <span className=' text-sm text-slate-500'>
            Remote &middot; Kwarri &middot; Part-Time
          </span>
        </div>
        <div className=' flex flex-col justify-between items-end'>
          <div className=' cursor-pointer text-slate-600'>
            <FaHeart />
          </div>
          <br />
          <span className=' text-sm'>2 weeks ago</span>
        </div>
      </div>
    </div>
  );
}

export default Job;
