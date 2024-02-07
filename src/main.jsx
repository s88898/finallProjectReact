import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Appointments from './components/appointments/Appointments.jsx'
import AdminHome from './components/Login/AdminHome.jsx'
import ServicesPage from './components/services/ServicesPage.jsx'
import ManagementPage from './components/ManagmentPage.jsx'
import LoginPage from './components/Login/LoginPage.jsx'

const router=createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/app',
    element: <App />,
  },
  {
    path: '/admin',
    element: <AdminHome/>,
    children: [
      {
        path: 'appointments',
        element: <Appointments/>
      },
      {
        path: 'services',
        element: <ServicesPage />,
      },
      {
        path: 'management',
        element: <ManagementPage />,
      },
    ],
  },
  {
    path: '/login',
    element:<LoginPage/>,
  },
  ])
  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
