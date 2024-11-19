import Photo from "../components/Photo";
import { FiDownload } from "react-icons/fi";

import Button from "../components/Button";
function Hero() {
  return (
    <section>
      <div className=' container mx-auto mt-6 '>
        <div className=' flex flex-col-reverse xl:flex-row items-center justify-between '>
          {/* text */}
          <div className=' text-center xl:text-left'>
            <span className=' text-xl'>Your growth, powered by SEO.</span>
            <h1 className='h1 mb-6'>
              Welcome to <span className=' text-primary'>Gleeful</span>
            </h1>
            <p className=' max-w-[500px] mb-9'>
              Digital marketing strategist: where technical expertise meets
              creative vision, delivering results-driven campaigns
            </p>
            <div className=' flex justify-center xl:justify-start items-center'>
              <Button size={"229px"} style={"border"}>
                <span>Download CV </span>
                <FiDownload />
              </Button>
            </div>
          </div>

          {/* phot0 */}
          <div>
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
