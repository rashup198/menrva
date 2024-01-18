import React from 'react'
import { FaUserCheck } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
const Values = () => {
    const data =[
        {
            id:1,
            logo:<FaUserCheck />,
            titel:"CUSTOMER FIRST"
        },
        {
            id:2,
            logo:<FaHandshake />,
            titel:"INTEGRITY"
        },
        {
            id:3,
            logo:<FaLightbulb />,
            titel:"INNOVATION"
        }
        ,{
            id:4,
            logo:<FaStar />,
            titel:"EXCELLENCE"
        },{
            id:5,
            logo:<FaTrophy />,
            titel:"RESULTS DRIVEN"
        },{
            id:6,
            logo:<FaUsers />,
            titel:"DIVERSITY & INCLUSION"
        }
    ]
  return (
    <div>
      <div className="parrent flex flex-col gap-[30px] bg-[#eaeffa] justify-center items-center h-[400px]">

    <h1 className=' text-[30px] font-semibold text-center mb-[30px] underline underline-offset-8 text-[#5e17EB] decoration-[#5e17EB]'>
    OUR VALUES
    </h1>
    
        <div className="flex flex-row flex-wrap justify-evenly items-center w-[60vw] gap-x-[100px] gap-y-[40px]">
            {
                data.map((item)=>(
                    <div className="child flex flex-col justify-evenly items-center gap-[15px]">
                        <div className="logo bg-[#5e17EB] rounded-full p-3">
                           <p className=' text-4xl font-extrabold text-white'>{item.logo}</p> 
                        </div>
                        <h1 className=' text-[20px]'>{item.titel}</h1>
                    </div>
                ))
            }
        </div>
        </div>
    </div>
  )
}

export default Values
