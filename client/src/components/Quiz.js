import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Questions from './Questions'

import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestion';
import { PushAnswer } from '../hooks/setResult';
import {useNavigate} from 'react-router-dom';


import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function Quiz() {

    const [check, setChecked] = useState(undefined)
    const result = useSelector(state => state.result.result);
    const { queue, trace } = useSelector(state => state.questions);
    const dispatch = useDispatch()
    const navigate = useNavigate();


    function onNext(){
        if(trace < queue.length){
            dispatch(MoveNextQuestion());

            if(result.length <= trace){
                dispatch(PushAnswer(undefined))
            }
        }

        setChecked(undefined)

        
    }
    function onPrev() {
        if (trace > 0) {
            dispatch(MovePrevQuestion());
        }
    }

    function onChecked(check) {
        setChecked(check)
    }

    function onSubmit(){
           navigate('/result');
    }

    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center bg-white dark:bg-slate-800">
            <div className="grid grid-cols-3 gap-5 justify-content-center">
                <div className="col-start-1 flex justify-self-end">
                    {trace > 0 ? <button onClick={onPrev} className="bg-orange-500 hover:bg-orange-700 text-white font-bold mt-2 py-2 px-5 rounded-full text-xl" >
                        <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
                    </button> : <div></div>}
                </div>
                <div className="col-start-2 col-end-2 flex justify-center">
                    <Questions onChecked={onChecked}></Questions>
                </div>
               
                {trace === queue.length-1 ? 
                    <div className="col-start-2 col-end-3 flex justify-self-center"><button onClick={onSubmit} className=" bg-green-500 hover:bg-green-700 text-white font-bold mt-2 py-2 px-5 rounded-full text-lg">
                        Submit
                    </button> </div> :
                    <div className="col-start-3 flex justify-self-start"><button onClick={onNext} className=" bg-orange-500 hover:bg-orange-700 text-white font-bold mt-2 py-2 px-5 rounded-full text-xl">
                    <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                    </button> </div>
                    }
                

            </div>
        </div>

    )
}