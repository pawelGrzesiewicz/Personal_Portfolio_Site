import React from "react";
import {Link} from "react-router-dom";

export default function SideBar() {
    return (
        <nav className='flex flex-col justify-center items-end h-full gap-1'>
            <Link to="top-line" className='flex items-center gap-4'>
                <p className='text-yellow-3 font-serif'>Top Line</p>
                <div
                    className="h-2 w-2 outline outline-2 outline-yellow-3 outline-offset-2 rotate-45 hover:bg-white"></div>
            </Link>

            <span className='h-8 w-0.5 bg-yellow-3 mx-0.5'></span>

            <Link to="/about" className='flex items-center gap-4'>
                <p className='text-yellow-3 font-serif'>About</p>
                <div
                    className="h-2 w-2 outline outline-2 outline-yellow-3 outline-offset-2 rotate-45 hover:bg-white"></div>
            </Link>

            <span className='h-8 w-0.5 bg-yellow-3 mx-0.5'></span>

            <Link to="/projects" className='flex items-center gap-4'>
                <p className='text-yellow-3 font-serif'>Projects</p>
                <div
                    className="h-2 w-2 outline outline-2 outline-yellow-3 outline-offset-2 rotate-45 hover:bg-white"></div>
            </Link>

            <span className='h-8 w-0.5 bg-yellow-3 mx-0.5'></span>

            <Link to="/contact" className='flex items-center gap-4'>
                <p className='text-yellow-3 font-serif'>Contact</p>
                <div
                    className="h-2 w-2 outline outline-2 outline-yellow-3 outline-offset-2 rotate-45 hover:bg-white"></div>
            </Link>
        </nav>
    );
}