
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Questions from './Questions';
import { useSelector } from 'react-redux';  
import { useEffect } from 'react';
export default function Quiz() {



    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center bg-white dark:bg-slate-800">
            <div className="grid grid-cols-3 gap-5 justify-content-center">
                <div className="col-start-1 flex justify-self-end">
                    <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold mt-2 py-2 px-5 rounded-full text-xl" >
                        <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
                    </button>
                </div>
                <div className="col-start-3 flex justify-self-start">
                    <button className=" bg-orange-500 hover:bg-orange-700 text-white font-bold mt-2 py-2 px-5 rounded-full text-xl">
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                    </button>
                </div>
                <div className="col-start-2 col-end-2 flex justify-center">
                    <Questions></Questions>
                </div>
            </div>
        </div>

    )
}