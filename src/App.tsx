// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import ThemeSwitcher from "./ThemeSwitcher"

function App() {
  return (
    <div className='w-screen h-screen font-montserrat bg-neutral-200 text-slate-900 dark:bg-slate-800 dark:text-indigo-100 flex sm:flex-row flex-col-reverse'>
      <div className='sm:flex '>
        <div className="sm:flex-col flex justify-center items-center bg-neutral-200 dark:bg-slate-800 dark:shadow-sm  dark:border-gray-700 border-gray-300 md:border-r-2 sm:border-t-0 border-t-2">
          <span className="material-symbols-outlined px-3 text-3xl font-light cursor-pointer aspect-square flex justify-center align-center items-center
         dark:hover:bg-slate-700 hover:bg-neutral-300 transition-all duration-300">
            home
          </span>
          <span className="material-symbols-outlined px-3 text-3xl font-light cursor-pointer aspect-square flex justify-center align-center items-center
         dark:bg-slate-700 bg-neutral-300 transition-all duration-300">
            forum
          </span>
          <span className="material-symbols-outlined px-3 text-3xl font-light cursor-pointer aspect-square flex justify-center align-center items-center
         dark:hover:bg-slate-700 hover:bg-neutral-300 transition-all duration-300">
            settings
          </span>
          <div className="sm:absolute sm:bottom-2 hidden sm:block">
            <ThemeSwitcher />
          </div>
        </div>
        <div className="h-full w-72 hidden md:block">
          <div className="p-5 px-3 pb-4 flex justify-between align-center items-center">
            <p className="text-2xl">Chats</p>
            <span className="material-symbols-outlined text-3xl font-light cursor-pointer aspect-square flex justify-center align-center ml-6">
              search
            </span>
          </div>
          <div className="border-2 border-x-0 border-neutral-300 hover:bg-neutral-300 dark:border-slate-700 dark:hover:bg-slate-700 transition-all duration-300 p-3 flex cursor-pointer text-sm">
            <div className="w-16 h-13 bg-slate-600 rounded-full"></div>
            <div className='ml-3 w-full'>
              <div className='flex justify-between items-center w-full pr-2'>
                <div className="text-lg">John Doe</div>
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
      <div className="w-full h-full dark:bg-slate-700 bg-neutral-300 flex flex-col">
        <div className="h-20 dark:bg-slate-800 bg-neutral-200 flex items-center pl-3 sticky top-0">
          <div className="pr-4 flex items-center ">
            <span className="material-symbols-outlined rotate-90 text-3xl text-slate-400 hover:cursor-pointer">
              expand_more
            </span>
          </div>
          <div className="w-12 h-12 bg-slate-600 rounded-full"></div>
          <div className="pl-4">
            <div className="text-xl">John Doe</div>
            <div className='text-slate-400 text-sm'>Online</div>
          </div>
        </div>
        <div className="overflow-auto h-full w-full pt-20 pb-2 px-4 flex flex-col-reverse no-scrollbar">
          <div className="w-full flex justify-end p-3 py-2 items-center">
            <div className="w-3/4 flex justify-end">
              <div className="dark:bg-slate-800 bg-neutral-200 p-4 py-3 shadow-lg w-fit">
                <div className="text-slate-400 text-sm">You</div>
                <div>Odio consectetur aliquam atque ratione sapiente. Eius earum commodi perferendis veritatis vitae atque, officia adipisci ad illo deserunt?</div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-start p-3 py-2 items-center">
            <div className="w-3/4 flex justify-start">
              <div className="dark:bg-slate-800 bg-neutral-200 p-4 py-3 shadow-lg w-fit">
                <div className="text-slate-400 text-sm">John Doe</div>
                <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At dicta, repellat inventore quidem sequi nihil ut numquam soluta temporibus exercitationem assumenda vitae officia accusantium odit optio quaerat aut ipsa itaque!</div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end p-3 py-2 items-center">
            <div className="w-3/4 flex justify-end">
              <div className="dark:bg-slate-800 bg-neutral-200 p-4 py-3 shadow-lg w-fit">
                <div className="text-slate-400 text-sm">You</div>
                <div>Hello, world!</div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-20 dark:bg-slate-800 w-full bg-neutral-200 flex justify-around items-center px-4">
          <div className="w-full border-2 border-neutral-300 shadow-sm dark:border-slate-700 p-2 px-4" >
            <input type="text" placeholder="Message..." className="p-0 bg-transparent border-none w-full focus:ring-offset-0 focus:ring-0" />
          </div>
          <div className="w-auto border-2 hover:cursor-pointer border-neutral-300 hover:bg-neutral-300 shadow-sm dark:border-slate-700 dark:hover:bg-slate-700 transition-all duration-300 ml-5 p-2 px-4" >
            Send
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
