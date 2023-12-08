import React from "react";
import PropTypes from "prop-types";
import { FaReact } from "react-icons/fa";
import { SiReactrouter } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { TbBrandCss3 } from "react-icons/tb";





export default function Projects({active}) {
    const isActive = active || false;

    return (
        <section
            id="projects"
            className={`h-full w-full flex flex-col justify-end lg:justify-center transition-opacity ${isActive ? 'block opacity-100' : 'hidden opacity-0'}`}
        >
            <h1 className='text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-normal sm:leading-normal lg:leading-relaxed'>Latest
                projects</h1>
            <div className='flex'>
                <div
                    className='w-6 h-2 sm:w-8 sm:h-2.5 lg:w-12 lg:h-3.5 bg-white ml-0.5  mt-6 sm:mt-8 lg:mt-12 mb-2'></div>
                <span
                    className='flex items-end select-all font-light text-yellow-3 hover:text-yellow-1 text-3xl ml-4 font-serif'>
                        View more works
                    </span>
            </div>
            <div className='grid grid-cols-2 grid-rows-2 gap-10 mt-10 mb-10'>
                <a href="https://placeforfamily.netlify.app"
                   target="_blank"
                   rel="noopener noreferrer"
                   className='sm:h-52 border border-yellow-2 hover:border-yellow-1 rounded flex justify-between items-center p-4'>
                    <div>
                        <img
                            src="/place_for_family.png"
                            alt="place_for_family"
                            className='w-65 text-white'
                        />
                    </div>
                    <div className='text-white m-3'>
                        <FaReact className='w-8 h-8 m-2'/>
                        <SiReactrouter className='w-8 h-8 m-2'/>
                        <FaSass className='w-8 h-8 m-2'/>
                    </div>
                </a>
                <a href="https://to-dos-mvc.netlify.app/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className='sm:h-52 border border-yellow-2 hover:border-yellow-1 rounded flex justify-between items-center p-4'>
                    <div>
                        <img
                            src="/todo.png"
                            alt="to_do"
                            className='w-60 text-white'
                        />
                    </div>
                    <div className='text-white'>
                        <FaReact className='w-8 h-8 m-2'/>
                        <SiReactrouter className='w-8 h-8 m-2'/>
                        <TbBrandCss3 className='w-8 h-8 m-2'/>

                    </div>
                </a>
                <a href="#"
                   target="_blank"
                   rel="noopener noreferrer"
                   className='sm:h-52 border border-yellow-2 hover:border-yellow-1 rounded flex justify-between items-center p-4'>
                    <div>
                        <img
                            src=""
                            alt="#"
                            className='w-60 text-white'
                        />
                    </div>
                    <div className='text-white'></div>
                </a>
                <a href="#"
                   target="_blank"
                   rel="noopener noreferrer"
                   className='sm:h-52 border border-yellow-2 hover:border-yellow-1 rounded flex justify-between items-center p-4'>
                    <div>
                        <img
                            src=""
                            alt="#"
                            className='w-60 text-white'
                        />
                    </div>
                    <div className='text-white'></div>
                </a>
            </div>
        </section>
    )
}

Projects.propTypes = {
    active: PropTypes.bool,
}