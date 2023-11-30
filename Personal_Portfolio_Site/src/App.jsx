import React from "react";
import SideBar from "./components/SideBar.jsx";
import {Outlet} from "react-router-dom";

export default function App() {
    return (
        <div className='h-screen min-w-full box-border grid grid-cols-6 grid-rows-6 bg-black p-4 sm:p-6 lg:p-8'>
            <header className='col-span-3 select-none sm:text-xl'>
                <h2 className='text-white font-extralight'>pawel<span className='text-yellow-3 font-bold'>Grzesiewicz</span></h2>
            </header>
            <section className='hidden bg-2-rgba col-span-3 sm:flex flex-col items-end'>
                <p className='text-yellow-3 select-none font-medium font-serif text-xl'>Contact Me</p>
                <span className='text-white select-all font-light text-sm selection:bg-yellow-4 selection:text-yellow-3'>p.grzesiewicz@gmail.com</span>
            </section>
            <main className='row-start-2 col-span-6 md:col-span-4 lg:col-span-3 col-start-1 row-span-5'>
                <Outlet/>
            </main>
            <nav className='hidden md:grid px-2 col-end-7 row-start-2 row-end-7'>
                <SideBar/>
            </nav>
        </div>
    );
}
