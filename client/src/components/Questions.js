import React, { useEffect, useState } from "react";
import data from '../database/data';
import { useFetchQestion } from "../hooks/FetchQuestion";
import { useSelector } from 'react-redux'; 


export default function Questions() {

    const [checked, setChecked] = useState(undefined)
    const [{ isLoading, apiData, serverError }, setGetData] = useFetchQestion()
    const question = data[0];

    // useEffect (() => {
    //     console.log(apiData);
        
    // })
    const questions= useSelector(state => state.questions.queue[state.questions.trace])
    const trace= useSelector(state => state.questions.trace)

    useEffect(()=>{
        console.log(questions);
    })
    function onSelect() {
        console.log('radio change')
    }

    if(isLoading) return <h3 className='text-slate-50'>isLoading</h3>
    if(serverError) return <h3 className='text-red-100'>{serverError || "Unknown Error"}</h3>
    return (
        <div className="container">

            <article>
                <p className="text-xl text-white">{question?.question}</p>
            </article>

            <ul className="grid w-full gap-4 md:grid-cols-2 mt-9" key={question?.id}>
                {
                    question?.options.map((q, i) => (
                        <li key={i}>
                            <input
                                type="radio"
                                id={`q${i}-options`}
                                name="options"
                                value={false}
                                className="hidden peer"
                                onChange={onSelect} />
                            <label className="inline-flex items-center justify-between w-full p-5 bg-slate-800 full text-yellow-300 
                            border border-yellow-300 rounded-lg cursor-pointer dark:border-yellow-200 
                            peer-checked:border-blue-600 hover:bg-yellow-300 hover:text-yellow-900"
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