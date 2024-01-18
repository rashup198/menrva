import React from 'react'
import logo from "../assets/Logo.webp"
import { ImPower } from "react-icons/im";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { SlLike } from "react-icons/sl";



const Special = () => {
    const data =[
        {
            id:1,
            logo:<ImPower />,
            titel:"AI-ML POWERED",
            desc:"Our offerings are powered by latest innovations in the areas of AI and Machine Learning."
        },{
            id:2,
            logo:<LiaLaptopCodeSolid />,
            titel:"LATEST TECHNOLOGIES",
            desc:"Our team of experts use the latest tools and technologies to create innovative solutions for our clients."
        },
        {
            id:3,
            logo:<SlLike></SlLike>,
            titel:"BUSINESS IMPACT",
            desc:"We put highest priority on the impact of our solutions and success of our clients is our final goal."
        }
    ]
  return (
    <div>
      <div className="parrent flex flex-col gap-[50px] mb-[30px]">
        <h1 className=' text-[30px] font-semibold text-center mt-[30px] mb-[30px] underline underline-offset-8 text-[#5e17EB] decoration-[#5e17EB]'>
        WHAT MAKES US SPECIAL
        </h1>
        
            <div className="flex flex-row justify-center items-center w-[75vw] mx-auto gap-[120px] ">
                {
                    data.map((item)=>(
                        <div className="child flex flex-col justify-center items-center gap-[15px]">
                            <div className="logo bg-[#5e17EB] rounded-full p-5">
                               <p className=' text-4xl font-extrabold text-white'>{item.logo}</p> 
                            </div>
                            <h1 className=' text-[20px] font-semibold'>{item.titel}</h1>
                            <p className=' text-center text-[17px]'>{item.desc}</p>
                        </div>
                    ))
                }
            </div>
        
      </div>
    </div>
  )
}

export default Special
