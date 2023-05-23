import React from "react";
import d from './FormConnectWithUs.module.css';
import BtnConnect from "../BtnConnect/BtnConnect";
import arrow from '../../images/arrow.svg';



const FormConnectWithUs:React.FC = () => {


    return (
        <div className={d.block}>
            <div className={d.line}>
                <h3>Connect with us</h3>
                <p className="text">Leave your details and our specialist will contact you within a day</p>
                <form className={d.connectForm}>
                    <input type='text' placeholder="Your name" className={d.iconPerson}/>
                    <input type='tel' placeholder="+998(__) ___-__-__" className={d.iconTel}/>
                    <textarea placeholder="Additional comments" className={d.iconMessage}/>
                    <BtnConnect icon={arrow} text='Send' fn={null}/>
                </form>
            </div>
        </div>
    )
}

export default FormConnectWithUs;