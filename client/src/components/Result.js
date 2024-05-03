import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { attempts_Number, earnPoints_Number, flagResult } from '../helper/helper';

import { resetAllAction } from '../redux/question_reducer';
import { resetResultAction } from '../redux/result_reducer';
import { usePublishResult } from '../hooks/setResult';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Result() {

    const dispatch = useDispatch()
    const {questions: { queue ,answers}, result : { result, userId}}  = useSelector(state => state)
    useEffect(()=>{
        console.log(earnPoints);
    })

    const totalPoints = queue.length * 10; 
    const attempts = attempts_Number(result);
    const earnPoints = earnPoints_Number(result, answers, 10)
    const flag = flagResult(totalPoints, earnPoints)
    
    function onRestart(){
        dispatch(resetAllAction())
        dispatch(resetResultAction())
    }

    

    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center bg-white dark:bg-slate-800'>
            <h1 className='text-4xl font-bold text-center text-slate-50 mb-10'>Quiz Application</h1>

            <div className='result-container bg-gray-100 dark:bg-slate-700 p-8 rounded-lg shadow-md'>
                <h2 className='result-title text-2xl font-bold mb-6 text-center text-slate-50 '>Quiz Results</h2>
                <div className='result-details grid grid-cols-2 gap-4'>
                    <div className="col-start-1 flex justify-self-start">
                        <div className='label text-gray-600 dark:text-gray-300'>Username:</div>
                    </div>
                    <div className="col-start-2 flex justify-self-end">
                        <div className='value bold text-gray-800 dark:text-gray-100'>{userId || ""}</div>
                    </div>

                    <div className="col-start-1 flex justify-self-start">
                        <div className='label text-gray-600 dark:text-gray-300'>Total Quiz Points:</div>
                    </div>
                    <div className="col-start-2 flex justify-self-end">
                        <div className='value bold text-gray-800 dark:text-gray-100'>{totalPoints || 0}</div>
                    </div>

                    <div className="col-start-1 flex justify-self-start">
                        <div className='label text-gray-600 dark:text-gray-300'>Total Questions:</div>
                    </div>
                    <div className="col-start-2 flex justify-self-end">
                        <div className='value bold text-gray-800 dark:text-gray-100'>{ queue.length || 0}</div>
                    </div>

                    <div className="col-start-1 flex justify-self-start">
                        <div className='label text-gray-600 dark:text-gray-300'>Total Attempts:</div>
                    </div>
                    <div className="col-start-2 flex justify-self-end">
                        <div className='value bold text-gray-800 dark:text-gray-100'>{attempts || 0}</div>
                    </div>

                    <div className="col-start-1 flex justify-self-start">
                        <div className='label text-gray-600 dark:text-gray-300'>Total Earned Points:</div>
                    </div>
                    <div className="col-start-2 flex justify-self-end">
                        <div className='value bold text-gray-800 dark:text-gray-100'>{earnPoints || 0}</div>
                    </div>

                    <div className="col-start-1 flex justify-self-start">
                        <div className='label text-gray-600 dark:text-gray-300'>Attempts:</div>
                    </div>
                    <div className="col-start-2 flex justify-self-end">
                        <div className='value bold text-gray-800 dark:text-gray-100'>0</div>
                    </div>


                    <div className="col-start-1 flex justify-self-start">
                        <div className='label text-gray-600 dark:text-gray-300'>Quiz Result:</div>
                    </div>
                    <div className="col-start-2 flex justify-self-end">
                        <div className='value text-gray-800 dark:text-gray-100'>{flag ? "Passed" : "Failed"}</div>
                    </div>
                </div>


                <div className="col-start-1 col-end-2 flex justify-center items-center">
                    <Link to={'/'}>
                        <button 
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold mt-2 py-2 px-4 rounded-full inline-flex items-center"
                        onClick={onRestart}>
                            <FontAwesomeIcon className="px-2" icon="fa-solid fa-rotate-right" size="sm" style={{ color: "#ffffff", }} />
                            <span> Restart </span>
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    )
}