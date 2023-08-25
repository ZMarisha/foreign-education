import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Layout/Layout';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Application from './pages/Application/Application';
import Services from './pages/Services/Services';
import News from './pages/News/News';
import Article from './components/Article/Article';
import Students from './pages/Students/Students';
import Contacts from './pages/Contacts/Contacts';
import Universities from './pages/Universities/Universities';

const App:React.FC = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/aboutus",
          element: <AboutUs />,
        },
        {
          path: "/application",
          element: <Application />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/news",
          element: <News />,
        },
        {
          path: "/news/:id",
          element: <Article />,
        },
        {
          path: "/students",
          element: <Students />,
        },
        {
          path: "/contacts",
          element: <Contacts />,
        },
        {
          path: "/universities",
          element: <Universities />
        }
      ],
    }
  ])
  return (
    <div className='app'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App;
