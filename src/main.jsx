import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider, } from "react-router-dom";
import './index.css'
import Root from './Root';
import Home from './components/Home/Home';
import About from './components/About/About';
import Login from './components/Login/Login';
import RegisterRBS from './components/RegisterRBS/RegisterRBS';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register_rbs",
        element: <RegisterRBS></RegisterRBS>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
