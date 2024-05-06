import { useState } from 'react';

const Sidebar = () => {
    return (
        // <>
        //   <div classNameName="fixed top-0 right-0 z-50 flex items-center justify-center w-10 h-10 bg-slate-800 rounded-full cursor-pointer md:hidden"
        //     onClick={() => setShowSidebar(!showSidebar)}
        //   >
        //     {showSidebar? (
        //       <svg classNameName="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        //       </svg>
        //     ) : (
        //       <svg classNameName="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        //       </svg>
        //     )}
        //   </div>

        //   <div
        //     classNameName={`top-0 right-0 w-[35vw] p-5 bg-slate-800 p-10 pl-20 text-white fixed h-full z-40 ease-in-out duration-300 ${
        //       showSidebar? "translate-x-0 " : "translate-x-full"
        //     } md:w-64`}
        //   >
        //     <h3 classNameName="mt-20 text-2xl font-semibold text-white">I am a sidebar</h3>
        //     <ul classNameName="mt-10">
        //       <li classNameName="py-2">
        //         <a href="#" classNameName="text-white hover:text-gray-200">
        //           Dashboard
        //         </a>
        //       </li>
        //       <li classNameName="py-2">
        //         <a href="#" classNameName="text-white hover:text-gray-200">
        //           Settings
        //         </a>
        //       </li>
        //       <li classNameName="py-2">
        //         <a href="#" classNameName="text-white hover:text-gray-200">
        //           Profile
        //         </a>
        //       </li>
        //     </ul>
        //   </div>
        // </>
        <>
            <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
                <a href="#">
                    <h2 className="text-xl font-bold mb-0 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-green-500">ABCDEducation</h2>
                </a>

             

                <div className="flex flex-col justify-between flex-1 mt-6">
                    <nav>
                        <a className="flex items-center px-4 py-2 text-gray-50 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-white group-hover:bg-blue-300" href="#">


                            <span className="mx-4 font-medium ">Dashboard</span>
                        </a>

                        <div  className="flex items-center mt-2 px-4 py-2 text-gray-50 hover:bg-gray-100 rounded rounded-md hover:dark:bg-gray-800 dark:text-white"> 
                        <span className="mx-4 font-medium">Accounts</span>
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