import React from "react";
import BtnBack from "../../components/BtnBack/BtnBack";
import FormApplication from "../../components/FormApplication/FormApplication";
import d from './Application.module.css';


const Application:React.FC = () => {


    return (
        <div>
            <div className='container'>
                <div className={`${d.topHeadering} ${'margin'}`}>
                    <BtnBack />
                    <h1 className="titleText">Application for consultation</h1>
                </div>
            </div>
            <FormApplication />
        </div>
    )
}

export default Application;