import React from "react";
import d from './NavBar.module.css'
import CustomLink from "../CustomLink/CustomLink";

const NavBar:React.FC = () => {

    return (
        <div className={d.navbar}>
            <div className={d.link}>
                <CustomLink to='/'>Home</CustomLink>
            </div>
            <div className={d.link}>
                <CustomLink to='/aboutus'>About us</CustomLink>
            </div>
            <div className={d.link}>
                <CustomLink to='/services'>Services</CustomLink>
            </div>
            <div className={d.link}>
                <CustomLink to='/universities'>Universities</CustomLink>
            </div>
            <div className={d.link}>
                <CustomLink to='/students'>Students</CustomLink>
            </div>
            <div className={d.link}>
                <CustomLink to='/news'>News</CustomLink>
            </div>
            <div className={d.link}>
                <CustomLink to='contacts'>Contacts</CustomLink>
            </div>
        </div>
    )
}

export default NavBar;