import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateQuestion = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [questionText, setQuestionText] = useState('');
  const [choices, setChoices] = useState(['', '', '', '']);

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

  const handleQuestionChange = (event) => {
    const questionId = event.target.value;
    const selected = questions.find(question => question._id === questionId);
    setSelectedQuestion(selected);
    setQuestionText(selected.questionText);
    setChoices(selected.choices);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/questions/${selectedQuestion._id}`, { questionText, choices });
      console.log('Question updated successfully');
      // Clear form fields
      setQuestionText('');
      setChoices(['', '', '', '']);
      setSelectedQuestion(null);
    } catch (error) {
      console.error('Error updating question:', error);
    }
  };

  const handleChoiceChange = (index, choice) => {
    const newChoices = [...choices];
    newChoices[index] = choice;
    setChoices(newChoices);
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-white dark:bg-slate-800">
      <div className="max-w-md w-full bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-4">Update Question</h2>
        <select onChange={handleQuestionChange}>
          <option>Select a question to update</option>
          {questions.map((question) => (
            <option key={question._id} value={question._id}>{question.questionText}</option>
          ))}
        </select>
        {selectedQuestion && (
          <form onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2">Question Text:</label>
              <input
                type="text"
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                className="form-input w-full mb-2"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Choices:</label>
              {choices.map((choice, index) => (
                <input
                  key={index}
                  type="text"
                  value={choice}
                  onChange={(e) => handleChoiceChange(index, e.target.value)}
                  className="form-input w-full mb-2"
                  required
                />
              ))}
            </div>
            <button type="submit" className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default UpdateQuestion;
