import { GoHome, GoComment, GoGear } from "react-icons/go";
import ThemeSwitcher from "./ThemeSwitcher"

function MenuBar() {
    return <div className='sm:flex '>
        <div className="sm:flex-col flex justify-center items-center bg-neutral-200 dark:bg-slate-800 dark:shadow-sm  dark:border-gray-700 border-gray-300 md:border-r-2 sm:border-t-0 border-t-2">
            <span className="material-symbols-outlined px-3 text-2xl font-light cursor-pointer aspect-square flex justify-center align-center items-center
         dark:hover:bg-slate-700 hover:bg-neutral-300 transition-all duration-300">
                <GoHome  />
            </span>
            <span className="material-symbols-outlined px-3 text-2xl font-light cursor-pointer aspect-square flex justify-center align-center items-center
         dark:bg-slate-700 bg-neutral-300 transition-all duration-300">
                <GoComment />
            </span>
            <span className="material-symbols-outlined px-3 text-2xl font-light cursor-pointer aspect-square flex justify-center align-center items-center
         dark:hover:bg-slate-700 hover:bg-neutral-300 transition-all duration-300">
                <GoGear />
            </span>
            <div className="sm:absolute sm:bottom-2 hidden sm:block">
                <ThemeSwitcher />
            </div>
        </div>
    </div>
}

export default MenuBar