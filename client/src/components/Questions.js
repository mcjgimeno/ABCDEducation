import React, { useEffect, useState } from "react";
import data from '../database/data';
import { useFetchQestion } from "../hooks/FetchQuestion";
import { useSelector, useDispatch } from 'react-redux';
import { updateResult } from "../hooks/setResult";



export default function Questions({ onChecked }) {

    const [checked, setChecked] = useState(undefined)
    const { trace } = useSelector(state => state.questions);
    const result = useSelector(state => state.result.result);
    const [{ isLoading, apiData, serverError }] = useFetchQestion()

    const dispatch = useDispatch()
    const questions = useSelector(state => state.questions.queue[state.questions.trace])


    useEffect(() => {
        console.log({ trace, checked })

        dispatch(updateResult({ trace, checked }))
    }, [checked])

    function onSelect(i) {
        onChecked(i)
        setChecked(i)
        dispatch(updateResult({ trace, checked }))
        console.log(i);
    }

    if (isLoading) return <h3 className='text-slate-50'>isLoading</h3>
    if (serverError) return <h3 className='text-red-100'>{serverError || "Unknown Error"}</h3>
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
                                className="peer hidden"
                                onChange={() => onSelect(i)}
                                checked={result[trace] === undefined? i === 0 : result[trace] === i}
                            />
                            <label
                                className="inline-flex items-center justify-between w-full p-5 bg-slate-800 full text-yellow-300 border  rounded-lg cursor-pointer 
                                hover:bg-yellow-300 hover:text-yellow-900  peer-checked:border-blue-600 checked border-yellow-300 dark:border-yellow-200"
                                htmlFor={`q${i}-options`}
                            >


                                <h1 className="w-0 font-bold">{q}  </h1> 
                            </label>
                        </li>
                    ))
                }
            </ul>

        </div>

    )
}