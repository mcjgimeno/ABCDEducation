
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Questions from './Questions';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestion';
import { PushAnswer } from '../hooks/setResult';
import { Navigate } from 'react-router-dom'
export default function Quiz() {

    const [check, setChecked] = useState(undefined)
    const state = useSelector(state => state);
    const result = useSelector(state => state.result.result);
    const { queue, trace } = useSelector(state => state.questions);

    const dispatch = useDispatch()

    useEffect(()=>{
        console.log(result)
    })
    
        function onNext(){
            if(trace < queue.length){

                dispatch(MoveNextQuestion());
                if(result.length <= trace){
                    dispatch(PushAnswer(check))
                }
            }

            setChecked(undefined)
        }

        function onPrev(){
            if(trace > 0){
                dispatch(MovePrevQuestion());
            }
        }

        function onChecked(check){
            setChecked(check)
        }
        if(result.length && result.length >= queue.length){
            return <Navigate to={'/result'} replace={true}></Navigate>
        }

    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center bg-white dark:bg-slate-800">
            <div className="grid grid-cols-3 gap-5 justify-content-center">
                <div className="col-start-1 flex justify-self-end">

                { trace > 0 ? 
                    <button onClick={onPrev} className="bg-orange-500 hover:bg-orange-700 text-white font-bold mt-2 p-5 rounded-full text-xl">
                        <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
                    </button> : <div></div>}
                    
                </div>
                <div className="col-start-2 flex justify-center">
                    <Questions onChecked= {onChecked}></Questions>
                </div>
                <div className="col-start-3 flex justify-self-start">
                    <button  onClick={onNext} className=" bg-orange-500 hover:bg-orange-700 text-white font-bold mt-2 p-5 rounded-full text-xl" >
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                    </button>
                </div>
                
            </div>
        </div>

    )
}