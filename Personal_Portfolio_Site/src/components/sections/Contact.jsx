import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";


export default function Contact( {active} ) {
    const isActive = active || false;

    return (
        <section
            id="contact"
            className={`h-full w-full flex flex-col justify-end lg:justify-center transition-opacity ${isActive ? 'block opacity-100' : 'hidden opacity-0'}`}
        >
            <h1 className='text-white font-extrabold text-4xl sm:text-5xl lg:text-7xl'>Say hello!</h1>
            <div className='flex'>
                <div
                    className='w-6 h-2 sm:w-8 sm:h-2.5 lg:w-12 lg:h-3.5 bg-white ml-0.5  mt-6 sm:mt-8 lg:mt-12 mb-2'></div>
                <Link to="mailto:p.grzesiewicz@gmail.com"
                      className='font-serif flex items-end select-all font-light text-yellow-3 hover:text-yellow-1 text-2xl sm:text-3xl lg:text-4xl ml-2 sm:ml-3 lg:ml-4'>
                    Write an E-mail
                </Link>
            </div>
            <p className='text-white mt-6 sm:mt-10 md:mt-12 lg:text-xl font-extralight'>I love making new connections with people.
                <br></br>Feel free to drop me an email.</p>
        </section>
    )
}
Contact.propTypes = {
    active: PropTypes.bool,
};