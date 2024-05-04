import { PushAnswer } from '../hooks/setResult';

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


/** Custom Hook */
import { useFetchQestion } from '../hooks/FetchQuestion'
import { updateResult } from '../hooks/setResult'


export default function Questions({ onChecked }) {

    const [checked, setChecked] = useState(undefined)
    const { trace } = useSelector(state => state.questions);
    const result = useSelector(state => state.result.result);
    const [{ isLoading, apiData, serverError}] = useFetchQestion() 

    const questions = useSelector(state => state.questions.queue[state.questions.trace])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(updateResult({ trace, checked}))
    }, [checked])

    function onSelect(i){
        onChecked(i)
        setChecked(i)
        dispatch(updateResult({ trace, checked}))   
        if(result.length <= trace){
            dispatch(PushAnswer(i))
        } 
    }

    if(isLoading) return <h3 className='text-light'>isLoading</h3>
    if(serverError) return <h3 className='text-light'>{serverError || "Unknown Error"}</h3>
    
    return (
        <div className="container">

            <article>
                <p className="text-xl text-white">{questions?.question}</p>
            </article>

            <ul className="grid w-full gap-4 md:grid-cols-2 mt-9" key={questions?.id}>
                {
                    questions?.options.map((q, i) => (
                        <li key={i}>
                            <input
                                type="radio"
                                id={`q${i}-options`}
                                name="options"
                                value={false}
                                className="hidden peer"
                                checked={result[trace] === i ? true : false}
                                onChange={()=> onSelect(i)}
                                 />

                            <label className="inline-flex items-center justify-between w-full p-5 bg-slate-800 full text-yellow-300 
                            border border-yellow-300 rounded-lg cursor-pointer 
                            dark:border-yellow-200 
                            hover:border-blue-600 
                            hover:text-white    
                            peer-checked:bg-yellow-300 
                            peer-checked:text-yellow-900"
                                htmlFor={`q${i}-options`}>
                                <h1 className="w-0 font-bold">{q}</h1>
                            </label>
                        </li>
                    ))
                }
            </ul>

        </div>

    )
}