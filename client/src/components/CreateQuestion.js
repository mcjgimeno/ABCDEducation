import React, { useState } from 'react';
import axios from 'axios';

const CreateQuestion = () => {
  const [questionText, setQuestionText] = useState('');
  const [choices, setChoices] = useState(['', '', '', '']);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/questions', { questionText, choices });
      console.log('New question created:', response.data);
      // Clear form fields after submission
      setQuestionText('');
      setChoices(['', '', '', '']);
    } catch (error) {
      console.error('Error creating question:', error);
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
        <h2 className="text-2xl font-bold mb-4">Create New Question</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="block mb-2">Question Text:</label>
            <input
              type="text"
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
              className="form-input w-full"
              required
            />
          </div>
          <div className="form-group">
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
      </div>
    </div>
  );
};

export default CreateQuestion;
