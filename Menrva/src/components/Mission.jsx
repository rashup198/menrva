import React from 'react'
import mission from "../assets/vison.jpg";
import mission2 from "../assets/mission.jpg";

const Mission = () => {
  return (
    <div className=' bg-[#eaf4f7] flex flex-col'  >
      <div className="parent flex justify-between pl-[100px] pr-[100px] pt-[50px]">
        <div className=" w-[600px] ">
            <img src={mission} className=' rounded-md h-[400px]'></img>
        </div>
        <div className="right p-[100px] w-[710px] flex flex-col gap-[50px] ">
            <h1 className=' text-[30px] font-semibold text-[#5e17EB] underline  underline-offset-8 '>
                OUR VISION
            </h1>
            <p className=' text-[17px]'>
            Our vision is to empower organizations with artificial intelligence, enabling humans to live better and more productive life.
            </p>
        </div>
      </div>

      <div className="parent flex justify-between items-center pl-[100px] pr-[100px] pt-[10px]">
        <div className="right p-[100px] w-[710px] flex flex-col gap-[50px] ">
            <h1 className=' text-[30px] font-semibold text-[#5e17EB] underline  underline-offset-8 '>
                OUR MISSION
            </h1>
            <p className=' text-[17px] flex flex-col gap-[10px]'>
                <span className=' text-[19px]'>
                We have two key missions:
                </span> 
            <ul className=' list-decimal'>
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
        <div className=" w-[600px]">
            <img src={mission2} className=' rounded-md h-[400px]'></img>
        </div>
      </div>
    </div>
  )
}

export default Mission
