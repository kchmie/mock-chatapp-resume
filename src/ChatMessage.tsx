
function ChatMessage(prop: any) {
    return <>
        <div className={`w-full flex ${prop.author == "You" ? "justify-end" : "justify-start"} p-3 py-2 items-center`}>
            <div className="md:w-3/5 w-3/4 flex justify-end">
                <div className="dark:bg-slate-800 bg-neutral-100 p-4 py-3 shadow-md w-fit rounded">
                    <div className="text-slate-500 text-base flex justify-between items-center">
                        <div>{prop.author}</div>
                        <div className="dark:text-slate-500 text-slate-400 text-sm">{prop.time}</div>
                    </div>
                    <div>{prop.message}</div>
                </div>
            </div>
        </div>
    </>
}

export default ChatMessage;