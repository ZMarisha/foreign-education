import React from "react";
import d from './BtnConnect.module.css';
import btnConnect from '../../images/btnConnect.svg';

const BtnConnect = () => {


    return (
        <button className={d.btn}>
            <div className={d.imgBtn}>
                <img src={btnConnect} alt='button for application'/>
            </div>
            <p>Connect with us</p>
        </button>
    )
}

export default BtnConnect;