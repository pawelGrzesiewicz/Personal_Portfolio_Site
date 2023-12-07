import React, {useState, useEffect} from "react";
import TopLevel from "../components/sections/TopLevel.jsx";
import About from "../components/sections/About.jsx";
import Projects from "../components/sections/Projects.jsx";
import Contact from "../components/sections/Contact.jsx";
import {sectionIds} from "../components/sections/sectionIds.jsx";
import {Link} from "react-router-dom";

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
        <div className='bg-black '>
            <div style={{backgroundImage: 'url(./src/assets/bg.jpg)', height: '100vh'}}
                 className=' box-border grid grid-cols-6 grid-rows-6 p-4 sm:p-6 lg:p-8 max-w-screen-2xl m-auto'>
                <header className='col-span-3 select-none sm:text-xl'>
                    <h2 className='text-white font-extralight'>pawel<span
                        className='text-yellow-3 font-bold'>Grzesiewicz</span></h2>
                </header>

                <section className='hidden bg-2-rgba col-span-3 sm:flex flex-col items-end'>
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

                <nav className='hidden md:grid px-2 col-end-7 row-start-2 row-end-7'>
                    <nav className='flex flex-col justify-center items-end h-full'>
                        <div>
                            <ul>
                                {
                                    sectionIds.map((sectionId, i) => (
                                        <li key={i}
                                            onClick={() => handleClick(sectionId)}
                                            className='flex justify-end'
                                        >
                                            <Link
                                                to={`/${sectionId}`}
                                                className={`hover:text-yellow-1 flex  text-yellow-3 gap-5 relative rounded-sm ${activeLink === sectionId ? 'active' : ''}`}
                                            >
                                                {sectionId}
                                                <div className='flex flex-col items-center'>
                                                    <div
                                                        className={`h-2 w-2 mb-2.5  mt-2.5 outline outline-2 outline-yellow-3 outline-offset-2 rotate-45 ${activeLink === sectionId ? 'bg-yellow-1' : ''}`}></div>
                                                    {sectionId !== sectionIds[sectionIds.length - 1] && (
                                                        <div className="h-6 w-0.5 bg-yellow-3 top-8 rotate"></div>
                                                    )}
                                                </div>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </nav>
                </nav>
            </div>
        </div>
    );
}