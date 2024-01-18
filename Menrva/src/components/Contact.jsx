import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';

const Contact = () => {
  // form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [organisation, setOrganisation] = useState('');

  // form submit
  const handelSubmit = (e) => {
    e.preventDefault();
    const data = {
      Name: name,
      Email: email,
      Contact: contact,
      Organisation: organisation,
      Message: message,
    };

    axios.post("https://sheet.best/api/sheets/4a3017b6-cf1c-4cf1-a542-9afd265e8aec", data)
      .then((response) => {
        console.log(response);
        toast.success("Form submitted successfully!");
        setName('');
        setEmail('');
        setContact('');
        setOrganisation('');
        setMessage('');
      })
      .catch((error) => {
        console.error(error);
        toast.error("Error submitting the form. Please try again later.");
      });
  };

  return (
    <div className="">
    <div className="min-h-screen flex items-center justify-center  mb-[50px]">
      <div className="bg-[rgb(233,232,232)] p-8 rounded-md shadow-md w-full md:w-2/3 lg:w-1/2 xl:w-1/2">
        <h1 className="text-4xl text-center   mb-[30px] text-[#5e17EB] underline underline-offset-8 decoration-[#5e17EB]">CONTACT US</h1>
        <p className='text-xl text-center   mb-[30px] text-[#000000] '>Please fill the form below and we will get back to you as soon as possible.</p>
        <form onSubmit={handelSubmit}>
          <div className=" flex gap-5 w-full">
            <div className="mb-4 w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2">Name*</label>
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full border rounded-md py-2 px-3"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="mb-4 w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email*</label>
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full border rounded-md py-2 px-3"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
          </div>

          <div className=" flex gap-5 w-full">
            <div className="mb-4 w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2">Contact Number*</label>
              <input
                type="text"
                placeholder="Contact Number"
                required
                className="w-full border rounded-md py-2 px-3"
                onChange={(e) => setContact(e.target.value)}
                value={contact}
              />
            </div>
            <div className="mb-4 w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2">Name of Organisation*</label>
              <input
                type="text"
                placeholder="e.g. Google, Microsoft, etc."
                required
                className="w-full border rounded-md py-2 px-3"
                onChange={(e) => setOrganisation(e.target.value)}
                value={organisation}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Message*</label>
            <textarea
              type="text"
              placeholder=""
              required
              className="w-full border rounded-md py-2 px-3 h-[90px]"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>
          <div className='flex justify-center items-center'>
            <button
              type="submit"
              className="bg-orange-500 text-white py-2 px-8 text-lg rounded-md hover:bg-orange-600"
            >
              Submit
            </button>
          </div>
        </form>
        <ToastContainer
          position="top-center"
        />
      </div>
      
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Contact;
