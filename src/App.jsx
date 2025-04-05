import { useState } from 'react'
import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />
      },
      {

      }
    ]
  }
])


function App() {


  return (
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  )
}

export default App
