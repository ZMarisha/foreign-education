import React from "react";
import ourTeam from '../../images/ourTeam.png';
import d from './AboutUs.module.css';
import ConnectWithUs from "../../components/ConnectWithUs/ConnectWithUs";
import QuestionsRemain from "../../components/QuestionsRemain/QuestionsRemain";
import ServicesSection from "../../components/ServicesSection/ServicesSection";


const AboutUs:React.FC = () => {

    return (
        <div>
            <div className="container">
                <h1 className={`${"titleText"} ${"margin"}`}>About Us</h1>
                <div className={d.ourTeam}>
                    <div className="text">
                        <p className={d.ourTeamText_marginBottom}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p className={d.ourTeamText_marginBottom}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                    </div>
                    <img className={d.ourTeamImg} src={ourTeam} alt='our team'/>
                </div>
            </div>
            <ServicesSection />
            <ConnectWithUs />
            <QuestionsRemain />
        </div>
    )
}

export default AboutUs;