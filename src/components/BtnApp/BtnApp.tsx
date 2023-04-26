import React from "react";
import btnApp from '../../images/btnApp.png';
import d from './BtnApp.module.css'

const BtnApp = () => {

    return (
        <button className={d.btn}>
            <div className={d.imgBtn}>
                <img src={btnApp} alt='button for application'/>
            </div>
            <p>Submit your application</p>
        </button>
    )
}

export default BtnApp;