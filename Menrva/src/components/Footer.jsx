import React from 'react';
import logo from '../assets/Logo.webp';
import { FaInstagram, FaLinkedin, FaPhone } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';
import { FaXTwitter } from 'react-icons/fa6';
import uae from "../assets/uae.webp";
import india from "../assets/india.webp";

const Footer = () => {
  return (
    <div className='bg-[#ffffff] mt-3 md:mt-0 pb-3'>
      <div className='flex flex-col md:flex-row justify-between md:items-center pl-4 md:pl-3 pr-4 md:pr-3 w-full md:w-[90%] mx-auto'>
        <div className='flex flex-col items-center md:justify-center md:items-start md:gap-4  md:flex-col'>
          <div className='logo'>
            <img src={logo} className='h-[110px] w-[240px] md:h-full md:ml-0' alt='Logo' />
          </div>
          <a href='mailto:contact@menrvatechnologies.com' target='_blank' rel='noopener noreferrer' className='flex items-center gap-2 text-[14px] md:ml-0'>
            <span className='text-[#5e17EB] text-[24px]'>
              <IoIosMail />
            </span>
            contact@menrvatechnologies.com
          </a>
          <div className='social text-[24px] md:ml-0 flex gap-8 mt-2 md:mt-0 mb-3 md:mb-0'>
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
        <div className="max-w-full md:max-w-[430px] flex flex-col gap-2 md:ml-8">
          <h1 className='text-[20px] font-semibold text-[#5e17EB]'>
            Quick Links
          </h1>
          <div className="flex flex-col gap-2">
            <a href='/' className='hover:text-[#5e17EB]'>
              Home
            </a>
            <a href='/about-us' className='hover:text-[#5e17EB]'>
              About Us
            </a>
            <a href='/contact-us' className='hover:text-[#5e17EB]'>
              Contact Us
            </a>
          </div>
        </div>
        <div className='max-w-full md:max-w-[430px] flex flex-col gap-2 md:ml-8'>
          <h1 className='text-[20px] font-semibold text-[#5e17EB]'>Contact Us</h1>
          <a href='/' target='_blank' rel='noopener noreferrer' className='flex items-center gap-2'>
            <span className=''>
              <img src={uae} className='h-[20px]'></img>
            </span>
            UAE Office: IFZA Business Park, Dubai Silicon Oasis, Dubai
          </a>
          <a href='/' target='_blank' rel='noopener noreferrer' className='flex items-center gap-2'>
            <span className=''>
              <img src={india} className='h-[20px]'></img>
            </span>
            India Office: WeWork Pavilion, Church Street, Bangalore, Karnataka
          </a>
        </div>
      </div>
      <div className="bg-[#ebebeb] pt-3 pb-3 text-center">
        <p className='text-[14px]'>© 2023 Menrva Technologies. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
