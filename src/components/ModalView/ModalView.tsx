import React from "react";
import FormConnectWithUs from "../FormConnectWithUs/FormConnectWithUs";
import d from './ModalView.module.css';

const ModalView:React.FC = () => {

    return (
        <div className={d.back}>
            <p>vchjcvjhcvjh</p>
            <div className="container">
                <FormConnectWithUs />
            </div>
        </div>
    )
}

export default ModalView;