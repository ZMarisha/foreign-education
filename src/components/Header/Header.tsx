import React from "react";
import '../../index.css';
import d from './Header.module.css';
import logo from '../../images/logo.png'
import NavBar from "../NavBar/NavBar";
import BtnApp from "../BtnApp/BtnApp";
import '../../index.css'


const Header:React.FC = () => {

    return (
        <div className={d.parent}>
            <div className='container'>
                <div className={d.header}>
                    <div className={d.logo}>
                        <img src={logo} alt='logo'/>
                    </div>
                    <NavBar />
                    <BtnApp />
                </div>
            </div>
        </div>
    )
}

export default Header;