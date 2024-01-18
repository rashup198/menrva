import React from 'react'
import about from "../assets/about.jpg"
import founder from "../assets/founder.jpg"
import Values from './Values'
import Footer from './Footer'

const About = () => {
  return (
    <div>
      <div className=' bg-[#ffffff] flex flex-col'  >
      <div className=''>
      <div className=''>
        <img
          src={about}
          className='h-[60vh]   w-full brightness-[0.30] object-cover'
          alt="About"
        />
        <h1 className='z-[000] text-[100px] font-bold brightness-[0.7] absolute top-[80px] left-[35%]  text-white'>About Us</h1>
        <p className='z-[000] text-[20px] font-bold brightness-[0.7] absolute top-[250px] left-[12%] w-[80vw] mx-auto text-white text-center'>Menrva Technologies was founded with the mission of democratising AI for global organizations by making it easy-to-use and impactful. Our team comes with the best educational pedigree and rich industry experiences. </p>
      </div>
        </div>

      <div className="parent flex justify-between items-center pl-[100px] pr-[100px] pt-[10px]">
        <div className="right p-[100px] w-[710px] flex flex-col gap-[50px] bg-white ">
            <h1 className=' text-[30px] font-semibold text-[#5e17EB] underline  underline-offset-8 '>
            OUR FOUNDER
            </h1>
            <p className=' text-[17px] flex flex-col gap-[10px]'>
            <ul className=' list-none flex flex-col gap-4'>
                <li>
                Dr. Angshuman Ghosh is the Founder and CEO of Menrva Technologies. He is a Data Science, AI, and Business leader with 15+ years of rich leadership experiences in top Fortune 100 and Unicorn Startup companies such as Disney, Sony, Target, Grab, and Wipro. He has given 100+ lectures at top global institutes and 20+ talks at international conferences. 
                </li>
                <li>
                Dr. Angshu is the winner multiple prestigious awards including ‘Top 10 AI Leaders in India’, ‘40 under 40 Global Innovator’, and ‘LinkedIn Spotlight Award’. He has 500k+ followers across the social media platforms and his posts on Data Science, AI, and Technology have been read by 200Mn+ people worldwide.
                </li>
            </ul>
            </p>
        </div>
        <div className=" w-[600px]">
            <img src={founder} className=' rounded-md h-[400px]'></img>
        </div>
      </div>
    </div>
    <Values></Values>
    <Footer></Footer>
    </div>
  )
}

export default About
