import React from "react";
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


export default function TopLevel() {

    return (
        <section
            id="top-level"
            className= 'h-full w-full flex flex-col justify-end md:justify-center'
        >
            <nav className='flex text-yellow-3 items-center mb-6'>
                <a href="https://www.linkedin.com/in/paweł-grzesiewicz-11101a96" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className='text-4xl sm:text-5xl lg:text-6xl mr-10 hover:text-yellow-1'/>
                </a>
                <a href="https://github.com/pawelGrzesiewicz" target="_blank" rel="noopener noreferrer">
                    <FaSquareGithub className='text-4xl sm:text-5xl lg:text-6xl hover:text-yellow-1'/>
                </a>
            </nav>
            <h1 className='select-none text-white leading-normal md:leading-snug xl:leading-snug font-extrabold text-4xl md:text-6xl xl:text-8xl'>I
                am FRONT-END <br></br>Developer</h1>
            <div className='bg-white w-6 h-1.5 md:w-8 md:h-2 xl:w-12 xl:h-3 ml-0.5 xl:ml-2 mt-4 md:mt-6 xl:mt-10 mb-2'></div>
            <div className='flex text-white mt-14'>
                <AiOutlineHtml5 className='w-8 h-8 mr-4 lg:mr-8 lg:w-12 lg:h-12'/>
                <TbBrandCss3 className='w-8 h-8 mr-4 lg:mr-8 lg:w-12 lg:h-12'/>
                <FaSass className='w-8 h-8 mr-4 lg:mr-8 lg:w-12 lg:h-12'/>
                <SiTailwindcss className='w-8 h-8 mr-4 lg:mr-8 lg:w-12 lg:h-12'/>
                <IoLogoJavascript className='w-8 h-8 mr-4 lg:mr-8 lg:w-12 lg:h-12'/>
                <FaReact className='w-8 h-8 mr-4 lg:mr-8 lg:w-12 lg:h-12'/>
                <SiReactrouter className='w-8 h-8 mr-4 lg:mr-8 lg:w-12 lg:h-12'/>
                <RiSupabaseFill className='w-8 h-8 mr-4 lg:mr-8 lg:w-12 lg:h-12'/>
                <SiNetlify className='w-8 h-8 mr-4 lg:mr-8 lg:w-12 lg:h-12'/>
            </div>
        </section>
    )
}
