import { ModalContext } from "./App";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

function NavigationModal() {
    const { setModal } = useContext(ModalContext)
    const { i18n } = useTranslation()

    return <div className="dark:text-slate-400 text-slate-600 ">
        <div onClick={() => {setModal(null)}}>
            <span className={`h-14 w-64 mb-1 text-xl cursor-pointer aspect-square flex align-center items-center rounded-md transition-color duration-300
                ${i18n.language == "pl-PL" ? "dark:bg-slate-700 bg-neutral-200" : "dark:hover:bg-slate-700 hover:bg-neutral-200"}`}
                onClick={() => {i18n.changeLanguage("pl-PL")}}>
                <p className="pl-2">🇵🇱 Polski</p>
            </span>
            <span className={`h-14 w-64 text-xl cursor-pointer aspect-square flex align-center items-center rounded-md transition-color duration-300
                ${i18n.language == "en" ? "dark:bg-slate-700 bg-neutral-200" : "dark:hover:bg-slate-700 hover:bg-neutral-200"}`}
                onClick={() => {i18n.changeLanguage("en")}}>
                <p className="pl-2">🇬🇧 English</p>
            </span>
        </div>
    </div>
}

export default NavigationModal