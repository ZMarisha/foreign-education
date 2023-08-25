import React from "react";
import d from './Button.module.css';

type IBtnConnect = {
    icon: string,
    text: string,
    onClick: () => void,
    disabled: boolean
}

const Button:React.FC<IBtnConnect> = ({icon, text, onClick, disabled}) => {


    return (
        <button className={d.btn} onClick={onClick} type='submit' disabled={disabled}>
            <div className={d.imgBtn}>
                <img src={icon} alt='button for application'/>
            </div>
            <p>{text}</p>
        </button>
    )
}

export default Button;