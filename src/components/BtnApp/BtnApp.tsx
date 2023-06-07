import React from "react";
import { Link } from "react-router-dom";
import btnApp from '../../images/btnApp.png';
import d from './BtnApp.module.css'

const BtnApp:React.FC = () => {

    return (
        <Link to='/application' className={d.link}>
            <button className={d.btn}>
                <div className={d.imgBtn}>
                    <img src={btnApp} alt='button for application'/>
                </div>
                <p>Submit your application</p>
            </button>
        </Link>
    )
}

export default BtnApp;