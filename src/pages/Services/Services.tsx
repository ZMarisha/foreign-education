import React from "react";
import ConnectWithUs from "../../components/ConnectWithUs/ConnectWithUs";
import QuestionsRemain from "../../components/QuestionsRemain/QuestionsRemain";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import d from './Services.module.css';



const Services:React.FC = () => {


    return (
        <div className={d.services}>
            <ServicesSection />
            <ConnectWithUs />
            <QuestionsRemain />
        </div>
    )
}

export default Services;