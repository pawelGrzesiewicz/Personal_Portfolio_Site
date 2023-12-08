import React, {useState} from "react";
import NavBar from "./NavBar.jsx";
import PropTypes from "prop-types";

export default function HamburgerBar ({handleClick, activeLink}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='flex flex-col justify-between items-end p-2'>
            <div
                className={`flex flex-col justify-between items-center cursor-pointer w-6 h-4 ${
                    isOpen ? "open" : ""
                }`}
                onClick={toggleMenu}
            >
                <div
                    className={`w-6 h-px bg-yellow-3 transition-transform transform ${isOpen ? "-rotate-45 translate-y-2 w-7 " : ""}`}></div>
                <div className={`w-6 h-px bg-yellow-3 transition-opacity ${isOpen ? "opacity-0" : ""}`}></div>
                <div
                    className={`w-6 h-px bg-yellow-3 transition-transform transform ${isOpen ? "rotate-45 -translate-y-2 w-7" : ""}`}></div>
            </div>

            {isOpen === true &&
                <div className='flex justify-end'>
                    <NavBar
                        handleClick={handleClick}
                        activeLink={activeLink}
                    />
                </div>
            }

        </div>

    );
}


HamburgerBar.propTypes = {
    handleClick: PropTypes.func.isRequired,
    activeLink: PropTypes.string.isRequired,
}