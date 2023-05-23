import React from "react";
import d from './QuestionsRemain.module.css';
import bus from '../../images/bus.png';
import tree from '../../images/tree.png';
import FormContacts from "../FormContacts/FormContacts";

const QuestionsRemain:React.FC = () => {


    return (
        <div className={d.back}>
            <div className={d.backBus}>
                <img src={bus} alt='background bus'/>
            </div>
            <div className={d.backTree}>
                <img src={tree} alt='background tree'/>
            </div>
            <div className="container">
                <div className={d.possition}>
                    <h2 className="titleText">Do you have any questions?</h2>
                    <p className="textSize18">Contact us and we will answer all your questions</p>
                    <FormContacts />
                </div>
            </div>
        </div>
    )
}

export default QuestionsRemain;