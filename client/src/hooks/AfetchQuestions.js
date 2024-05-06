// FetchQuestion.js
import { useState, useEffect } from 'react';
import { getServerData } from '../helper/helper';

const useFetchQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const data = await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`, (data) => {
          setQuestions(data.questions);
          setLoading(false);
        });
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);

  return { questions, loading, error };
};

export default useFetchQuestions;