import React from 'react'
import { BsLinkedin } from "react-icons/bs";

const TeamCard = (props) => {
  return (
    <div>
      <div className='card  flex flex-col justify-center w-full items-center rounded-2xl'>
            <img src={props.image} className='h-[35vh] object-cover w-[200px] rounded-full border-2 border-[#5e17EB]'></img>

            <div className='flex items-center gap-3 mt-[10px]'>
            <h1 className='font-semibold text-2xl text-[#5e17EB]'>{props.name}</h1>
            <a href="/"target='blank'><BsLinkedin className='text-blue-600 text-xl cursor-pointer'></BsLinkedin></a>
            </div>
        </div>
    </div>
  )
}

export default TeamCard
