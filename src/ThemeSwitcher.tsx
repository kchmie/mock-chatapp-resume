import { GoMoon, GoSun } from "react-icons/go";
import { useContext } from "react"
import { AppContext } from "./App";

function ThemeSwitcher() {
    const {darkMode, toggleDarkMode} = useContext(AppContext)

    return <>
        <span className="material-symbols-outlined px-3 text-3xl font-light cursor-pointer aspect-square flex justify-center items-center align-center
            transition-all duration-300" onClick={() => { toggleDarkMode() }}>
            {darkMode ? <GoMoon className="-scale-x-100" /> : <GoSun />}
        </span>
    </>
}

export default ThemeSwitcher