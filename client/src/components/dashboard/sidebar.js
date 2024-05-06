import { useState } from 'react';

const Sidebar = () => {
    return (
        <>
            <aside className=" flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
                <a href="#">
                    <h2 className="text-xl font-bold mb-0 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-green-500">ABCDEducation</h2>
                </a>

             

                <div className="flex flex-col justify-between flex-1 mt-6">
                    <nav>
                        <a className="flex items-center px-4 py-2 text-gray-50 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-white group-hover:bg-blue-300" href="#">


                            <span className="mx-4 font-medium ">Dashboard</span>
                        </a>

                        <div  className="flex items-center mt-2 px-4 py-2 text-gray-50 hover:bg-gray-100 rounded rounded-md hover:dark:bg-gray-800 dark:text-white"> 
                        <span className="mx-4 font-medium">Quizes</span>
                        </div>

                        <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors hover:text-green-200 duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">

                            <span className="mx-4 font-medium">Tickets</span>
                        </a>

                        <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">

                            <span className="mx-4 font-medium">Settings</span>
                        </a>

                        <hr className="my-6 border-gray-200 dark:border-gray-600" />

                        <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">


                            <span className="mx-4 font-medium">Tickets</span>
                        </a>

                        <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">

                            <span className="mx-4 font-medium">Settings</span>
                        </a>
                    </nav>

                    <a href="#" className="flex items-center px-4 -mx-2">

                    </a>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;