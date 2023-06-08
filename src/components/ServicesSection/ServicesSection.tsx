import React from "react";
import d from './ServicesSection.module.css';
import OurServices from "../../components/OurServices/OurServices";
import TypeService from "../../components/TypeService/TypeService";
import book from '../../images/book.png';
import cap from '../../images/cap.png';
import docnt from '../../images/docnt.png';
import tickets from '../../images/tickets.png';
import countries from '../../images/countries.png';
import lang from '../../images/lang.png';


const ServicesSection:React.FC = () => {

    return (
        <div className={d.backClouds}>
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
            </div>
    )
}

export default ServicesSection;