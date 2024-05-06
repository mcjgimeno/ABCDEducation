import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReadQuestion = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get('/api/questions');
      setQuestions(response.data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-white dark:bg-slate-800">
      <div className="max-w-md w-full bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-4">All Questions</h2>
        <ul>
          {questions.map((question, index) => (
            <li key={index} className="text-gray-800 dark:text-gray-200">{question.questionText}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReadQuestion;
