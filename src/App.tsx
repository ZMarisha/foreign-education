import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Layout/Layout';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Application from './pages/Application/Application';
import Services from './pages/Services/Services';

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
