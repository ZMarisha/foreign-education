import React from "react";
import d from './WhyUs.module.css';
import cert from '../../images/cert.png';
import educn from '../../images/educn.png';
import docnt from '../../images/docnt.png';


const WhyUs:React.FC = () => {


    return (
        <div className={d.section}>
            <p><span>Welcome</span> to the foreign education group</p>
            <h2 className="titleText">Why us?</h2>
            <div className={d.items}>
                <div className={d.item}>
                    <div className={d.itemImg}>
                        <img src={cert} alt='Certified services'/>
                    </div>
                    <p>Certified services of our professional team</p>
                </div>
                <div className={d.item}>
                    <div className={d.itemImg}>
                        <img src={educn} alt='Certified services'/>
                    </div>
                    <p>High visa rates (98% of our students received a visa)</p>
                </div>
                <div className={d.item}>
                    <div className={d.itemImg}>
                        <img src={docnt} alt='Certified services'/>
                    </div>
                    <p>Study at prestigious universities that are in the Top 1000</p>
                </div>
            </div>
        </div>
    )
}

export default WhyUs;