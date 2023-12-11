import React from "react";
import PropTypes from "prop-types";

export default function About({active}) {
    const isActive = active || false;

    return (
        <section
            id="about"
            className={`h-full w-full flex flex-col justify-end md:justify-center transition-opacity ${isActive ? 'block opacity-100' : 'hidden opacity-0'}`}
        >
                <h1 className='text-white font-extrabold text-4xl sm:text-5xl lg:text-7xl'>About Me</h1>
                <div className='flex'>
                    <div className='w-6 h-2 sm:w-8 sm:h-2.5 lg:w-12 lg:h-3.5 bg-white ml-0.5  mt-6 sm:mt-8 lg:mt-12 mb-2'></div>
                    <a
                        href="https://drive.google.com/file/d/1anj4WhrhCBrOCGXDblSe7T7KFFD8h4TF/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                        className='font-serif flex items-end select-all font-light text-yellow-3 hover:text-yellow-1 text-2xl sm:text-3xl lg:text-4xl ml-2 sm:ml-3 lg:ml-4'>
                        Download CV
                    </a>
                </div>
                <p
                    className='text-white mt-6 sm:mt-10 md:mt-12 lg:text-xl font-extralight'
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolore eveniet ipsum
                    laboriosam mollitia odio vero. Aspernatur dolore eos explicabo nisi unde? Consequuntur dolores et
                    nemo quia voluptates. Ab accusamus ad aperiam atque aut autem consequatur consequuntur dicta
                    doloremque doloribus earum eos harum illum itaque maiores
                </p>
        </section>
    )
}


About.propTypes = {
    active: PropTypes.bool,
}