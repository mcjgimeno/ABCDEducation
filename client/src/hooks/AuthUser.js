import { useState } from 'react';
import { loginUser } from '../helper/helper';

export const useLogin = () => {
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const username = formData.get('username');
    const password = formData.get('password');

    const isLoggedIn = await loginUser(username, password);

    if (!isLoggedIn) {
      setError('Invalid username or password');
    }
  };

  return { handleSubmit, error };
};