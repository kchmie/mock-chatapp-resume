
function ChatMessage(prop: any) {
    return (<>
        <div className={`w-full flex ${prop.author == "You" ? "justify-end" : "justify-start"} p-3 py-2 items-center`}>
            <div className="w-3/4 flex justify-end">
                <div className="dark:bg-slate-800 bg-neutral-200 p-4 py-3 shadow-md w-fit">
                    <div className="text-slate-400 text-sm">{prop.author}</div>
                    <div>{prop.message}</div>
                </div>
            </div>
        </div>
    </>)
}

export default ChatMessage;