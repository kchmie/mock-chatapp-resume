import { GoChevronLeft } from "react-icons/go"
import ChatMessage from "./ChatMessage"
import NavigationModal from "./NavigationModal"

import { ModalContext } from "./App"
import { useContext } from "react"

function ChatWindow() {
    const { setModal } = useContext(ModalContext)

    return <>
        <div className="w-full h-full dark:bg-slate-700 bg-neutral-200 flex flex-col items-center">
            <div className="h-20 dark:bg-slate-800 bg-neutral-100 flex items-center pl-3 sticky top-0 shadow-lg w-full">
                <div className="pr-4 flex items-center hover:cursor-pointer" onClick={() => {setModal(<NavigationModal />)}}>
                    <span className="material-symbols-outlined text-2xl sm:hidden block">
                        <GoChevronLeft />
                    </span>
                </div>
                <div className="w-11 h-11 bg-slate-600 rounded-full"></div>
                <div className="pl-4 text-slate-600 dark:text-slate-300">
                    <div className="text-xl">John Doe</div>
                    <div className='text-slate-500 dark:text-slate-400 text-sm'>Online</div>
                </div>
            </div>
            <div className="overflow-auto h-full lg:w-4/5 w-full pt-2 sm:pt-0 pb-2 px-4 flex flex-col-reverse no-scrollbar">
                <ChatMessage author="You" time="22:36" message="Odio consectetur aliquam atque ratione sapiente. Eius earum commodi perferendis veritatis vitae atque, officia adipisci ad illo deserunt?" />
                <ChatMessage author="John Doe" time="22:34" message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. At dicta, repellat inventore quidem sequi nihil ut numquam soluta temporibus exercitationem assumenda vitae officia accusantium odit optio quaerat aut ipsa itaque!" />
                <ChatMessage author="You" time="21:19" message="Hello, world!" />
            </div>
            <div className="h-20 dark:bg-slate-800 w-full bg-neutral-100 flex justify-around items-center px-4">
                <div className="lg:w-4/5 w-full flex justify-around items-center border-2 border-neutral-200 shadow-sm dark:border-slate-700 m-3 rounded">
                    <div className="w-full p-2 px-4" >
                        <input type="text" placeholder="Message..." className="p-0 bg-transparent border-none w-full focus:ring-offset-0 focus:ring-0" />
                    </div>
                    <div className="text-slate-700 dark:text-slate-400 w-auto border-l-2 hover:cursor-pointer border-neutral-200 shadow-sm dark:border-slate-700 p-2 px-4 dark:bg-slate-700 bg-neutral-200" >
                        Send
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ChatWindow;