import React from "react";
import d from './BtnBack.module.css';
import { useNavigate } from "react-router-dom";


const BtnBack:React.FC = () => {

    const navigate = useNavigate();

    return (
        <button className={`${'textSize18'} ${d.btnBack}`} onClick={() => navigate(-1)}>
            <div className={d.backSymbol}></div>
            Back
        </button>
    )
}


export default BtnBack;