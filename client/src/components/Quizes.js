import Navbar from "./navbar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Quizes() {

    return (
        <div className="container">
            <Navbar></Navbar>
            <div className="h-screen w-screen flex flex-col justify-center items-center bg-white dark:bg-slate-800">
                <div className="container-sm text-wrap py-10"><h2 class=" text-3xl tracking-tight font-bold text-gray-900 dark:text-white">Pick a quiz, spark your curiosity, and let's quiz it up!</h2></div>
                <div className="grid grid-cols-4 gap-6">

                    {/* card1 */}
                    <div>
                        <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-blue-400 transition-all duration-300 group-hover:scale-[10]"></span>
                            <div className="relative z-10 mx-auto max-w-md">
                                <span className="grid h-20 w-20 place-items-center rounded-full bg-blue-400 transition-all duration-300 group-hover:bg-blue-300">
                                <FontAwesomeIcon icon="fa-solid fa-cat" size="2xl" style={{ color: "#ffffff", }}   />
                                </span>
                                <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                    <p>Animals</p>
                                </div>
                                <div className="pt-5 text-base font-semibold leading-7">
                                    <p>
                                        <a href="#" className="text-blue-400 transition-all duration-300 group-hover:text-white">Start &rarr;</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card2 */}
                    <div>
                        <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-orange-400 transition-all duration-300 group-hover:scale-[10]"></span>
                            <div className="relative z-10 mx-auto max-w-md">
                                <span className="grid h-20 w-20 place-items-center rounded-full bg-orange-400 transition-all duration-300 group-hover:bg-orange-300">
                                <FontAwesomeIcon icon="fa-solid fa-equals" size="2xl" style={{ color: "#ffffff", }}   />
                                </span>
                                <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                    <p>Math</p>
                                </div>
                                <div className="pt-5 text-base font-semibold leading-7">
                                    <p>
                                        <a href="#" className="text-orange-400 transition-all duration-300 group-hover:text-white">Start &rarr;</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card3 */}
                    <div>
                        <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-green-400 transition-all duration-300 group-hover:scale-[10]"></span>
                            <div className="relative z-10 mx-auto max-w-md">
                                <span className="grid h-20 w-20 place-items-center rounded-full bg-green-400 transition-all duration-300 group-hover:bg-green-300">
                                <FontAwesomeIcon icon="fa-solid fa-arrow-up-a-z" size="2xl" style={{ color: "#ffffff", }}   />
                                </span>
                                <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                    <p>Alphabet</p>
                                </div>
                                <div className="pt-5 text-base font-semibold leading-7">
                                    <p>
                                        <a href="#" className="text-green-400 transition-all duration-300 group-hover:text-white">Start &rarr;</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card4 */}
                    <div>
                        <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-purple-400 transition-all duration-300 group-hover:scale-[10]"></span>
                            <div className="relative z-10 mx-auto max-w-md">
                                <span className="grid h-20 w-20 place-items-center rounded-full bg-purple-400 transition-all duration-300 group-hover:bg-purple-300">
                                <FontAwesomeIcon icon="fa-solid fa-shapes" size="2xl" style={{ color: "#ffffff", }}   />
                                </span>
                                <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                    <p>Shapes</p>
                                </div>
                                <div className="pt-5 text-base font-semibold leading-7">
                                    <p>
                                        <a href="#" className="text-purple-400 transition-all duration-300 group-hover:text-white">Start &rarr;</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}