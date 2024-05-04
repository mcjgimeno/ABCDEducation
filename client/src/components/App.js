import '../styles/App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { CheckUserExist } from '../helper/helper';
import Quizes from './Quizes';
import Login from './login';

library.add(fas, far, fab)

/** react routes */
const router = createBrowserRouter([
  {
    path : '/',
    element : <Main></Main>
  },

  {
    path : '/quizes',
    element : <CheckUserExist><Quizes ></Quizes></CheckUserExist>
  },
  {
    path : '/quiz',
    element : <CheckUserExist><Quiz/></CheckUserExist>
  },

  {
    path : '/result',
    element : <CheckUserExist><Result /></CheckUserExist>
  },
  {
    path : '/a/login',
    element : <Login></Login>
  }
  
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
