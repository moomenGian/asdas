import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './components/Homepage/Homepage'
import SectionPage from './components/SectionPage/SectionPage'
import Dashboard from './components/Dashboard/Dashboard'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />
  },
  {
    path: '/section/:Strand/:sectionName',
    element: <SectionPage />
  },
  {
    path: '/Dashboard',
    element: <Dashboard />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
