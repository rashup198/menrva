import React from 'react';

const OurExp = () => {
  const data = [
    { id: 1, photo: "https://menrvatechnologies.com/wp-content/uploads/2023/07/Google.png" },
    { id: 2, photo: "https://menrvatechnologies.com/wp-content/uploads/2023/07/Google.png" },
    { id: 3, photo: "https://menrvatechnologies.com/wp-content/uploads/2023/07/Google.png" },
    { id: 4, photo: "https://menrvatechnologies.com/wp-content/uploads/2023/07/Google.png" },
    { id: 5, photo: "https://menrvatechnologies.com/wp-content/uploads/2023/07/Google.png" },
    { id: 6, photo: "https://menrvatechnologies.com/wp-content/uploads/2023/07/Amazon.png" },
    { id: 7, photo: "https://menrvatechnologies.com/wp-content/uploads/2023/07/Amazon.png" },
    { id: 8, photo: "https://menrvatechnologies.com/wp-content/uploads/2023/07/Amazon.png" },
    { id: 9, photo: "https://menrvatechnologies.com/wp-content/uploads/2023/07/Amazon.png" },
    { id: 10, photo: "https://menrvatechnologies.com/wp-content/uploads/2023/07/Amazon.png" },
    { id: 11, photo: "https://menrvatechnologies.com/wp-content/uploads/2023/07/Intel.png" },
    { id: 12, photo: "https://menrvatechnologies.com/wp-content/uploads/2023/07/Intel.png" },
    { id: 13, photo: "https://menrvatechnologies.com/wp-content/uploads/2023/07/Intel.png" },
    { id: 14, photo: "https://menrvatechnologies.com/wp-content/uploads/2023/07/Intel.png" },
    { id: 15, photo: "https://menrvatechnologies.com/wp-content/uploads/2023/07/Intel.png" },
  ];

  return (
    <div className="parent">
      <div className="w-full mx-auto mt-10 text-center">
        <h1 className='text-3xl md:text-4xl underline underline-offset-8 text-[#5e17EB] decoration-[#5e17EB] font-semibold'>OUR TEAM-EXPERIENCE</h1>
        <p className='font-semibold mt-8 mb-12'>Our team comes with rich experience in top global companies</p>
      </div>
      <div className="child flex w-[90vw] justify-center mx-auto flex-wrap gap-3">
        {data.map((item) => (
          <div key={item.id} className="card mt-[-50px]">
            <img src={item.photo} className='h-[200px] md:h-48 lg:h-56 w-[100px] md:w-48 lg:w-56 object-contain' alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurExp;
