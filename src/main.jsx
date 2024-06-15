import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root';
import Scores from './Scores'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Login from './Login';
import First from './First';


const router = createBrowserRouter([


  {
    path: "/",
    element: <Root />,
  },
  {
    path: "tictactoe",
    element: <App />,

  },
  {
    path: "scores",
    element: <Scores/>,

  },
  {
    path: "login",
    element: <Login/>,

  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <First></First>
 
)
