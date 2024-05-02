import { GoGlobe } from "react-icons/go";
import { ModalContext } from "./App";
import { useContext } from "react";
import LanguageModal from "./LanguageModal"

function LanguageSwitcher() {
    const { setModal } = useContext(ModalContext)

    return <>
        <span className="px-3 text-3xl font-light cursor-pointer aspect-square flex justify-center items-center align-center
            transition-all duration-300" onClick={() => setModal(<LanguageModal />)}>
            <GoGlobe />
        </span>
    </>
}

export default LanguageSwitcher