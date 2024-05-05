import { useState, createContext, useEffect } from 'react'

import MenuBar from "./MenuBar"
import Chats from "./Chats"
import Modal from "./Modal"
import Home from './Home'

import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom"
import { useTranslation } from 'react-i18next'

export const AppContext = createContext(null as any)

const Layout = () => {
  const [modal, setModal] = useState(null)
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    let storage = localStorage.getItem('darkmode')
    if (storage != null)
      setDarkMode(storage == "true")
    else if (window.matchMedia && !window.matchMedia('(prefers-color-scheme: dark)').matches)
      setDarkMode(false)
  }, [])

  useEffect(() => {
    localStorage.setItem("darkmode", darkMode.toString())

    if (darkMode)
      document.documentElement.classList.add("dark")
    else
      document.documentElement.classList.remove("dark")
  }, [darkMode])

  return <div className='w-screen h-screen font-inter bg-neutral-200 text-slate-600 dark:text-slate-300 dark:bg-slate-800 flex flex-row'>
    <AppContext.Provider value={{ setModal: setModal, toggleDarkMode: toggleDarkMode, darkMode: darkMode }}>
      <MenuBar />
      <Outlet />
      {modal != null && (
        <Modal>{modal}</Modal>
      )}
    </AppContext.Provider>
  </div>
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Navigate to="/" replace />,
    children: [
      {
        path: "/",
        element: <Home />
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
], { basename: "/mock-chatapp-resume" })

function App() {
  const { i18n } = useTranslation()

  useEffect(() => {
    let storage = localStorage.getItem("language")
    if (storage != null) {
      i18n.changeLanguage(storage)
    }
    else {
      const lng = navigator.language
      i18n.changeLanguage(lng)
      localStorage.setItem("language", i18n.language)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("language", i18n.language)
  }, [i18n.language])

  return <>
    <RouterProvider router={router} />
  </>
}

export default App
