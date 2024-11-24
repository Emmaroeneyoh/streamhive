import Photo from "../components/Photo";
import { FiDownload } from "react-icons/fi";

import Button from "../components/Button";
function Hero() {
  return (
    <section>
      <div className=' container mx-auto mt-6 '>
        <div className=' flex flex-col-reverse xl:flex-row items-center justify-between '>
          {/* text */}
          <div className=' flex flex-col justify-start items-start gap-6 text-center xl:text-left'>
            <span className=' text-xl  '>
              Empower Your Connections with Our TURN Server Solutions
            </span>
            <h1 className='h2'>
              Seamless, <span className=' text-primary'>Reliable,</span> and
              Scalable
            </h1>
            <p className='text-gray-600 max-w-[500px] '>
              Unlock the power of flawless communication for your applications
              with our state-of-the-art TURN server infrastructure. Designed for
              developers and businesses, our platform ensures uninterrupted
              media and data streams, no matter the network constraints.
            </p>
            {/* <div className=' flex justify-center xl:justify-start items-center'>
              <Button size={"229px"} style={"border"}>
                <span>Download CV </span>
                <FiDownload />
              </Button>
            </div> */}
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
