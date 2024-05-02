//import { GoChevronLeft } from "react-icons/go"
//import NavigationModal from "./NavigationModal"
// import { ModalContext } from "./App"
// import { useContext } from "react"
import { useTranslation } from "react-i18next"

import React from "./assets/React.svg"
import Tailwind from "./assets/Tailwind.svg"
import Typescript from "./assets/TypeScript.svg"
import Vite from "./assets/Vite.svg"
import i18n from "./assets/i18n.svg"
import ReactIcons from "./assets/ReactIcons.svg"
import ReactRouter from "./assets/ReactRouter.svg"
import { Link } from "react-router-dom"
import { GoHome, GoComment, GoGear } from "react-icons/go";

function Home() {
    //const { setModal } = useContext(ModalContext)
    const { t } = useTranslation()

    return <>
        <div className="w-full h-full dark:bg-slate-700 bg-neutral-200 flex flex-col items-center justify-center gap-5">
            <div className="dark:bg-slate-800 bg-neutral-100 p-4 rounded-lg shadow-md sm:w-3/5 w-5/6">
                <div className="text-xl font-semibold">{t("home.hello")}</div>
                <div className="whitespace-pre-line">
                    <a href="https://github.com/christhefrog/mock-chatapp-resume" target="blank" className="cursor-pointer font-bold bg-gradient-to-r from-emerald-500  to-sky-500 bg-clip-text" style={{WebkitTextFillColor: "transparent"}}>mock-chatapp-resume</a>{t("home.info")}                   
                </div>
            </div>
            <div className="dark:bg-slate-800 bg-neutral-100 p-4 rounded-lg shadow-md sm:w-3/5 w-5/6 block sm:hidden">
                <div className="text-xl font-semibold pb-2">{t("home.nav")}</div>
                <div>
                    <Link to={"/"} className="flex items-center">
                        <span className={`h-10 w-10 material-symbols-outlined text-2xl font-light cursor-pointer aspect-square flex justify-center align-center items-center
                            ${location.pathname == "/" ? "dark:bg-slate-700 bg-neutral-200" : "dark:hover:bg-slate-700 hover:bg-neutral-200"} transition-color duration-300`}>
                            <GoHome />
                        </span>
                        <div className="pl-2 text-lg">
                            {t("nav.home")}
                        </div>
                    </Link>
                    <Link to={"/chat"} className="flex items-center">
                        <span className={`h-10 w-10 material-symbols-outlined text-2xl font-light cursor-pointer aspect-square flex justify-center align-center items-center
                            ${location.pathname == "/" ? "dark:bg-slate-700 bg-neutral-200" : "dark:hover:bg-slate-700 hover:bg-neutral-200"} transition-color duration-300`}>
                            <GoComment />
                        </span>
                        <div className="pl-2 text-lg">
                            {t("nav.chat")}
                        </div>
                    </Link>
                    <Link to={"/settings"} className="flex items-center mb-3">
                        <span className={`h-10 w-10 material-symbols-outlined text-2xl font-light cursor-pointer aspect-square flex justify-center align-center items-center
                            ${location.pathname == "/" ? "dark:bg-slate-700 bg-neutral-200" : "dark:hover:bg-slate-700 hover:bg-neutral-200"} transition-color duration-300`}>
                            <GoGear />
                        </span>
                        <div className="pl-2 text-lg">
                            {t("nav.settings")}
                        </div>
                    </Link>
                </div>
            </div>
            <div className="dark:bg-slate-800 bg-neutral-100 p-4 rounded-lg shadow-md sm:w-3/5 w-5/6 flex justify-center items-center">
                <img src={Typescript} alt="Typescript" title="Typescript" className="size-8 m-1" />
                <img src={Vite} alt="Vite" title="Vite" className="size-8 m-1" />
                <img src={React} alt="React" title="React" className="size-8 m-1" />
                <img src={Tailwind} alt="Tailwind" title="Tailwind" className="size-8 m-1" />
                <img src={i18n} alt="i18n" title="i18n" className="size-8 m-1" />
                <img src={ReactRouter} alt="React Router" title="React Router" className="size-8 m-1" />
                <img src={ReactIcons} alt="React Icons" title="React Icons" className="size-8 m-1 animate-spin-slow" />
            </div>
        </div>
    </>
}

export default Home