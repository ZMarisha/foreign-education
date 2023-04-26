import React from "react";
import fb from '../../images/fb.svg';
import inst from '../../images/inst.svg';
import telegram from '../../images/telegram.svg';
import d from './SocialNetwork.module.css'

const SocialNetwork = () => {

    return (
        <div className={d.network}>
            <img src={fb} alt='facebook'/>
            <img src={inst} alt='instagram'/>
            <img src={telegram} alt='telegtam'/>
        </div>
    )
}

export default SocialNetwork;