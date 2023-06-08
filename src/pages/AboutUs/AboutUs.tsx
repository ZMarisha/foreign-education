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
                <h1 className="titleText">About Us</h1>
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
            {/* <div className={d.backClouds}>
                <h2 className="titleText">Services</h2>
                <p className={`${d.servicesText} ${"textSize18"}`}>We offer our clients the following <span className="selectedText">services:</span></p>
                <OurServices>
                    <TypeService itemPicture={cap} altText={'Certified services'} selectedText={'foreign'} text={' universities'} begginningText={'Admission to '}/>
                    <TypeService itemPicture={book} altText={'Certified services'} selectedText={'Preparation'} text={' of all documents for admission'} begginningText={''}/>
                    <TypeService itemPicture={docnt} altText={'Certified services'} selectedText={'Assistance '} text={' in obtaining and obtaining a visa'} begginningText={''}/>
                    <TypeService itemPicture={tickets} altText={'Certified services'} selectedText={'Organization '} text={'of moving and accommodation of the student'} begginningText={''}/>
                    <TypeService itemPicture={countries} altText={'Certified services'} selectedText={' courses and tourist trips'} text={''} begginningText={'Organization of language'}/>
                    <TypeService itemPicture={lang} altText={'Certified services'} selectedText={'Drafting and translation '} text={'of documents foreign language'} begginningText={''}/>
                </OurServices>
            </div> */}
            <ConnectWithUs />
            <QuestionsRemain />
        </div>
    )
}

export default AboutUs;