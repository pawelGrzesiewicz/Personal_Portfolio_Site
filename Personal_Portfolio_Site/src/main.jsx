import React, {Profiler} from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css'
import App from "./App.jsx";
import ErrorPage from "./error-page.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import TopLevel from "./components/TopLevel.jsx";



const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "top-line",
                element: <TopLevel />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "projects",
                element: <Projects />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
        ],

    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
