import {useState, useEffect} from "react";
import TopLevel from "../components/sections/TopLevel.jsx";
import About from "../components/sections/About.jsx";
import Projects from "../components/sections/Projects.jsx";
import Contact from "../components/sections/Contact.jsx";
import {sectionIds} from "../components/navBar/sectionIds.jsx";
import NavBar from "../components/navBar/NavBar.jsx";
import HamburgerBar from "../components/navBar/HamburgerBar.jsx";

export default function Home() {
    const [activeLink, setActiveLink] = useState("top-level");
    const [currentViewIndex, setCurrentViewIndex] = useState(0);

    const VIEW_CHANGE_THRESHOLD = 500;

    const handleClick = (sectionId) => {
        setActiveLink(sectionId);
    };

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        console.log("Scroll position:", scrollPosition);

        const nextViewIndex = Math.floor(scrollPosition / VIEW_CHANGE_THRESHOLD);
        console.log("Next view index:", nextViewIndex);

        console.log("Current view index:", currentViewIndex);
        console.log("VIEW_CHANGE_THRESHOLD:", VIEW_CHANGE_THRESHOLD);

        if (nextViewIndex !== currentViewIndex) {
            setCurrentViewIndex(nextViewIndex);

            const nextViewId = sectionIds[nextViewIndex];
            console.log("Ustawienie aktywnego linku na:", nextViewId);
            setActiveLink(nextViewId);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [currentViewIndex]);

    return (
        <div className='bg-bg-black '>
            <div style={{backgroundImage: 'url(/bg.jpg)', height: '100vh', backgroundPosition: 'center', backgroundSize: 'cover', }}
                 className=' box-border grid grid-cols-6 grid-rows-6 p-4 sm:p-6 lg:p-8 max-w-screen-2xl m-auto'>
                <header className='col-span-3 select-none sm:text-xl'>
                    <h2 className='text-white font-extralight'>pawel<span
                        className='text-yellow-3 font-bold'>Grzesiewicz</span></h2>
                </header>

                <nav className='md:hidden grid col-span-2 row-span-3 row-start-1 justify-end'>
                    <HamburgerBar
                        handleClick={handleClick}
                        activeLink={activeLink}/>
                </nav>

                <section className='hidden bg-2-rgba col-span-3 md:flex flex-col items-end'>
                    <p className='text-yellow-3 select-none font-medium font-serif text-xl'>Contact Me</p>
                    <span
                        className='text-white select-all font-light text-sm selection:bg-yellow-4 selection:text-yellow-3'>
                        p.grzesiewicz@gmail.com
                    </span>
                </section>

                <main onWheel={handleScroll}
                      className='row-start-2 col-span-6 md:col-span-4 lg:col-span-3 col-start-1 row-span-5'>
                    <TopLevel active={activeLink === 'top-level'}/>
                    <About active={activeLink === 'about'}/>
                    <Projects active={activeLink === 'projects'}/>
                    <Contact active={activeLink === 'contact'}/>
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
