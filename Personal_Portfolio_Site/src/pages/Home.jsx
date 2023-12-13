import {useState} from "react";
import TopLevel from "../components/sections/TopLevel.jsx";
import About from "../components/sections/About.jsx";
import Projects from "../components/sections/Projects.jsx";
import Contact from "../components/sections/Contact.jsx";
import NavBar from "../components/navBar/NavBar.jsx";
import HamburgerBar from "../components/navBar/HamburgerBar.jsx";

export default function Home() {
    const [activeLink, setActiveLink] = useState("top-level");

    const handleClick = (sectionId) => {
        setActiveLink(sectionId);
    };

    return (
        <div className='bg-bg-black '>
            <div
                className='bg-mobile md:bg-desktop bg-cover bg-center h-screen box-border grid grid-cols-6 grid-rows-6 p-4 sm:p-6 lg:p-8 max-w-screen-2xl m-auto'>
                <header className='col-span-3 select-none sm:text-xl'>
                    <h2 className='text-white font-extralight'>pawel<span
                        className='text-yellow-3 font-bold'>Grzesiewicz</span></h2>
                </header>

                <nav
                    className='md:hidden grid col-span-2 row-span-0 col-start-5 col-end-7 row-start-1 row-end-3 justify-end'>
                    <HamburgerBar
                        handleClick={handleClick}
                        activeLink={activeLink}
                        setActiveLink={setActiveLink}
                    />
                </nav>

                <section className='hidden bg-2-rgba col-span-3 md:flex flex-col items-end'>
                    <p className='text-yellow-3 select-none font-medium font-serif text-xl'>Contact Me</p>
                    <span
                        className='text-white select-all font-light text-sm selection:bg-yellow-4 selection:text-yellow-3'>
                        p.grzesiewicz@gmail.com
                    </span>
                </section>

                <main className='col-span-6 md:col-span-4 col-start-1 row-span-5 row-start-2'>
                    {activeLink === 'top-level' && <TopLevel/>}
                    {activeLink === 'about' && <About/>}
                    {activeLink === 'projects' && <Projects/>}
                    {activeLink === 'contact' && <Contact/>}
                </main>

                <nav className='grid px-2 col-end-7 row-start-2 row-end-7'>
                    <div className='hidden md:flex flex-col justify-center items-end h-full'>
                        <NavBar
                            handleClick={handleClick}
                            activeLink={activeLink}
                        />
                    </div>
                </nav>
            </div>
        </div>
    );
}
