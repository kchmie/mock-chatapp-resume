
import { useContext } from "react";
import { ModalContext } from "./App";

function Modal({children} : any) {
    const { setModal } = useContext(ModalContext)

    function hide(e: any){
        if(e.target == e.currentTarget) 
            setModal(null)
    }

    return <div className="absolute top-0 left-0 w-screen h-screen z-20 backdrop-blur-sm flex justify-center items-center backdrop-brightness-90" onClick={hide}>
        <div className="dark:bg-slate-800 bg-neutral-100 p-3 rounded-md shadow-sm">
            {children}
        </div>
    </div>
}

export default Modal