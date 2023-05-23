import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import '../index.css'


const Layout:React.FC = () => {

    return (
        <>
            <Header />
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>
    )
}

export default Layout;