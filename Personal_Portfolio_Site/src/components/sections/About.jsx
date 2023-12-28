export default function About() {

    return (
        <section
            id="about"
            className='h-full w-full flex flex-col justify-end md:justify-center'
        >
            <h1 className='select-none text-white leading-normal md:leading-snug xl:leading-snug font-extrabold text-4xl md:text-6xl xl:text-8xl'>About
                Me</h1>
            <div className='flex'>
                <div
                    className='bg-white w-6 h-1.5 md:w-8 md:h-2 xl:w-12 xl:h-3 ml-0.5 xl:ml-2 mt-4 md:mt-6 xl:mt-10 mb-2'></div>
                <a
                    href="https://drive.google.com/file/d/1MvcRlVkgXm9tY4TMbR0u3mCJL-MU_fA8/view?usp=drive_link"
                    target="_blank"
                    rel="noreferrer"
                    className='select-none font-serif flex items-end font-light text-yellow-3 hover:text-yellow-1 text-2xl md:text-4xl xl:text-5xl ml-2 md:ml-4 xl:ml-6'>
                    Download CV
                </a>
            </div>
            <p
                className='text-white mt-6 md:mt-10  xl:mt-14 md:text-xl xl:text-2xl font-extralight'
            >
                After over a year of independent learning, with a passion for personal development and front-end
                development, I participated in a programming bootcamp to broaden my knowledge of new programming
                languages and enhance existing skills. I am ready to leverage my programming passion by joining a
                dedicated engineering team and seeking the opportunity to contribute to the creation of high-quality
                solutions.
            </p>
        </section>
    )
}

