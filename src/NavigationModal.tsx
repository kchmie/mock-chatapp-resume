import { GoHome, GoComment, GoGear } from "react-icons/go";
import { Link } from "react-router-dom";
import { AppContext } from "./App";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

function NavigationModal() {
    const { setModal } = useContext(AppContext)
    const { t } = useTranslation() 

    return <div className="">
        <Link to={"/"} onClick={() => {setModal(null)}}>
            <span className={`h-10 w-64 mb-2 p-2 text-xl font-light cursor-pointer aspect-square flex align-center items-center rounded-md
                    ${location.pathname == "/" ? "dark:bg-slate-700 bg-neutral-200" : "dark:hover:bg-slate-700 hover:bg-neutral-200"} transition-color duration-300`}>
                <GoHome />
                <p className="pl-2">{t("nav.home")}</p>
            </span>
        </Link>
        <Link to={"/chat"} onClick={() => {setModal(null)}}>
            <span className={`h-10 w-64 mb-2 p-2 text-xl font-light cursor-pointer aspect-square flex align-center items-center rounded-md
                    ${location.pathname == "/chat" ? "dark:bg-slate-700 bg-neutral-200" : "dark:hover:bg-slate-700 hover:bg-neutral-200"} transition-color duration-300`}>
                <GoComment />
                <p className="pl-2">{t("nav.chat")}</p>
            </span>
        </Link>
        <Link to={"/settings"} onClick={() => {setModal(null)}}>
            <span className={`h-10 w-64 p-2 text-xl font-light cursor-pointer aspect-square flex align-center items-center rounded-md
                    ${location.pathname == "/settings" ? "dark:bg-slate-700 bg-neutral-200" : "dark:hover:bg-slate-700 hover:bg-neutral-200"} transition-color duration-300`}>
                <GoGear />
                <p className="pl-2">{t("nav.settings")}</p>
            </span>
        </Link>
    </div>
}

export default NavigationModal