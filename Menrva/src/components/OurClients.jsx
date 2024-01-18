import React from 'react';
import img1 from '../assets/logo1.png';
import img2 from '../assets/logo2.png';
import img3 from '../assets/logo3.png';
import img4 from '../assets/logo4.png';

const OurClients = () => {
  return (
    <div className="parent flex flex-col justify-center items-center mb-[30px]">
      <h1 className=" text-[30px] font-semibold text-center md:mt-[30px] md:mb-[40px] underline underline-offset-8 text-[#5e17EB] decoration-[#5e17EB]">
        Trusted By The India's Leading Companies
      </h1>
      <div className="childParent flex flex-row justify-center items-center flex-wrap gap-[20px] md:flex-row md:gap-[100px]">
        <img src={img1} className="child w-[100px] md:w-[150px] lg:w-[200px]" alt="Hospital 1" />
        <img src={img3} className="child w-[120px] md:w-[200px] lg:w-[200px]" alt="Hospital 3" />
        <img src={img2} className="child w-[150px] md:w-[250px] lg:w-[300px]" alt="Hospital 2" />
        <img src={img4} className="child w-[150px] md:w-[250px] lg:w-[200px]" alt="Hospital 4" />
      </div>
    </div>
  );
};

export default OurClients;
