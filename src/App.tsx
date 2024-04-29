// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import MenuBar from "./MenuBar"
import Chats from "./Chats"

import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom"

const  Layout = () => {
  return <>
    <MenuBar />
    <Outlet />
  </>
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Navigate to="/" replace/>,
    children: [
      {
        path: "/",
        element: <h1>Home</h1>
      },
      {
        path: "/chat",
        element: <Chats />
      },
      {
        path: "/settings",
        element: <h1>Settings</h1>
      }
    ]
  }
], {basename: "/mock-chatapp-resume"})

function App() {
  return <>
    <div className='w-screen h-screen font-inter bg-neutral-200 text-slate-600 dark:text-slate-300 dark:bg-slate-800 flex sm:flex-row flex-col-reverse'>
      <RouterProvider router={router}/>
    </div>
  </>
}

export default App
