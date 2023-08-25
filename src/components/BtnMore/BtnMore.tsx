import React from "react";
import Button from "../Button/Button";
import arrow from '../../images/arrow.svg';

interface IBtnMore {
    onClick: () => void;
    disabled: boolean;
}

const BtnMore:React.FC<IBtnMore> = ({ onClick, disabled }) => {

    return (
        <div style={{marginTop: '80px'}}>
            <Button icon={arrow} text={'More'} onClick={onClick} disabled={disabled}/>
        </div>
    )
}

export default BtnMore;