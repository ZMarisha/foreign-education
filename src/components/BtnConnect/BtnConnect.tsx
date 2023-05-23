import React from "react";
import d from './BtnConnect.module.css';

type IBtnConnect = {
    icon: string,
    text: string
    fn: any
}

const BtnConnect:React.FC<IBtnConnect> = ({icon, text, fn}) => {


    return (
        <button className={d.btn} onClick={fn}>
            <div className={d.imgBtn}>
                <img src={icon} alt='button for application'/>
            </div>
            <p>{text}</p>
        </button>
    )
}

export default BtnConnect;