import React, { useState } from "react";
import d from './Home.module.css';
import '../../index.css';
import BtnConnect from "../../components/BtnConnect/BtnConnect";
import time from '../../images/time.svg';
import address from '../../images/address.svg';
import CarouselUniversities from "../../components/CarouselUniversities/CarouselUniversities";
import CarouselReviews from "../../components/CarouselReviews/CarouselReviews";
import CarouselPhotos from "../../components/CarouselPhotos/CarouselPhotos";
import WhyUs from "../../components/WhyUs/WhyUs";
import QuestionsAndAnswers from "../../components/QuestionsAndAnswers/QuestionsAndAnswers";
import ConnectWithUs from "../../components/ConnectWithUs/ConnectWithUs";
import QuestionsRemain from "../../components/QuestionsRemain/QuestionsRemain";
import ModalView from "../../components/ModalView/ModalView";


const Home:React.FC = () => {

    const [open, setOpen] = useState(false)

    const handleClickModalView = () => {
        return setOpen(prev => !prev)
    }

    return (
        <div>
            {open && <ModalView onClick={handleClickModalView}/>}
            <div className={d.aboutGrant}>
                <div className="container">
                    <div className={d.mainText}>
                        <h1>Grant and contract training in <span>foreign</span> universities</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                    </div>
                    <BtnConnect onClick={handleClickModalView}/>
                    <address className={d.address}>
                        <p>
                            <img src={address} alt='address'/>
                            <span>city: London, New street, build 12</span>
                        </p>
                        <p>
                            <img src={time} alt='work time'/>
                            <span>Mon-Fr 9:00 - 18:00</span>
                        </p>
                    </address>
                </div>
            </div>
            <div className={d.backClouds}>
                <div className="container">
                    <WhyUs />
                    <CarouselUniversities />
                    <CarouselReviews />
                    <CarouselPhotos />
                    <QuestionsAndAnswers />
                </div>
            </div>
            <ConnectWithUs />
            <QuestionsRemain />
        </div>
    )
}

export default Home;