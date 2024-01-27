import React from 'react';
import { TiTick } from "react-icons/ti";
import { FaCircleUser } from "react-icons/fa6";
import { AiTwotoneMessage } from "react-icons/ai";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaTruckMoving } from "react-icons/fa";
import { FaRobot } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { FaGlobe } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";

const Services = () => {
  const data = [
    {
      id: 1,
      logo: <TiTick />,
      title: "RECOMMENDATION SYSTEM",
    },
    {
      id: 2,
      logo: <FaCircleUser />,
      title: "CUSTOMER LIFECYCLE MANAGEMENT",
    },
    {
      id: 3,
      logo: <AiTwotoneMessage />,
      title: "NATURAL LANGUAGE PROCESSING",
    },
    {
      id: 4,
      logo: <BsGraphUpArrow />,
      title: "FORECASTING"
    },
    {
      id: 5,
      logo: <FaTruckMoving />,
      title: "SUPPLY CHAIN ANALYTICS"
    },
    {
      id: 6,
      logo: <FaRobot />,
      title: "GENERATIVE AI"
    }
  ];

  const data1 = [
    {
      id: 1,
      logo: <FaDollarSign />,
      title: "$12+ MN",
      desc: "Business Impact"
    },
    {
      id: 2,
      logo: <PiStudentBold />,
      title: "20+",
      desc: "Domain Experts"
    },
    {
      id: 3,
      logo: <FaGlobe />,
      title: "10+",
      desc: "Global Clients"
    },
    {
      id: 4,
      logo: <FaRegCalendarCheck />,
      title: "30+",
      desc: "Projects Completed"
    }
  ];

  return (
    <div>
      <div className="parrent flex flex-col gap-10 md:gap-16 bg-[#eaeffa]">
        <h1 className='text-3xl md:text-4xl font-semibold text-center mt-5 mb-5 md:mt-10 md:mb-10 underline underline-offset-8 text-[#5e17EB] decoration-[#5e17EB]'>
          OUR EXPERTISE
        </h1>

        <div className="flex flex-row flex-wrap justify-evenly items-center w-[80vw] mx-auto gap-[80px] ">
            {
                data.map((item)=>(
                    <div className="child flex flex-col justify-center items-center gap-[15px]">
                        <div className="logo bg-[#5e17EB] rounded-full p-3">
                           <p className=' text-4xl font-extrabold text-white'>{item.logo}</p> 
                        </div>
                        <h1 className=' text-[10px] md:text-[20px]'>{item.title}</h1>
                    </div>
                ))
            }
        </div>

        <div className="bg-[#5e17EB] pt-10 pb-10">
          <div className="flex flex-wrap w-[80vw] justify-evenly mx-auto">
            {data1.map((item) => (
              <div key={item.id} className="flex flex-col justify-center items-center gap-4 md:gap-2">
                <div className="logo bg-white rounded-md p-5">
                  <p className='text-5xl font-extrabold text-[#5e17EB]'>{item.logo}</p>
                </div>
                <h1 className='text-3xl font-bold text-white'>{item.title}</h1>
                <p className='text-xl text-white mb-[20px]'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
