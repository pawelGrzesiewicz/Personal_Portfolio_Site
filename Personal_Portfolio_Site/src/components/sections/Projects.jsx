import React from "react";
import {FaReact} from "react-icons/fa";
import {SiReactrouter} from "react-icons/si";
import {FaSass} from "react-icons/fa";
import {RiSupabaseFill} from "react-icons/ri";
import {projectIds} from "./projectIds.jsx";
import 'swiper/swiper-bundle.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCoverflow, Pagination} from "swiper/modules";


export default function Projects() {
    // const [displayLink, setDisplayLink] = useState([projectIds[0]]);

    return (
        <section
            id="projects"
            className='h-full w-full flex flex-col justify-end md:justify-center'
        >
            <h1 className='text-white leading-normal md:leading-snug xl:leading-snug font-extrabold text-4xl md:text-6xl xl:text-8xl'>Latest
                projects</h1>
            <div className='flex'>
                <div
                    className='bg-white w-6 h-1.5 md:w-8 md:h-2 xl:w-12 xl:h-3 ml-0.5 xl:ml-2 mt-4 md:mt-6 xl:mt-10 mb-2'>

                </div>

                <span
                    className='flex items-end select-all font-light text-yellow-3 hover:text-yellow-1 text-2xl md:text-4xl xl:text-5xl ml-2 md:ml-4 xl:ml-6'>
                    View more works
                </span>

            </div>

            <div className="slider">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={false}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    pagination={false}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    {projectIds.map((project) => (
                        <SwiperSlide key={project.id} className="swiper-slide">
                            <h2>{project.name}</h2>
                            <div className="mt-6 relative w-full h-full border border-yellow-3 hover:border-yellow-1 rounded p-2">
                                <div className='flex'>
                                    <div className="absolute -top-5 left-4">
                                        <p className="z-10 top-2 text-yellow-3 relative mx-1">
                                            {project}
                                        </p>
                                        <span
                                            className="z-0 line-through h-0.5 w-full bg-bg-black block absolute bottom-1 left-0"></span>
                                    </div>
                                    <div>
                                        <img
                                            src="/place_for_family.png"
                                            alt="place_for_family"
                                            className="w-full"
                                        />
                                    </div>
                                    <div className="text-white m-3">
                                        <FaReact className="w-8 h-8 m-2"/>
                                        <SiReactrouter className="w-8 h-8 m-2"/>
                                        <FaSass className="w-8 h-8 m-2"/>
                                        <RiSupabaseFill className="w-8 h-8 m-2"/>
                                    </div>
                                </div>
                                <p
                                    className='text-white m-3'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam dolor
                                    expedita inventore laboriosam odio perspiciatis rerum tempore temporibus
                                    <a
                                        href="https://placeforfamily.netlify.app"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >bla bla bla </a>
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
