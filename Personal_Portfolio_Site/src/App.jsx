import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TopLevel from "./components/sections/TopLevel.jsx";
import About from "./components/sections/About.jsx";
import Projects from "./components/sections/Projects.jsx";
import Contact from "./components/sections/Contact.jsx";
import Home from "./pages/Home.jsx";


export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="top-level" element={<TopLevel />} />
                    <Route path="about" element={<About />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

