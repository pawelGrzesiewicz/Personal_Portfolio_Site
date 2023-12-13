import {FaReact} from "react-icons/fa";
import {FaSass} from "react-icons/fa";
import {RiSupabaseFill} from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiNetlify } from "react-icons/si";
import { TbBrandCss3 } from "react-icons/tb";

export const projectIds = [
    {
        id: 1,
        name: 'Place for family',
        img: '/place_for_family.png',
        ghLink: 'https://github.com/pawelGrzesiewicz/Place_for_family',
        webLink: 'https://placeforfamily.netlify.app',
        tools: [
            <IoLogoJavascript key="javascript" className="w-6 h-6 m-2"/>,
            <FaReact key="react" className="w-6 h-6 m-2"/>,
            <FaSass key="sass" className="w-6 h-6 m-2"/>,
            <RiSupabaseFill key="supabase" className="w-6 h-6 m-2"/>,
            <SiNetlify key="netlify" className="w-6 h-6 m-2"/>
        ],
        description: 'The project is a React-based to-do list application that allows users to efficiently manage their tasks. ' +
            'With features like adding new tasks, toggling between "in progress" and "done" statuses, and filtering tasks based on their status, ' +
            'the application provides a user-friendly interface for organizing to-do items. The use of local storage ensures persistent data storage, ' +
            'and the clean component structure, adhering to React best practices, enhances maintainability. Additionally, ' +
            'the application offers a visually appealing design with SCSS styling and utilizes PropTypes for robust type-checking throughout the codebase.',
    },
    {
        id: 2,
        name: 'Todo',
        img: '/todo.png',
        ghLink: 'https://github.com/pawelGrzesiewicz/todo_mvc',
        webLink: 'https://to-dos-mvc.netlify.app',
        tools: [
            <IoLogoJavascript key="javascript" className="w-6 h-6 m-2"/>,
            <FaReact key="react" className="w-6 h-6 m-2"/>,
            <TbBrandCss3 key="css" className="w-6 h-6 m-2"/>,
            <SiNetlify key="netlify" className="w-6 h-6 m-2"/>
        ],
        description: 'The project is a React-based to-do list application that allows users to efficiently manage their tasks. ' +
            'With features like adding new tasks, toggling between "in progress" and "done" statuses, and filtering tasks based on their status, ' +
            'the application provides a user-friendly interface for organizing to-do items. The use of local storage ensures persistent data storage, ' +
            'and the clean component structure, adhering to React best practices, enhances maintainability. Additionally, ' +
            'the application offers a visually appealing design with SCSS styling and utilizes PropTypes for robust type-checking throughout the codebase.',
    },
    {
        id: 3,
        name: '#',
        img: '#',
        ghLink: '#',
        webLink: '#',
        tools: [
            <IoLogoJavascript key="javascript" className="w-6 h-6 m-2"/>,
        ],
        description: 'The project is a React-based to-do list application that allows users to efficiently manage their tasks. ' +
            'With features like adding new tasks, toggling between "in progress" and "done" statuses, and filtering tasks based on their status, ' +
            'the application provides a user-friendly interface for organizing to-do items. The use of local storage ensures persistent data storage, ' +
            'and the clean component structure, adhering to React best practices, enhances maintainability. Additionally, ' +
            'the application offers a visually appealing design with SCSS styling and utilizes PropTypes for robust type-checking throughout the codebase.',
    },
    {
        id: 4,
        name: '#',
        img: '#',
        ghLink: '#',
        webLink: '#',
        tools: [
            <IoLogoJavascript key="javascript" className="w-6 h-6 m-2"/>,
        ],
        description: 'The project is a React-based to-do list application that allows users to efficiently manage their tasks. ' +
            'With features like adding new tasks, toggling between "in progress" and "done" statuses, and filtering tasks based on their status, ' +
            'the application provides a user-friendly interface for organizing to-do items. The use of local storage ensures persistent data storage, ' +
            'and the clean component structure, adhering to React best practices, enhances maintainability. Additionally, ' +
            'the application offers a visually appealing design with SCSS styling and utilizes PropTypes for robust type-checking throughout the codebase.',
    },
];