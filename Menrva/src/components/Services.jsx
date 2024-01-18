import React from 'react'
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
  const data =[
    {
        id:1,
        logo:<TiTick />,
        titel:"RECOMMENDATION SYSTEM",
    },{
        id:2,
        logo:<FaCircleUser />,
        titel:"CUSTOMER LIFECYCLE MANAGEMENT",
    },
    {
        id:3,
        logo:<AiTwotoneMessage />,
        titel:"NATURAL LANGUAGE PROCESSING",
    },
    {
      id:4,
      logo:<BsGraphUpArrow />,
      titel:"FORECASTING"
    },{
      id:5,
      logo:<FaTruckMoving />,
      titel:"SUPPLY CHAIN ANALYTICS"
    },
    {
      id:6,
      logo:<FaRobot />,
      titel:"GENERATIVE AI"
    }
]

const data1 =[
  {
      id:1,
      logo:<FaDollarSign />,
      titel:"$12+ MN",
      desc:"Business Impact"

  },
  {
    id:2,
    logo:<PiStudentBold />,
    titel:"20+",
    desc:"Domain Experts"
  },{
    id:3,
    logo:<FaGlobe />,
    titel:"10+",
    desc:"Global Clients"
  },
  {
    id:4,
    logo:<FaRegCalendarCheck />,
    titel:"30+",
    desc:"Projects Completed"
  }
]
return (
<div>
  <div className="parrent flex flex-col gap-[50px] bg-[#eaeffa]">
    <h1 className=' text-[30px] font-semibold text-center mt-[30px] mb-[30px] underline underline-offset-8 text-[#5e17EB] decoration-[#5e17EB]'>
    OUR EXPERTISE
    </h1>
    
        <div className="flex flex-row flex-wrap justify-evenly items-center w-[80vw] mx-auto gap-[80px] ">
            {
                data.map((item)=>(
                    <div className="child flex flex-col justify-center items-center gap-[15px]">
                        <div className="logo bg-[#5e17EB] rounded-full p-3">
                           <p className=' text-4xl font-extrabold text-white'>{item.logo}</p> 
                        </div>
                        <h1 className=' text-[20px]'>{item.titel}</h1>
                    </div>
                ))
            }
        </div>

          <div className="bg-[#5e17EB] pt-[30px] pb-[30px]">
            <div className=" flex flex-wrap w-[80vw] justify-evenly  mx-auto">
            {
              data1.map((item)=>(
                <div className="flex flex-col justify-center items-center gap-[15px]">
                  <div className="logo bg-white rounded-md p-5">
                     <p className=' text-5xl font-extrabold text-[#5e17EB]'>{item.logo}</p> 
                  </div>
                  <h1 className=' text-[30px] font-bold text-white'>{item.titel}</h1>
                  <p className=' text-[20px] text-white'>{item.desc}</p>
              </div>
              ))
            }  
            </div>
          </div>    
  </div>
</div>
)
}

export default Services
