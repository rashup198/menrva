import React from 'react';
import logo from '../assets/Logo.webp';
import { FaInstagram, FaLinkedin, FaPhone } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';
import { FaXTwitter } from 'react-icons/fa6';
import uae from "../assets/uae.webp"
import india from "../assets/india.webp"

const Footer = () => {
  return (
    <div className='bg-[#ffffff] mt-[20px] pb-3'>
      <div className='flex flex-col md:flex-row justify-between md:justify-between md:items-center pl-[20px] pr-[20px] w-[80vw] md:mx-auto'>
        <div className='flex flex-col items-center md:justify-center md:items-center md:gap-4  md:flex-col'>
          <div className='logo'>
            <img src={logo} className='h-[110px] w-[240px] md:h-full md:ml-[-20px]' alt='Logo' />
          </div>
          <a href='mailto:contact@menrvatechnologies.com' target='_blank' rel='noopener noreferrer' className='flex items-center gap-3 md:ml-[50px] text-[17px]'>
            <span className='text-[#5e17EB] text-[30px]'>
              <IoIosMail />
            </span>
            contact@menrvatechnologies.com
          </a>
          <div className='social text-[30px] md:ml-[-80px] flex gap-10 mt-4 md:mt-0 mb-[20px]'>
            <a href='https://www.linkedin.com/company/menrvatech/' target='_blank' rel='noopener noreferrer' className='text-[#0A66C2]'>
              <FaLinkedin />
            </a>
            <a href='https://twitter.com/menrvatech' target='_blank' rel='noopener noreferrer'>
              <FaXTwitter />
            </a>
            <a href='https://www.instagram.com/menrvatech/' target='_blank' rel='noopener noreferrer' className='text-[#d6388f]'>
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="max-w-full md:max-w-[430px] flex flex-col gap-4 md:ml-12">
          <h1 className=' text-[25px] font-semibold text-[#5e17EB]'>
            Quick Links
          </h1>
          <div className="flex flex-col gap-4">
            <a href='/' className=' hover:text-[#5e17EB]'>
              Home
            </a>
            <a href='/about-us' className=' hover:text-[#5e17EB]'>
              About Us
            </a>
            <a href='/contact-us' className=' hover:text-[#5e17EB]'>
              Contact Us
            </a>
            
            </div>
        </div>
        <div className='max-w-full md:max-w-[430px] flex flex-col gap-4 md:ml-12'>
          <h1 className='text-[25px] font-semibold text-[#5e17EB]'>Contact Us</h1>
          <a href='/' target='_blank' rel='noopener noreferrer' className='flex items-center gap-3'>
            <span className=''>
              <img src={uae} className=' h-[30px]'></img>
            </span>
            UAE Office: IFZA Business Park, Dubai Silicon Oasis, Dubai
          </a>
          <a href='/' target='_blank' rel='noopener noreferrer' className='flex items-center gap-3'>
            <span className=''>
              <img src={india} className=' h-[30px]'></img>
            </span>
            India Office: WeWork Pavilion, Church Street, Bangalore, Karnataka
          </a>
          
        </div>
      </div>
      <div className=" bg-[#ebebeb] pt-3 pb-3 text-center">
      <p className='text-center'>© 2023 Menrva Technologies. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
