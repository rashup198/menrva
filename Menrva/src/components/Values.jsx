import React from 'react';
import { FaUserCheck, FaHandshake, FaLightbulb, FaStar, FaTrophy, FaUsers } from "react-icons/fa";

const Values = () => {
  const data = [
    {
      id: 1,
      logo: <FaUserCheck />,
      title: "CUSTOMER FIRST"
    },
    {
      id: 2,
      logo: <FaHandshake />,
      title: "INTEGRITY"
    },
    {
      id: 3,
      logo: <FaLightbulb />,
      title: "INNOVATION"
    },
    {
      id: 4,
      logo: <FaStar />,
      title: "EXCELLENCE"
    },
    {
      id: 5,
      logo: <FaTrophy />,
      title: "RESULTS DRIVEN"
    },
    {
      id: 6,
      logo: <FaUsers />,
      title: "DIVERSITY & INCLUSION"
    }
  ];

  return (
    <div>
      <div className="parent flex flex-col gap-8 md:gap-12 bg-[#eaeffa] justify-center items-center py-16">

        <h1 className='text-3xl md:text-4xl font-semibold text-center mb-8 md:mb-12 underline underline-offset-8 text-[#5e17EB] decoration-[#5e17EB]'>
          OUR VALUES
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-8 md:w-[70vw] mx-auto md:gap-16">
          {data.map((item) => (
            <div key={item.id} className="child flex flex-col justify-center items-center gap-4">
              <div className="logo bg-[#5e17EB] rounded-full p-4">
                <p className='text-2xl md:text-4xl font-extrabold text-white'>{item.logo}</p>
              </div>
              <h1 className='text-xl md:text-2xl'>{item.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Values;
