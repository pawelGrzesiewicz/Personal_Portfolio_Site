import {FaReact} from "react-icons/fa";
import {FaSass} from "react-icons/fa";
import {RiSupabaseFill} from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiNetlify } from "react-icons/si";
import { TbBrandCss3 } from "react-icons/tb";
import { TbApi } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";


export const projectIds = [
    {
        id: 1,
        name: 'Place for family',
        img: '/place_for_family.png',
        ghLink: 'https://github.com/pawelGrzesiewicz/Place_for_family',
        webLink: 'https://placeforfamily.netlify.app',
        tools: [
            <IoLogoJavascript key="javascript" className="w-4 xl:w-6 h-4 xl:h-6 m-2"/>,
            <FaReact key="react" className="w-4 xl:w-6 h-4 xl:h-6 m-2"/>,
            <FaSass key="sass" className="w-4 xl:w-6 h-4 xl:h-6 m-2"/>,
            <TbApi key="api" className="w-4 xl:w-6 h-4 xl:h-6 m-2"/>,
            <RiSupabaseFill key="supabase" className="w-4 xl:w-6 h-4 xl:h-6 m-2"/>,
            <SiNetlify key="netlify" className="w-4 xl:w-6 h-4 xl:h-6 m-2"/>,
        ],
        description: `The Entertainment Finder is a dynamic web application built with React, offering users a personalized and interactive experience based on their family's preferences and local weather conditions. The application provides a seamless navigation experience using React Router, allowing users to explore different views such as Home, Sign Up, Sign In, Search Engine, and Add Option. The core functionality revolves around dynamically fetching and displaying entertainment options categorized into "Active," "Learn," and "Chill.`
    },
    {
        id: 2,
        name: 'To Do',
        img: '/todo.png',
        ghLink: 'https://github.com/pawelGrzesiewicz/todo_mvc',
        webLink: 'https://to-dos-mvc.netlify.app',
        tools: [
            <IoLogoJavascript key="javascript" className="w-4 xl:w-6 h-4 xl:h-6 m-2"/>,
            <FaReact key="react" className="w-4 xl:w-6 h-4 xl:h-6 m-2"/>,
            <TbBrandCss3 key="css" className="w-4 xl:w-6 h-4 xl:h-6 m-2"/>,
            <SiNetlify key="netlify" className="w-4 xl:w-6 h-4 xl:h-6 m-2"/>
        ],
        description: 'The project is a React-based to-do list application that allows users to efficiently manage their tasks. ' +
            'With features like adding new tasks, toggling between "in progress" and "done" statuses, and filtering tasks based on their status, ' +
            'the application provides a user-friendly interface for organizing to-do items. The use of local storage ensures persistent data storage, ' +
            'and the clean component structure, adhering to React best practices, enhances maintainability. Additionally, ' +
            'the application offers a visually appealing design with SCSS styling and utilizes PropTypes for robust type-checking throughout the codebase.',
    },
    {
        id: 3,
        name: 'Best Shop',
        img: '/b-s.png',
        ghLink: 'https://github.com/pawelGrzesiewicz/Best_Shop_RWD',
        webLink: 'https://best-shop-rwd.netlify.app/',
        tools: [
            <IoLogoJavascript key="javascript" className="w-4 xl:w-6 h-4 xl:h-6 m-2"/>,
            <FaSass key="sass" className="w-4 xl:w-6 h-4 xl:h-6 m-2"/>,
            <SiNetlify key="netlify" className="w-4 xl:w-6 h-4 xl:h-6 m-2"/>
        ],
        description: '',
    },
    {
        id: 4,
        name: 'HooBank',
        img: '/hoo_des.png',
        ghLink: 'https://github.com/pawelGrzesiewicz/bank_modern_app',
        webLink: 'https://modernbankappstyles.netlify.app/',
        tools: [
            <IoLogoJavascript key="javascript" className="w-4 xl:w-6 h-4 xl:h-6 m-2"/>,
            <FaReact key="react" className="w-4 xl:w-6 h-4 xl:h-6 m-2"/>,
            <SiTailwindcss key="tailwind" className="w-4 xl:w-6 h-4 xl:h-6 m-2"/>,
            <SiNetlify key="netlify" className="w-4 xl:w-6 h-4 xl:h-6 m-2"/>
        ],
        description: '',
    },
];