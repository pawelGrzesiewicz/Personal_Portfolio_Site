import React from "react";
import {Link} from "react-router-dom";

export default function Contact() {
    return (
        <div className='h-full flex flex-col justify-center'>
            <h1 className='text-white font-extrabold text-6xl leading-relaxed'>Say hello!</h1>
            <div className='flex'>
                <div className='w-9 h-2.5 bg-white ml-0.5 mt-8 mb-2'></div>
                <Link to="mailto:p.grzesiewicz@gmail.com" className='font-serif flex items-end select-all font-light text-yellow-3 hover:text-yellow-1 text-3xl ml-4'>
                    Write an E-mail
                </Link>
            </div>
            <p className='mt-10 text-white select-none'>I love to make new contacts with new people.
                <br></br>Fill free and drop me an email.</p>
        </div>
    )
}