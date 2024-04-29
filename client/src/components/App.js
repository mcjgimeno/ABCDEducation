import '../styles/App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Main from './Main';

/** react routes */
const router = createBrowserRouter([
  {
    path : '/',
    element : <Main></Main>
  },

  {
    path : '/quiz',
    element : <div>Quiz App</div>
  },

  {
    path : '/',
    element : <div>Result</div>
  },
  
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
