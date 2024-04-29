import React from "react";
import splashImage from "../assets/splash.png";

export default function Main() {
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center bg-white dark:bg-slate-800">
            <h1 className="text-8xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Welcome to</h1>
            <h2 className="text-5xl font-bold mb-0 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-green-500">ABCDEducation</h2>

            <img className="h-auto max-w-sm rounded-full" src={splashImage} alt="SplashImage" />
            <h1 className="text-3xl font-bold mb-4 text-white">Enter Your Name</h1>
            <form className="w-full max-w-md">
                <input type="text" className="rounded w-full p-3 pl-10 text-sm text-gray-700 text-lg " placeholder="Enter your name" />
            </form>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold mt-2 py-2 px-4 rounded text-xl">Continue</button>
        </div>
    )
}