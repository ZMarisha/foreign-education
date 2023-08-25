import React from "react";
import Button from "../Button/Button";
import arrow from '../../images/arrow.svg';


const BtnSend:React.FC = () => {

    const handleSendData = () => {
        console.log('click')
    }

    return (
        <Button icon={arrow} text='Send' onClick={handleSendData} disabled={false}/>
    )
}

export default BtnSend;