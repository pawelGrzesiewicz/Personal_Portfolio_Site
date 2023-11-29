import React from "react";

export default function About() {
    return (
        <div className='h-full flex flex-col justify-center'>
                <h1 className='select-none text-white font-extrabold text-6xl leading-relaxed'>About Me</h1>
                <div className='flex'>
                    <div className='w-9 h-2.5 bg-white ml-0.5 mt-8 mb-2'></div>
                    <span
                        className='font-serif flex items-end select-all font-light text-yellow-3 hover:text-yellow-1 text-3xl ml-4'>
                        Download CV
                    </span>
                </div>
                <p className='mt-10 text-white text-xl font-extralight'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolore eveniet ipsum
                    laboriosam mollitia odio vero. Aspernatur dolore eos explicabo nisi unde? Consequuntur dolores et
                    nemo quia voluptates. Ab accusamus ad aperiam atque aut autem consequatur consequuntur dicta
                    doloremque doloribus earum eos harum illum itaque maiores, modi mollitia neque nobis nulla officiis
                    pariatur quibusdam quidem recusandae repellat reprehenderit rerum saepe similique sit temporibus
                    veniam voluptate voluptatem voluptates voluptatibus. Amet, facere, natus! Cum doloribus earum ipsum
                    iure non obcaecati quibusdam voluptatibus!</p>
        </div>
    )
}