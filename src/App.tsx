import { useState, createContext } from 'react'

import MenuBar from "./MenuBar"
import Chats from "./Chats"
import Modal from "./Modal"

import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom"

export const ModalContext = createContext(null as any)

const  Layout = () => {
  const [modal, setModal] = useState(null)
  //setModal(<h1>Hello</h1>)

  return <div className='w-screen h-screen font-inter bg-neutral-200 text-slate-600 dark:text-slate-300 dark:bg-slate-800 flex flex-row'>
    <ModalContext.Provider value={{setModal: setModal}}>
      <MenuBar />
      <Outlet />
      {modal != null && (
        <Modal>{modal}</Modal>
      )}
    </ModalContext.Provider>
  </div>
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
      <RouterProvider router={router}/>
  </>
}

export default App
