import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import EmployeeHome from './containers/Employee-home.jsx'
import EmployeeLogin from './containers/Employee-login.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
   element:<EmployeeLogin></EmployeeLogin>
  },
  {
    path:'/home',
    element:<EmployeeHome></EmployeeHome>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
