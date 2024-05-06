import '../styles/App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import CreateQuestion from './CreateQuestion';
import ReadQuestion from './ReadQuestion';
import UpdateQuestion from './UpdateQuestion';
import DeleteQuestion from './DeleteQuestion';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas, far, fab);

/** react routes */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>
  },

  {
    path: '/quiz',
    element: <Quiz></Quiz>
  },

  {
    path: '/result',
    element: <Result></Result>
  },

  {
    path: '/create-question',
    element: <CreateQuestion></CreateQuestion>
  },

  {
    path: '/read-question',
    element: <ReadQuestion></ReadQuestion>
  },

  {
    path: '/update-question',
    element: <UpdateQuestion></UpdateQuestion>
  },

  {
    path: '/delete-question',
    element: <DeleteQuestion></DeleteQuestion>
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;