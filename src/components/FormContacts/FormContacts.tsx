import React from "react";
import d from './FormContacts.module.css';
import tel from '../../images/tel.svg';
import address from '../../images/address.svg';
import time from '../../images/time.svg';
import BtnConnect from "../BtnConnect/BtnConnect";
import telWhite from '../../images/telWhite.svg';

const FormContacts:React.FC = () => {


    return (
        <address className={d.block}>
            <div className={d.line}>
                <div className={d.contacts}>
                    <img src={tel} alt='phones' />
                    <span>Phones</span>
                    <p className="text">+998(99)878-63-99</p>
                    <p className="text">+998(99)878-63-99</p>
                </div>
                <div className={d.contacts}>
                    <img src={address} alt='phones' />
                    <span>Address</span>
                    <p className="text">city: London, New street, build 12</p>
                </div>
                <div className={d.contacts}>
                    <img src={time} alt='phones' />
                    <span>Working hours</span>
                    <p className="text">Mon-Fr 9:00 - 18:00</p>
                </div>
                <div className={d.btnConnect}>
                    <BtnConnect icon={telWhite} text='Connect with us' fn={null}/>
                </div>
            </div>
        </address>
    )
}

export default FormContacts;