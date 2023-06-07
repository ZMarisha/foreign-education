import React from "react";
import FormConnectWithUs from "../FormConnectWithUs/FormConnectWithUs";
import d from './ModalView.module.css';

type IModalView = {
    getModalView: any
}

const ModalView:React.FC<IModalView> = ({getModalView}) => {

    return (
        <div className={d.back}>
            <div className={`${'container'} ${d.positionModalView}`}>
                <FormConnectWithUs />
                <button onClick={getModalView} className={d.btnClose}>x</button>
            </div>
        </div>
    )
}

export default ModalView;