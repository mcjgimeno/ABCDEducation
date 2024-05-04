import React from 'react';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const { result : {userId}}  = useSelector(state => state)
  return (
    <nav className="w-screen bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ABCDEducation</span>
        </a>
       
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
           <h3 className='font-bold block py-2 px-3 text-gray-900 rounded  m md:p-0 dark:text-white dark:border-gray-700'>Welcome back, {userId}!</h3>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;