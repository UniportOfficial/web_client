'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faComment, faPlusSquare, faUser, faBars } from "@fortawesome/free-solid-svg-icons"
import { 
    faUser as faUserReuglar,
    faComment as faCommentRegular
} from "@fortawesome/free-regular-svg-icons"

export default function Navigation(){
    return(
        <nav className="fixed bottom-0 py-4 nav-wrapper w-full flex justify-evenly items-center bg-white">
            <div className="text-center text-2xl">
                <button><FontAwesomeIcon icon={faHome}/></button>
            </div>
            <div className="text-center text-2xl">
                <button><FontAwesomeIcon icon={faCommentRegular}/></button>
            </div>
            <div className="slider text-4xl text-slate-500">
                <button>
                    <FontAwesomeIcon icon={faPlusSquare}/>
                </button>
            </div>
            <div className="text-center text-2xl">
                <button><FontAwesomeIcon icon={faUserReuglar}/></button>
            </div>
            <div className="text-center text-2xl">
                <button><FontAwesomeIcon icon={faBars}/></button>
            </div>
        </nav>
    )
}