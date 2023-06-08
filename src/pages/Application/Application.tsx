import React from "react";
import { useNavigate } from "react-router-dom";
import ConnectWithUs from "../../components/ConnectWithUs/ConnectWithUs";
import FormApplication from "../../components/FormApplication/FormApplication";
import arrowBack from '../../images/arrowBack.svg';
import arrowBackHover from '../../images/arrowBackHover.svg';
import d from './Application.module.css';


const Application:React.FC = () => {

    const navigate = useNavigate();

    return (
        <div>
            <div className='container'>
                <div className={d.topHeadering}>
                    <button className={`${'textSize18'} ${d.btnBack}`} onClick={() => navigate(-1)}>
                        <div className={d.backSymbol}></div>
                        Back
                    </button>
                    <h1 className="titleText">Application for consultation</h1>
                </div>
            </div>
            <FormApplication />
        </div>
    )
}

export default Application;