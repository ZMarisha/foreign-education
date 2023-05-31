import React from "react";
import d from './SocialNetwork.module.css';

const SocialNetwork:React.FC = () => {

    return (
        <div className={d.network}>
            {/* <img src={fb} alt='facebook'/> */}
            <div className={`${d.socNetwork} ${d.facebook}`}></div>
            <div className={`${d.socNetwork} ${d.telegram}`}></div>
        </div>
    )
}

export default SocialNetwork;