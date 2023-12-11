import React from "react";
import PropTypes from "prop-types";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiReactrouter } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { TbBrandCss3 } from "react-icons/tb";
import { RiSupabaseFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiTailwindcss } from "react-icons/si";
import { SiNetlify } from "react-icons/si";


export default function TopLevel({active}) {
    const isActive = active || false;

    return (
        <section
            id="top-level"
            className={`h-full w-full flex flex-col justify-end md:justify-center transition-opacity ${isActive ? 'block opacity-100' : 'hidden opacity-0'}`}
        >
            <nav className='flex text-yellow-3 items-center mb-4 '>
                <a href="https://www.linkedin.com/in/paweł-grzesiewicz-11101a96" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className='text-4xl sm:text-5xl lg:text-6xl mr-6 hover:text-yellow-1'/>
                </a>
                <a href="https://github.com/pawelGrzesiewicz" target="_blank" rel="noopener noreferrer">
                    <FaSquareGithub className='text-4xl sm:text-5xl lg:text-6xl hover:text-yellow-1'/>
                </a>
            </nav>
            <h1 className='text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-normal sm:leading-normal lg:leading-relaxed'>I
                am FRONT-END <br></br>Developer</h1>
            <div className='w-6 h-2 sm:w-8 sm:h-2.5 lg:w-12 lg:h-3.5 bg-white ml-0.5  mt-5 sm:mt-7 lg:mt-8 mb-2'></div>
            <div className='flex text-white mt-8'>
                <AiOutlineHtml5 className='w-8 h-8 m-2'/>
                <TbBrandCss3 className='w-8 h-8 m-2'/>
                <FaSass className='w-8 h-8 m-2'/>
                <SiTailwindcss className='w-8 h-8 m-2'/>
                <IoLogoJavascript className='w-8 h-8 m-2'/>
                <FaReact className='w-8 h-8 m-2'/>
                <SiReactrouter className='w-8 h-8 m-2'/>
                <RiSupabaseFill className='w-8 h-8 m-2'/>
                <SiNetlify className='w-8 h-8 m-2'/>
            </div>
        </section>
    )
}

TopLevel.propTypes = {
    active: PropTypes.bool,
}