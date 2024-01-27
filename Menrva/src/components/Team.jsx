import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TeamCard from './TeamCard';

const Team = () => {
  const isMobileOrTablet = window.innerWidth <= 1024;

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const dataTeam =[
    {
        id:1,
        photo:"https://menrvatechnologies.com/wp-content/uploads/2023/07/Anchal-300x300.webp",
        name:"Anchal"
    },{
        id:2,
        photo:"https://menrvatechnologies.com/wp-content/uploads/2023/07/Antriksh-300x300.webp",
        name:"Antriksh"
    },{
        id:3,
        photo:"https://menrvatechnologies.com/wp-content/uploads/2023/07/Ayush-300x300.webp",
        name:"Ayush"
    },{
        id:4,
        photo:"https://menrvatechnologies.com/wp-content/uploads/2023/07/Avinash-300x300.webp",
        name:"Avinas"
    },{
        id:5,
        photo:"https://menrvatechnologies.com/wp-content/uploads/2023/07/Sajid-300x300.webp",
        name:"Sajid"
    },
    {
        id:6,
        photo:"https://menrvatechnologies.com/wp-content/uploads/2023/07/Anchal-300x300.webp",
        name:"Anchal"
    },{
        id:7,
        photo:"https://menrvatechnologies.com/wp-content/uploads/2023/07/Antriksh-300x300.webp",
        name:"Antriksh"
    },{
        id:8,
        photo:"https://menrvatechnologies.com/wp-content/uploads/2023/07/Ayush-300x300.webp",
        name:"Ayush"
    },{
        id:9,
        photo:"https://menrvatechnologies.com/wp-content/uploads/2023/07/Avinash-300x300.webp",
        name:"Avinas"
    },{
        id:10,
        photo:"https://menrvatechnologies.com/wp-content/uploads/2023/07/Sajid-300x300.webp",
        name:"Sajid"
    },
    {
        id:11,
        photo:"https://menrvatechnologies.com/wp-content/uploads/2023/07/Anchal-300x300.webp",
        name:"Anchal"
    },{
        id:12,
        photo:"https://menrvatechnologies.com/wp-content/uploads/2023/07/Antriksh-300x300.webp",
        name:"Antriksh"
    },{
        id:13,
        photo:"https://menrvatechnologies.com/wp-content/uploads/2023/07/Ayush-300x300.webp",
        name:"Ayush"
    },{
        id:14,
        photo:"https://menrvatechnologies.com/wp-content/uploads/2023/07/Avinash-300x300.webp",
        name:"Avinas"
    },{
        id:15,
        photo:"https://menrvatechnologies.com/wp-content/uploads/2023/07/Sajid-300x300.webp",
        name:"Sajid"
    }
]

  const data = dataTeam.map((item) => (
    <TeamCard
      key={item.id}
      image={item.photo}
      name={item.name}
    />
  ));

  return (
    <div className='bg-[#eaeffa] pb-[30px] '>
      <div className='w-[70vw] mx-auto mt-[30px]'>
        <h1 className='text-center text-[30px] underline underline-offset-8 text-[#5e17EB] decoration-[#5e17EB] font-semibold'>
          OUR TEAM – MEMBERS
        </h1>
        <p className='text-center font-semibold mt-[50px] mb-[50px]'>Meet some of our key team members below.</p>
      </div>

      {isMobileOrTablet ? (
        <div className=''>
          <Carousel responsive={responsive}>{data}</Carousel>
        </div>
      ) : (
        <div className='rounded-xl mx-auto md:w-[90vw] flex flex-row justify-center items-center flex-wrap gap-[80px]'>
          {window.innerWidth > 768 && (
            <div className='flex flex-row justify-center items-center flex-wrap gap-[30px] gap-y-[50px]'>{data}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Team;
