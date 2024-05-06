import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeleteQuestion = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

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

  const handleDelete = async () => {
    if (!selectedQuestion) return;
    try {
      await axios.delete(`/api/questions/${selectedQuestion._id}`);
      console.log('Question deleted successfully');
      // Remove deleted question from the list
      setQuestions(questions.filter(question => question._id !== selectedQuestion._id));
      setSelectedQuestion(null);
    } catch (error) {
      console.error('Error deleting question:', error);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-white dark:bg-slate-800">
      <div className="max-w-md w-full bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-4">Delete Question</h2>
        <select onChange={(e) => setSelectedQuestion(questions.find(question => question._id === e.target.value))}>
          <option>Select a question to delete</option>
          {questions.map((question) => (
            <option key={question._id} value={question._id}>{question.questionText}</option>
          ))}
        </select>
        {selectedQuestion && (
          <div>
            <p>Are you sure you want to delete this question?</p>
            <button onClick={handleDelete} className="block w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Delete</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeleteQuestion;
