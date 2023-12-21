import {sectionIds} from "./sectionIds.jsx";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

export default function NavBar({handleClick, activeLink}) {
    return (
        <ul className='h-full flex flex-col justify-center items-end'>
            {
                sectionIds.map((sectionId, i) => (
                    <li key={i}
                        onClick={() => handleClick(sectionId)}
                        className=''
                    >
                        <Link
                            to={`/${sectionId}`}
                            className={`hover:text-yellow-1 flex text-yellow-3 gap-5 relative ${activeLink === sectionId ? 'active' : ''}`}
                        >

                            {sectionId}
                            <div className='flex flex-col items-center'>
                                <div
                                    className={`h-2 w-2 mb-2.5  mt-2.5 outline outline-2 outline-yellow-3 outline-offset-2 rotate-45 rounded-tr-sm ${activeLink === sectionId ? 'bg-yellow-1' : ''}`}></div>
                                {sectionId !== sectionIds[sectionIds.length - 1] && (
                                    <div className="h-4 md:h-8 w-0.5 bg-yellow-3"></div>
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