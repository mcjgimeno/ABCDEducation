import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { getServerData } from "../helper/helper";
import axios from 'axios'

/** redux actions */
import * as Action from '../redux/question_reducer'

/** fetch question hook to fetch api data and set value to store */
export const useFetchQestion = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
      isLoading: false,
      apiData: [],
      serverError: null,
    });
  
    useEffect(() => {
      setData({ ...data, isLoading: true });
  
      (async () => {
        try {
          const [{ questions, answers }] = await getServerData(
            `${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`,
            (data) => data
          );
  
          if (questions.length > 0) {
            setData({ isLoading: false, apiData: questions, answers });
            dispatch(
              Action.startExamAction({ question: questions, answers })
            );
          } else {
            throw new Error("No Question Available");
          }
        } catch (error) {
          setData({ isLoading: false, serverError: error.message });
        }
      })();
    }, [dispatch]);
  
    const handleDelete = async (questionId) => {
      try {
        await axios.delete(
          `${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions/?id=${questionId}`
        );
        // Optionally, update your local state to reflect the deleted question
        console.log("Question deleted successfully");
      } catch (error) {
        console.error("Error deleting question:", error);
      }
    };
  
    return [data, setData, handleDelete];
  };

/** MoveAction Dispatch function */
export const MoveNextQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.moveNextAction()); /** increase trace by 1 */
    } catch (error) {
        console.log(error)
    }
}

/** PrevAction Dispatch function */
export const MovePrevQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.movePrevAction()); /** decrease trace by 1 */
    } catch (error) {
        console.log(error)
    }
}
