import React from "react";
import d from './WhyUs.module.css';
import OurServices from "../OurServices/OurServices";
import TypeService from "../TypeService/TypeService";
import cert from '../../images/cert.png';
import educn from '../../images/educn.png';
import docnt from '../../images/docnt.png';



const WhyUs:React.FC = () => {


    return (
        <div className={d.section}>
            <p><span className="selectedText">Welcome</span> to the foreign education group</p>
            <h2 className="titleText">Why us?</h2>
            <OurServices>
                <TypeService itemPicture={cert} altText={'Certified services'} selectedText={'Certified services'} text={' of our professional team'} begginningText={''}/>
                <TypeService itemPicture={educn} altText={'Certified services'} selectedText={'High'} text={' visa rates (98% of our students received a visa)'} begginningText={''}/>
                <TypeService itemPicture={docnt} altText={'Certified services'} selectedText={'prestigious'} text={' universities that are in the Top 1000'} begginningText={'Study at '}/>
            </OurServices>
        </div>
    )
}

export default WhyUs;