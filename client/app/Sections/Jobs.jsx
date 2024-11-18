import React from "react";
import { FiSearch } from "react-icons/fi";
import Button from "../components/Button";
import Job from "../components/Job";

function Jobs() {
  return (
    <section className=' container  mx-auto'>
      <div className=' flex flex-col gap-[30px] mb-[30px] text-center xl:text-left '>
        <h3 className=' text-4xl font-bold'>Find Your Next Job</h3>
        <p className=' max-w-[600px mx-auto xl:mx-0'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
          repudiandae laboriosam, labore commodi minus sequi ex similique sit!
        </p>
      </div>
      <form className=' flex gap-2 items-center justify-center xl:justify-start mb-[30px]'>
        <div className=' flex hover:border border-primary bg-slate-50 rounded-lg'>
          <input
            type='search'
            placeholder='Search Phrase...'
            className=' bg-slate-50 p-2 rounded-lg focus:outline-none'
          />
          <Button>
            <FiSearch />
          </Button>
        </div>
      </form>
      <div className=' flex flex-col bg-slate-50 gap-4 p-4 xl:p-8'>
        <span className=' font-bold'>Recent Jobs</span>
        <div className=' flex flex-col gap-4'>
          <Job />
          <Job />
          <Job />
          <Job />
          <Job />
          <Job />
        </div>
      </div>
    </section>
  );
}

export default Jobs;
