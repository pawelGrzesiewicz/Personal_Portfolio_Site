import React from "react";
import PropTypes from "prop-types";


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
                <div className='h-52 bg-yellow-3'></div>
                <div className='bg-yellow-3'></div>
                <div className='bg-yellow-3'></div>
                <div className='bg-yellow-3'></div>
            </div>
        </section>
    )
}

Projects.propTypes = {
    active: PropTypes.bool,
}