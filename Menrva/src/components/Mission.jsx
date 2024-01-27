import React, { useEffect, useState } from 'react';
import mission from "../assets/vison.jpg";
import mission2 from "../assets/mission.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Mission = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    // Initial check on mount
    handleResize();

    // Attach event listener
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const responsive = {
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };

if (isMobile) {
    return (
      <div className='bg-[#eaf4f7] p-4 h-fit'>
        <Carousel responsive={responsive} swipeable draggable removeArrowOnDeviceType={['tablet', 'laptop']} itemClass="carousel-item-padding-40-px">
          {/* First Section */}
          <div className="parent flex flex-col justify-center items-center">
            <img src={mission} className='rounded-md object-cover w-full h-64 md:h-80'></img>
            <div className="right p-6 md:p-12 w-full">
              <h1 className='text-2xl md:text-3xl font-semibold text-[#5e17EB] underline underline-offset-8 mb-[30px]'>
                OUR VISION
              </h1>
              <p className='text-lg md:text-lg tracking-[4px]'>
                Our vision is to empower organizations with artificial intelligence, enabling humans to live better and more productive life.
              </p>
            </div>
          </div>

          {/* Second Section */}
          <div className="parent flex flex-col justify-center items-center">
            <img src={mission2} className='rounded-md object-cover w-full h-64 md:h-80'></img>
            <div className="right p-6 md:p-12 w-full">
              <h1 className='text-2xl md:text-3xl font-semibold text-[#5e17EB] underline underline-offset-8'>
                OUR MISSION
              </h1>
              <p className='text-base md:text-lg flex flex-col gap-2 md:gap-4'>
                <span className='text-lg md:text-xl'>
                  We have two key missions:
                </span>
                <ul className='list-decimal ml-4'>
                  <li>
                    We solve important problems for global organizations with our custom AI-ML products and services, creating significantly positive impacts for our clients.
                  </li>
                  <li>
                    We expedite the digital transformation journey of our esteemed clients with best-in-class consulting services and industry-relevant training programs.
                  </li>
                </ul>
                Our vision is to empower organizations with artificial intelligence, enabling humans to live better and more productive life.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }

  // Display normally for tablets and laptops
  return (
    <div className='bg-[#eaf4f7] flex flex-col'>
      {/* First Section */}
      <div className="parent flex flex-col md:flex-row justify-between pl-6 md:pl-12 pr-6 md:pr-12 pt-6 md:pt-12">
        <div className="w-full md:w-1/2">
          <img src={mission} className='rounded-md h-64 md:h-80 object-cover w-full'></img>
        </div>
        <div className="right p-6 md:p-12 w-full md:w-1/2 flex flex-col gap-6 md:gap-12">
          <h1 className='text-2xl md:text-3xl font-semibold text-[#5e17EB] underline underline-offset-8'>
            OUR VISION
          </h1>
          <p className='text-base md:text-lg'>
            Our vision is to empower organizations with artificial intelligence, enabling humans to live better and more productive life.
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className="parent flex flex-col md:flex-row justify-between items-center pl-6 md:pl-12 pr-6 md:pr-12 pt-2 md:pt-6">
        <div className="right p-6 md:p-12 w-full md:w-1/2 flex flex-col gap-6 md:gap-12">
          <h1 className='text-2xl md:text-3xl font-semibold text-[#5e17EB] underline underline-offset-8'>
            OUR MISSION
          </h1>
          <p className='text-base md:text-lg flex flex-col gap-2 md:gap-4'>
            <span className='text-lg md:text-xl'>
              We have two key missions:
            </span>
            <ul className='list-decimal ml-4'>
              <li>
                We solve important problems for global organizations with our custom AI-ML products and services, creating significantly positive impacts for our clients.
              </li>
              <li>
                We expedite the digital transformation journey of our esteemed clients with best-in-class consulting services and industry-relevant training programs.
              </li>
            </ul>
            Our vision is to empower organizations with artificial intelligence, enabling humans to live better and more productive life.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img src={mission2} className='rounded-md h-64 md:h-80 object-cover w-full'></img>
        </div>
      </div>
    </div>
  );
};

export default Mission;
