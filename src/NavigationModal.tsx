import { GoHome, GoComment, GoGear } from "react-icons/go";
import { Link } from "react-router-dom";
import { ModalContext } from "./App";
import { useContext } from "react";

function NavigationModal() {
    const { setModal } = useContext(ModalContext)

    return <div className="dark:text-slate-400 text-slate-600 ">
        <Link to={"/"} onClick={() => {setModal(null)}}>
            <span className={`h-14 w-64 m-1 mb-2 p-2 text-3xl font-light cursor-pointer aspect-square flex align-center items-center rounded-md
                    ${location.pathname == "/" ? "dark:bg-slate-700 bg-neutral-200" : "dark:hover:bg-slate-700 hover:bg-neutral-200"} transition-color duration-300`}>
                <GoHome />
                <p className="pl-2">Home</p>
            </span>
        </Link>
        <Link to={"/chat"} onClick={() => {setModal(null)}}>
            <span className={`h-14 w-64 m-1 mb-2 p-2 text-3xl font-light cursor-pointer aspect-square flex align-center items-center rounded-md
                    ${location.pathname == "/chat" ? "dark:bg-slate-700 bg-neutral-200" : "dark:hover:bg-slate-700 hover:bg-neutral-200"} transition-color duration-300`}>
                <GoComment />
                <p className="pl-2">Chat</p>
            </span>
        </Link>
        <Link to={"/settings"} onClick={() => {setModal(null)}}>
            <span className={`h-14 w-64 m-1 p-2 text-3xl font-light cursor-pointer aspect-square flex align-center items-center rounded-md
                    ${location.pathname == "/settings" ? "dark:bg-slate-700 bg-neutral-200" : "dark:hover:bg-slate-700 hover:bg-neutral-200"} transition-color duration-300`}>
                <GoGear />
                <p className="pl-2">Settings</p>
            </span>
        </Link>
    </div>
}

export default NavigationModal