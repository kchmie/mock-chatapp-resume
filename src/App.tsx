// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import MenuBar from "./MenuBar"
import Chats from "./Chats"
// import Loading from "./Loading"

function App() {
  // const [fontsLoaded, setFontsLoaded] = useState(false)

  // document.fonts.ready.then(() => {
  //   setFontsLoaded(true)
  // })

  return <>
    <div className='w-screen h-screen font-montserrat bg-neutral-200 text-slate-900 dark:bg-slate-800 dark:text-indigo-100 flex sm:flex-row flex-col-reverse'>
      <MenuBar />
      <Chats />
    </div>
    {/* <div className={`${fontsLoaded ? "hidden" : "block"}`}>
      <Loading />
    </div> */}
  </>
}

export default App
