import React, { useEffect, useState } from 'react';
import logo from "../assets/Logo.webp";
import { ImPower } from "react-icons/im";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { SlLike } from "react-icons/sl";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Special = () => {
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

  const data = [
    {
      id: 1,
      logo: <ImPower />,
      title: "AI-ML POWERED",
      desc: "Our offerings are powered by the latest innovations in the areas of AI and Machine Learning.",
    },
    {
      id: 2,
      logo: <LiaLaptopCodeSolid />,
      title: "LATEST TECHNOLOGIES",
      desc: "Our team of experts uses the latest tools and technologies to create innovative solutions for our clients.",
    },
    {
      id: 3,
      logo: <SlLike></SlLike>,
      title: "BUSINESS IMPACT",
      desc: "We put the highest priority on the impact of our solutions, and the success of our clients is our final goal.",
    },
  ];

  const responsive = {
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };

  if (isMobile) {
    return (
        <div className=" pt-4">
            <h1 className='text-2xl md:text-4xl font-semibold text-center mt-5 mb-10 md:mt-10 md:mb-10 underline underline-offset-8 text-[#5e17EB] decoration-[#5e17EB]'>
        WHAT MAKES US SPECIAL
      </h1>
      <Carousel responsive={responsive} swipeable draggable removeArrowOnDeviceType={['tablet', 'laptop']} itemClass="carousel-item-padding-40-px">
        {data.map((item) => (
          <div key={item.id} className="child flex flex-col justify-center items-center gap-4 md:gap-8 mb-[30px]">
            <div className="logo bg-[#5e17EB] rounded-full p-5">
              <p className='text-3xl md:text-4xl font-extrabold text-white'>{item.logo}</p>
            </div>
            <h1 className='text-lg md:text-xl font-semibold'>{item.title}</h1>
            <p className='text-center text-[15px] md:text-[17px] w-[250px]'>{item.desc}</p>
          </div>
        ))}
      </Carousel>
      </div>
    );
  }

  // Display normally for tablets and laptops
  return (
    <div className='parrent flex flex-col gap-10 md:gap-16 mb-10 md:mb-16 mt-10 md:mt-16'>
      <h1 className='text-3xl md:text-4xl font-semibold text-center mt-5 mb-5 md:mt-10 md:mb-10 underline underline-offset-8 text-[#5e17EB] decoration-[#5e17EB]'>
        WHAT MAKES US SPECIAL
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center md:w-[75vw] mx-auto gap-x-4 md:gap-x-16">
        {data.map((item) => (
          <div key={item.id} className="child flex flex-col justify-center items-center gap-4 md:gap-8">
            <div className="logo bg-[#5e17EB] rounded-full p-5">
              <p className='text-3xl md:text-4xl font-extrabold text-white'>{item.logo}</p>
            </div>
            <h1 className='text-lg md:text-xl font-semibold'>{item.title}</h1>
            <p className='text-center text-[15px] md:text-[17px]'>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Special;
