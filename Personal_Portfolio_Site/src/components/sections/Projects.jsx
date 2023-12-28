import {useEffect, useState} from "react";
import {projectIds} from "./projectIds.jsx";
import 'swiper/swiper-bundle.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCoverflow, Pagination} from "swiper/modules";
import {FaSquareGithub} from "react-icons/fa6";
import {AiOutlineGlobal} from "react-icons/ai";


export default function Projects() {
    const [screen, setScreen] = useState(null);
    const [swiperInstance, setSwiperInstance] = useState(null);


    useEffect(() => {
        const updateScreen = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth < 768) {
                setScreen(1);
            } else if (screenWidth >= 768) {
                setScreen(2);
            }
        };

        updateScreen();

        window.addEventListener("resize", updateScreen);

        return () => {
            window.removeEventListener("resize", updateScreen);
        };
    }, [screen]);

    const slideNext = () => {
        if (swiperInstance) {
            swiperInstance.slideNext();
        }
    };


    return (
        <section
            id="projects"
            className='h-full w-full flex flex-col justify-end md:justify-center'
        >
            <h1 className='select-none text-white leading-normal md:leading-snug xl:leading-snug font-extrabold text-4xl md:text-6xl xl:text-8xl'>Latest
                projects</h1>
            <div className='flex'>
                <div
                    className='bg-white w-6 h-1.5 md:w-8 md:h-2 xl:w-12 xl:h-3 ml-0.5 xl:ml-2 mt-4 md:mt-6 xl:mt-10 mb-2'>

                </div>

                <span
                    className="cursor-pointer select-none flex items-end font-light text-yellow-3 hover:text-yellow-1 text-2xl md:text-4xl xl:text-5xl ml-2 md:ml-4 xl:ml-6"
                    onClick={slideNext}
                >
                    View more works
                </span>

            </div>

            <div className="slider">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={false}
                    centeredSlides={true}
                    slidesPerView={screen}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    pagination={false}
                    modules={[EffectCoverflow, Pagination]}
                    loop={true}
                    className="mySwiper"
                    onSwiper={(swiper) => setSwiperInstance(swiper)}
                >
                    {projectIds.map((project) => (
                        <SwiperSlide key={project.id} className="swiper-slide">
                            <div
                                className="mt-12 mb-2 relative w-full border border-yellow-3 rounded">
                                <span className="w-full flex justify-between items-center absolute -top-4 mx-auto px-4">
                                    <div className='relative flex items-center justify-start'>
                                        <p className=' z-10 mx-1 -full text-yellow-3'>
                                            {project.name}
                                        </p>
                                        <span
                                            className="absolute z-0 h-1 w-full bg-bg-black">
                                        </span>
                                    </div>

                                    <div className='relative flex items-center justify-start'>
                                        <div
                                            className="z-10 flex cursor-pointer text-yellow-3 mx-1">
                                            <a href={project.ghLink} target="_blank" rel="noopener noreferrer">
                                                <FaSquareGithub className='text-3xl hover:text-yellow-1'/>
                                            </a>
                                            <a href={project.webLink} target="_blank" rel="noopener noreferrer">
                                                <AiOutlineGlobal className='text-3xl ml-3 hover:text-yellow-1'/>
                                            </a>
                                        </div>
                                        <span
                                                className="absolute z-0 h-0.5 w-full bg-bg-black opacity-50 md:opacity-100">
                                        </span>
                                    </div>
                                </span>

                                <img
                                    src={project.img}
                                    alt={project.name}
                                    className="w-full"
                                />

                                <div className="flex text-white">
                                    {project.tools.map((tool, index) => (
                                        <span key={index} className="items-center mx-2">
                                            {tool}
                                            </span>
                                    ))}
                                </div>

                                <p className='text-white text-xs m-3'>
                                    {project.description}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
