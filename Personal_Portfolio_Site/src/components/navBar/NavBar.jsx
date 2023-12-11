import React from "react";
import {sectionIds} from "./sectionIds.jsx";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

export default function NavBar({handleClick, activeLink}) {
    return (
            <ul>
                {
                    sectionIds.map((sectionId, i) => (
                        <li key={i}
                            onClick={() => handleClick(sectionId)}
                            className='flex justify-end'
                        >
                            <Link
                                to={`/${sectionId}`}
                                className={`hover:text-yellow-1 flex text-yellow-3 gap-5 relative rounded-sm ${activeLink === sectionId ? 'active' : ''}`}
                            >
                                {sectionId}
                                <div className='flex flex-col items-center'>
                                    <div
                                        className={`h-2 w-2 mb-2.5  mt-2.5 outline outline-2 outline-yellow-3 outline-offset-2 rotate-45 ${activeLink === sectionId ? 'bg-yellow-1' : ''}`}></div>
                                    {sectionId !== sectionIds[sectionIds.length - 1] && (
                                        <div className="h-6 w-0.5 bg-yellow-3 top-8 rotate"></div>
                                    )}
                                </div>
                            </Link>
                        </li>
                    ))
                }
            </ul>
    )
}

NavBar.propTypes = {
    handleClick: PropTypes.func.isRequired,
    activeLink: PropTypes.string.isRequired,
}