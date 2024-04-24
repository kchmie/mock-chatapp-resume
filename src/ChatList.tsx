
function ChatList() {
    return <>
        <div className="h-full w-72 hidden md:block">
            <div className="p-5 px-3 pb-5 flex justify-between align-center items-center">
                <p className="text-xl">Chats</p>
                <span className="material-symbols-outlined text-2xl font-light cursor-pointer aspect-square flex justify-center align-center ml-6">
                    search
                </span>
            </div>
            <div className="items-center border-2 border-x-0 border-neutral-300 hover:bg-neutral-300 dark:border-slate-700 dark:hover:bg-slate-700 transition-all duration-300 p-3 flex cursor-pointer text-sm">
                <div className="w-14 h-10 bg-slate-600 rounded-full"></div>
                <div className='ml-3 w-full'>
                    <div className='flex justify-between items-center w-full pr-2'>
                        <div className="text-lg">John Doe</div>
                        <div className='w-3 h-3 bg-sky-500 rounded-full'></div>
                    </div>
                    <div className='flex justify-between items-center w-full pr-2'>
                        <div className='text-slate-400 text-sm'>Hello, world!</div>
                        <div className='text-slate-400 text-sm'>17.04</div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ChatList