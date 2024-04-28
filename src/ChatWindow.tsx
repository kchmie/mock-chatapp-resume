import { GoArrowLeft } from "react-icons/go";
import ChatMessage from "./ChatMessage"

function ChatWindow() {
    return <>
        <div className="w-full h-full dark:bg-slate-700 bg-neutral-300 flex flex-col">
            <div className="h-20 dark:bg-slate-800 bg-neutral-200 flex items-center pl-3 sticky top-0 shadow-lg">
                <div className="pr-4 flex items-center ">
                    <span className="material-symbols-outlined text-2xl hover:cursor-pointer">
                        <GoArrowLeft />
                    </span>
                </div>
                <div className="w-10 h-10 bg-slate-600 rounded-full"></div>
                <div className="pl-4">
                    <div className="text-lg">John Doe</div>
                    <div className='text-slate-400 text-sm'>Online</div>
                </div>
            </div>
            <div className="overflow-auto h-full w-full pt-14 sm:pt-0 pb-2 px-4 flex flex-col-reverse no-scrollbar">
                <ChatMessage author="You" message="Odio consectetur aliquam atque ratione sapiente. Eius earum commodi perferendis veritatis vitae atque, officia adipisci ad illo deserunt?" />
                <ChatMessage author="John Doe" message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. At dicta, repellat inventore quidem sequi nihil ut numquam soluta temporibus exercitationem assumenda vitae officia accusantium odit optio quaerat aut ipsa itaque!" />
                <ChatMessage author="You" message="Hello, world!" />
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
    </>
}

export default ChatWindow;