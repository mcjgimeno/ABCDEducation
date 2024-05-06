import '../styles/App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import Dashboard from './dashboard/dashboard'
import ManQuiz from './dashboard/manQuiz'
import ManAnimals from './dashboard/manAnimals';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { CheckUserExist } from '../helper/helper';
import Quizes from './Quizes';
import Login from './Login';





library.add(fas, far, fab)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/quizes',
    element: <CheckUserExist><Quizes /></CheckUserExist>,
  },
  {
    path: '/quiz',
    element: <CheckUserExist><Quiz /></CheckUserExist>,
  },
  {
    path: '/result',
    element: <CheckUserExist><Result /></CheckUserExist>,
  },
  {
    path: '/a/login',
    element: <Login />,
  },
  {
    path: '/a/dashboard',
    element: <Dashboard />
  },

  {
    path: '/a/quizes',
    element: <ManQuiz />
  },

  {
    path: '/a/quizes/animals',
    element: <ManAnimals/>
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;