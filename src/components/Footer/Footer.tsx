import React from "react";
import NavBar from "../NavBar/NavBar";
import d from './Footer.module.css';
import '../../index.css';
import birdLogo from '../../images/birdLogo.png';
import calan from '../../images/calan.svg';
import line from '../../images/line.svg';
import label from '../../images/label.svg';
import tel from '../../images/tel.svg';
import time from '../../images/time.svg';
import address from '../../images/address.svg';


const Footer:React.FC = () => {

    return (
        <div className={d.footer}>
            <div className={d.line}>
                <div className="container">
                    <div className={d.parent}>
                        <div className={d.topFooter}>
                            <div className={d.logoTop}>
                                <img src={birdLogo} alt='logo'/>
                                <img className={d.lineLogo} src={line} alt='line'/>
                                <img src={calan} alt='logo'/>
                            </div>
                            <NavBar />
                        </div>
                        <div className={d.btnFooter}>
                            <div className={d.logoBtm}>
                                <img src={label} alt='logo'/>
                            </div>
                            <address className={d.address}>
                                <p>
                                    <img src={tel} alt='phone'/>
                                    <span>+988 (99) 878-63-99</span>
                                    <span className={d.phoneMargin}>+998 (99) 878-63-99</span>
                                </p>
                                <p>
                                    <img src={time} alt='work time'/>
                                    <span>Mon-Fr 9:00 - 18:00</span>
                                </p>
                                <p>
                                    <img src={address} alt='address'/>
                                    <span>city: London, New street, build 12</span>
                                </p>
                            </address>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;