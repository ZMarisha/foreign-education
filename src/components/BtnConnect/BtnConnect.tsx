import React from "react";
// import d from './BtnConnect.module.css';
import telWhite from '../../images/telWhite.svg';
import Button from '../Button/Button';

type IBtnConnect = {
    onClick: () => void
}

const BtnConnect:React.FC<IBtnConnect> = ({onClick}) => {


    return (
        <Button icon={telWhite} text='Connect with us' onClick={onClick} disabled={false}/>
    )
}

export default BtnConnect;