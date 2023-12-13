import React from "react";
import {Link} from "react-router-dom";

export default function Contact() {

    return (
        <section
            id="contact"
            className= 'h-full w-full flex flex-col justify-end md:justify-center'
        >
            <h1 className='select-none text-white leading-normal md:leading-snug xl:leading-snug font-extrabold text-4xl md:text-6xl xl:text-8xl'>Say hello!</h1>
            <div className='flex'>
                <div
                    className='bg-white w-6 h-1.5 md:w-8 md:h-2 xl:w-12 xl:h-3 ml-0.5 xl:ml-2 mt-4 md:mt-6 xl:mt-10 mb-2'>
                </div>
                <Link to="mailto:p.grzesiewicz@gmail.com"
                      className='select-none font-serif flex items-end font-light text-yellow-3 hover:text-yellow-1 text-2xl md:text-4xl xl:text-5xl ml-2 md:ml-4 xl:ml-6'>
                    Write an E-mail
                </Link>
            </div>
            <p className='text-white mt-6 md:mt-10  xl:mt-14 md:text-xl xl:text-2xl font-extralight'>I love making new connections with people.
                <br></br>Feel free to drop me an email.</p>
        </section>
    )
}
