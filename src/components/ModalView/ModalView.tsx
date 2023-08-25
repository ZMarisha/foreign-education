import React from "react";
import FormConnectWithUs from "../FormConnectWithUs/FormConnectWithUs";
import d from './ModalView.module.css';

type IModalView = {
    onClick: () => void
}

const ModalView:React.FC<IModalView> = ({onClick}) => {

    return (
        <div className={d.back}>
            <div className={`${'container'} ${d.positionModalView}`}>
                <FormConnectWithUs />
                <button onClick={onClick} className={d.btnClose}>x</button>
            </div>
        </div>
    )
}

export default ModalView;