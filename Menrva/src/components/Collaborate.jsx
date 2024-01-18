import React from 'react';
import contact from '../assets/contact.jpg';
import { Link } from 'react-router-dom';

const Collaborate = () => {
  return (
    <div className='bg-[#5e17EB] flex flex-col md:flex-row justify-between items-center h-[310px] md:h-[300px] mt-[30px] md:pl-[200px] md:pr-[150px] p-5'>
      <div className='text-white text-center md:text-left md:w-[50%]'>
        <h1 className='font-bold text-2xl md:text-4xl lg:text-5xl mb-4 md:mb-6 lg:mb-8'>
          Want To Collaborate?
        </h1>
        <Link to='/contact-us'>
          <button className='bg-orange-500 p-3 md:p-4 lg:p-5 rounded-md'>
            Let's Talk
          </button>
        </Link>
      </div>
      <div className='mt-[15px] md:mt-0 md:w-[30%]'>
        <img src={contact} className='border-[7px] border-orange-500 rounded-full h-[170px] roumd md:h-[210px] w-[20vw] object-fit' alt='Contact'></img>
      </div>
    </div>
  );
};

export default Collaborate;
