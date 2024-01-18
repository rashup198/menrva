import React from 'react';
import hero from "../assets/hero.png";
import { Link } from 'react-router-dom';
import Mission from './Mission';
import Special from './special';
import Services from './Services';
import OurClients from './OurClients';
// import WhyUs from './WhyUs';
import Collaborate from './Collaborate';
// import WhatWeDo from './whatWeDo';
 import Footer from './Footer';

const Hero = () => {
  return (
    <div className='pt-[70px]'>
      
      <div className="bg-white flex flex-col md:flex-row justify-between p-[40px] md:p-[100px] ">
        <div className="left flex flex-col gap-y-[20px] md:gap-y-[40px]">
          <div className="parent text-[25px] md:text-[45px] font-semibold text-[#5e17EB]">
            <h1 className=' text-wrap '>
            Empowering Tomorrow, Today: AI-Driven Innovations for Global Impact.
            </h1>
          </div>

          <div className="child text-[14px] md:text-[17px] text-black max-w-[450px]">
            <p>
            We are a cutting-edge tech company driven by AI and Data Science, creating easy-to-use and highly impactful solutions for top global clients.
            </p>
          </div>

          <div className="button flex mb-[20px] gap-[10px] md:gap-[20px] items-center">
           <Link to="/contact-us">
            <button className='bg-[#5e17EB] p-2 md:p-3 rounded-md text-white pl-[20px] pr-[20px]'>
              Let's Talk
            </button>
            </Link>
            <Link to="/about-us"><p className='hover:underline hover:underline-offset-2 hover:decoration-[#5e17EB] cursor-pointer text-[#5e17EB] font-semibold text-[14px] md:text-[17px]'>Learn More</p></Link>
          </div>
        </div>

        <div className="right max-w-[100%] md:max-w-[600px]">
          <div className="">
            <img src={hero} className='border-[10px] border-[#5e17EB] rounded-[10px] md:rounded-l-[120%] md:rounded-r-[50%]'></img>
          </div>
        </div>
      </div>
        <Mission></Mission>
        <Special></Special>
        <Services></Services>
         <OurClients></OurClients>
         {/* <WhyUs></WhyUs>
         <WhatWeDo></WhatWeDo> */}
         <Collaborate></Collaborate> 
         <Footer></Footer>
    </div>
  );
}

export default Hero;
