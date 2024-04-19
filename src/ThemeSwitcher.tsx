import { useEffect, useState } from "react"

function ThemeSwitcher() {
    const [darkMode, setDarkMode] = useState(true)

    // Note: saving while in strict mode doesn't work for some reason

    useEffect(() => {
        let storage = localStorage.getItem('darkmode')
        if (storage != null)
            setDarkMode(storage == "true")
        else if (window.matchMedia && !window.matchMedia('(prefers-color-scheme: dark)').matches)
            setDarkMode(false)
    }, [])

    useEffect(() => {
        localStorage.setItem("darkmode", darkMode.toString())

        if (darkMode)
            document.documentElement.classList.add("dark")
        else
            document.documentElement.classList.remove("dark")
    }, [darkMode])

    return <>
        <span className="material-symbols-outlined px-2 my-1 text-3xl font-light rounded-full cursor-pointer aspect-square flex justify-center items-center align-center
         dark:hover:bg-slate-700 hover:bg-neutral-200 transition-all duration-300" onClick={() => { setDarkMode(!darkMode) }}>
            {darkMode ? "dark_mode" : "light_mode"}
        </span>
    </>
}

export default ThemeSwitcher