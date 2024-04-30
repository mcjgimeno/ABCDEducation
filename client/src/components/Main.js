import React, { useRef } from "react";
import {Link} from 'react-router-dom';
import splashImage from "../assets/splash.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Main() {
    const inputRef = useRef(null);
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center bg-white dark:bg-slate-800">

            <h1 className="text-8xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Welcome to</h1>
            <h2 className="text-5xl font-bold mb-0 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-green-500">ABCDEducation</h2>
            <img className="h-auto max-w-sm rounded-full" src={splashImage} alt="SplashImage" />
            <h1 className="text-3xl font-bold mb-4 text-white">Enter Your Name</h1>
            <form className="w-full max-w-md">
                <div className="relative">
                    <input  ref= {inputRef} type="text" className="rounded w-full p-3 pl-10 text-sm text-gray-700 text-lg " placeholder="Enter Your Name" />
                    <div class="absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none">
                        <FontAwesomeIcon icon="fa-solid fa-child-reaching" size="lg" />
                    </div>
                </div>
            </form>
            
            <Link to={'quiz'}>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold mt-2 py-2 px-5 rounded-full text-xl">Continue</button>    
            </Link>
            
            
            <button className="bg-red-700 hover:bg-red-500 text-white font-bold mt-2 py-2 px-4 rounded-full inline-flex items-center">
                <FontAwesomeIcon className="px-2" icon="fa-brands fa-google" size="sm" style={{ color: "#ffffff", }} />
                <span> Sign in With Google</span>
            </button>
        </div>
    )
}