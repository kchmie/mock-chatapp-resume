// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function App() {
  return (
    <div className='w-screen h-screen font-poppins bg-neutral-100 text-slate-900 dark:bg-slate-800 dark:text-indigo-100 flex'>
      <div className='flex shadow-xl shadow-black'>
        <div className="p-5 flex-col flex justify-center items-center bg-neutral-200 dark:bg-slate-800 dark:shadow-sm dark:shadow-gray-600">
          <span className="material-symbols-outlined p-2 my-1 text-3xl font-light rounded-full cursor-pointer aspect-square flex justify-center align-center
         dark:hover:bg-slate-700 hover:bg-neutral-100 transition-all duration-300">
            home
          </span>
          <span className="material-symbols-outlined p-2 my-1 text-3xl font-light rounded-full cursor-pointer aspect-square flex justify-center align-center
         dark:bg-slate-700 bg-neutral-100 transition-all duration-300">
            forum
          </span>
          <span className="material-symbols-outlined p-2 my-1 text-3xl font-light rounded-full cursor-pointer aspect-square flex justify-center align-center
         dark:hover:bg-slate-700 hover:bg-neutral-100 transition-all duration-300">
            settings
          </span>
        </div>
        <div className="p-5 h-full w-80">
          <div className="flex justify-between align-center items-center mb-10">
            <p className="text-2xl">Chats</p>
            <span className="material-symbols-outlined text-3xl font-light rounded-full cursor-pointer aspect-square flex justify-center align-center ml-6">
              search
            </span>
          </div>
          <div className="border-2 border-neutral-200 hover:bg-neutral-200 shadow-sm dark:border-slate-700 dark:hover:bg-slate-700 transition-all duration-300 p-3 rounded-lg flex cursor-pointer">
            <div className="w-16 h-12 bg-slate-600 rounded-full"></div>
            <div className='ml-3 w-full'>
              <div className='flex justify-between items-center w-full pr-2'>
                <div>John Doe</div>
                <div className='w-3 h-3 bg-sky-500 rounded-full'></div>
              </div>
              <div className='flex justify-between items-center w-full pr-2'>
                <div className='font-light'>Hello, world!</div>
                <div className='text-slate-400 text-sm'>17.04</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 w-full dark:bg-slate-700 bg-neutral-200">
        Current chat
      </div>
    </div>
  )
}

export default App
