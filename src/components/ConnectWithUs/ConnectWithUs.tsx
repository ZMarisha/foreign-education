import React from "react";
import d from './ConnectWithUs.module.css';
import FormConnectWithUs from "../FormConnectWithUs/FormConnectWithUs";


const ConnectWithUs:React.FC = () => {


    return (
        <div className={d.londonBack}>
            <div className="container">
                <div className={d.blockPossition}>
                    <FormConnectWithUs />
                </div>
            </div>
        </div>
    )
}

export default ConnectWithUs;