import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
// import { getServerData } from "../helper/helper";
import data from "../database/data";
import * as Action from '../redux/question_reducer'


export const useFetchQestion = () => {
    const dispatch = useDispatch();
    const [getData, setGetData] = useState({ isLoading: false, apiData: [], serverError: null });

    useEffect(() => {
        setGetData(prev => ({ ...prev, isLoading: true }));

        /** async function fetch backend data */
        (async () => {
            try {
                let question = await data;
                if (question.length > 0) {
                    setGetData(prev => ({ ...prev, isLoading: false }));
                    setGetData(prev => ({ ...prev, apiData: question }));

                    /** dispatch an action */
                    dispatch(Action.startExamAction({ question }))

                } else {
                    throw new Error("No Question Available");
                }
            } catch (error) {
                setGetData(prev => ({ ...prev, isLoading: false }));
                setGetData(prev => ({ ...prev, serverError: error }));
            }
        })();
    }, [dispatch]);

    return [getData, setGetData];
}

export const MoveNextQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.moveNextAction()); /** increase trace by 1 */
    } catch (error) {
        console.log(error)
    }
}

export const MovePrevQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.movePrevAction()); /** decrease trace by 1 */
    } catch (error) {
        console.log(error)
    }
}